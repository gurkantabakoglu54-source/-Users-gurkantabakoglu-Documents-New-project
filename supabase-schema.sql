-- Artı Destek Portal - Supabase kurulum dosyası
-- Supabase Dashboard > SQL Editor içine yapıştırıp Run ile çalıştır.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'Kullanıcı' check (role in ('Admin', 'Müşteri', 'Kullanıcı')),
  status text not null default 'AKTİF' check (status in ('AKTİF', 'PASİF')),
  company_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portal_records (
  id uuid primary key default gen_random_uuid(),
  module_id text not null,
  record_id text not null,
  data jsonb not null default '{}'::jsonb,
  company_name text,
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (module_id, record_id)
);

create index if not exists portal_records_module_idx on public.portal_records(module_id);
create index if not exists portal_records_company_idx on public.portal_records(company_name);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'portal_records'
  ) then
    alter publication supabase_realtime add table public.portal_records;
  end if;
end $$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists portal_records_touch_updated_at on public.portal_records;
create trigger portal_records_touch_updated_at
before update on public.portal_records
for each row execute function public.touch_updated_at();

create or replace function public.current_profile_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select role from public.profiles where id = auth.uid()), 'Kullanıcı');
$$;

create or replace function public.current_profile_company()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select (select company_name from public.profiles where id = auth.uid());
$$;

alter table public.profiles enable row level security;
alter table public.portal_records enable row level security;

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.current_profile_role() = 'Admin');

drop policy if exists "profiles_admin_write" on public.profiles;
create policy "profiles_admin_write"
on public.profiles
for all
to authenticated
using (public.current_profile_role() = 'Admin')
with check (public.current_profile_role() = 'Admin');

drop policy if exists "records_select_by_role" on public.portal_records;
create policy "records_select_by_role"
on public.portal_records
for select
to authenticated
using (
  public.current_profile_role() = 'Admin'
  or public.current_profile_role() = 'Kullanıcı'
  or (
    public.current_profile_role() = 'Müşteri'
    and company_name is not null
    and company_name = public.current_profile_company()
  )
);

drop policy if exists "records_admin_write" on public.portal_records;
create policy "records_admin_write"
on public.portal_records
for all
to authenticated
using (public.current_profile_role() = 'Admin')
with check (public.current_profile_role() = 'Admin');

drop policy if exists "records_message_insert" on public.portal_records;
create policy "records_message_insert"
on public.portal_records
for insert
to authenticated
with check (
  module_id in ('messages', 'notifications')
  and (
    public.current_profile_role() in ('Admin', 'Kullanıcı')
    or (
      public.current_profile_role() = 'Müşteri'
      and company_name is not null
      and company_name = public.current_profile_company()
    )
  )
);

drop policy if exists "records_message_update_own" on public.portal_records;
create policy "records_message_update_own"
on public.portal_records
for update
to authenticated
using (
  module_id in ('messages', 'notifications')
  and created_by = auth.uid()
)
with check (
  module_id in ('messages', 'notifications')
  and updated_by = auth.uid()
);

insert into storage.buckets (id, name, public)
values ('portal-files', 'portal-files', false)
on conflict (id) do nothing;

drop policy if exists "portal_files_read_authenticated" on storage.objects;
create policy "portal_files_read_authenticated"
on storage.objects
for select
to authenticated
using (bucket_id = 'portal-files');

drop policy if exists "portal_files_admin_write" on storage.objects;
create policy "portal_files_admin_write"
on storage.objects
for all
to authenticated
using (bucket_id = 'portal-files' and public.current_profile_role() = 'Admin')
with check (bucket_id = 'portal-files' and public.current_profile_role() = 'Admin');
