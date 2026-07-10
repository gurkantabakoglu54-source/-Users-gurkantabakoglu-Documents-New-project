const storageKey = "bireysel-finans-dashboard-v1";
const profilePhotoKey = "bireysel-finans-profile-photo";
let deferredInstallPrompt = null;
const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const today = new Date();
today.setHours(0, 0, 0, 0);

const defaultState = {
  activeView: "dashboard",
  selectedPeriod: toMonthKey(new Date(2026, 6, 1)),
  selectedDate: "2026-07-15",
  transactions: [
    { id: "t1", type: "expense", title: "Kredi kartı ekstresi", category: "Kredi Kartı", account: "Kredi Kartı", amount: 42000, date: "2026-07-10", dueDate: "2026-07-20", status: "Planlandı", note: "10'unda kesildi, son ödeme 20'si" },
    { id: "t2", type: "expense", title: "Uçak Ödemesi", category: "Seyahat", account: "Kredi Kartı", amount: 40000, date: "2026-07-15", dueDate: "2026-07-20", status: "Beklemede", note: "" },
    { id: "t3", type: "expense", title: "Hastane kontrol", category: "Hastane/Sağlık", account: "Banka Hesabı", amount: 16400, date: "2026-07-15", dueDate: "2026-07-20", status: "Planlandı", note: "Randevu sonrası ödeme" },
    { id: "t4", type: "expense", title: "Laptop ekipman", category: "Teknoloji", account: "Kredi Kartı", amount: 23800, date: "2026-07-12", dueDate: "2026-07-20", status: "Beklemede", note: "" },
    { id: "t5", type: "expense", title: "Telefon faturası", category: "Faturalar", account: "Banka Hesabı", amount: 2900, date: "2026-07-10", dueDate: "2026-07-12", status: "Tamamlandı", note: "08:00 sonrası uyar" },
    { id: "t6", type: "expense", title: "Akşam yemeği", category: "Yemek", account: "Cüzdan", amount: 2400, date: "2026-07-10", dueDate: "2026-07-10", status: "Tamamlandı", note: "" },
    { id: "t7", type: "expense", title: "Market alışverişi", category: "Market", account: "Cüzdan", amount: 11800, date: "2026-07-09", dueDate: "2026-07-09", status: "Tamamlandı", note: "" },
    { id: "t8", type: "expense", title: "Ev kirası", category: "Ev/Kira", account: "Banka Hesabı", amount: 35000, date: "2026-07-08", dueDate: "2026-07-08", status: "Tamamlandı", note: "Kira ödemesi" },
    { id: "t9", type: "income", title: "Ek gelir", category: "Ek Gelir", account: "Banka Hesabı", amount: 52000, date: "2026-07-07", dueDate: "2026-07-07", status: "Tamamlandı", note: "" },
    { id: "t10", type: "expense", title: "Yakıt", category: "Yakıt", account: "Kredi Kartı", amount: 7200, date: "2026-07-19", dueDate: "2026-07-25", status: "Planlandı", note: "" },
    { id: "t11", type: "income", title: "Maaş", category: "Maaş", account: "Banka Hesabı", amount: 95000, date: "2026-07-02", dueDate: "2026-07-02", status: "Tamamlandı", note: "" },
    { id: "t12", type: "expense", title: "Sigorta taksiti", category: "Sigorta", account: "Banka Hesabı", amount: 14500, date: "2026-06-25", dueDate: "2026-06-30", status: "Planlandı", note: "Gecikme kontrol örneği" },
    { id: "t13", type: "income", title: "Danışmanlık", category: "Ek Gelir", account: "Banka Hesabı", amount: 38000, date: "2026-08-05", dueDate: "2026-08-05", status: "Planlandı", note: "" },
    { id: "t14", type: "expense", title: "Tatil kapora", category: "Seyahat", account: "Kredi Kartı", amount: 30000, date: "2026-08-10", dueDate: "2026-08-20", status: "Planlandı", note: "" },
  ],
  budgets: [
    { id: "b1", month: "2026-07", category: "Seyahat", limit: 100000, color: "#ca8a04" },
    { id: "b2", month: "2026-07", category: "Kredi Kartı", limit: 48000, color: "#2563eb" },
    { id: "b3", month: "2026-07", category: "Ev/Kira", limit: 38000, color: "#7c3aed" },
    { id: "b4", month: "2026-07", category: "Teknoloji", limit: 26000, color: "#2563eb" },
    { id: "b5", month: "2026-07", category: "Hastane/Sağlık", limit: 22000, color: "#16834f" },
    { id: "b6", month: "2026-07", category: "Market", limit: 18000, color: "#0ea5e9" },
    { id: "b7", month: "2026-08", category: "Seyahat", limit: 125000, color: "#ca8a04" },
  ],
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved?.transactions && saved?.budgets) return saved;
  } catch (error) {
    console.warn("Dashboard verisi okunamadı", error);
  }
  return structuredClone(defaultState);
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function toMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function toInputDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function parseDate(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "-";
  return date.toLocaleDateString("tr-TR");
}

function formatMonth(monthKey) {
  if (monthKey === "all") return "Toplam";
  const [year, month] = monthKey.split("-");
  return `${monthNames[Number(month) - 1]} ${year}`;
}

function formatMoney(value) {
  return `${Math.round(Number(value) || 0).toLocaleString("tr-TR")} ₺`;
}

function parseMoney(value) {
  const normalized = String(value || "").replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function monthMatches(value, monthKey = state.selectedPeriod) {
  if (monthKey === "all") return true;
  return String(value || "").startsWith(monthKey);
}

function scopedTransactions(includeCompleted = true) {
  return state.transactions
    .filter((item) => includeCompleted || item.status !== "Tamamlandı")
    .filter((item) => monthMatches(item.date) || monthMatches(item.dueDate))
    .sort((a, b) => String(a.dueDate || a.date).localeCompare(String(b.dueDate || b.date)));
}

function scopedBudgets() {
  return state.budgets.filter((item) => state.selectedPeriod === "all" || item.month === state.selectedPeriod);
}

function periodOptions() {
  const months = new Set();
  const base = new Date(today.getFullYear(), today.getMonth(), 1);
  for (let offset = -18; offset <= 18; offset += 1) {
    months.add(toMonthKey(new Date(base.getFullYear(), base.getMonth() + offset, 1)));
  }
  state.transactions.forEach((item) => {
    if (item.date) months.add(item.date.slice(0, 7));
    if (item.dueDate) months.add(item.dueDate.slice(0, 7));
  });
  state.budgets.forEach((item) => months.add(item.month));
  return ["all", ...Array.from(months).sort()];
}

function renderPeriodSelect() {
  const select = document.querySelector("#periodSelect");
  select.innerHTML = periodOptions()
    .map((month) => `<option value="${month}" ${month === state.selectedPeriod ? "selected" : ""}>${formatMonth(month)}</option>`)
    .join("");
}

function totals(items = scopedTransactions(true)) {
  const income = items.filter((item) => item.type === "income").reduce((sum, item) => sum + item.amount, 0);
  const expense = items.filter((item) => item.type === "expense").reduce((sum, item) => sum + item.amount, 0);
  const planned = items.filter((item) => item.status !== "Tamamlandı").reduce((sum, item) => sum + item.amount, 0);
  const completed = items.filter((item) => item.status === "Tamamlandı").reduce((sum, item) => sum + item.amount, 0);
  return { income, expense, planned, completed, balance: income - expense };
}

function isOverdue(item) {
  if (item.status === "Tamamlandı") return false;
  const date = parseDate(item.dueDate || item.date);
  return date && date < today;
}

function overdueItems() {
  return state.transactions.filter(isOverdue);
}

function renderOverdueAlert() {
  const alert = document.querySelector("#overdueAlert");
  const overdue = overdueItems();
  if (!overdue.length) {
    alert.hidden = true;
    alert.textContent = "";
    return;
  }
  alert.hidden = false;
  alert.textContent = `ÖDEMENİZ GECİKTİ: ${overdue.length} planlı ödeme son ödeme tarihini geçti. Toplam geciken tutar ${formatMoney(overdue.reduce((sum, item) => sum + item.amount, 0))}.`;
}

function setView(view) {
  state.activeView = view;
  saveState();
  render();
}

function render() {
  renderProfilePhoto();
  renderPeriodSelect();
  renderOverdueAlert();
  document.querySelectorAll(".finance-nav button").forEach((button) => button.classList.toggle("active", button.dataset.view === state.activeView));
  const titles = {
    dashboard: ["Kurumsal görünüm", "Dashboard"],
    calendar: ["Aylık plan", "Takvim"],
    upcoming: ["Ödeme ajandası", "Yaklaşan Ödemeler"],
    transactions: ["Ödenecek ve planlı kayıtlar", "Ödenecek İşlemler"],
    completed: ["Tamamlanan kayıt arşivi", "Tamamlanan Ödemeler"],
    budgets: ["Ay ay manuel bütçe planı", "Bütçeler"],
    charts: ["Gelir, gider, bütçe ve tamamlananlar", "Grafikler"],
  };
  document.querySelector("#viewEyebrow").textContent = titles[state.activeView][0];
  document.querySelector("#viewTitle").textContent = titles[state.activeView][1];

  const viewMap = {
    dashboard: renderDashboard,
    calendar: renderCalendar,
    upcoming: renderUpcoming,
    transactions: () => renderTransactions(false),
    completed: renderCompleted,
    budgets: renderBudgets,
    charts: renderCharts,
  };
  document.querySelector("#appView").innerHTML = viewMap[state.activeView]();
}

function renderProfilePhoto() {
  const image = document.querySelector("#profilePhotoPreview");
  const initials = document.querySelector(".finance-profile-photo span");
  const saved = localStorage.getItem(profilePhotoKey);
  if (!image || !initials) return;
  if (saved) {
    image.src = saved;
    image.hidden = false;
    initials.hidden = true;
  } else {
    image.hidden = true;
    initials.hidden = false;
  }
}

function renderDashboard() {
  const summary = totals();
  const active = scopedTransactions(false);
  const completed = scopedTransactions(true).filter((item) => item.status === "Tamamlandı");
  const upcoming = getUpcomingPayments();
  return `
    <section class="dashboard-grid">
      ${statCard("Gelir", formatMoney(summary.income), "income")}
      ${statCard("Gider", formatMoney(summary.expense), "expense")}
      ${statCard("Planlanan Ödeme", formatMoney(summary.planned), "planned")}
      ${statCard("Net Durum", formatMoney(summary.balance), "")}
    </section>
    <section class="panel" style="margin-top:16px">
      <header><div><h2>Akıllı Özet</h2><p>Bugün kullanırken öncelik vermen gereken alanlar</p></div><button class="btn secondary" data-view="upcoming">Yaklaşanları Aç</button></header>
      <div class="insight-grid" style="padding:20px">
        <article class="insight-card"><strong>${upcoming.length}</strong><p>Önümüzdeki 14 gün içinde bekleyen ödeme</p></article>
        <article class="insight-card"><strong>${formatMoney(upcoming.reduce((sum, item) => sum + item.amount, 0))}</strong><p>Yaklaşan ödeme yükü</p></article>
        <article class="insight-card"><strong>${overdueItems().length}</strong><p>Gecikmiş ödeme alarmı</p></article>
      </div>
    </section>
    <section class="chart-grid" style="margin-top:16px">
      <article class="panel">
        <header><div><h2>Ödenecekler</h2><p>${formatMonth(state.selectedPeriod)} döneminde açık kalan kayıtlar</p></div><button class="btn secondary" data-view="transactions">Aç</button></header>
        ${transactionTable(active.slice(0, 6), false)}
      </article>
      <article class="panel">
        <header><div><h2>Tamamlanan Ödemeler</h2><p>İşlemler ekranından ayrılan tamamlanmış kayıtlar</p></div><button class="btn secondary" data-view="completed">Aç</button></header>
        ${transactionTable(completed.slice(0, 6), true)}
      </article>
    </section>
    <section class="chart-grid" style="margin-top:16px">
      ${renderBudgetPanel()}
      ${renderChartsPanel()}
    </section>
  `;
}

function getUpcomingPayments(days = 14) {
  const limit = new Date(today);
  limit.setDate(limit.getDate() + days);
  return state.transactions
    .filter((item) => item.status !== "Tamamlandı")
    .filter((item) => {
      const due = parseDate(item.dueDate || item.date);
      return due && due >= today && due <= limit;
    })
    .sort((a, b) => String(a.dueDate || a.date).localeCompare(String(b.dueDate || b.date)));
}

function statCard(label, value, tone) {
  return `<article class="stat-card ${tone}"><strong>${value}</strong><span>${label}</span></article>`;
}

function renderCalendar() {
  const base = state.selectedPeriod === "all" ? toMonthKey(today) : state.selectedPeriod;
  const [year, month] = base.split("-").map(Number);
  const first = new Date(year, month - 1, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const start = new Date(year, month - 1, 1 - startOffset);
  const days = Array.from({ length: 35 }, (_, index) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + index));
  const selectedItems = state.transactions.filter((item) => item.date === state.selectedDate || item.dueDate === state.selectedDate);
  return `
    <section class="calendar-layout">
      <article class="calendar-card">
        <header>
          <div><h2>${formatMonth(base)}</h2><p>Yeşil gelir, kırmızı gider, turuncu planlı son ödeme hareketlerini gösterir.</p></div>
          <div class="row-actions"><button class="btn income" data-open-form="income">+ Gelir</button><button class="btn expense" data-open-form="expense">+ Gider</button></div>
        </header>
        <div class="calendar-head">${["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => `<span>${day}</span>`).join("")}</div>
        <div class="calendar-grid">
          ${days.map((day) => calendarCell(day, month)).join("")}
        </div>
      </article>
      <article class="day-detail">
        <header>
          <div><h2>${formatDate(state.selectedDate)}</h2><p>Seçilen güne ait hareketler ve son ödeme tarihleri</p></div>
          <div class="row-actions"><button class="btn income" data-open-form="income" data-date="${state.selectedDate}">+ Gelir</button><button class="btn expense" data-open-form="expense" data-date="${state.selectedDate}">+ Gider</button></div>
        </header>
        <div class="detail-list">
          ${
            selectedItems.length
              ? selectedItems.map((item) => detailItem(item)).join("")
              : `<p>Bu tarihte kayıt bulunmuyor.</p>`
          }
        </div>
      </article>
    </section>
  `;
}

function calendarCell(day, activeMonth) {
  const dateKey = toInputDate(day);
  const items = state.transactions.filter((item) => item.date === dateKey || item.dueDate === dateKey);
  return `
    <button class="day-cell ${day.getMonth() + 1 === activeMonth ? "" : "muted"} ${dateKey === state.selectedDate ? "active" : ""}" data-select-date="${dateKey}" type="button">
      <strong>${day.getDate()}</strong>
      <span class="dots">
        ${items
          .slice(0, 5)
          .map((item) => `<i class="dot ${item.status !== "Tamamlandı" && item.dueDate === dateKey ? "planned" : item.type}"></i>`)
          .join("")}
      </span>
    </button>
  `;
}

function detailItem(item) {
  return `
    <div class="detail-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.category} · ${item.account} · ${item.status} · Son ödeme: ${formatDate(item.dueDate)}</p>
      </div>
      <strong class="amount ${item.type}">${item.type === "income" ? "+" : "-"}${formatMoney(item.amount)}</strong>
    </div>
  `;
}

function renderTransactions(showCompleted) {
  const rows = scopedTransactions(true).filter((item) => showCompleted || item.status !== "Tamamlandı");
  return `
    <article class="panel">
      <header>
        <div><h2>${showCompleted ? "Tamamlanan Ödemeler" : "Ödenecek İşlemler"}</h2><p>${showCompleted ? "Tamamlanan kayıtlar bu sekmede arşivlenir." : "Tamamlananlar bu listeden çıkar ve ayrı sekmeye geçer."}</p></div>
        <div class="row-actions"><button class="btn income" data-open-form="income">+ Gelir</button><button class="btn expense" data-open-form="expense">+ Gider</button></div>
      </header>
      ${transactionTable(rows, showCompleted)}
    </article>
  `;
}

function renderCompleted() {
  const rows = scopedTransactions(true).filter((item) => item.status === "Tamamlandı");
  return `
    <article class="panel">
      <header>
        <div><h2>Tamamlanan Ödemeler</h2><p>Ödemesi yapılan işlemler bu sekmede ayrı takip edilir ve işlem listesini kalabalıklaştırmaz.</p></div>
        <div class="row-actions"><button class="btn income" data-open-form="income">+ Gelir</button><button class="btn expense" data-open-form="expense">+ Gider</button></div>
      </header>
      ${transactionTable(rows, true)}
    </article>
  `;
}

function renderUpcoming() {
  const rows = getUpcomingPayments(45);
  return `
    <section class="page-grid">
      <article class="panel">
        <header>
          <div><h2>Yaklaşan Ödemeler</h2><p>Bugünden itibaren 45 gün içinde son ödeme tarihi yaklaşan açık kayıtlar.</p></div>
          <button class="btn expense" data-open-form="expense">+ Planlı Ödeme</button>
        </header>
        ${transactionTable(rows, false)}
      </article>
      <article class="panel">
        <header><div><h2>Ödeme Önceliği</h2><p>En yakın vade üstte olacak şekilde takip edilir.</p></div></header>
        <div class="detail-list">
          ${
            rows.length
              ? rows.slice(0, 6).map((item) => detailItem(item)).join("")
              : `<p>Yaklaşan açık ödeme yok.</p>`
          }
        </div>
      </article>
    </section>
  `;
}

function transactionTable(rows, completedView) {
  if (!rows.length) return `<div class="detail-list"><p>Kayıt bulunamadı.</p></div>`;
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Tarih</th><th>Son Ödeme</th><th>Açıklama</th><th>Kategori</th><th>Hesap</th><th>Durum</th><th>Tutar</th><th>İşlem</th></tr>
        </thead>
        <tbody>
          ${rows.map((item) => transactionRow(item, completedView)).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function transactionRow(item, completedView) {
  const overdue = isOverdue(item);
  return `
    <tr>
      <td>${formatDate(item.date)}</td>
      <td>${formatDate(item.dueDate || item.date)}</td>
      <td><strong>${item.title}</strong>${item.note ? `<p>${item.note}</p>` : ""}</td>
      <td><span class="pill ${item.type === "income" ? "done" : ""}">${item.category}</span></td>
      <td>${item.account}</td>
      <td><span class="pill ${item.status === "Tamamlandı" ? "done" : overdue ? "late" : "plan"}">${overdue ? "Gecikti" : item.status}</span></td>
      <td><strong class="amount ${item.type}">${item.type === "income" ? "+" : "-"}${formatMoney(item.amount)}</strong></td>
      <td>
        <div class="row-actions">
          ${!completedView && item.status !== "Tamamlandı" ? `<button class="done" data-complete="${item.id}">Tamamlandı</button>` : ""}
          <button data-edit-transaction="${item.id}">Düzenle</button>
          <button class="danger" data-delete-transaction="${item.id}">Sil</button>
        </div>
      </td>
    </tr>
  `;
}

function renderBudgets() {
  return `
    <article class="panel">
      <header>
        <div><h2>Bütçeler</h2><p>Her kalem için ay ay manuel bütçe belirleyin, düzenleyin veya silin.</p></div>
        <button class="btn primary" data-open-budget>+ Bütçe Ekle</button>
      </header>
      ${renderBudgetPanel(true)}
    </article>
  `;
}

function renderBudgetPanel(full = false) {
  const budgets = scopedBudgets();
  const expenses = state.transactions.filter((item) => item.type === "expense" && (state.selectedPeriod === "all" || monthMatches(item.date, item.month)));
  return `
    <article class="${full ? "" : "panel"}">
      ${full ? "" : `<header><div><h2>Bütçe Kullanımı</h2><p>Kategori bazlı limit ve gerçekleşen gider takibi</p></div><button class="btn secondary" data-view="budgets">Yönet</button></header>`}
      <div class="budget-list">
        ${
          budgets.length
            ? budgets
                .map((budget) => {
                  const used = expenses.filter((item) => item.category === budget.category && (state.selectedPeriod === "all" || item.date.startsWith(budget.month))).reduce((sum, item) => sum + item.amount, 0);
                  const rate = budget.limit ? Math.round((used / budget.limit) * 100) : 0;
                  return `
                    <section class="budget-row">
                      <header><strong>${budget.category}</strong><strong class="${rate > 100 ? "amount expense" : ""}">${formatMoney(used)} / ${formatMoney(budget.limit)}</strong></header>
                      <div class="budget-track"><span style="width:${Math.min(rate, 100)}%;background:${budget.color}"></span></div>
                      <p>${rate > 100 ? "Limit aşıldı" : `%${rate} kullanıldı`} · ${formatMonth(budget.month)}</p>
                      ${full ? `<div class="row-actions"><button data-edit-budget="${budget.id}">Düzenle</button><button class="danger" data-delete-budget="${budget.id}">Sil</button></div>` : ""}
                    </section>
                  `;
                })
                .join("")
            : `<p>Bu dönem için bütçe kalemi yok.</p>`
        }
      </div>
    </article>
  `;
}

function renderCharts() {
  return `<section class="chart-grid">${renderChartsPanel()}${renderCategoryChartPanel()}</section>`;
}

function renderChartsPanel() {
  const data = totals();
  const rows = [
    ["Gelir", data.income, "#16834f"],
    ["Gider", data.expense, "#dc2626"],
    ["Planlanan", data.planned, "#d97706"],
    ["Tamamlanan", data.completed, "#2563eb"],
  ];
  const total = rows.reduce((sum, [, value]) => sum + value, 0) || 1;
  const gradient = conicGradient(rows);
  return `
    <article class="panel">
      <header><div><h2>Gelir / Gider Grafiği</h2><p>${formatMonth(state.selectedPeriod)} dökümü. Toplam seçilirse tüm kayıtlar gösterilir.</p></div></header>
      <div class="donut-layout">
        <div class="donut-chart" style="background:${gradient}" data-center="Net&#10;${formatMoney(data.balance)}"></div>
        <div class="donut-legend">
          ${rows
            .map(
              ([label, value, color]) => `
                <div>
                  <i style="background:${color}"></i>
                  <span>${label}</span>
                  <strong>${formatMoney(value)} · %${Math.round((value / total) * 100)}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderCategoryChartPanel() {
  const items = scopedTransactions(true).filter((item) => item.type === "expense");
  const grouped = Array.from(items.reduce((map, item) => map.set(item.category, (map.get(item.category) || 0) + item.amount), new Map()).entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  const max = Math.max(...grouped.map(([, value]) => value), 1);
  const categoryRows = grouped.map(([label, value], index) => [label, value, ["#0f766e", "#2563eb", "#7c3aed", "#ca8a04", "#dc2626", "#0891b2", "#4f46e5", "#16a34a"][index] || "#0f766e"]);
  return `
    <article class="panel">
      <header><div><h2>Kategori Dökümü</h2><p>Gider kalemleri ve bütçe baskısı</p></div></header>
      ${
        grouped.length
          ? `<div class="donut-layout">
              <div class="donut-chart" style="background:${conicGradient(categoryRows)}" data-center="Gider&#10;${formatMoney(grouped.reduce((sum, [, value]) => sum + value, 0))}"></div>
              <div class="donut-legend">${categoryRows
                .map(
                  ([label, value, color]) => `
                    <div>
                      <i style="background:${color}"></i>
                      <span>${label}</span>
                      <strong>${formatMoney(value)}</strong>
                    </div>
                  `,
                )
                .join("")}</div>
            </div>`
          : `<div class="detail-list"><p>Kayıt bulunamadı.</p></div>`
      }
    </article>
  `;
}

function conicGradient(rows) {
  const total = rows.reduce((sum, [, value]) => sum + value, 0) || 1;
  let start = 0;
  const parts = rows.map(([, value, color]) => {
    const end = start + (value / total) * 100;
    const part = `${color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
    start = end;
    return part;
  });
  return `conic-gradient(${parts.join(", ")})`;
}

function barRow(label, value, max, color) {
  return `
    <div class="bar-row">
      <strong>${label}</strong>
      <div class="bar-track"><span style="width:${Math.max(3, Math.round((value / max) * 100))}%;background:${color}"></span></div>
      <span>${formatMoney(value)}</span>
    </div>
  `;
}

function openTransactionForm(type, id = "", date = "") {
  const dialog = document.querySelector("#transactionDialog");
  const form = document.querySelector("#transactionForm");
  const record = state.transactions.find((item) => item.id === id) || {
    id: "",
    type,
    title: "",
    category: type === "income" ? "Gelir" : "Gider",
    account: "Banka Hesabı",
    amount: "",
    date: date || toInputDate(today),
    dueDate: date || toInputDate(today),
    status: type === "income" ? "Tamamlandı" : "Planlandı",
    note: "",
  };
  document.querySelector("#transactionDialogTitle").textContent = record.id ? "İşlem Düzenle" : type === "income" ? "Gelir Ekle" : "Gider Ekle";
  Object.entries(record).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = key === "amount" ? String(value).replace(".", ",") : value;
  });
  dialog.showModal();
}

function openBudgetForm(id = "") {
  const dialog = document.querySelector("#budgetDialog");
  const form = document.querySelector("#budgetForm");
  const record = state.budgets.find((item) => item.id === id) || {
    id: "",
    month: state.selectedPeriod === "all" ? toMonthKey(today) : state.selectedPeriod,
    category: "",
    limit: "",
    color: "#2563eb",
  };
  document.querySelector("#budgetDialogTitle").textContent = record.id ? "Bütçe Düzenle" : "Bütçe Ekle";
  Object.entries(record).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = key === "limit" ? String(value).replace(".", ",") : value;
  });
  dialog.showModal();
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    document.body.classList.remove("menu-open");
    return;
  }

  const formButton = event.target.closest("[data-open-form]");
  if (formButton) {
    openTransactionForm(formButton.dataset.openForm, "", formButton.dataset.date || "");
    return;
  }

  const dateButton = event.target.closest("[data-select-date]");
  if (dateButton) {
    state.selectedDate = dateButton.dataset.selectDate;
    saveState();
    render();
    return;
  }

  const completeButton = event.target.closest("[data-complete]");
  if (completeButton) {
    const record = state.transactions.find((item) => item.id === completeButton.dataset.complete);
    if (record) record.status = "Tamamlandı";
    saveState();
    render();
    return;
  }

  const editTransaction = event.target.closest("[data-edit-transaction]");
  if (editTransaction) {
    const record = state.transactions.find((item) => item.id === editTransaction.dataset.editTransaction);
    if (record) openTransactionForm(record.type, record.id);
    return;
  }

  const deleteTransaction = event.target.closest("[data-delete-transaction]");
  if (deleteTransaction && confirm("Bu işlemi silmek istiyor musunuz?")) {
    state.transactions = state.transactions.filter((item) => item.id !== deleteTransaction.dataset.deleteTransaction);
    saveState();
    render();
    return;
  }

  if (event.target.closest("[data-open-budget]")) {
    openBudgetForm();
    return;
  }

  const editBudget = event.target.closest("[data-edit-budget]");
  if (editBudget) {
    openBudgetForm(editBudget.dataset.editBudget);
    return;
  }

  const deleteBudget = event.target.closest("[data-delete-budget]");
  if (deleteBudget && confirm("Bu bütçe kalemini silmek istiyor musunuz?")) {
    state.budgets = state.budgets.filter((item) => item.id !== deleteBudget.dataset.deleteBudget);
    saveState();
    render();
    return;
  }

  const closeButton = event.target.closest("[data-close-dialog]");
  if (closeButton) {
    document.querySelector(`#${closeButton.dataset.closeDialog}`).close();
    return;
  }

  if (event.target.id === "menuToggle") {
    if (window.matchMedia("(max-width: 1040px)").matches) {
      document.body.classList.toggle("menu-open");
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  }
});

document.querySelector("#periodSelect").addEventListener("change", (event) => {
  state.selectedPeriod = event.target.value;
  if (state.selectedPeriod !== "all") state.selectedDate = `${state.selectedPeriod}-01`;
  saveState();
  render();
});

document.querySelector("#transactionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const record = {
    id: data.id || uid("t"),
    type: data.type,
    title: data.title.trim(),
    category: data.category.trim(),
    account: data.account.trim(),
    amount: parseMoney(data.amount),
    date: data.date,
    dueDate: data.dueDate || data.date,
    status: data.status,
    note: data.note.trim(),
  };
  const index = state.transactions.findIndex((item) => item.id === record.id);
  if (index >= 0) state.transactions[index] = record;
  else state.transactions.push(record);
  state.selectedPeriod = record.date.slice(0, 7);
  state.selectedDate = record.date;
  saveState();
  form.closest("dialog").close();
  render();
});

document.querySelector("#budgetForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const record = {
    id: data.id || uid("b"),
    month: data.month,
    category: data.category.trim(),
    limit: parseMoney(data.limit),
    color: data.color,
  };
  const index = state.budgets.findIndex((item) => item.id === record.id);
  if (index >= 0) state.budgets[index] = record;
  else state.budgets.push(record);
  state.selectedPeriod = record.month;
  saveState();
  form.closest("dialog").close();
  render();
});

document.querySelector("#profilePhotoInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem(profilePhotoKey, String(reader.result || ""));
    renderProfilePhoto();
  });
  reader.readAsDataURL(file);
  event.target.value = "";
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.querySelector("#installAppButton").hidden = false;
});

document.querySelector("#installAppButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#installAppButton").hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  document.querySelector("#installAppButton").hidden = true;
});

if ("serviceWorker" in navigator && ["http:", "https:"].includes(window.location.protocol)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./bireysel-dashboard-service-worker.js").catch((error) => {
      console.warn("Offline app kaydı yapılamadı", error);
    });
  });
}

render();
