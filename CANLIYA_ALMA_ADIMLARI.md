# Artı Destek Portal - Canlıya Alma Adımları

## 1. Supabase Kurulumu

1. Supabase projenin SQL Editor bölümünü aç.
2. `supabase-schema.sql` dosyasının içeriğini yapıştır.
3. `Run` düğmesine bas.
4. `Table Editor` içinde şu tablolar oluşmalı:
   - `profiles`
   - `portal_records`
5. `Storage` içinde `portal-files` bucket oluşmalı.

## 2. İlk Admin Kullanıcısını Aç

1. Supabase > Authentication > Users bölümüne gir.
2. `Add user` ile kendi e-postanı ve şifreni oluştur.
3. Oluşan kullanıcının `User UID` değerini kopyala.
4. SQL Editor içinde aşağıdaki sorguyu kendi bilgilerinle çalıştır:

```sql
insert into public.profiles (id, email, full_name, role, status)
values (
  'BURAYA_USER_UID',
  'mail@adresin.com',
  'Gürkan Tabakoğlu',
  'Admin',
  'AKTİF'
)
on conflict (id) do update
set role = 'Admin', status = 'AKTİF';
```

## 3. GitHub

1. GitHub üzerinde yeni repo aç: `arti-destek-portal`
2. Bu klasördeki dosyaları repoya yükle.

## 4. Vercel

1. Vercel > Add New Project.
2. GitHub’daki `arti-destek-portal` reposunu seç.
3. Framework seçme, statik site olarak deploy et.
4. Deploy sonrası sana canlı link verir.

## 5. Canlı Giriş Mantığı

Panel artık Supabase Auth ile e-posta/şifre üzerinden giriş yapacak şekilde bağlandı.
Admin kullanıcısı giriş yaptıktan sonra mevcut örnek kayıtları Supabase `portal_records` tablosuna aktarır.

Canlı kullanımda:
- Admin ekler, siler, düzenler.
- Kullanıcı ve müşteri sadece izler.
- Müşteri sadece kendi firmasına ait kayıtları görür.
- Dosya yükleme alanları panelde hazırdır; büyük dosyaları ileride `portal-files` depolama alanına ayrı kaydedecek şekilde geliştirebiliriz.
- Admin için `Arşiv` ve `İşlem Kayıtları` bölümleri vardır.
- Silinen kayıtlar arşive alınır; ekleme, düzenleme, silme ve bordro akışı işlem kayıtlarına düşer.
- Ana panelde aktif proje, bekleyen fatura, çalışma saati, mesai, eksik özlük ve açık görev özetleri görünür.
- Mesajlar ekranı Supabase Realtime ile canlı senkron çalışır. Bunun için `supabase-schema.sql` dosyasının güncel hali SQL Editor içinde tekrar çalıştırılmalıdır.
- Mesaj gönderirken `E-posta bildirimi hazırla` seçiliyse sistem alıcıya göre e-posta taslağı açar ve bildirimi kuyruğa ekler. Tam otomatik e-posta gönderimi için sonraki aşamada Resend, SendGrid veya Supabase Edge Function kurulabilir.

## 6. Yeni Kullanıcı Açma

1. Supabase > Authentication > Users bölümünden yeni kullanıcıyı e-posta ve şifreyle oluştur.
2. Oluşan kullanıcının `User UID` değerini kopyala.
3. SQL Editor içinde aşağıdaki sorguyu çalıştır:

```sql
insert into public.profiles (id, email, full_name, role, status, company_name)
values (
  'BURAYA_USER_UID',
  'kullanici@firma.com',
  'Ad Soyad',
  'Kullanıcı',
  'AKTİF',
  null
)
on conflict (id) do update
set email = excluded.email,
    full_name = excluded.full_name,
    role = excluded.role,
    status = excluded.status,
    company_name = excluded.company_name;
```

`role` alanı `Admin`, `Müşteri` veya `Kullanıcı` olabilir. Müşteri için `company_name` alanını firma adıyla aynı yaz.

## 7. Canlı Test ve Kullanım Kılavuzu

Canlıya geçmeden önce şu iki dosya takip edilmeli:

- `CANLI_TEST_PLANI.md`: Pilot test senaryoları ve kabul kriterleri.
- `KULLANIM_KILAVUZU.md`: Admin, kullanıcı ve müşteri için günlük kullanım adımları.

Öneri: İlk canlı kullanımda 5 iş günü boyunca `CANLI_TEST_PLANI.md` dosyasındaki senaryolar tek tek denenmeli, hatalar aynı dosyadaki hata kayıt formatıyla not alınmalı.
