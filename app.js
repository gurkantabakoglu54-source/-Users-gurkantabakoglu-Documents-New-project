const icons = {
  building:
    '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h7v18"/><path d="M14 9h3a2 2 0 0 1 2 2v10"/><path d="M8 7h2"/><path d="M8 11h2"/><path d="M8 15h2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  barChart:
    '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',
  bell:
    '<path d="M10 21h4"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>',
  checklist:
    '<path d="M9 11 11 13 15 9"/><path d="M9 17 11 19 15 15"/><path d="M4 5h16"/><path d="M4 11h2"/><path d="M4 17h2"/>',
  contact: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  edit:
    '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  filter: '<path d="M3 5h18l-7 8v5l-4 2v-7Z"/>',
  flag: '<path d="M5 22V4"/><path d="M5 4c4-2 6 2 10 0 2-.8 3-.5 4 0v10c-4-2-6 2-10 0-2-.8-3-.5-4 0"/>',
  folder:
    '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>',
  invoice:
    '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2Z"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h3"/>',
  lock:
    '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  bot:
    '<path d="M12 8V4"/><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M9 13h.01"/><path d="M15 13h.01"/><path d="M9 17h6"/><path d="M8 4h8"/>',
  message:
    '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8"/><path d="M8 13h6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  calendar:
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  note: '<path d="M4 4h16v14H8l-4 4Z"/>',
  archive: '<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1Z"/><path d="M10 12h4"/>',
  external: '<path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  upload:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  panel:
    '<path d="M12 3a9 9 0 0 0-9 9h4a5 5 0 0 1 10 0h4a9 9 0 0 0-9-9Z"/><path d="m12 12 4-4"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  presentation:
    '<path d="M3 4h18v12H3Z"/><path d="M12 16v4"/><path d="m8 20 4-4 4 4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  save:
    '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  refresh: '<path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/>',
  trash:
    '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/>',
  youtube:
    '<path d="M22 12s0-3-.4-4.4c-.2-.8-.9-1.4-1.7-1.6C18.4 5.6 12 5.6 12 5.6s-6.4 0-7.9.4c-.8.2-1.5.8-1.7 1.6C2 9 2 12 2 12s0 3 .4 4.4c.2.8.9 1.4 1.7 1.6 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.8 1.7-1.6.4-1.4.4-4.4.4-4.4Z"/><path d="m10 9 5 3-5 3Z"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  wallet:
    '<path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V6"/><path d="M16 13h.01"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  settings:
    '<path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  grid:
    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};

const dayColumns = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return [`day${day}`, String(day), "attendanceDay", ["-", "Geldi", "Gelmedi", "Raporlu", "Geçici Görev"]];
});
const manualHourColumns = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return [`manualDay${day}`, `${day}. Gün Manuel Saat`, "attendanceManualHour"];
});
const overtimeDayColumns = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return [`overtimeDay${day}`, `${day}. Gün Mesai`, "attendanceOvertime"];
});

const dashboardYear = "2026";
const fixedDashboardMonths = Array.from({ length: 12 }, (_, index) => `${String(index + 1).padStart(2, "0")}.${dashboardYear}`);
const dashboardRangeOptions = [
  ["month", "Seçili Ay"],
  ["quarter", "Son 3 Ay"],
  ["five", "Son 5 Ay"],
  ["year", "12 Ay"],
];

const cityPlateCodes = {
  adana: "01",
  ankara: "06",
  bursa: "16",
  istanbul: "34",
  izmir: "35",
  kocaeli: "41",
  sakarya: "54",
  tekirdag: "59",
  kütahya: "43",
  kutahya: "43",
  manisa: "45",
  eskişehir: "26",
  eskisehir: "26",
};

const modules = [
  {
    id: "panel",
    title: "Panel",
    icon: "panel",
    breadcrumb: ["Panel"],
    dashboard: true,
  },
  {
    id: "payrollCenter",
    title: "Bordro Merkezi",
    icon: "grid",
    breadcrumb: ["Panel", "Bordro Merkezi", "Ana Sayfa"],
    noActions: true,
    records: [],
  },
  {
    id: "companies",
    title: "Firmalar",
    icon: "building",
    breadcrumb: ["Panel", "Firmalar", "Firma Listesi"],
    addExcel: false,
    columns: [
      ["name", "Firma Adı"],
      ["authorized", "Yetkili"],
      ["email", "Email"],
      ["phone", "Telefon"],
      ["fax", "Fax"],
      ["city", "Şehir"],
      ["sector", "Sektör"],
      ["taxNo", "Vergi No"],
      ["address", "Adres"],
      ["contractStatus", "Sözleşme", "select", ["Aktif", "Beklemede", "Yok"]],
      ["contractFile", "İmzalı Sözleşme", "file"],
      ["offerFile", "Fiyat Teklifi", "file"],
      ["note", "Not"],
    ],
    records: [
      { id: "c1", name: "CELAL ASLAN HALEFLERİ", authorized: "Mehmet Emre Yıldırım", email: "kalite@mgmdokum.com", phone: "(538)208 43 99", fax: "", city: "Ankara" },
      { id: "c2", name: "CIE AUTOMOTIVE INDIA LTD", authorized: "Chauhan Jagdish - Gearrjt", email: "CHAUHAN.JAGDISH@cie-india.com", phone: "(202)980 46 21", fax: "", city: "-Yurt Dışı-" },
      { id: "c3", name: "MAKENA MÜHENDİSLİK", authorized: "Çağdaş Bey", email: "makena.muh@gmail.com", phone: "(532)316 25 72", fax: "", city: "Sakarya" },
      { id: "c4", name: "BHAVANİ SYNCHROTEC PVT. LTD.", authorized: "Nirav Vaishnav - Gm Business Development", email: "nirav.vaishnav@bhavanisynchrotec.com", phone: "(748)600 65 98", fax: "", city: "-Yurt Dışı-" },
      { id: "c5", name: "TOPDAL PLASTİK", authorized: "Özden Yanık", email: "ozden.yanik@topdal.com.tr", phone: "(054)489 27 33", fax: "", city: "İstanbul" },
      { id: "c6", name: "DEMM SRL", authorized: "Matilde Nanni", email: "matilde.nanni@demm.it", phone: "(393)755 53 59", fax: "", city: "-Yurt Dışı-" },
      { id: "c7", name: "SVB GRUP OTOMOTİV", authorized: "Ceyda Kanburoğlu", email: "ceydakanburoglu@svbotomotiv.com.tr", phone: "(537)969 43 84", fax: "", city: "Kütahya" },
      { id: "c8", name: "METAŞ MAKİNA METAL İŞLERİ", authorized: "Faruk Taşkın", email: "muhasebe@metasmakina.com.tr", phone: "(533)092 74 02", fax: "", city: "Sakarya" },
      { id: "c9", name: "WIPRO ENTERPRISES", authorized: "Asif A", email: "asif.a41@wipro", phone: "(978)906 06 45", fax: "", city: "-Yurt Dışı-" },
      { id: "c10", name: "BOSCH REXROTH A.Ş.", authorized: "Büşra Arslan", email: "Busra.Arslan@boschrexroth.com.tr", phone: "(531)298 63 06", fax: "", city: "Kocaeli" },
    ],
  },
  {
    id: "projects",
    title: "Projeler",
    icon: "folder",
    breadcrumb: ["Panel", "Projeler", "Proje Listesi"],
    addExcel: true,
    columns: [
      ["code", "Proje Kodu", "readonly"],
      ["company", "Firma Adı"],
      ["part", "Parça Kodu"],
      ["problem", "Problem"],
      ["okCount", "OK", "qualityNumber"],
      ["nokCount", "NOK", "qualityNumber"],
      ["rokCount", "ROK", "qualityNumber"],
      ["rnokCount", "RNOK", "qualityNumber"],
      ["responsible", "Sorumlu"],
      ["location", "Lokasyon"],
      ["startDate", "Başlangıç", "date"],
      ["endDate", "Bitiş", "date"],
      ["date", "Proje Tarihi", "date"],
      ["status", "Durumu", "select", ["Aktif", "Pasif", "Beklemede"]],
      ["invoiceStatus", "Fatura Durumu", "select", ["Fatura Kesildi", "Fatura Beklemede", "Onay Verilmedi"]],
      ["note", "Not"],
      ["file", "Proje Dosyaları", "files"],
    ],
    records: [
      { id: "p1", code: "AD54000000001", company: "MSS MÜKEMMEL SAVUNMA SANAYİ", part: "MSS PARÇA KONTROL 2026 05", problem: "MSS PARÇA KONTROL 2026 05", responsible: "Faruk Türker", location: "Sakarya", startDate: "2026-05-01", endDate: "2026-05-31", date: "2026-05-01", status: "Pasif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p2", code: "AD16000000001", company: "MSI TEKNİK", part: "XLK.265437.AA", problem: "CSL KONTROL (HS2-AKÇALAR)", responsible: "Zehra Battal", location: "Bursa", startDate: "2026-05-05", endDate: "", date: "2026-05-05", status: "Aktif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p3", code: "AD54000000002", company: "BV SAVUNMA", part: "BV SAVUNMA KONTROL 2026 05", problem: "BV SAVUNMA KONTROL 2026 05", responsible: "Murat Oğuz", location: "Sakarya", startDate: "2026-05-04", endDate: "", date: "2026-05-04", status: "Aktif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p4", code: "AD54000000003", company: "OTOKAR", part: "TEM KABLO 2026 05", problem: "TEM KABLO 2026 05", responsible: "Gürkan Tabakoğlu", location: "Sakarya", startDate: "2026-05-04", endDate: "", date: "2026-05-04", status: "Aktif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p5", code: "AD41000000001", company: "Sanpar", part: ".47554547", problem: "SANPAR GENEL KONTROL 2026 05", responsible: "Faruk Türker", location: "Kocaeli", startDate: "2026-05-04", endDate: "", date: "2026-05-04", status: "Aktif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p6", code: "AD54000000004", company: "SE KABLO", part: "SE KABLO 2026 04", problem: "SE KABLO 2026 04", responsible: "Zehra Battal", location: "Sakarya", startDate: "2026-04-01", endDate: "2026-04-30", date: "2026-04-01", status: "Pasif", invoiceStatus: "Onay Verilmedi", note: "" },
      { id: "p7", code: "AD54000000005", company: "Kale Oto", part: "51633263,", problem: "GENEL KONTROL(SELÇUK AYDIN)BOYA KONTROLÜ", responsible: "Murat Oğuz", location: "Sakarya", startDate: "2026-04-29", endDate: "2026-04-30", date: "2026-04-29", status: "Pasif", invoiceStatus: "Fatura Kesildi", note: "GKK2026000000219" },
    ],
  },
  {
    id: "users",
    title: "Kullanıcılar",
    icon: "contact",
    breadcrumb: ["Panel", "Kullanıcılar", "Kullanıcı Listesi"],
    columns: [
      ["email", "Email"],
      ["name", "Adı"],
      ["surname", "Soyadı"],
      ["phone", "Telefon"],
      ["username", "Kullanıcı Adı"],
      ["companyName", "Bağlı Firma"],
      ["type", "Türü", "select", ["Admin", "Yönetici", "Personel", "Müşteri", "Kullanıcı"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "u1", email: "makena.muh@gmail.com", name: "ÇAĞDAŞ", surname: "BEY", phone: "(021)241 89 63", username: "cagdas", companyName: "MAKENA MÜHENDİSLİK", type: "MÜŞTERİ", status: "AKTİF" },
      { id: "u2", email: "abgultekin@borusan.com", name: "AHMET BURAK", surname: "GÜLTEKİN", phone: "(549)133 73 03", username: "ahmet", companyName: "", type: "MÜŞTERİ", status: "AKTİF" },
      { id: "u3", email: "zuhal.bulut@arcelik-lg.com", name: "ZUHAL", surname: "BULUT", phone: "(554)553 82 96", username: "zuhal", companyName: "", type: "MÜŞTERİ", status: "AKTİF" },
      { id: "u4", email: "gkhanb@safak.com", name: "GÖKHAN", surname: "BİLGİN", phone: "(554)381 20 00", username: "gokhan", companyName: "", type: "MÜŞTERİ", status: "AKTİF" },
      { id: "u5", email: "gkkotakar@global-kalite.com", name: "DİLEK", surname: "KARA", phone: "(531)240 08 54", username: "dilek", companyName: "", type: "Kullanıcı", status: "AKTİF" },
      { id: "u6", email: "ttferenler@global-kalite.com", name: "SERVET", surname: "KÜN", phone: "(542)377 02 54", username: "servet", companyName: "", type: "Admin", status: "AKTİF" },
    ],
  },
  {
    id: "personnel",
    title: "Personeller",
    icon: "users",
    breadcrumb: ["Panel", "Personeller", "Personel Listesi"],
    columns: [
      ["name", "Adı Soyadı"],
      ["department", "Departman"],
      ["role", "Görevi"],
      ["city", "Şehir"],
      ["email", "E-posta"],
      ["phone", "Telefon"],
      ["companyName", "Firma"],
      ["startDate", "İşe Giriş"],
      ["trialEndDate", "Deneme Bitişi", "date"],
      ["grossSalary", "Brüt Ücret"],
      ["exitDate", "Çıkış Tarihi"],
      ["emergency", "Acil Durum"],
      ["documentStatus", "Özlük Durumu", "select", ["Tam", "Eksik", "Kontrol Edilecek"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "ps1", name: "Zehra Battal", department: "İnsan Kaynakları", role: "İK Uzmanı", city: "Sakarya", phone: "(264)502 92 10", companyName: "Artı Destek", startDate: "01/03/2024", trialEndDate: "2024-04-30", grossSalary: "42.500 TL", emergency: "Kazım Battal - (264)502 92 10", status: "AKTİF" },
      { id: "ps2", name: "Faruk Türker", department: "Operasyon", role: "Operasyon Ve Kalite Müdürü", city: "Kocaeli", phone: "(506)604 27 04", companyName: "TOPDAL PLASTİK", startDate: "15/01/2023", trialEndDate: "2023-03-16", grossSalary: "58.000 TL", emergency: "Servet Kün - (542)377 02 54", status: "AKTİF" },
      { id: "ps3", name: "Murat Oğuz", department: "Yönetim", role: "Kurucu Ortak", city: "Sakarya", phone: "(264)502 92 10", companyName: "Artı Destek", startDate: "01/01/2022", trialEndDate: "2022-03-02", grossSalary: "65.000 TL", emergency: "Zehra Battal - (264)502 92 10", status: "AKTİF" },
      { id: "ps4", name: "Gürkan Tabakoğlu", department: "Yönetim", role: "Kurucu Ortak", city: "Sakarya", phone: "(264)502 92 10", companyName: "Artı Destek", startDate: "01/01/2022", trialEndDate: "2022-03-02", grossSalary: "65.000 TL", emergency: "Murat Oğuz - (264)502 92 10", status: "AKTİF" },
    ],
  },
  {
    id: "personnel360",
    title: "Personel 360",
    icon: "users",
    breadcrumb: ["Panel", "Personel 360", "Personel Kartı"],
    noActions: true,
    records: [],
  },
  {
    id: "presentations",
    title: "Özlük Belgeleri",
    icon: "presentation",
    breadcrumb: ["Panel", "Özlük Belgeleri", "Belge Listesi"],
    columns: [
      ["person", "Personel"],
      ["type", "Belge Türü"],
      ["file", "Dosya / Resim", "files"],
      ["date", "Tarih"],
      ["owner", "Ekleyen"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [{ id: "s1", person: "Zehra Battal", type: "Kimlik / Özlük", file: "", date: "05.2026", owner: "İK", status: "AKTİF" }],
  },
  {
    id: "attendance",
    title: "Puantaj",
    icon: "calendar",
    breadcrumb: ["Panel", "Puantaj", "Aylık Puantaj"],
    columns: [
      ["person", "Personel"],
      ["period", "Dönem"],
      ["dailyHours", "Günlük Saat", "select", ["7,5", "9"]],
      ...dayColumns,
      ...manualHourColumns,
      ...overtimeDayColumns,
      ["overtimeHours", "Mesai Saati"],
      ["totalHours", "Toplam Saat", "readonly"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      {
        id: "pt1",
        person: "Zehra Battal",
        period: "05.2026",
        dailyHours: "7,5",
        overtimeHours: "20",
        totalHours: "185",
        status: "AKTİF",
        ...Object.fromEntries(dayColumns.map(([key], index) => [key, index < 22 ? "Geldi" : "-"])),
      },
      {
        id: "pt2",
        person: "Faruk Türker",
        period: "05.2026",
        dailyHours: "9",
        overtimeHours: "10",
        totalHours: "208",
        status: "AKTİF",
        ...Object.fromEntries(dayColumns.map(([key], index) => [key, index < 22 ? "Geldi" : "-"])),
      },
    ],
  },
  {
    id: "leaves",
    title: "İzinler",
    icon: "calendar",
    breadcrumb: ["Panel", "İzinler", "İzin Listesi"],
    columns: [
      ["person", "Personel"],
      ["type", "İzin Türü"],
      ["startDate", "Başlangıç"],
      ["endDate", "Bitiş"],
      ["dayCount", "Gün"],
      ["approval", "Onay Durumu", "select", ["Bekliyor", "Onaylandı", "Reddedildi"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "lv1", person: "Zehra Battal", type: "Yıllık İzin", startDate: "12/05/2026", endDate: "14/05/2026", dayCount: "3", approval: "Bekliyor", status: "AKTİF" },
    ],
  },
  {
    id: "trainings",
    title: "Eğitimler",
    icon: "presentation",
    breadcrumb: ["Panel", "Eğitimler", "Eğitim Listesi"],
    columns: [
      ["title", "Eğitim"],
      ["person", "Personel"],
      ["date", "Tarih"],
      ["validUntil", "Geçerlilik"],
      ["certificate", "Sertifika", "files"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "tr1", title: "İş Güvenliği Eğitimi", person: "Faruk Türker", date: "02/05/2026", validUntil: "02/05/2027", certificate: "", status: "AKTİF" },
    ],
  },
  {
    id: "assets",
    title: "Zimmetler",
    icon: "folder",
    breadcrumb: ["Panel", "Zimmetler", "Zimmet Listesi"],
    columns: [
      ["person", "Personel"],
      ["asset", "Zimmet"],
      ["serial", "Seri No"],
      ["givenDate", "Teslim Tarihi"],
      ["returnDate", "İade Tarihi"],
      ["file", "Tutanak", "files"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "as1", person: "Gürkan Tabakoğlu", asset: "Dizüstü Bilgisayar", serial: "AD-2026-001", givenDate: "01/05/2026", returnDate: "", file: "", status: "AKTİF" },
    ],
  },
  {
    id: "tasks",
    title: "Görevler",
    icon: "note",
    breadcrumb: ["Panel", "Görevler", "Görev Listesi"],
    columns: [
      ["title", "Görev"],
      ["project", "Proje"],
      ["assignee", "Atanan"],
      ["priority", "Öncelik", "select", ["Düşük", "Normal", "Yüksek", "Acil"]],
      ["dueDate", "Son Tarih"],
      ["status", "Durumu", "select", ["Bekliyor", "Devam Ediyor", "Tamamlandı"]],
    ],
    records: [
      { id: "t1", title: "MSS günlük kontrol raporu", project: "GL54-2026413", assignee: "Faruk Türker", priority: "Yüksek", dueDate: "08/05/2026", status: "Devam Ediyor" },
      { id: "t2", title: "Mayıs bordro dosyalarını yükle", project: "IK-05-2026", assignee: "Zehra Battal", priority: "Normal", dueDate: "10/05/2026", status: "Bekliyor" },
      { id: "t3", title: "Kale Oto fatura onayı", project: "GL54-2026403", assignee: "Murat Oğuz", priority: "Yüksek", dueDate: "06/05/2026", status: "Tamamlandı" },
    ],
  },
  {
    id: "invoices",
    title: "Faturalar",
    icon: "invoice",
    breadcrumb: ["Panel", "Faturalar", "Fatura Listesi"],
    columns: [
      ["invoiceNo", "Fatura No"],
      ["company", "Firma"],
      ["project", "Proje"],
      ["amount", "Tutar"],
      ["tax", "KDV"],
      ["withholding", "Tevkifat", "select", ["Yok", "2/10", "3/10", "4/10", "5/10", "7/10", "9/10", "Diğer"]],
      ["paymentStatus", "Ödeme Durumu", "select", ["Tahsil Bekliyor", "Ödendi", "Gecikti"]],
      ["collectionDate", "Tahsil Tarihi", "date"],
      ["dueDate", "Vade", "date"],
      ["status", "Durumu", "select", ["Fatura Kesildi", "Fatura Beklemede", "Onay Verilmedi"]],
      ["file", "Fatura Dosyası", "file"],
    ],
    records: [
      { id: "i1", invoiceNo: "GKK2026000000219", company: "Kale Oto", project: "AD54000000005", amount: "36.500 TL", tax: "%20", withholding: "Yok", paymentStatus: "Tahsil Bekliyor", collectionDate: "", dueDate: "2026-05-30", status: "Fatura Kesildi", file: "" },
      { id: "i2", invoiceNo: "GKK2026000000220", company: "Cofle TK Otomotiv", project: "AD54000000004", amount: "24.800 TL", tax: "%20", withholding: "Yok", paymentStatus: "Gecikti", collectionDate: "", dueDate: "2026-06-15", status: "Fatura Beklemede", file: "" },
    ],
  },
  {
    id: "approvals",
    title: "Onay Merkezi",
    icon: "checklist",
    breadcrumb: ["Panel", "Onay Merkezi", "Bekleyen İşler"],
    navHidden: true,
    dashboardHidden: true,
    noActions: true,
    records: [],
  },
  {
    id: "quality",
    title: "Kalite Yönetimi",
    icon: "barChart",
    breadcrumb: ["Panel", "Kalite Yönetimi", "Kalite Riskleri"],
    noActions: true,
    columns: [
      ["projectCode", "Proje Kodu"],
      ["company", "Firma"],
      ["part", "Parça Kodu"],
      ["problem", "Problem"],
      ["total", "Toplam Adet"],
      ["defectRate", "Hata Oranı %"],
      ["risk", "Risk"],
    ],
    records: [],
  },
  {
    id: "documentsChecklist",
    title: "Evrak Kontrol",
    icon: "checklist",
    breadcrumb: ["Panel", "Evrak Kontrol", "Özlük Checklist"],
    columns: [
      ["person", "Personel"],
      ["identity", "Kimlik", "select", ["Tam", "Eksik"]],
      ["sgk", "SGK", "select", ["Tam", "Eksik"]],
      ["contract", "Sözleşme", "select", ["Tam", "Eksik"]],
      ["kvkk", "KVKK", "select", ["Tam", "Eksik"]],
      ["health", "Sağlık Raporu", "select", ["Tam", "Eksik"]],
      ["iban", "IBAN", "select", ["Tam", "Eksik"]],
      ["criminalRecord", "Adli Sicil", "select", ["Tam", "Eksik"]],
      ["status", "Durumu", "select", ["Tam", "Eksik", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "dc1", person: "Zehra Battal", identity: "Tam", sgk: "Tam", contract: "Tam", kvkk: "Tam", health: "Tam", iban: "Tam", criminalRecord: "Tam", status: "Tam" },
      { id: "dc2", person: "Faruk Türker", identity: "Tam", sgk: "Tam", contract: "Eksik", kvkk: "Tam", health: "Eksik", iban: "Tam", criminalRecord: "Tam", status: "Eksik" },
    ],
  },
  {
    id: "notifications",
    title: "Bildirim Merkezi",
    icon: "bell",
    breadcrumb: ["Panel", "Bildirim Merkezi", "Uyarılar"],
    columns: [
      ["date", "Tarih"],
      ["type", "Tür"],
      ["moduleName", "Modül"],
      ["description", "Açıklama"],
      ["priority", "Öncelik", "select", ["Düşük", "Normal", "Yüksek", "Acil"]],
      ["readStatus", "Okunma", "select", ["Okunmadı", "Okundu"]],
      ["status", "Durumu", "select", ["Açık", "Tamamlandı", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "n1", date: "2026-05-12", type: "Fatura", moduleName: "Faturalar", description: "Vadesi yaklaşan tahsilatları kontrol et.", priority: "Yüksek", readStatus: "Okunmadı", status: "Açık" },
      { id: "n2", date: "2026-05-12", type: "İK", moduleName: "Özlük Belgeleri", description: "Eksik özlük belgelerini tamamla.", priority: "Acil", readStatus: "Okunmadı", status: "Açık" },
    ],
  },
  {
    id: "messages",
    title: "Mesajlar",
    icon: "message",
    breadcrumb: ["Panel", "Bordro Merkezi", "Mesajlar"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih", "date"],
      ["type", "Tür", "select", ["Duyuru", "Personel Mesajı", "Müşteri Mesajı", "İç Not"]],
      ["sender", "Gönderen"],
      ["recipient", "Alıcı"],
      ["subject", "Konu"],
      ["message", "Mesaj"],
      ["priority", "Öncelik", "select", ["Düşük", "Normal", "Yüksek", "Acil"]],
      ["status", "Durumu", "select", ["Açık", "Cevaplandı", "Kapandı"]],
    ],
    records: [
      { id: "msg1", date: "2026-05-14", type: "Duyuru", sender: "İK", recipient: "Tüm Personel", subject: "Puantaj kapanışı", message: "Ay sonu puantaj girişleri kontrol edilecek.", priority: "Yüksek", status: "Açık" },
      { id: "msg2", date: "2026-05-14", type: "Müşteri Mesajı", sender: "TOPDAL PLASTİK", recipient: "Operasyon", subject: "Rapor talebi", message: "Mayıs kalite raporu paylaşımı bekleniyor.", priority: "Normal", status: "Açık" },
    ],
  },
  {
    id: "security",
    title: "Güvenlik",
    icon: "lock",
    breadcrumb: ["Panel", "Güvenlik", "Yetki ve Erişim"],
    adminOnly: true,
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["role", "Rol"],
      ["scope", "Erişim Alanı"],
      ["canAdd", "Ekleme"],
      ["canEdit", "Düzenleme"],
      ["canDelete", "Silme"],
      ["sensitiveAccess", "Hassas Veri"],
      ["approvalRule", "Onay Kuralı"],
    ],
    records: [
      { id: "sec1", role: "Admin", scope: "Tüm modüller", canAdd: "Var", canEdit: "Var", canDelete: "Var", sensitiveAccess: "Var", approvalRule: "Kritik işlemde onay sorulur" },
      { id: "sec2", role: "Kullanıcı", scope: "Operasyon izleme", canAdd: "Yok", canEdit: "Yok", canDelete: "Yok", sensitiveAccess: "Yok", approvalRule: "Sadece izleme" },
      { id: "sec3", role: "Müşteri", scope: "Kendi firması", canAdd: "Yok", canEdit: "Yok", canDelete: "Yok", sensitiveAccess: "Yok", approvalRule: "Sadece kendi kayıtları" },
    ],
  },
  {
    id: "settings",
    title: "Kurumsal Ayarlar",
    icon: "settings",
    breadcrumb: ["Panel", "Kurumsal Ayarlar", "Marka ve Sistem"],
    adminOnly: true,
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["setting", "Ayar"],
      ["value", "Değer"],
      ["description", "Açıklama"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "set1", setting: "Panel Markası", value: "Artı Destek", description: "Logo ve üst alan marka görünümü", status: "AKTİF" },
      { id: "set2", setting: "Kritik Hata Eşiği", value: "%5 NOK", description: "Kalite risk kartlarında kırmızı uyarı üretir", status: "AKTİF" },
      { id: "set3", setting: "Bordro Kilidi", value: "Ay kapanınca kilitlenir", description: "Bordro dönemleri onaydan sonra korunur", status: "AKTİF" },
    ],
  },
  {
    id: "experienceTests",
    title: "Kullanıcı Deneyimi",
    icon: "eye",
    breadcrumb: ["Panel", "Gelişim Merkezi", "Kullanıcı Deneyimi"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["persona", "Kullanıcı Tipi", "select", ["Admin", "Personel", "Müşteri"]],
      ["scenario", "Senaryo"],
      ["screen", "Ekran"],
      ["finding", "Gözlem"],
      ["action", "Aksiyon"],
      ["owner", "Sorumlu"],
      ["status", "Durumu", "select", ["Açık", "Tamamlandı", "Beklemede"]],
    ],
    records: [
      { id: "ux1", persona: "Admin", scenario: "Bordro ekleme ve yayınlama", screen: "Bordro Tanımları", finding: "Brüt/net hesap çalışıyor, yayın durumu net.", action: "Gerçek veriyle test edilecek", owner: "Gürkan Tabakoğlu", status: "Açık" },
      { id: "ux2", persona: "Personel", scenario: "Bordro ve mesaj görüntüleme", screen: "Self-servis", finding: "Personel ekranı sade tutuldu.", action: "Personel hesabıyla mobil test", owner: "İK", status: "Beklemede" },
      { id: "ux3", persona: "Müşteri", scenario: "Proje/fatura/rapor izleme", screen: "Müşteri Portalı", finding: "Müşteri sadece izleme modunda kalmalı.", action: "Müşteri hesabı ile yetki testi", owner: "Operasyon", status: "Beklemede" },
    ],
  },
  {
    id: "dataTemplates",
    title: "Veri Şablonları",
    icon: "checklist",
    breadcrumb: ["Panel", "Gelişim Merkezi", "Veri Şablonları"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["moduleName", "Modül"],
      ["templateName", "Şablon"],
      ["requiredFields", "Zorunlu Alanlar"],
      ["sample", "Örnek"],
      ["owner", "Sorumlu"],
      ["status", "Durumu", "select", ["Hazır", "Kontrol Edilecek", "Pasif"]],
    ],
    records: [
      { id: "tpl1", moduleName: "Personeller", templateName: "Personel Kartı", requiredFields: "Ad Soyad, Departman, Görev, E-posta, İşe Giriş, Durum", sample: "Zehra Battal / İK / AKTİF", owner: "İK", status: "Hazır" },
      { id: "tpl2", moduleName: "Bordro", templateName: "Aylık Bordro", requiredFields: "Personel, Dönem, Brüt Maaş, Net Maaş, Ödeme Tarihi, IBAN", sample: "05.2026 / 42.500 TL / 31.800 TL", owner: "Muhasebe", status: "Hazır" },
      { id: "tpl3", moduleName: "Puantaj", templateName: "Günlük Saat", requiredFields: "Personel, Dönem, Günlük Durum, Manuel Saat, Mesai", sample: "Geldi / 7,5 saat / 2 saat mesai", owner: "Operasyon", status: "Hazır" },
      { id: "tpl4", moduleName: "Firmalar", templateName: "Firma ve Sözleşme", requiredFields: "Firma, Yetkili, Şehir, Sözleşme, Fiyat Teklifi", sample: "TOPDAL PLASTİK / Aktif sözleşme", owner: "Satış", status: "Hazır" },
      { id: "tpl5", moduleName: "Faturalar", templateName: "Fatura/Tahsilat", requiredFields: "Fatura No, Firma, Tutar, Tevkifat, Vade, Durum", sample: "Fatura Beklemede / Tahsil Bekliyor", owner: "Muhasebe", status: "Hazır" },
    ],
  },
  {
    id: "backupCenter",
    title: "Yedekleme",
    icon: "archive",
    breadcrumb: ["Panel", "Gelişim Merkezi", "Yedekleme"],
    adminOnly: true,
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih"],
      ["type", "Tür"],
      ["scope", "Kapsam"],
      ["owner", "Sorumlu"],
      ["note", "Not"],
      ["status", "Durumu", "select", ["Hazır", "Planlandı", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "bk1", date: "18.05.2026", type: "Manuel JSON", scope: "Tüm portal kayıtları", owner: "Admin", note: "Gelişim Merkezi üzerinden indirilebilir.", status: "Hazır" },
      { id: "bk2", date: "Haftalık", type: "Kontrol", scope: "Supabase ve dosya yükleri", owner: "Admin", note: "Canlı kullanımda haftalık kontrol önerilir.", status: "Planlandı" },
    ],
  },
  {
    id: "payrollCalendar",
    title: "Bordro Takvimi",
    icon: "calendar",
    breadcrumb: ["Panel", "Bordro Merkezi", "Takvim"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih", "date"],
      ["event", "İşlem"],
      ["period", "Dönem"],
      ["responsible", "Sorumlu"],
      ["reminder", "Hatırlatma", "select", ["Aynı gün", "1 gün önce", "3 gün önce", "1 hafta önce"]],
      ["status", "Durumu", "select", ["Planlandı", "Devam Ediyor", "Tamamlandı"]],
    ],
    records: [
      { id: "pc1", date: "2026-05-05", event: "Maaş Ödeme", period: "05.2026", responsible: "Muhasebe", reminder: "1 gün önce", status: "Planlandı" },
      { id: "pc2", date: "2026-05-10", event: "Puantaj Teslim", period: "05.2026", responsible: "İK", reminder: "3 gün önce", status: "Devam Ediyor" },
      { id: "pc3", date: "2026-05-28", event: "Bordro Kapanış", period: "05.2026", responsible: "Yönetici", reminder: "1 hafta önce", status: "Planlandı" },
      { id: "pc4", date: "2026-05-26", event: "Muhtasar Beyanname Son Gün", period: "05.2026", responsible: "Muhasebe", reminder: "1 hafta önce", status: "Planlandı" },
      { id: "pc5", date: "2026-05-26", event: "SGK Bildirge Son Gün", period: "05.2026", responsible: "İK", reminder: "3 gün önce", status: "Planlandı" },
      { id: "pc6", date: "2026-05-25", event: "Günlük İş Kazası Kontrolü", period: "05.2026", responsible: "İK", reminder: "Aynı gün", status: "Planlandı" },
    ],
  },
  {
    id: "integrations",
    title: "Entegrasyonlar",
    icon: "send",
    breadcrumb: ["Panel", "Bordro Merkezi", "Entegrasyon"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["name", "Entegrasyon"],
      ["type", "Tür"],
      ["provider", "Sağlayıcı"],
      ["lastSync", "Son Aktarım"],
      ["direction", "Aktarım", "select", ["İçe Aktarım", "Dışa Aktarım", "Çift Yönlü"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF", "Beklemede"]],
    ],
    records: [
      { id: "int1", name: "Supabase", type: "Veri ve giriş", provider: "Artı Destek", lastSync: "14.05.2026", direction: "Çift Yönlü", status: "AKTİF" },
      { id: "int2", name: "Excel Bordro Aktarımı", type: "Bordro çıktısı", provider: "İK", lastSync: "10.05.2026", direction: "Dışa Aktarım", status: "AKTİF" },
      { id: "int4", name: "Kamu SM Zaman Damgası", type: "Kamusal entegrasyon", provider: "Kamu SM", lastSync: "14.05.2026", direction: "Dışa Aktarım", status: "AKTİF" },
      { id: "int5", name: "SGK Bildirim Hazırlığı", type: "Kamusal entegrasyon", provider: "SGK", lastSync: "13.05.2026", direction: "Çift Yönlü", status: "AKTİF" },
      { id: "int6", name: "SMS OTP Onayı", type: "Güvenli erişim", provider: "Artı Destek", lastSync: "14.05.2026", direction: "Dışa Aktarım", status: "AKTİF" },
      { id: "int7", name: "Informasoft İK Veri Köprüsü", type: "İK senkronizasyonu", provider: "CottGroup benzeri akış", lastSync: "", direction: "Çift Yönlü", status: "Beklemede" },
    ],
  },
  {
    id: "legislation",
    title: "Mevzuat",
    icon: "shield",
    breadcrumb: ["Panel", "Bordro Merkezi", "Mevzuat"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["title", "Mevzuat Başlığı"],
      ["period", "Dönem"],
      ["value", "Değer"],
      ["source", "Kaynak"],
      ["validUntil", "Geçerlilik"],
      ["status", "Durumu", "select", ["Güncel", "Kontrol Edilecek", "Pasif"]],
    ],
    records: [
      { id: "leg1", title: "SGK Prim Günü", period: "2026", value: "30 gün", source: "SGK", validUntil: "31.12.2026", status: "Güncel" },
      { id: "leg2", title: "Fazla Mesai Katsayısı", period: "2026", value: "1,5", source: "İş Kanunu", validUntil: "31.12.2026", status: "Güncel" },
      { id: "leg3", title: "Asgari Ücret Parametresi", period: "2026", value: "Kontrol edilecek", source: "Resmi Gazete", validUntil: "31.12.2026", status: "Kontrol Edilecek" },
      { id: "leg4", title: "Brüt / Net Hesaplama Referansı", period: "2026", value: "Vergi dilimi ve SGK oranları kontrol edilir", source: "VergiNET", validUntil: "31.12.2026", status: "Kontrol Edilecek" },
      { id: "leg5", title: "KVKK Personel Verisi", period: "2026", value: "Özlük ve bordro erişim yetkileri", source: "KVKK", validUntil: "31.12.2026", status: "Güncel" },
      { id: "leg6", title: "İşkur İşe Alım / İşten Ayrılış", period: "2026", value: "Bildirim ve takip linki", source: "İŞKUR", validUntil: "31.12.2026", status: "Güncel" },
    ],
  },
  {
    id: "privacyCenter",
    title: "KVKK ve Veri Saklama",
    icon: "shield",
    breadcrumb: ["Panel", "Bordro Merkezi", "KVKK"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["process", "Süreç"],
      ["dataType", "Veri Türü"],
      ["retention", "Saklama Süresi"],
      ["owner", "Sorumlu"],
      ["consent", "Açık Rıza / Dayanak", "select", ["Açık Rıza", "Sözleşme", "Yasal Yükümlülük", "Meşru Menfaat"]],
      ["risk", "Risk", "select", ["Düşük", "Normal", "Yüksek", "Acil"]],
      ["status", "Durumu", "select", ["Güncel", "Kontrol Edilecek", "Pasif"]],
    ],
    records: [
      { id: "kvkk1", process: "Bordro ve ücret", dataType: "Maaş, IBAN, kesinti", retention: "10 yıl", owner: "Muhasebe", consent: "Yasal Yükümlülük", risk: "Yüksek", status: "Güncel" },
      { id: "kvkk2", process: "Özlük dosyası", dataType: "Kimlik, SGK, sözleşme", retention: "İş ilişkisi + yasal süre", owner: "İK", consent: "Sözleşme", risk: "Yüksek", status: "Güncel" },
      { id: "kvkk3", process: "Müşteri portalı", dataType: "Firma, proje, iletişim", retention: "Sözleşme süresi", owner: "Operasyon", consent: "Meşru Menfaat", risk: "Normal", status: "Kontrol Edilecek" },
    ],
  },
  {
    id: "automationRules",
    title: "Otomasyon Kuralları",
    icon: "settings",
    breadcrumb: ["Panel", "Bordro Merkezi", "Otomasyon"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["rule", "Kural"],
      ["trigger", "Tetikleyici"],
      ["target", "Hedef"],
      ["owner", "Sorumlu"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF", "Beklemede"]],
    ],
    records: [
      { id: "auto1", rule: "Puantaj teslim hatırlatması", trigger: "Ayın 10'u", target: "İK ve Operasyon", owner: "Zehra Battal", status: "AKTİF" },
      { id: "auto2", rule: "Admin otomatik onayı", trigger: "Bordro kaydedilince", target: "Bordro İşlemleri", owner: "Murat Oğuz", status: "AKTİF" },
      { id: "auto3", rule: "Personele açılan bordro görüntülenme takibi", trigger: "Yayın sonrası", target: "Kırmızı Bülten", owner: "İK", status: "AKTİF" },
    ],
  },
  {
    id: "employeeRegistry",
    title: "Sicil Yönetimi",
    icon: "contact",
    breadcrumb: ["Panel", "Bordro Merkezi", "Sicil Yönetimi"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["registryNo", "Sicil No"],
      ["person", "Personel"],
      ["identityNo", "T.C. Kimlik"],
      ["department", "Departman"],
      ["manager", "Yönetici"],
      ["employmentType", "Çalışma Tipi", "select", ["Tam Zamanlı", "Yarı Zamanlı", "Geçici Görev", "Dış Kaynak"]],
      ["seniorityDate", "Kıdem Tarihi", "date"],
      ["incentiveStatus", "Teşvik Kontrolü", "select", ["Kontrol Edilecek", "Uygun Görünüyor", "Uygun Değil", "SGK/İŞKUR Kontrol Edildi"]],
      ["incentiveNote", "Teşvik Notu"],
      ["status", "Durumu", "select", ["AKTİF", "PASİF", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "reg1", registryNo: "AD-SC-0001", person: "Zehra Battal", identityNo: "11111111110", department: "İnsan Kaynakları", manager: "Murat Oğuz", employmentType: "Tam Zamanlı", seniorityDate: "2024-01-15", incentiveStatus: "Kontrol Edilecek", incentiveNote: "SGK/İŞKUR ekranından doğrulanacak.", status: "AKTİF" },
      { id: "reg2", registryNo: "AD-SC-0002", person: "Faruk Türker", identityNo: "11111111112", department: "Operasyon", manager: "Gürkan Tabakoğlu", employmentType: "Tam Zamanlı", seniorityDate: "2023-09-01", incentiveStatus: "Kontrol Edilecek", incentiveNote: "TC ile resmi teşvik kontrolü yapılacak.", status: "AKTİF" },
    ],
  },
  {
    id: "performanceReviews",
    title: "Performans",
    icon: "barChart",
    breadcrumb: ["Panel", "Bordro Merkezi", "Performans"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["person", "Personel"],
      ["period", "Dönem"],
      ["target", "Hedef"],
      ["score", "Puan"],
      ["reviewer", "Değerlendiren"],
      ["result", "Sonuç", "select", ["Başarılı", "Gelişim Planı", "Takip Edilecek"]],
      ["status", "Durumu", "select", ["Tamamlandı", "Bekliyor", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "prf1", person: "Zehra Battal", period: "05.2026", target: "Bordro kapanış hatasızlığı", score: "92", reviewer: "Murat Oğuz", result: "Başarılı", status: "Tamamlandı" },
      { id: "prf2", person: "Faruk Türker", period: "05.2026", target: "Operasyon takibi", score: "88", reviewer: "Gürkan Tabakoğlu", result: "Başarılı", status: "Tamamlandı" },
    ],
  },
  {
    id: "recruitment",
    title: "İşe Alım",
    icon: "contact",
    breadcrumb: ["Panel", "Bordro Merkezi", "İşe Alım"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["position", "Pozisyon"],
      ["department", "Departman"],
      ["candidate", "Aday"],
      ["stage", "Aşama", "select", ["Başvuru", "Görüşme", "Teklif", "İşe Alındı", "Olumsuz"]],
      ["interviewDate", "Görüşme Tarihi", "date"],
      ["responsible", "Sorumlu"],
      ["status", "Durumu", "select", ["Açık", "Tamamlandı", "Beklemede"]],
    ],
    records: [
      { id: "rec1", position: "Bordro Uzmanı", department: "İK", candidate: "Aday 1", stage: "Görüşme", interviewDate: "2026-05-20", responsible: "Zehra Battal", status: "Açık" },
    ],
  },
  {
    id: "bankBes",
    title: "Banka / BES",
    icon: "wallet",
    breadcrumb: ["Panel", "Bordro Merkezi", "Banka / BES"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["person", "Personel"],
      ["bankName", "Banka"],
      ["iban", "IBAN"],
      ["besStatus", "BES Durumu", "select", ["Var", "Yok", "Kontrol Edilecek"]],
      ["besRate", "BES Oranı"],
      ["paymentStatus", "Ödeme Durumu", "select", ["Ödendi", "Tahsil Bekliyor", "Kontrol Edilecek"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "bb1", person: "Zehra Battal", bankName: "Garanti BBVA", iban: "TR00 0000 0000 0000 0000 0000 01", besStatus: "Var", besRate: "%3", paymentStatus: "Ödendi", status: "AKTİF" },
      { id: "bb2", person: "Faruk Türker", bankName: "İş Bankası", iban: "TR00 0000 0000 0000 0000 0000 02", besStatus: "Yok", besRate: "-", paymentStatus: "Ödendi", status: "AKTİF" },
    ],
  },
  {
    id: "matbuForms",
    title: "Matbu Formlar",
    icon: "invoice",
    breadcrumb: ["Panel", "Bordro Merkezi", "Matbu Formlar"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["formName", "Form Adı"],
      ["category", "Kategori", "select", ["İşe Gelmeme Bildirimi", "Uyarı / İhtar", "Savunma Talebi", "Deneme Süresi", "İşten Ayrılış", "Diğer"]],
      ["person", "Personel"],
      ["formDate", "Tarih", "date"],
      ["templateText", "Form Metni"],
      ["file", "Ek Dosya", "files"],
      ["status", "Durumu", "select", ["Hazır", "İmzalandı", "Arşivlendi", "Taslak"]],
    ],
    records: [
      { id: "mf1", formName: "İşe Gelmeme Bildirimi", category: "İşe Gelmeme Bildirimi", person: "", formDate: "2026-05-25", templateText: "Personelin izinsiz/devamsız olduğu güne ilişkin tutanak formu.", file: "", status: "Hazır" },
      { id: "mf2", formName: "Savunma Talebi", category: "Savunma Talebi", person: "", formDate: "2026-05-25", templateText: "Personelden olay hakkında yazılı savunma talep edilmesi formu.", file: "", status: "Hazır" },
      { id: "mf3", formName: "Uyarı / İhtar Formu", category: "Uyarı / İhtar", person: "", formDate: "2026-05-25", templateText: "Performans, devamsızlık veya disiplin konusu için uyarı/ihtar formu.", file: "", status: "Hazır" },
    ],
  },
  {
    id: "accidentChecks",
    title: "Günlük Kontroller",
    icon: "shield",
    breadcrumb: ["Panel", "Bordro Merkezi", "Günlük Kontroller"],
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih", "date"],
      ["workplace", "İşyeri / Firma"],
      ["checkedBy", "Kontrol Eden"],
      ["accidentStatus", "İş Kazası Bildirimi", "select", ["Kontrol Edildi", "Bildirim Gerekli", "Bekliyor"]],
      ["sgkStatus", "SGK Bildirge", "select", ["Takvimde", "Verildi", "Bekliyor", "Gecikti"]],
      ["note", "Not"],
      ["status", "Durumu", "select", ["Tamamlandı", "Açık", "Kontrol Edilecek"]],
    ],
    records: [
      { id: "ac1", date: "2026-05-25", workplace: "Artı Destek", checkedBy: "İK", accidentStatus: "Bekliyor", sgkStatus: "Takvimde", note: "Günlük iş kazası bildirimi kontrolü yapılacak.", status: "Açık" },
    ],
  },
  {
    id: "reports",
    title: "Raporlar",
    icon: "chart",
    breadcrumb: ["Panel", "Raporlar", "Rapor Listesi"],
    columns: [
      ["title", "Rapor Adı"],
      ["period", "Dönem"],
      ["type", "Tür"],
      ["owner", "Hazırlayan"],
      ["file", "Rapor Dosyası", "file"],
      ["status", "Durumu"],
    ],
    records: [
      { id: "r1", title: "Mayıs Proje Performansı", period: "05.2026", type: "Proje", owner: "Faruk Türker", file: "", status: "Taslak" },
      { id: "r2", title: "Personel Evrak Kontrolü", period: "05.2026", type: "İK", owner: "Zehra Battal", file: "", status: "Hazır" },
      { id: "r3", title: "SGK Raporları", period: "05.2026", type: "Yasal", owner: "İK", file: "", status: "Hazır" },
      { id: "r4", title: "BES Ödeme Raporları", period: "05.2026", type: "Finans", owner: "Muhasebe", file: "", status: "Hazır" },
      { id: "r5", title: "Banka Ödeme Raporları", period: "05.2026", type: "Finans", owner: "Muhasebe", file: "", status: "Taslak" },
      { id: "r6", title: "Personel Devir ve Performans", period: "05.2026", type: "İK Metrikleri", owner: "Yönetici", file: "", status: "Hazır" },
      { id: "r7", title: "Muhasebe Bordro Fişi", period: "05.2026", type: "Muhasebe", owner: "Muhasebe", file: "", status: "Taslak" },
    ],
  },
  {
    id: "archive",
    title: "Arşiv",
    icon: "archive",
    breadcrumb: ["Panel", "Arşiv", "Silinen Kayıtlar"],
    noActions: true,
    adminOnly: true,
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih"],
      ["moduleTitle", "Modül"],
      ["recordTitle", "Kayıt"],
      ["user", "İşlem Yapan"],
      ["reason", "Açıklama"],
    ],
    records: [],
  },
  {
    id: "audit",
    title: "İşlem Kayıtları",
    icon: "shield",
    breadcrumb: ["Panel", "İşlem Kayıtları", "Denetim"],
    noActions: true,
    adminOnly: true,
    navHidden: true,
    dashboardHidden: true,
    columns: [
      ["date", "Tarih"],
      ["user", "Kullanıcı"],
      ["action", "İşlem"],
      ["moduleTitle", "Modül"],
      ["recordTitle", "Kayıt"],
      ["detail", "Detay"],
    ],
    records: [],
  },
  {
    id: "payroll",
    title: "Bordro",
    icon: "invoice",
    breadcrumb: ["Panel", "Bordro", "Bordro Listesi"],
    columns: [
      ["person", "Personel"],
      ["period", "Dönem"],
      ["grossSalary", "Brüt Maaş"],
      ["netSalary", "Net Maaş"],
      ["cumulativeTaxBase", "Birikmiş Vergi Matrahı"],
      ["incomeTaxAmount", "Gelir Vergisi"],
      ["bonus", "Ek Ödeme"],
      ["advance", "Avans"],
      ["overtime", "Fazla Mesai"],
      ["deduction", "Kesinti"],
      ["netPayable", "Ödenecek Net"],
      ["paymentDate", "Ödeme Tarihi"],
      ["bankIban", "Banka / IBAN"],
      ["payrollStatus", "Bordro Durumu", "select", ["Hazırlandı", "Onay Bekliyor", "Onaylandı", "Personele Açıldı"]],
      ["hrApproval", "İK Onayı", "select", ["Onaylandı", "Bekliyor"]],
      ["accountingApproval", "Muhasebe Onayı", "select", ["Bekliyor", "Onaylandı"]],
      ["managementApproval", "Yönetici Onayı", "select", ["Bekliyor", "Onaylandı"]],
      ["publishStatus", "Portal Durumu", "select", ["Kapalı", "Personele Açıldı"]],
      ["viewStatus", "Görüntülenme", "select", ["Görülmedi", "Görüldü"]],
      ["file", "Bordro Dosyası / Resim", "file"],
      ["note", "Not"],
    ],
    records: [
      { id: "bd1", person: "Zehra Battal", period: "05.2026", grossSalary: "42.500 TL", netSalary: "31.800 TL", cumulativeTaxBase: "128.000 TL", incomeTaxAmount: "4.980 TL", bonus: "2.000 TL", advance: "0 TL", overtime: "850 TL", deduction: "0 TL", netPayable: "31.800 TL", paymentDate: "05.05.2026", bankIban: "TR00 0000 0000 0000 0000 0000 01", payrollStatus: "Onay Bekliyor", hrApproval: "Onaylandı", accountingApproval: "Bekliyor", managementApproval: "Bekliyor", publishStatus: "Kapalı", viewStatus: "Görülmedi", file: "", note: "Mayıs bordrosu kontrol bekliyor" },
      { id: "bd2", person: "Faruk Türker", period: "05.2026", grossSalary: "58.000 TL", netSalary: "43.250 TL", cumulativeTaxBase: "185.000 TL", incomeTaxAmount: "7.210 TL", bonus: "3.500 TL", advance: "1.000 TL", overtime: "1.200 TL", deduction: "500 TL", netPayable: "41.750 TL", paymentDate: "05.05.2026", bankIban: "TR00 0000 0000 0000 0000 0000 02", payrollStatus: "Personele Açıldı", hrApproval: "Onaylandı", accountingApproval: "Onaylandı", managementApproval: "Onaylandı", publishStatus: "Personele Açıldı", viewStatus: "Görüldü", file: "", note: "Personele yayınlandı" },
    ],
  },
];

const storageKey = "global-kalite-clone-v6";
const sessionKey = "arti-destek-session-v1";
const supabaseSettings = window.ARTI_DESTEK_SUPABASE ?? {};
const hasRemoteConfig = Boolean(supabaseSettings.url && supabaseSettings.publishableKey);
const supabaseClient =
  window.supabase && hasRemoteConfig
    ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.publishableKey)
    : null;
const isRemoteMode = Boolean(supabaseClient);
const remoteClientMissing = hasRemoteConfig && !supabaseClient;
let activeModuleId = "payrollCenter";
let selectedRecordId = "";
let filterValue = "";
let selectedMonth = "05.2026";
let selectedDay = 4;
let dashboardMonth = "05.2026";
let dashboardRange = "month";
let selectedPersonnel360Id = "";
let payrollCenterTab = "home";
const prozonActiveSubTabs = {};
let selectedMessageThreadId = "";
let selectedReportPerson = "";
let selectedRatingCompany = "all";
let pendingCalendarDate = "";
let currentLanguage = localStorage.getItem("arti-destek-language") || "tr";
let currentUser = null;
let remoteReady = false;
let remoteSaveQueue = Promise.resolve();
let realtimeChannel = null;
let realtimeReloadTimer = null;
let lastLocalRemoteSaveAt = 0;
const quickFilters = {};

const moduleQuickFilters = {
  users: { key: "type", options: ["Tümü", "Admin", "Müşteri", "Kullanıcı"] },
  invoices: { key: "status", options: ["Tümü", "Fatura Kesildi", "Fatura Beklemede", "Onay Verilmedi"] },
  projects: { key: "status", options: ["Tümü", "Aktif", "Pasif", "Beklemede"] },
  personnel: { key: "status", options: ["Tümü", "AKTİF", "PASİF"] },
  personnel360: { key: "status", options: ["Tümü", "AKTİF", "PASİF"] },
  payroll: { key: "payrollStatus", options: ["Tümü", "Hazırlandı", "Onay Bekliyor", "Onaylandı", "Personele Açıldı"] },
  tasks: { key: "status", options: ["Tümü", "Bekliyor", "Devam Ediyor", "Tamamlandı"] },
  leaves: { key: "approval", options: ["Tümü", "Bekliyor", "Onaylandı", "Reddedildi"] },
  documentsChecklist: { key: "status", options: ["Tümü", "Tam", "Eksik", "Kontrol Edilecek"] },
  notifications: { key: "status", options: ["Tümü", "Açık", "Tamamlandı", "Kontrol Edilecek"] },
  messages: { key: "status", options: ["Tümü", "Açık", "Cevaplandı", "Kapandı"] },
};

const payrollCenterTabs = [
  ["home", "Anasayfa", "panel"],
  ["setup", "Kurulum & Kontrol", "checklist"],
  ["assistant", "Asistan & Mesajlar", "bot"],
  ["system", "Sistem Yönetimi", "settings"],
  ["calendar", "Takvim Yönetimi", "calendar"],
  ["forms", "Matbu Formlar", "invoice"],
  ["company", "Şirket Yönetimi", "building"],
  ["operationsHub", "İK & Bordro İşlemleri", "grid"],
  ["selfService", "Self-servis", "contact"],
  ["reports", "Raporlar", "chart"],
  ["legislation", "Mevzuat", "shield"],
  ["redBulletin", "KVKK & Kırmızı Bülten", "bell"],
];

const payrollTabColors = {
  home: "#7c3aed",
  setup: "#a855f7",
  assistant: "#ec4899",
  growth: "#8b5cf6",
  system: "#6d28d9",
  calendar: "#a855f7",
  forms: "#be185d",
  company: "#c026d3",
  operationsHub: "#db2777",
  selfService: "#ec4899",
  reports: "#9333ea",
  legislation: "#a21caf",
  redBulletin: "#e11d48",
};

const moduleAccentColors = {
  panel: "#7c3aed",
  payrollCenter: "#8b5cf6",
  companies: "#c026d3",
  projects: "#ec4899",
  users: "#7c3aed",
  personnel: "#db2777",
  personnel360: "#a855f7",
  presentations: "#8b5cf6",
  attendance: "#c026d3",
  leaves: "#db2777",
  trainings: "#9333ea",
  assets: "#be185d",
  tasks: "#ef4444",
  invoices: "#ec4899",
  approvals: "#8b5cf6",
  quality: "#9333ea",
  documentsChecklist: "#a855f7",
  notifications: "#e11d48",
  messages: "#d946ef",
  experienceTests: "#8b5cf6",
  dataTemplates: "#ec4899",
  backupCenter: "#7c3aed",
  security: "#6d28d9",
  settings: "#4c1d95",
  reports: "#9333ea",
  archive: "#be185d",
  audit: "#7c3aed",
  payroll: "#be185d",
  employeeRegistry: "#8b5cf6",
  performanceReviews: "#7c3aed",
  recruitment: "#d946ef",
  bankBes: "#c026d3",
  matbuForms: "#be185d",
  accidentChecks: "#9333ea",
  integrations: "#8b5cf6",
  legislation: "#a21caf",
  privacyCenter: "#9333ea",
  automationRules: "#ec4899",
  payrollCalendar: "#a855f7",
};

const translations = {
  "Panel": "Dashboard",
  "Bordro Merkezi": "Payroll Center",
  "Ana Sayfa": "Home",
  "Bordro Takvimi": "Payroll Calendar",
  "Entegrasyonlar": "Integrations",
  "Mevzuat": "Legislation",
  "KVKK": "Privacy",
  "KVKK ve Veri Saklama": "Privacy and Data Retention",
  "Veri Saklama Merkezi": "Data Retention Center",
  "Otomasyon Kuralları": "Automation Rules",
  "Firmalar": "Companies",
  "Firma Listesi": "Company List",
  "Projeler": "Projects",
  "Proje Listesi": "Project List",
  "Kullanıcılar": "Users",
  "Kullanıcı Listesi": "User List",
  "Personeller": "Personnel",
  "Personel Listesi": "Personnel List",
  "Personel 360": "Personnel 360",
  "Personel Kartı": "Personnel Card",
  "Özlük Belgeleri": "Personnel Documents",
  "Belge Listesi": "Document List",
  "Puantaj": "Timesheet",
  "Aylık Puantaj": "Monthly Timesheet",
  "İzinler": "Leaves",
  "İzin Listesi": "Leave List",
  "Eğitimler": "Trainings",
  "Eğitim Listesi": "Training List",
  "Zimmetler": "Assets",
  "Zimmet Listesi": "Asset List",
  "Görevler": "Tasks",
  "Görev Listesi": "Task List",
  "Faturalar": "Invoices",
  "Fatura Listesi": "Invoice List",
  "Onay Merkezi": "Approval Center",
  "Bekleyen İşler": "Pending Work",
  "Raporlar": "Reports",
  "Rapor Listesi": "Report List",
  "Arşiv": "Archive",
  "Silinen Kayıtlar": "Deleted Records",
  "İşlem Kayıtları": "Activity Logs",
  "Denetim": "Audit",
  "Bordro": "Payroll",
  "Bordro Listesi": "Payroll List",
  "Kalite Yönetimi": "Quality Management",
  "Kalite Riskleri": "Quality Risks",
  "Evrak Kontrol": "Document Check",
  "Özlük Checklist": "Personnel Checklist",
  "Bildirim Merkezi": "Notification Center",
  "Mesajlar": "Messages",
  "Akıllı Asistan": "Smart Assistant",
  "Gelişim Merkezi": "Improvement Center",
  "Kullanıcı Deneyimi": "User Experience",
  "Veri Şablonları": "Data Templates",
  "Yedekleme": "Backup",
  "Kullanıcı Tipi": "User Type",
  "Senaryo": "Scenario",
  "Ekran": "Screen",
  "Gözlem": "Observation",
  "Aksiyon": "Action",
  "Şablon": "Template",
  "Zorunlu Alanlar": "Required Fields",
  "Örnek": "Example",
  "Kapsam": "Scope",
  "Yedek Al": "Download Backup",
  "Yedek ve Güvenlik": "Backup and Security",
  "Ürün Kontrol Listesi": "Product Checklist",
  "Gerçek kullanıcı testi": "Real user test",
  "Veri giriş şablonları": "Data entry templates",
  "Akıllı hatırlatmalar": "Smart reminders",
  "Yapay zeka destekli cevaplar": "AI-assisted answers",
  "Müşteri/personel portalı": "Customer/employee portal",
  "Kurumsal raporlama": "Corporate reporting",
  "Güvenlik ve yedekleme": "Security and backup",
  "Canlı kullanıma hazırlık durumunu tek ekranda takip et.": "Track live readiness in one screen.",
  "Portalın büyümesi için takip edeceğimiz 7 ana başlık burada.": "The 7 main growth items for the portal are here.",
  "Yedek dosyası indirildi.": "Backup file downloaded.",
  "Hazırlık": "Readiness",
  "Finale Hazırlık": "Final Readiness",
  "test": "test",
  "şablon": "template",
  "Kullanıcı testi, veri düzeni, bildirim, asistan, portal, rapor ve yedek süreçleri tek yerde.": "User testing, data structure, notifications, assistant, portal, reporting and backup processes in one place.",
  "Kullanıcı Deneyimi Testleri": "User Experience Tests",
  "Veri Giriş Şablonları": "Data Entry Templates",
  "Akıllı Hatırlatma Kuralları": "Smart Reminder Rules",
  "Yedekleme Takibi": "Backup Tracking",
  "Güvenlik ve Rol Kontrolü": "Security and Role Check",
  "Manuel yedek al ve canlı kullanım güvenliğini kontrol et.": "Download a manual backup and check live usage security.",
  "Kurulum Sihirbazı": "Setup Wizard",
  "Portal canlı kullanıma bu adımlarla hazırlanır.": "The portal becomes ready for live use through these steps.",
  "İlk kurulumda soldaki menüde kaybolmadan bu kartları takip etmek yeterli.": "For the first setup, follow these cards without getting lost in the side menu.",
  "Firma bilgileri": "Company information",
  "Personel kartları": "Employee cards",
  "Kullanıcı ve yetki": "User and permission",
  "Puantaj ve takvim": "Timesheet and calendar",
  "Bordro tanımları": "Payroll definitions",
  "Rapor ve yedek": "Report and backup",
  "Başlandı": "Started",
  "Bekliyor": "Waiting",
  "Bordro Merkezi Menü": "Payroll Center Menu",
  "Aradığın işlemi tek tıkla aç.": "Open what you need with one click.",
  "Kurulum": "Setup",
  "Asistan": "Assistant",
  "Takvim": "Calendar",
  "İK & İşlemler": "HR & Operations",
  "Bülten": "Bulletin",
  "İK & Bordro İşlemleri": "HR & Payroll Operations",
  "Kişiye Özel Bordro Raporu": "Personal Payroll Report",
  "Maaş, avans, kesinti ve mesai grafiği": "Salary, advance, deduction and overtime chart",
  "Net Maaş": "Net Salary",
  "Brüt Maaş": "Gross Salary",
  "Avans": "Advance",
  "İcra/Kesinti": "Lien/Deduction",
  "Mesai": "Overtime",
  "Kırmızı Bülten ve Duyurular": "Red Bulletin and Announcements",
  "Maaş, avans, tahsilat, görev ve şirket duyuruları tek ekranda takip edilir.": "Salary, advance, collection, task and company announcements are tracked in one screen.",
  "aktif uyarı": "active alert",
  "duyuru": "announcement",
  "Önemli İş Takibi": "Important Work Tracking",
  "Duyurular ve Kırmızı Bülten Girişi": "Announcements and Red Bulletin Entry",
  "Online": "Online",
  "Offline": "Offline",
  "Maaş ödeme alarmı": "Salary payment alert",
  "Geciken tahsilat": "Overdue collection",
  "Acil görev": "Urgent task",
  "Takvim uyarısı": "Calendar alert",
  "Okunmamış bordro": "Unread payroll",
  "Kurulum & Kontrol": "Setup & Control",
  "Sabah Yönetici Özeti": "Morning Executive Brief",
  "Bugün önce bunlara bak.": "Start with these today.",
  "Bugün kritik işlem yok. Sistem sakin görünüyor.": "No critical work today. The system looks calm.",
  "Sürpriz: Akıllı Tahmin": "Surprise: Smart Forecast",
  "Bir sonraki dönem için erken sinyal": "Early signal for the next period",
  "Tahmini net bordro yükü": "Estimated net payroll load",
  "Mesai Baskısı": "Overtime Pressure",
  "Artıyor": "Increasing",
  "Avans Riski": "Advance Risk",
  "Takip edilmeli": "Needs tracking",
  "Düşük": "Low",
  "Evrak Kontrol": "Document Check",
  "Açık kayıt var": "Open record exists",
  "Akıllı Risk Radarı": "Smart Risk Radar",
  "Personel, bordro, avans ve evrak riski tek skorda.": "Personnel, payroll, advance and document risk in one score.",
  "Raporla": "Report",
  "Sürpriz: Yönetim Nabzı": "Surprise: Management Pulse",
  "Bu panelin farkı": "What makes this panel different",
  "Önce uyarır": "Warns first",
  "Sadece tablo değil, riskleri sıraya koyar.": "It does not just show tables; it ranks risks.",
  "Kişi bazlı düşünür": "Thinks person-by-person",
  "Maaş, avans, evrak, mesai ve görevleri tek kişide birleştirir.": "Combines salary, advance, documents, overtime and tasks per person.",
  "Karar verir gibi gösterir": "Shows it like a decision desk",
  "Bugün neye bakacağını otomatik öne çıkarır.": "Automatically highlights what to check today.",
  "Belge yükü bekliyor": "Document upload pending",
  "Düşük saat": "Low hours",
  "Kontrol altında": "Under control",
  "Canlı veri modu": "Live data mode",
  "Supabase bağlı": "Supabase connected",
  "Yerel demo": "Local demo",
  "Son yedek": "Latest backup",
  "Aktif ayarlar": "Active settings",
  "Güvenlik rolleri": "Security roles",
  "Canlı kullanıma hazır mıyız?": "Are we ready for live use?",
  "Güvenlik ve yedek durumu ne?": "What is the security and backup status?",
  "Raporlarda ne eksik?": "What is missing in reports?",
  "Duyuru": "Announcement",
  "Personel Mesajı": "Personnel Message",
  "Müşteri Mesajı": "Customer Message",
  "İç Not": "Internal Note",
  "Gönderen": "Sender",
  "Alıcı": "Recipient",
  "Konu": "Subject",
  "Mesaj": "Message",
  "İç İletişim": "Internal Communication",
  "Konuşmalar": "Conversations",
  "Yeni Mesaj": "New Message",
  "Mesaj yaz": "Write a message",
  "Mesaj Gönder": "Send Message",
  "Konuşmayı Kapat": "Close Conversation",
  "Mesaj Özeti": "Message Summary",
  "E-posta bildirimi hazırla": "Prepare email notification",
  "E-posta Kuyruğu": "Email Queue",
  "E-posta Bildirimi": "Email Notification",
  "Canlı senkron açık": "Live sync active",
  "Yerel mod": "Local mode",
  "Okunma": "Read Status",
  "Okunmadı": "Unread",
  "Okundu": "Read",
  "Okundu İşaretle": "Mark as Read",
  "Bildirim Akışı": "Notification Flow",
  "Acil ve okunmamış bildirimleri tek ekranda yönet.": "Manage urgent and unread notifications in one screen.",
  "Tüm ekip": "All team",
  "İK Ekibi": "HR Team",
  "Operasyon": "Operations",
  "Muhasebe": "Accounting",
  "Aktif konuşma yok.": "No active conversation.",
  "Mesaj metni boş olamaz.": "Message text cannot be empty.",
  "Alıcı seç": "Select recipient",
  "Konu yaz": "Write subject",
  "Son mesaj": "Last message",
  "Kişiler": "People",
  "Teams tarzı hızlı iletişim": "Teams-style quick communication",
  "Duyuru, personel ve müşteri mesajlarını tek konuşma ekranında yönet.": "Manage announcements, personnel and customer messages in one conversation screen.",
  "Uyarılar": "Alerts",
  "Güvenlik": "Security",
  "Yetki ve Erişim": "Authorization and Access",
  "Kurumsal Ayarlar": "Corporate Settings",
  "Marka ve Sistem": "Brand and System",
  "Firma Adı": "Company Name",
  "Yetkili": "Authorized Person",
  "Email": "Email",
  "Telefon": "Phone",
  "Fax": "Fax",
  "Şehir": "City",
  "Sektör": "Sector",
  "Vergi No": "Tax No",
  "Adres": "Address",
  "Sözleşme": "Contract",
  "İmzalı Sözleşme": "Signed Contract",
  "Fiyat Teklifi": "Price Offer",
  "Not": "Note",
  "Proje Kodu": "Project Code",
  "Parça Kodu": "Part Code",
  "Problem": "Problem",
  "Sorumlu": "Responsible",
  "Lokasyon": "Location",
  "Başlangıç": "Start",
  "Bitiş": "End",
  "Proje Tarihi": "Project Date",
  "Durumu": "Status",
  "Fatura Durumu": "Invoice Status",
  "Proje Dosyaları": "Project Files",
  "Adı": "Name",
  "Soyadı": "Surname",
  "Kullanıcı Adı": "Username",
  "Bağlı Firma": "Linked Company",
  "Türü": "Type",
  "Adı Soyadı": "Full Name",
  "Departman": "Department",
  "Görevi": "Role",
  "E-posta": "Email",
  "İşe Giriş": "Start Date",
  "Çıkış Tarihi": "Exit Date",
  "Acil Durum": "Emergency",
  "Özlük Durumu": "Document Status",
  "Personel": "Personnel",
  "Belge Türü": "Document Type",
  "Dosya / Resim": "File / Image",
  "Tarih": "Date",
  "Ekleyen": "Added By",
  "Günlük Saat": "Daily Hours",
  "Mesai Saati": "Overtime Hours",
  "Toplam Saat": "Total Hours",
  "İzin Türü": "Leave Type",
  "Gün": "Day",
  "Onay Durumu": "Approval Status",
  "Eğitim": "Training",
  "Geçerlilik": "Validity",
  "Sertifika": "Certificate",
  "Zimmet": "Asset",
  "Seri No": "Serial No",
  "Teslim Tarihi": "Delivery Date",
  "İade Tarihi": "Return Date",
  "Tutanak": "Record File",
  "Görev": "Task",
  "Proje": "Project",
  "Atanan": "Assignee",
  "Öncelik": "Priority",
  "Son Tarih": "Due Date",
  "Fatura No": "Invoice No",
  "Firma": "Company",
  "Tutar": "Amount",
  "KDV": "VAT",
  "Tevkifat": "Withholding",
  "Ödeme Durumu": "Payment Status",
  "Tahsil Tarihi": "Collection Date",
  "Vade": "Due Date",
  "Fatura Dosyası": "Invoice File",
  "Rapor Adı": "Report Name",
  "Tür": "Type",
  "Hazırlayan": "Owner",
  "Rapor Dosyası": "Report File",
  "Brüt Maaş": "Gross Salary",
  "Net Maaş": "Net Salary",
  "Ek Ödeme": "Bonus",
  "Avans": "Advance",
  "Fazla Mesai": "Overtime",
  "Kesinti": "Deduction",
  "Ödeme Tarihi": "Payment Date",
  "Banka / IBAN": "Bank / IBAN",
  "Bordro Durumu": "Payroll Status",
  "İK Onayı": "HR Approval",
  "Muhasebe Onayı": "Accounting Approval",
  "Yönetici Onayı": "Manager Approval",
  "Portal Durumu": "Portal Status",
  "Görüntülenme": "View Status",
  "Bordro Dosyası / Resim": "Payroll File / Image",
  "Toplam Adet": "Total Quantity",
  "Hata Oranı %": "Defect Rate %",
  "Risk": "Risk",
  "Kimlik": "ID",
  "SGK": "Social Security",
  "KVKK": "KVKK",
  "Sağlık Raporu": "Health Report",
  "IBAN": "IBAN",
  "Adli Sicil": "Criminal Record",
  "Modül": "Module",
  "Açıklama": "Description",
  "Rol": "Role",
  "Erişim Alanı": "Access Scope",
  "Ekleme": "Add",
  "Düzenleme": "Edit",
  "Silme": "Delete",
  "Hassas Veri": "Sensitive Data",
  "Onay Kuralı": "Approval Rule",
  "Ayar": "Setting",
  "Değer": "Value",
  "Online İşlemler": "Online Operations",
  "Yönetici Özeti": "Executive Summary",
  "Müşteri Özeti": "Customer Summary",
  "Personel Özeti": "Personnel Summary",
  "Artı Destek operasyon görünümü": "Artı Destek operations view",
  "Dönem": "Period",
  "Ay": "Month",
  "Aralık": "Range",
  "Seçili Ay": "Selected Month",
  "Son 3 Ay": "Last 3 Months",
  "Son 5 Ay": "Last 5 Months",
  "12 Ay": "12 Months",
  "Aktif Proje": "Active Projects",
  "Pasif Proje": "Passive Projects",
  "Bekleyen Proje": "Waiting Projects",
  "Kalite Hata Oranı": "Quality Defect Rate",
  "Geciken Tahsilat": "Overdue Collections",
  "Eksik Checklist": "Missing Checklist",
  "Açık Bildirim": "Open Notifications",
  "Açık Mesaj": "Open Messages",
  "Fatura Kesilen": "Issued Invoices",
  "Kesilmeyen Fatura": "Unissued Invoices",
  "Çalışma": "Work Hours",
  "Mesai": "Overtime",
  "Eksik Özlük": "Missing Documents",
  "Açık Görev": "Open Tasks",
  "Bekleyen Onay": "Pending Approval",
  "Öncelikli Uyarılar": "Priority Alerts",
  "Son İşlemler": "Recent Activity",
  "Kritik uyarı görünmüyor.": "No critical alert is visible.",
  "Henüz işlem kaydı yok.": "No activity has been recorded yet.",
  "Yönet": "Manage",
  "EKLE": "ADD",
  "EXCEL": "EXCEL",
  "PDF": "PDF",
  "Bordro Merkezi Menü": "Payroll Center Menu",
  "Personel Yönetimi": "Personnel Management",
  "Bordro İşlemleri": "Payroll Operations",
  "Tarih Aralığı": "Date Range",
  "Sistem Yönetimi": "System Management",
  "Takvim Yönetimi": "Calendar Management",
  "Şirket Yönetimi": "Company Management",
  "Tanımlar": "Definitions",
  "Bordro Tanımları": "Payroll Definitions",
  "Self-servis": "Self-service",
  "İK Metrikleri": "HR Metrics",
  "İşlemler": "Operations",
  "Dinamik Rapor": "Dynamic Report",
  "Banka / BES": "Bank / Private Pension",
  "Borç / Avans Yönetimi": "Debt / Advance Management",
  "Kırmızı Bülten": "Red Bulletin",
  "Sicil Yönetimi": "Employee Registry",
  "Performans": "Performance",
  "İşe Alım": "Recruitment",
  "Sicil No": "Registry No",
  "T.C. Kimlik": "National ID",
  "Çalışma Tipi": "Employment Type",
  "Tam Zamanlı": "Full Time",
  "Yarı Zamanlı": "Part Time",
  "Dış Kaynak": "Outsourced",
  "Kıdem Tarihi": "Seniority Date",
  "Hedef": "Target",
  "Puan": "Score",
  "Değerlendiren": "Reviewer",
  "Sonuç": "Result",
  "Başarılı": "Successful",
  "Gelişim Planı": "Development Plan",
  "Takip Edilecek": "To Be Followed",
  "Pozisyon": "Position",
  "Aday": "Candidate",
  "Aşama": "Stage",
  "Başvuru": "Application",
  "Görüşme": "Interview",
  "Teklif": "Offer",
  "İşe Alındı": "Hired",
  "Olumsuz": "Negative",
  "Görüşme Tarihi": "Interview Date",
  "Banka": "Bank",
  "BES Durumu": "Private Pension Status",
  "BES Oranı": "Private Pension Rate",
  "Belge": "Document",
  "OTP Durumu": "OTP Status",
  "Doğrulandı": "Verified",
  "Süresi Doldu": "Expired",
  "Zaman Damgası": "Timestamp",
  "Kanal": "Channel",
  "E-posta": "Email",
  "SMS": "SMS",
  "Bordro self-servis": "Payroll self-service",
  "Personel Self-Servis": "Employee Self-Service",
  "Müşteri Portalı": "Customer Portal",
  "Sade müşteri görünümü": "Simple customer view",
  "Kendi projelerini, faturalarını, raporlarını ve mesajlarını tek ekranda izler.": "Track own projects, invoices, reports and messages in one simple screen.",
  "Otomatik Mail Merkezi": "Automatic Email Center",
  "Mail taslakları ve gönderim kuyruğu buradan izlenir.": "Email drafts and sending queue are tracked here.",
  "Tam Otomatik Mail İçin": "For Fully Automatic Email",
  "Resend / SendGrid veya Supabase Edge Function bağlanacak.": "Connect Resend / SendGrid or a Supabase Edge Function.",
  "KVKK ve veri saklama süreçlerini rol bazlı takip et.": "Track privacy and data retention processes by role.",
  "Personel bordrosunu görür, onaylar ve yayın durumunu takip eder.": "Employees view, approve and track payroll publication status.",
  "Bordro Operasyon Akışı": "Payroll Operations Flow",
  "Dönem Kapatma Merkezi": "Period Closing Center",
  "Dönem Özeti": "Period Summary",
  "Puantaj Kontrol": "Timesheet Check",
  "Avans / Kesinti": "Advance / Deduction",
  "Bordro Hesaplama": "Payroll Calculation",
  "Onay Akışı": "Approval Flow",
  "Admin Onayı": "Admin Approval",
  "Admin otomatik onayı": "Automatic admin approval",
  "Otomatik": "Automatic",
  "Ödeme / Yayın": "Payment / Publish",
  "Bordro Operasyon Merkezi": "Payroll Operations Center",
  "Operasyon Komuta Merkezi": "Operations Command Center",
  "Bugün Öncelik Verilecek İşler": "Today's Priority Work",
  "Onay Bekleyen Bordro": "Payroll Awaiting Approval",
  "Eksik Puantaj / Kontrol": "Missing Timesheet / Check",
  "Odoo tarzı puantaj matrisi": "Odoo-style timesheet matrix",
  "Çalışan Bazlı Günlük Saat ve Durum": "Daily Hours and Status by Employee",
  "Boş": "Empty",
  "Tek Personel Dosyası": "Single Employee File",
  "OTP, zaman damgası ve görüntülenme takibi aynı akışta tutulur.": "OTP, timestamp and view tracking are kept in the same flow.",
  "Bildirimlerle anında bilgilendirme": "Instant notification with alerts",
  "Bordro yayınlandığında personel portalında takip edilir.": "When payroll is published, it is tracked in the employee portal.",
  "Her cihazdan bordro erişimi": "Payroll access from any device",
  "Çalışan kendi bordro geçmişini ve evrak durumunu görür.": "Employees see their own payroll history and document status.",
  "Brüt / Net Hesaplama": "Gross / Net Calculation",
  "Bordro Hesaplayıcı": "Payroll Calculator",
  "VergiNET referansı": "VergiNET reference",
  "Brüt Ücret": "Gross Salary",
  "Net Ücret": "Net Salary",
  "Gelir Vergisi": "Income Tax",
  "Damga Vergisi": "Stamp Tax",
  "İşsizlik": "Unemployment",
  "Hesaplama bekliyor": "Waiting for calculation",
  "Brüt veya net alanına tutar yazınca diğer alan otomatik hesaplanır.": "When you enter gross or net amount, the other field is calculated automatically.",
  "Not: Hesaplama yaklaşık bordro projeksiyonudur; mevzuat oranları dönemsel olarak kontrol edilmelidir.": "Note: This is an approximate payroll projection; legal rates should be checked periodically.",
  "Resmi ve Faydalı Linkler": "Official and Useful Links",
  "İK / Bordro Mevzuat Kütüphanesi": "HR / Payroll Legislation Library",
  "Prim, bildirge ve sigortalılık kontrolleri": "Premium, declaration and insurance checks",
  "İş hukuku ve çalışma hayatı duyuruları": "Labor law and working life announcements",
  "Vergi, beyan ve gelir vergisi duyuruları": "Tax, declaration and income tax announcements",
  "Yürürlüğe giren mevzuat takibi": "Published legislation tracking",
  "İşe alım, istihdam ve teşvik takipleri": "Recruitment, employment and incentive tracking",
  "Personel verisi ve açık rıza süreçleri": "Personnel data and consent processes",
  "Brüt-net hesap ve vergi bilgi referansı": "Gross-net calculation and tax reference",
  "Maaş Ödeme Alarmı": "Salary Payment Alert",
  "Avans Kontrol Alarmı": "Advance Control Alert",
  "Özel Gün / Mevzuat Alarmı": "Special Day / Legislation Alert",
  "Geciken Tahsilat": "Overdue Collection",
  "İK Metrikleri Paneli": "HR Metrics Panel",
  "Çalışan devir oranı, performans, işe alım ve eğitim kırılımları tek ekranda izlenir.": "Employee turnover, performance, recruitment and training breakdowns are tracked in one screen.",
  "Güvenli bordro paylaşımı": "Secure payroll sharing",
  "KVKK uyumlu bordro yayını, OTP doğrulama, zaman damgası ve görüntülenme takibi birlikte yönetilir.": "KVKK-compliant payroll publication, OTP verification, timestamping and view tracking are managed together.",
  "Banka ve BES Yönetimi": "Bank and Private Pension Management",
  "Banka ödeme, IBAN ve BES kayıtları bordro süreciyle birlikte izlenir.": "Bank payment, IBAN and private pension records are tracked with the payroll process.",
  "Banka / BES Takibi": "Bank / Private Pension Tracking",
  "IBAN, banka ödeme ve BES kayıtları bordro tanımlarında yönetilir.": "IBAN, bank payment and private pension records are managed in payroll definitions.",
  "Banka Ödemesi": "Bank Payment",
  "Dikey Grafik": "Vertical Chart",
  "Pasta Grafik": "Pie Chart",
  "Bordro ve Finans Özeti": "Payroll and Finance Summary",
  "Fatura Dağılımı": "Invoice Distribution",
  "Rapor Özeti": "Report Summary",
  "Bordro, avans, mesai, fatura ve maliyet grafikleri.": "Payroll, advance, overtime, invoice and cost charts.",
  "Kolay Portal Görünümleri": "Easy Portal Views",
  "Admin, personel ve müşteri için en sık kullanılan işler tek ekranda toplandı.": "The most common tasks for admin, employee and customer are gathered on one screen.",
  "Akıllı Uyarı Merkezi": "Smart Alert Center",
  "Yapay Zeka Bordro Asistanı": "AI Payroll Assistant",
  "Sorunu yaz, paneldeki verilerden kısa cevap al.": "Type your question and get a short answer from portal data.",
  "Örnek soru seç": "Pick a sample question",
  "Cevap hazır": "Answer ready",
  "Asistana Sor": "Ask Assistant",
  "Bu ay kimlerin bordrosu bekliyor?": "Whose payroll is pending this month?",
  "Eksik evrak var mı?": "Are there missing documents?",
  "Avans alan personeller kim?": "Who received advances?",
  "Fatura bekleyen işler neler?": "Which invoices are pending?",
  "Personel Portalı": "Employee Portal",
  "Müşteri Portalı": "Customer Portal",
  "Admin Komuta": "Admin Command",
  "Duyuru ve Mesaj Merkezi": "Announcement and Message Center",
  "Ortalama Performans": "Average Performance",
  "Açık Pozisyon": "Open Position",
  "Departman Dağılımı": "Department Distribution",
  "Risk ve Uyum": "Risk and Compliance",
  "Başlık": "Title",
  "BES Kaydı": "Private Pension Record",
  "Kamusal ve Özel Entegrasyonlar": "Public and Private Integrations",
  "Zaman damgası ve elektronik onay": "Timestamp and electronic approval",
  "Bildirim ve yasal kontrol hazırlığı": "Notification and legal control preparation",
  "Kimlik doğrulama kontrol listesi": "Identity verification checklist",
  "Tek kullanımlık parola ile bordro onayı": "Payroll approval with one-time password",
  "İK verisi ve özlük senkronizasyonu": "HR data and personnel file synchronization",
  "Finans ve muhasebe aktarımı": "Finance and accounting transfer",
  "SGK Raporları": "Social Security Reports",
  "BES Ödeme Raporları": "Private Pension Payment Reports",
  "Banka Ödeme Raporları": "Bank Payment Reports",
  "Personel Raporları": "Personnel Reports",
  "Muhasebe Raporları": "Accounting Reports",
  "Mevzuat ve Yasal Parametreler": "Legislation and Legal Parameters",
  "Bordro hesaplama parametreleri ve yasal kontroller tek yerde tutulur.": "Payroll calculation parameters and legal controls are kept in one place.",
  "Güvenlik ve Otomasyon": "Security and Automation",
  "Şifreli çıktılar, denetim izi ve otomatik hatırlatma kuralları burada yönetilir.": "Encrypted outputs, audit trail and automatic reminder rules are managed here.",
  "İşlem": "Operation",
  "Hatırlatma": "Reminder",
  "Planlandı": "Planned",
  "Son Aktarım": "Last Sync",
  "Aktarım": "Transfer",
  "İçe Aktarım": "Import",
  "Dışa Aktarım": "Export",
  "Çift Yönlü": "Two-way",
  "Mevzuat Başlığı": "Legislation Title",
  "Kaynak": "Source",
  "Güncel": "Current",
  "Kural": "Rule",
  "Tetikleyici": "Trigger",
  "Hedef": "Target",
  "Bordro görüntülendi": "Payroll viewed",
  "Bordro onaylandı": "Payroll approved",
  "Bordro operasyon merkezi": "Payroll operations center",
  "Puantajdan personele yayına kadar tüm bordro akışını tek ekranda izleyin.": "Track the whole payroll flow from timesheet to employee publishing on one screen.",
  "Çalışan": "Employee",
  "İşe Alınan": "Hired",
  "İşten Ayrılan": "Left",
  "Mevcut Çalışan": "Current Employee",
  "Hesaplanmış / Final": "Calculated / Final",
  "Devir": "Transfer",
  "Takvimler": "Calendars",
  "Bugün": "Today",
  "Tatil Günleri": "Holidays",
  "Haftasonu": "Weekend",
  "Bordro Süreci": "Payroll Process",
  "Yetki Tablosu": "Authority Table",
  "İş Yeri Listesi": "Workplace List",
  "Tümü": "All",
  "Rol Listesi": "Role List",
  "Başlangıç Tarihi": "Start Date",
  "Bitiş Tarihi": "End Date",
  "Ad Soyad": "Full Name",
  "Bağlı Olunan Yönetici": "Reporting Manager",
  "Yönetici": "Manager",
  "Puantaj Teslim": "Timesheet Delivery",
  "İK Kontrol": "HR Check",
  "Muhasebe": "Accounting",
  "Yönetici Onayı": "Manager Approval",
  "Personele Yayın": "Employee Release",
  "Görüldü Takibi": "View Tracking",
  "SGK Son Gün": "Social Security Deadline",
  "Maaş Ödeme": "Salary Payment",
  "Bordro Kapanış": "Payroll Closing",
  "Müşteri Onayı": "Customer Approval",
  "Resmi Tatil": "Public Holiday",
  "Hızlı İşlemler": "Quick Actions",
  "Bordro Listesine Git": "Go to Payroll List",
  "Puantajı Aç": "Open Timesheet",
  "Onay Merkezini Aç": "Open Approval Center",
  "Rapor Hazırla": "Prepare Report",
  "Pzt": "Mon",
  "Sal": "Tue",
  "Çar": "Wed",
  "Per": "Thu",
  "Cum": "Fri",
  "Cmt": "Sat",
  "Paz": "Sun",
  "Ara:": "Search:",
  "Filtrele :": "Filter:",
  "İşlemler": "Actions",
  "Kayıt bulunamadı.": "No records found.",
  "Önceki": "Previous",
  "Sonraki": "Next",
  "Düzenle": "Edit",
  "Sil": "Delete",
  "Grafik": "Chart",
  "Detay": "Detail",
  "Onayla": "Approve",
  "Tamamla": "Complete",
  "Kendi firma kayıtları görüntülenir.": "Only own company records are visible.",
  "Personelin tüm İK dosyası tek ekranda izlenir.": "The full HR file of the personnel is tracked on one screen.",
  "Bekleyen onaylar tek merkezden tamamlanır.": "Pending approvals are completed from one center.",
  "Özlük": "Documents",
  "Eğitim": "Training",
  "Zimmet": "Asset",
  "İzin": "Leave",
  "Kaydet": "Save",
  "Vazgeç": "Cancel",
  "Kapat": "Close",
  "Ekle": "Add",
  "Dosya yok": "No file",
  "Bilgisayardan dosya veya resim seçebilirsin.": "You can select a file or image from your computer.",
  "Aynı kayıt için en fazla 10 dosya veya resim seçebilirsin.": "You can select up to 10 files or images for the same record.",
  "Mevcut dosya": "Current file",
  "Mevcut dosyalar": "Current files",
  "Kullanıcı şifresi Supabase Authentication üzerinden verilir.": "User passwords are assigned through Supabase Authentication.",
  "Güvenli kullanıcı yönetimi": "Secure user management",
  "Rol Kuralları": "Role Rules",
  "Toplam Proje": "Total Projects",
  "Beklemede": "Pending",
  "Pasif": "Passive",
  "Toplam Çalışma": "Total Work",
  "Toplam Mesai": "Total Overtime",
  "Aktif Puantaj": "Active Timesheets",
  "Toplam Fatura": "Total Invoice",
  "Checklist Tamamlanma": "Checklist Completion",
  "Tamamlanan": "Completed",
  "Toplam Kontrol": "Total Inspection",
  "Ortalama Hata": "Average Defect",
  "Riskli Proje": "Risky Project",
  "Kalite": "Quality",
  "İK / HR": "HR",
  "Riskli": "Risky",
  "Kontrol altında": "Under Control",
  "Evrak takibi var": "Document Follow-up",
  "Bordro": "Payroll",
  "Onay bekliyor": "Awaiting Approval",
  "Yayınlandı": "Published",
  "Finans": "Finance",
  "Tahsilat gecikti": "Collection Overdue",
  "Rol bazlı erişim aktif": "Role-based access active",
  "Raporlama": "Reporting",
  "PDF / Excel çıktıları aktif": "PDF / Excel exports active",
  "Marka ve eşikler hazır": "Brand and thresholds ready",
  "Aktif": "Active",
  "AKTİF": "ACTIVE",
  "PASİF": "PASSIVE",
  "Yok": "None",
  "Müşteri": "Customer",
  "Kullanıcı": "User",
  "Tam": "Complete",
  "Eksik": "Missing",
  "Kontrol Edilecek": "To Be Checked",
  "Geldi": "Present",
  "Gelmedi": "Absent",
  "Raporlu": "Medical Leave",
  "Geçici Görev": "Temporary Duty",
  "Bekliyor": "Waiting",
  "Onaylandı": "Approved",
  "Reddedildi": "Rejected",
  "Düşük": "Low",
  "Normal": "Normal",
  "Yüksek": "High",
  "Acil": "Urgent",
  "Devam Ediyor": "In Progress",
  "Tamamlandı": "Completed",
  "Fatura Kesildi": "Invoice Issued",
  "Fatura Beklemede": "Invoice Pending",
  "Onay Verilmedi": "Not Approved",
  "Hazırlandı": "Prepared",
  "Onay Bekliyor": "Awaiting Approval",
  "Personele Açıldı": "Published to Personnel",
  "Kapalı": "Closed",
  "Cevaplandı": "Answered",
  "Görülmedi": "Not Viewed",
  "Görüldü": "Viewed",
  "Açık": "Open",
  "Tahsil Bekliyor": "Awaiting Collection",
  "Ödendi": "Paid",
  "Gecikti": "Overdue",
  "Var": "Yes",
  "Yok": "No",
};

function trText(value) {
  if (currentLanguage !== "en") return value;
  return translations[value] || value;
}

function loadLocalRecords() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved === "object") {
      modules.forEach((module) => {
        if (Array.isArray(saved[module.id])) {
          module.records = saved[module.id].map((record) => hydrateRecord(module, record));
        }
      });
    }
  } catch {
    localStorage.removeItem(storageKey);
  }
}

async function loadRecords() {
  if (!isRemoteMode) {
    loadLocalRecords();
    if (ensureComplianceCalendarRecords()) saveRecords();
    return;
  }

  const { data: rows, error } = await supabaseClient
    .from("portal_records")
    .select("module_id, record_id, data, company_name")
    .order("created_at", { ascending: true });

  if (error) throw error;

  if (!rows?.length) {
    remoteReady = true;
    ensureComplianceCalendarRecords();
    if (canManageRecords()) saveRecords();
    return;
  }

  modules.forEach((module) => {
    const moduleRows = rows.filter((row) => row.module_id === module.id);
    if (!moduleRows.length) {
      module.records = Array.isArray(module.records) ? module.records.map((record) => hydrateRecord(module, record)) : [];
      return;
    }

    module.records = moduleRows.map((row) =>
      hydrateRecord(module, {
        id: row.record_id,
        ...(row.data ?? {}),
      }),
    );
  });

  remoteReady = true;
  if (ensureComplianceCalendarRecords() && canManageRecords()) saveRecords();
}

function renderCurrentScreenAfterRemoteSync() {
  if (!currentUser) return;
  if (activeModuleId === "payrollCenter") {
    renderSideNav();
    renderPayrollCenter();
  } else {
    renderSideNav();
    renderModule(getModule(activeModuleId));
  }
  renderIcons();
}

function scheduleRealtimeReload() {
  if (!isRemoteMode || !currentUser) return;
  if (Date.now() - lastLocalRemoteSaveAt < 1800) return;
  window.clearTimeout(realtimeReloadTimer);
  realtimeReloadTimer = window.setTimeout(async () => {
    try {
      await loadRecords();
      renderCurrentScreenAfterRemoteSync();
    } catch (error) {
      console.error("Canlı mesaj/veri yenileme hatası:", error);
    }
  }, 550);
}

function startRealtimeSync() {
  if (!isRemoteMode || !supabaseClient || realtimeChannel) return;
  realtimeChannel = supabaseClient
    .channel("arti-destek-portal-records")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "portal_records",
      },
      scheduleRealtimeReload,
    )
    .subscribe();
}

function stopRealtimeSync() {
  window.clearTimeout(realtimeReloadTimer);
  realtimeReloadTimer = null;
  if (realtimeChannel && supabaseClient) {
    supabaseClient.removeChannel(realtimeChannel);
  }
  realtimeChannel = null;
}

function hydrateRecord(module, record) {
  if (module.id === "users") {
    const baseName = String(record.email ?? record.name ?? "user")
      .split("@")[0]
      .toLocaleLowerCase("tr")
      .replace(/[^a-z0-9._-]/gi, "");

    return {
      ...record,
      username: record.username || baseName || `user${Date.now()}`,
    };
  }

  if (module.id === "personnel") {
    return {
      department: "",
      startDate: "",
      exitDate: "",
      emergency: "",
      documentStatus: "Kontrol Edilecek",
      ...record,
    };
  }

  if (module.id === "projects") {
    return {
      responsible: "",
      startDate: "",
      endDate: "",
      file: "",
      okCount: "0",
      nokCount: "0",
      rokCount: "0",
      rnokCount: "0",
      ...record,
      note: record.note || record.invoice || "",
      status: normalizeProjectStatus(record.status),
      invoiceStatus: normalizeInvoiceStatus(record.invoiceStatus),
      code: record.code?.startsWith("AD") ? record.code : generateProjectCode(record.location, record.id),
    };
  }

  if (module.id === "companies") {
    return {
      sector: "",
      taxNo: "",
      address: "",
      contractStatus: "Beklemede",
      contractFile: "",
      offerFile: "",
      note: "",
      ...record,
    };
  }

  if (module.id === "payroll") {
    return {
      grossSalary: "",
      netSalary: "",
      bonus: "",
      advance: "",
      overtime: "",
      deduction: "",
      paymentDate: record.paymentDate || record.date || "",
      bankIban: "",
      payrollStatus: "Hazırlandı",
      hrApproval: "Bekliyor",
      accountingApproval: "Bekliyor",
      managementApproval: "Bekliyor",
      publishStatus: "Kapalı",
      viewStatus: "Görülmedi",
      ...record,
    };
  }

  if (module.id === "invoices") {
    return {
      withholding: "Yok",
      paymentStatus: "Tahsil Bekliyor",
      collectionDate: "",
      ...record,
      status: normalizeInvoiceStatus(record.status),
    };
  }

  if (module.id === "attendance") {
    return {
      dailyHours: "7,5",
      overtimeHours: "0",
      status: "AKTİF",
      ...Object.fromEntries(dayColumns.map(([key]) => [key, record[key] || "-"])),
      ...Object.fromEntries(manualHourColumns.map(([key]) => [key, record[key] || ""])),
      ...record,
      ...Object.fromEntries(overtimeDayColumns.map(([key]) => [key, record[key] || ""])),
      totalHours: calculateAttendanceTotal(record),
    };
  }

  if (module.id === "messages") {
    const threadId =
      record.threadId ||
      `thread-${normalizeText(`${record.subject || record.type || "mesaj"}-${record.sender || ""}-${record.recipient || ""}`).replace(/[^a-z0-9]/g, "-") || createId("thread")}`;
    return {
      date: new Date().toISOString().slice(0, 10),
      time: "",
      type: "Personel Mesajı",
      sender: "Sistem",
      recipient: "Tüm ekip",
      subject: "Genel",
      message: "",
      priority: "Normal",
      status: "Açık",
      ...record,
      threadId,
    };
  }

  return record;
}

function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getPlateCode(location) {
  return cityPlateCodes[normalizeText(location)] || "00";
}

function generateProjectCode(location, excludeId = "") {
  const plate = getPlateCode(location);
  const module = getModule("projects");
  const highest = module.records.reduce((max, record) => {
    if (record.id === excludeId) return max;
    const match = String(record.code ?? "").match(new RegExp(`^AD${plate}(\\d+)$`));
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);

  return `AD${plate}${String(highest + 1).padStart(9, "0")}`;
}

function normalizeProjectStatus(value) {
  const normalized = normalizeText(value);
  if (["pasif", "durduruldu", "iptal"].includes(normalized)) return "Pasif";
  if (["beklemede"].includes(normalized)) return "Beklemede";
  return "Aktif";
}

function normalizeInvoiceStatus(value) {
  const normalized = normalizeText(value);
  if (["fatura kesildi", "kesildi", "onayli", "odendi"].includes(normalized)) return "Fatura Kesildi";
  if (["fatura beklemede", "beklemede"].includes(normalized)) return "Fatura Beklemede";
  return "Onay Verilmedi";
}

function ensureComplianceCalendarRecords() {
  const module = getModule("payrollCalendar");
  if (!module?.records) return false;
  let changed = false;
  fixedDashboardMonths.forEach((period) => {
    const [month, year] = period.split(".");
    [
      {
        id: `pc-${year}${month}-muhtasar`,
        date: `${year}-${month}-26`,
        event: "Muhtasar Beyanname Son Gün",
        responsible: "Muhasebe",
        reminder: "1 hafta önce",
      },
      {
        id: `pc-${year}${month}-sgk`,
        date: `${year}-${month}-26`,
        event: "SGK Bildirge Son Gün",
        responsible: "İK",
        reminder: "3 gün önce",
      },
    ].forEach((record) => {
      const exists = module.records.some((item) => normalizeText(item.event) === normalizeText(record.event) && String(item.period || "") === period);
      if (exists) return;
      module.records.push({
        ...record,
        period,
        status: "Planlandı",
      });
      changed = true;
    });
  });
  return changed;
}

function saveRecords() {
  const data = {};
  modules.forEach((module) => {
    data[module.id] = module.records;
  });
  localStorage.setItem(storageKey, JSON.stringify(data));

  if (!isRemoteMode || !remoteReady || !canManageRecords()) return;

  lastLocalRemoteSaveAt = Date.now();
  remoteSaveQueue = remoteSaveQueue
    .then(() => saveRecordsToSupabase())
    .catch((error) => {
      console.error("Supabase kayıt hatası:", error);
    });
}

function getRecordCompanyName(module, record) {
  if (module.id === "companies") return record.name || "";
  if (["projects", "invoices"].includes(module.id)) return record.company || "";
  if (module.id === "users") return record.company || record.companyName || "";
  if (["messages", "notifications"].includes(module.id)) return record.companyName || "";
  return record.companyName || "";
}

async function saveRecordsToSupabase() {
  const moduleIds = modules.filter((module) => !module.dashboard).map((module) => module.id);
  const rows = modules
    .filter((module) => !module.dashboard)
    .flatMap((module) =>
      module.records.map((record) => ({
        module_id: module.id,
        record_id: String(record.id),
        data: record,
        company_name: getRecordCompanyName(module, record) || null,
        created_by: currentUser?.id || null,
        updated_by: currentUser?.id || null,
      })),
    );

  const { error: deleteError } = await supabaseClient.from("portal_records").delete().in("module_id", moduleIds);
  if (deleteError) throw deleteError;

  if (!rows.length) return;

  const chunkSize = 250;
  for (let index = 0; index < rows.length; index += chunkSize) {
    const { error: insertError } = await supabaseClient.from("portal_records").insert(rows.slice(index, index + chunkSize));
    if (insertError) throw insertError;
  }
}

async function upsertRemotePortalRecord(module, record) {
  if (!isRemoteMode || !remoteReady || !currentUser) return;
  const { error } = await supabaseClient.from("portal_records").upsert(
    {
      module_id: module.id,
      record_id: String(record.id),
      data: record,
      company_name: getRecordCompanyName(module, record) || currentUser.companyName || null,
      created_by: currentUser.id || null,
      updated_by: currentUser.id || null,
    },
    { onConflict: "module_id,record_id" },
  );
  if (error) console.error("Canlı kayıt gönderilemedi:", error);
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getModule(id = activeModuleId) {
  return modules.find((module) => module.id === id) ?? modules[0];
}

function normalizeUserType(type) {
  return normalizeText(type).toUpperCase();
}

function isAdminRole(type) {
  return ["SUPER ADMIN", "ADMIN", "YONETICI"].includes(normalizeUserType(type));
}

function canAccessModule(module) {
  if (!currentUser) return true;

  const type = normalizeUserType(currentUser.type);
  if (module.adminOnly && !isAdminRole(type)) return false;
  if (isAdminRole(type) || type === "KULLANICI") return true;
  if (type === "PERSONEL") return ["panel", "payrollCenter", "personnel360", "tasks", "payroll", "presentations", "documentsChecklist", "reports", "attendance", "leaves", "trainings", "assets", "notifications", "messages"].includes(module.id);
  if (type === "MUSTERI") return ["panel", "payrollCenter", "projects", "quality", "invoices", "reports", "notifications", "approvals", "messages"].includes(module.id);
  return true;
}

function canManageRecords() {
  if (!currentUser) return true;
  return isAdminRole(currentUser.type);
}

function isCustomerUser() {
  return normalizeUserType(currentUser?.type) === "MUSTERI";
}

function isPersonnelUser() {
  return normalizeUserType(currentUser?.type) === "PERSONEL";
}

function getCurrentUserCompany() {
  return normalizeText(currentUser?.companyName || currentUser?.company || "");
}

function getCurrentUserPersonName() {
  return normalizeText(currentUser?.displayName || currentUser?.fullName || currentUser?.email || "");
}

function recordBelongsToCustomer(module, record) {
  if (!isCustomerUser()) return true;
  const company = getCurrentUserCompany();
  if (!company) return false;

  const candidates = [
    record.company,
    record.companyName,
    record.name,
    record.customer,
    record.firma,
  ].map(normalizeText);

  if (module.id === "quality") {
    candidates.push(normalizeText(record.company));
  }

  return candidates.some((value) => value && (value === company || value.includes(company) || company.includes(value)));
}

function recordBelongsToPersonnel(module, record) {
  if (!isPersonnelUser()) return true;
  const personName = getCurrentUserPersonName();
  if (!personName) return false;
  const candidates = [record.person, record.name, record.assignee, record.owner, record.email].map(normalizeText);
  return candidates.some((value) => value && (value === personName || value.includes(personName) || personName.includes(value)));
}

function getScopedRecords(module, records = module.id === "quality" ? getQualityRecords() : module.records) {
  return records.filter((record) => recordBelongsToCustomer(module, record) && recordBelongsToPersonnel(module, record));
}

function getRecordCount(moduleId) {
  const module = getModule(moduleId);
  return getScopedRecords(module).length ?? 0;
}

function getPersonnelTotal() {
  return getRecordCount("personnel");
}

function getCurrentUserName() {
  return currentUser?.displayName || currentUser?.email || "Sistem";
}

function getModuleTitle(moduleId) {
  return getModule(moduleId)?.title || moduleId;
}

function formatDateTime(value = new Date()) {
  return value.toLocaleString("tr-TR", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function addAudit(action, module, record, detail = "") {
  const auditModule = getModule("audit");
  if (!auditModule) return;
  auditModule.records = [
    {
      id: createId("audit"),
      date: formatDateTime(),
      user: getCurrentUserName(),
      action,
      moduleTitle: module.title,
      recordTitle: getRecordTitle(module, record) || "-",
      detail,
    },
    ...auditModule.records,
  ].slice(0, 250);
}

function archiveRecord(module, record, reason = "Kayıt silindi") {
  const archiveModule = getModule("archive");
  if (!archiveModule) return;
  archiveModule.records = [
    {
      id: createId("archive"),
      date: formatDateTime(),
      moduleTitle: module.title,
      moduleId: module.id,
      recordTitle: getRecordTitle(module, record) || "-",
      user: getCurrentUserName(),
      reason,
      snapshot: record,
    },
    ...archiveModule.records,
  ].slice(0, 250);
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const icon = icons[element.dataset.icon];
    if (!icon) return;
    element.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>`;
  });
}

function renderLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
  document.documentElement.lang = currentLanguage === "en" ? "en" : "tr";
  const logoutButton = document.querySelector("#logoutButton");
  const cancelButton = document.querySelector("#dialogCancelButton");
  const saveButton = document.querySelector('#recordForm button[type="submit"]');
  const loginTitle = document.querySelector("#loginForm h1");
  const loginButton = document.querySelector('#loginForm button[type="submit"]');
  if (logoutButton) logoutButton.textContent = currentLanguage === "en" ? "Logout" : "Çıkış";
  if (cancelButton) cancelButton.textContent = trText("Vazgeç");
  if (saveButton) saveButton.textContent = trText("Kaydet");
  if (loginTitle) loginTitle.textContent = currentLanguage === "en" ? "Portal Login" : "Portal Girişi";
  if (loginButton) loginButton.textContent = currentLanguage === "en" ? "Sign In" : "Giriş Yap";
}

function switchLanguage(language) {
  currentLanguage = language === "en" ? "en" : "tr";
  localStorage.setItem("arti-destek-language", currentLanguage);
  renderLanguageSwitch();
  if (!document.querySelector("#appShell").hidden) {
    renderSideNav();
    renderModule(getModule(activeModuleId));
  }
}

function renderSideNav() {
  activeModuleId = "payrollCenter";
  const visibleTabs = payrollCenterTabs.filter(([id]) => {
    if (isCustomerUser()) return ["company", "assistant", "reports", "legislation"].includes(id);
    if (isPersonnelUser()) return ["selfService", "assistant", "calendar", "redBulletin"].includes(id);
    return true;
  });
  document.querySelector("#sideNav").innerHTML = `
    <div class="side-section-title">${escapeHtml(trText("Bordro Merkezi"))}</div>
    ${visibleTabs
      .map(
        ([id, label, icon]) => `
        <button class="${payrollCenterTab === id ? "active" : ""}" type="button" data-payroll-center-tab="${id}">
          <span class="nav-icon" style="--module-color:${payrollTabColors[id] || "#6947b8"}" data-icon="${icon}"></span>
          <span>${escapeHtml(trText(label))}</span>
        </button>
      `,
      )
      .join("")}
  `;
  updateTopNotificationChip();
}

function closeMobileSidebar() {
  if (window.innerWidth <= 760) {
    document.body.classList.remove("sidebar-collapsed");
  }
}

function updateTopNotificationChip() {
  const chip = document.querySelector("#topNotificationChip");
  if (!chip) return;
  const notifications = getScopedRecords(getModule("notifications"));
  const unreadCount = notifications.filter((record) => record.readStatus !== "Okundu" && record.status !== "Tamamlandı").length;
  const urgentCount = notifications.filter((record) => record.priority === "Acil" && record.status !== "Tamamlandı").length;
  chip.classList.toggle("urgent", urgentCount > 0);
  chip.innerHTML = `<span data-icon="bell"></span><b>${escapeHtml(String(unreadCount))}</b>`;
}

function renderBreadcrumb(module) {
  document.querySelector("#breadcrumb").innerHTML = module.breadcrumb
    .map((item) => `<li>${escapeHtml(trText(item))}</li>`)
    .join("");
}

function getDashboardMonths() {
  return fixedDashboardMonths;
}

function isSameMonth(value, month) {
  const text = String(value ?? "");
  if (!text || !month) return false;
  if (text === month) return true;
  const [monthPart, yearPart] = month.split(".");
  return text.includes(`${yearPart}-${monthPart}`) || text.includes(`${monthPart}/${yearPart}`) || text.includes(month);
}

function getDashboardPeriodMonths() {
  const index = Math.max(0, fixedDashboardMonths.indexOf(dashboardMonth));
  if (dashboardRange === "year") return fixedDashboardMonths;
  const length = dashboardRange === "quarter" ? 3 : dashboardRange === "five" ? 5 : 1;
  return fixedDashboardMonths.slice(Math.max(0, index - length + 1), index + 1);
}

function getDashboardPeriodLabel(months = getDashboardPeriodMonths()) {
  if (months.length === 1) return months[0];
  return `${months[0]} - ${months[months.length - 1]}`;
}

function getMonthName(month = dashboardMonth) {
  const [monthPart, yearPart] = String(month).split(".");
  const names = currentLanguage === "en"
    ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    : ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const index = Number(monthPart) - 1;
  return `${names[index] || monthPart} ${yearPart || dashboardYear}`;
}

function getDateFromDashboardDay(day, month = dashboardMonth) {
  const [monthPart, yearPart] = String(month).split(".");
  return new Date(Number(yearPart || dashboardYear), Number(monthPart || "1") - 1, day);
}

function recordMatchesMonths(record, months, keys = ["date", "period", "startDate", "dueDate", "paymentDate"]) {
  return keys.some((key) => months.some((month) => isSameMonth(record?.[key], month)));
}

function hasUploadedFile(value) {
  if (!value) return false;
  if (Array.isArray(value)) return value.some(hasUploadedFile);
  if (typeof value === "object") {
    return Boolean(value.dataUrl || value.url || value.path || value.name || value.size);
  }
  return String(value).trim().length > 0;
}

function hasDocumentForPerson(person, documents) {
  if (normalizeText(person.documentStatus) === "tam") return true;
  const personName = normalizeText(person.name);
  return documents.some((documentRecord) => {
    const documentPerson = normalizeText(documentRecord.person);
    const samePerson = documentPerson && (documentPerson === personName || documentPerson.includes(personName) || personName.includes(documentPerson));
    return samePerson && hasUploadedFile(documentRecord.file);
  });
}

function getPersonDocuments(personName) {
  const normalizedName = normalizeText(personName);
  if (!normalizedName) return [];
  return getScopedRecords(getModule("presentations")).filter((record) => normalizeText(record.person) === normalizedName);
}

function hasCompleteDocumentsForPerson(personName) {
  const normalizedName = normalizeText(personName);
  if (!normalizedName) return false;
  const checklist = getScopedRecords(getModule("documentsChecklist")).find((record) => normalizeText(record.person) === normalizedName);
  if (checklist?.status === "Tam") return true;
  return getPersonDocuments(personName).some((record) => record.status !== "PASİF" && hasUploadedFile(record.file));
}

function syncDocumentChecklistFromUpload(documentRecord) {
  if (!documentRecord?.person || !hasUploadedFile(documentRecord.file)) return;

  const checklistModule = getModule("documentsChecklist");
  const personnelModule = getModule("personnel");
  const normalizedName = normalizeText(documentRecord.person);
  let checklist = checklistModule.records.find((record) => normalizeText(record.person) === normalizedName);

  if (!checklist) {
    checklist = {
      id: createId("dc"),
      person: documentRecord.person,
      identity: "Tam",
      sgk: "Tam",
      contract: "Tam",
      kvkk: "Tam",
      health: "Tam",
      iban: "Tam",
      criminalRecord: "Tam",
      status: "Tam",
    };
    checklistModule.records = [checklist, ...checklistModule.records];
  } else {
    ["identity", "sgk", "contract", "kvkk", "health", "iban", "criminalRecord"].forEach((key) => {
      checklist[key] = "Tam";
    });
    checklist.status = "Tam";
  }

  personnelModule.records = personnelModule.records.map((record) =>
    normalizeText(record.name) === normalizedName ? { ...record, documentStatus: "Tam" } : record,
  );
}

function getProjectQuality(record) {
  const ok = parseHour(record.okCount);
  const nok = parseHour(record.nokCount);
  const rok = parseHour(record.rokCount);
  const rnok = parseHour(record.rnokCount);
  const total = ok + nok + rok + rnok;
  const defectRate = total ? ((nok + rnok) / total) * 100 : 0;
  return {
    ok,
    nok,
    rok,
    rnok,
    total,
    defectRate,
    risk: defectRate >= 5 ? "Yüksek" : defectRate > 0 ? "Normal" : "Düşük",
  };
}

function getQualityRecords() {
  return getModule("projects").records.map((project) => {
    const quality = getProjectQuality(project);
    return {
      id: `quality-${project.id}`,
      projectCode: project.code,
      company: project.company,
      part: project.part,
      problem: project.problem,
      total: quality.total,
      defectRate: quality.defectRate.toLocaleString("tr-TR", { maximumFractionDigits: 2 }),
      risk: quality.risk,
    };
  });
}

function getChecklistCompletion(record) {
  const keys = ["identity", "sgk", "contract", "kvkk", "health", "iban", "criminalRecord"];
  const complete = keys.filter((key) => record[key] === "Tam").length;
  return { complete, total: keys.length, rate: Math.round((complete / keys.length) * 100) };
}

function getKpiState(value, positiveWhenZero = true) {
  const number = Number.parseFloat(String(value).replace(",", "."));
  if (!Number.isFinite(number)) return "neutral";
  return positiveWhenZero ? (number === 0 ? "good" : "bad") : (number > 0 ? "good" : "bad");
}

function personMatchesRecord(person, record) {
  const personName = normalizeText(person?.name);
  if (!personName) return false;
  return [record?.person, record?.name, record?.assignee, record?.owner, record?.email]
    .map(normalizeText)
    .some((value) => value && (value === personName || value.includes(personName) || personName.includes(value)));
}

function getPersonRelatedRecords(person) {
  return {
    documents: getScopedRecords(getModule("presentations")).filter((record) => personMatchesRecord(person, record)),
    checklist: getScopedRecords(getModule("documentsChecklist")).find((record) => personMatchesRecord(person, record)),
    payroll: getScopedRecords(getModule("payroll")).filter((record) => personMatchesRecord(person, record)),
    attendance: getScopedRecords(getModule("attendance")).filter((record) => personMatchesRecord(person, record)),
    leaves: getScopedRecords(getModule("leaves")).filter((record) => personMatchesRecord(person, record)),
    trainings: getScopedRecords(getModule("trainings")).filter((record) => personMatchesRecord(person, record)),
    assets: getScopedRecords(getModule("assets")).filter((record) => personMatchesRecord(person, record)),
    tasks: getScopedRecords(getModule("tasks")).filter((record) => personMatchesRecord(person, record)),
  };
}

function getApprovalItems() {
  const items = [];

  getScopedRecords(getModule("payroll"))
    .filter((record) => record.payrollStatus !== "Personele Açıldı")
    .forEach((record) => {
      const missing = [
        record.hrApproval !== "Onaylandı" ? "İK" : "",
        record.accountingApproval !== "Onaylandı" ? "Muhasebe" : "",
        record.managementApproval !== "Onaylandı" ? "Yönetici" : "",
        record.publishStatus !== "Personele Açıldı" ? "Portal" : "",
      ].filter(Boolean);
      items.push({
        id: record.id,
        moduleId: "payroll",
        title: `${record.person || "-"} - ${record.period || ""}`,
        detail: missing.length ? `${missing.join(", ")} onayı bekliyor.` : "Personele açılmayı bekliyor.",
        state: "bad",
      });
    });

  getScopedRecords(getModule("leaves"))
    .filter((record) => record.approval === "Bekliyor")
    .forEach((record) =>
      items.push({
        id: record.id,
        moduleId: "leaves",
        title: `${record.person || "-"} - ${record.type || "İzin"}`,
        detail: `${record.startDate || ""} / ${record.endDate || ""}`.trim(),
        state: "bad",
      }),
    );

  getScopedRecords(getModule("invoices"))
    .filter((record) => record.status !== "Fatura Kesildi")
    .forEach((record) =>
      items.push({
        id: record.id,
        moduleId: "invoices",
        title: `${record.company || "-"} - ${record.invoiceNo || "Fatura"}`,
        detail: `${record.status || ""} ${record.amount ? `· ${record.amount}` : ""}`.trim(),
        state: record.status === "Fatura Beklemede" ? "neutral" : "bad",
      }),
    );

  getScopedRecords(getModule("projects"))
    .filter((record) => normalizeText(record.status) === "beklemede")
    .forEach((record) =>
      items.push({
        id: record.id,
        moduleId: "projects",
        title: `${record.code || "-"} - ${record.company || ""}`,
        detail: record.problem || record.part || "Proje onay bekliyor.",
        state: "neutral",
      }),
    );

  getScopedRecords(getModule("documentsChecklist"))
    .filter((record) => record.status !== "Tam")
    .forEach((record) =>
      items.push({
        id: record.id,
        moduleId: "documentsChecklist",
        title: `${record.person || "-"} - Evrak kontrol`,
        detail: `${getChecklistCompletion(record).rate}% tamamlandı.`,
        state: "bad",
      }),
    );

  getScopedRecords(getModule("tasks"))
    .filter((record) => record.status !== "Tamamlandı")
    .forEach((record) =>
      items.push({
        id: record.id,
        moduleId: "tasks",
        title: record.title || "Görev",
        detail: `${record.assignee || ""} ${record.dueDate ? `· ${record.dueDate}` : ""}`.trim(),
        state: record.priority === "Acil" || record.priority === "Yüksek" ? "bad" : "neutral",
      }),
    );

  return items;
}

function renderApprovalBadge(item) {
  return item.state === "good" ? "Tamam" : item.state === "neutral" ? "Beklemede" : "Onay Bekliyor";
}

function getAssistantSnapshot() {
  const periodMonths = getDashboardPeriodMonths();
  const payroll = getScopedRecords(getModule("payroll")).filter((record) => periodMonths.includes(record.period));
  const attendance = getScopedRecords(getModule("attendance")).filter((record) => periodMonths.includes(record.period));
  const invoices = getScopedRecords(getModule("invoices")).filter((record) => recordMatchesMonths(record, periodMonths, ["dueDate", "collectionDate", "date"]));
  const personnel = getScopedRecords(getModule("personnel"));
  const documents = getScopedRecords(getModule("presentations"));
  const checklist = getScopedRecords(getModule("documentsChecklist"));
  const tasks = getScopedRecords(getModule("tasks")).filter((record) => record.status !== "Tamamlandı");
  const messages = getScopedRecords(getModule("messages")).filter((record) => record.status !== "Kapandı");
  const reports = getScopedRecords(getModule("reports"));
  const users = getScopedRecords(getModule("users"));
  const automationRules = getScopedRecords(getModule("automationRules"));
  const experienceTests = getScopedRecords(getModule("experienceTests"));
  const dataTemplates = getScopedRecords(getModule("dataTemplates"));
  const backupRecords = canManageRecords() ? getScopedRecords(getModule("backupCenter")) : [];
  const pendingPayroll = payroll.filter((record) => record.publishStatus !== "Personele Açıldı");
  const advancePayroll = payroll.filter((record) => parseMoney(record.advance) > 0);
  const missingDocuments = personnel.filter((person) => !hasDocumentForPerson(person, documents));
  const incompleteChecklist = checklist.filter((record) => record.status !== "Tam");
  const pendingInvoices = invoices.filter((record) => record.status !== "Fatura Kesildi");
  const totalHours = attendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = attendance.reduce((sum, record) => sum + parseHour(record.overtimeHours) + getAttendanceDayOvertime(record), 0);

  return {
    periodLabel: getDashboardPeriodLabel(periodMonths),
    payroll,
    pendingPayroll,
    advancePayroll,
    missingDocuments,
    incompleteChecklist,
    pendingInvoices,
    tasks,
    messages,
    reports,
    users,
    automationRules,
    experienceTests,
    dataTemplates,
    backupRecords,
    totalHours,
    totalOvertime,
  };
}

function buildAssistantAnswer(question = "") {
  const normalized = normalizeText(question);
  const snapshot = getAssistantSnapshot();
  const listNames = (records, key = "person") => records.map((record) => record[key] || record.name || record.company || "-").slice(0, 5).join(", ") || "Kayıt yok";

  if (!normalized.trim()) {
    return `${snapshot.periodLabel} için kısa özet: ${snapshot.pendingPayroll.length} bordro bekliyor, ${snapshot.missingDocuments.length} özlük dosyası kontrol istiyor, ${snapshot.pendingInvoices.length} fatura sonuçlanmamış.`;
  }

  if (normalized.includes("bordro") || normalized.includes("maas") || normalized.includes("maaş")) {
    return snapshot.pendingPayroll.length
      ? `${snapshot.periodLabel} döneminde personele açılmayı bekleyen ${snapshot.pendingPayroll.length} bordro var: ${listNames(snapshot.pendingPayroll)}.`
      : `${snapshot.periodLabel} döneminde bekleyen bordro görünmüyor.`;
  }

  if (normalized.includes("evrak") || normalized.includes("ozluk") || normalized.includes("özlük") || normalized.includes("checklist")) {
    return snapshot.missingDocuments.length || snapshot.incompleteChecklist.length
      ? `${snapshot.missingDocuments.length} personelde özlük dosyası, ${snapshot.incompleteChecklist.length} checklist kaydı kontrol istiyor. İlk kayıtlar: ${listNames(snapshot.missingDocuments, "name")}.`
      : "Özlük ve checklist tarafında kritik eksik görünmüyor.";
  }

  if (normalized.includes("avans")) {
    return snapshot.advancePayroll.length
      ? `Avans görünen ${snapshot.advancePayroll.length} bordro var: ${snapshot.advancePayroll.map((record) => `${record.person || "-"} (${record.advance})`).slice(0, 5).join(", ")}.`
      : "Bu dönem avans kaydı görünmüyor.";
  }

  if (normalized.includes("fatura") || normalized.includes("tahsilat")) {
    return snapshot.pendingInvoices.length
      ? `${snapshot.pendingInvoices.length} fatura sonuçlanmamış: ${snapshot.pendingInvoices.map((record) => `${record.company || record.invoiceNo || "-"} (${record.status || "-"})`).slice(0, 5).join(", ")}.`
      : "Bu dönem bekleyen fatura görünmüyor.";
  }

  if (normalized.includes("mesai") || normalized.includes("saat") || normalized.includes("puantaj")) {
    return `${snapshot.periodLabel} döneminde toplam çalışma ${snapshot.totalHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} saat, toplam mesai ${snapshot.totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} saat.`;
  }

  if (normalized.includes("gorev") || normalized.includes("görev")) {
    return snapshot.tasks.length
      ? `${snapshot.tasks.length} açık görev var: ${snapshot.tasks.map((record) => `${record.title || "-"} (${record.assignee || "-"})`).slice(0, 5).join(", ")}.`
      : "Açık görev görünmüyor.";
  }

  if (normalized.includes("mesaj") || normalized.includes("duyuru")) {
    return snapshot.messages.length
      ? `${snapshot.messages.length} açık mesaj/duyuru var: ${snapshot.messages.map((record) => record.subject || record.type || "-").slice(0, 5).join(", ")}.`
      : "Açık mesaj veya duyuru görünmüyor.";
  }

  if (normalized.includes("gelisim") || normalized.includes("gelişim") || normalized.includes("hazir") || normalized.includes("hazır")) {
    const openTests = snapshot.experienceTests.filter((record) => record.status !== "Tamamlandı").length;
    const readyTemplates = snapshot.dataTemplates.filter((record) => record.status === "Hazır").length;
    const activeRules = snapshot.automationRules.filter((record) => record.status === "AKTİF").length;
    return `Canlı kullanım hazırlığı: ${openTests} kullanıcı testi açık, ${readyTemplates} veri şablonu hazır, ${activeRules} aktif hatırlatma kuralı çalışıyor. Gelişim Merkezi sekmesinden hepsini birlikte takip edebilirsin.`;
  }

  if (normalized.includes("yedek") || normalized.includes("guvenlik") || normalized.includes("güvenlik")) {
    return snapshot.backupRecords.length
      ? `Yedekleme tarafında ${snapshot.backupRecords.length} kayıt var. Son kayıt: ${snapshot.backupRecords[0]?.type || "-"} · ${snapshot.backupRecords[0]?.date || "-"}. Admin olarak Gelişim Merkezi içinden manuel yedek indirebilirsin.`
      : "Yedekleme kaydı görünmüyor. Admin hesabıyla Gelişim Merkezi içinden ilk manuel yedeği almanı öneririm.";
  }

  if (normalized.includes("rapor")) {
    const readyReports = snapshot.reports.filter((record) => record.status === "Hazır").length;
    const draftReports = snapshot.reports.filter((record) => record.status !== "Hazır").length;
    return `Rapor tarafında ${readyReports} hazır, ${draftReports} taslak/kontrol edilecek kayıt var. Raporlar sekmesindeki grafikler bordro, avans, mesai ve fatura verisini otomatik okuyor.`;
  }

  if (normalized.includes("kullanici") || normalized.includes("kullanıcı") || normalized.includes("yetki") || normalized.includes("musteri") || normalized.includes("müşteri")) {
    const roles = snapshot.users.reduce((acc, record) => {
      const role = record.type || "Tanımsız";
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {});
    return `Kullanıcı rolleri: ${Object.entries(roles).map(([role, count]) => `${role}: ${count}`).join(", ") || "kayıt yok"}. Admin ekleme/düzenleme/silme yapar; müşteri ve personel izleme odaklı kalır.`;
  }

  return `Bu soruyu operasyon özeti olarak okudum: ${snapshot.pendingPayroll.length} bordro, ${snapshot.pendingInvoices.length} fatura, ${snapshot.tasks.length} açık görev ve ${snapshot.messages.length} mesaj takipte. Daha net sonuç için “bordro”, “avans”, “fatura”, “evrak”, “mesai” veya “görev” kelimeleriyle sorabilirsin.`;
}

function getMessageTimestamp(record) {
  const date = record.timestamp || `${toInputDate(record.date) || new Date().toISOString().slice(0, 10)}T${record.time || "09:00"}`;
  const time = Date.parse(date);
  return Number.isFinite(time) ? time : 0;
}

function getMessageParticipants() {
  const people = [
    "Tüm ekip",
    "İK Ekibi",
    "Operasyon",
    "Muhasebe",
    ...getScopedRecords(getModule("personnel")).map((record) => record.name).filter(Boolean),
    ...getScopedRecords(getModule("users"))
      .map((record) => `${record.name || ""} ${record.surname || ""}`.trim() || record.email)
      .filter(Boolean),
    ...getScopedRecords(getModule("companies")).map((record) => record.name).filter(Boolean),
  ];
  return [...new Set(people)];
}

function getPortalPresencePeople() {
  const currentName = currentUser?.displayName || currentUser?.email || "Admin";
  const people = [
    {
      name: currentName,
      role: currentUser?.type || "Admin",
      scope: currentUser?.companyName || "Portal",
      online: true,
    },
    ...getScopedRecords(getModule("users")).map((record, index) => ({
      name: `${record.name || ""} ${record.surname || ""}`.trim() || record.email || record.username || "-",
      role: record.type || "Kullanıcı",
      scope: record.companyName || "Portal",
      online: normalizeText(record.status) === "aktif" && index % 2 === 0,
    })),
    ...getScopedRecords(getModule("personnel")).map((record, index) => ({
      name: record.name || "-",
      role: record.role || "Personel",
      scope: record.department || "İK",
      online: normalizeText(record.status) === "aktif" && index % 3 === 0,
    })),
  ];
  const unique = new Map();
  people.forEach((person) => {
    const key = normalizeText(person.name);
    if (key && !unique.has(key)) unique.set(key, person);
  });
  return [...unique.values()];
}

function getRecipientEmails(recipient) {
  const normalizedRecipient = normalizeText(recipient);
  const users = getScopedRecords(getModule("users"));
  const companies = getScopedRecords(getModule("companies"));
  if (!normalizedRecipient || normalizedRecipient === normalizeText("Tüm ekip")) {
    return [...new Set(users.map((record) => record.email).filter(Boolean))];
  }
  if (normalizedRecipient === normalizeText("İK Ekibi")) {
    return [...new Set(users.filter((record) => ["Admin", "Kullanıcı"].includes(record.type)).map((record) => record.email).filter(Boolean))];
  }
  if (normalizedRecipient === normalizeText("Muhasebe")) {
    return [...new Set(users.filter((record) => normalizeText(record.name).includes("muhasebe") || normalizeText(record.email).includes("muhasebe")).map((record) => record.email).filter(Boolean))];
  }

  const matchedUsers = users
    .filter((record) => {
      const fullName = `${record.name || ""} ${record.surname || ""}`.trim();
      return [fullName, record.email, record.username, record.companyName].map(normalizeText).some((value) => value && (value === normalizedRecipient || value.includes(normalizedRecipient) || normalizedRecipient.includes(value)));
    })
    .map((record) => record.email)
    .filter(Boolean);

  const matchedCompanies = companies
    .filter((record) => [record.name, record.authorized].map(normalizeText).some((value) => value && (value === normalizedRecipient || value.includes(normalizedRecipient) || normalizedRecipient.includes(value))))
    .map((record) => record.email)
    .filter(Boolean);

  return [...new Set([...matchedUsers, ...matchedCompanies])];
}

function getRecipientCompanyName(recipient) {
  const normalizedRecipient = normalizeText(recipient);
  if (!normalizedRecipient) return currentUser?.companyName || "";
  const userMatch = getScopedRecords(getModule("users")).find((record) => {
    const fullName = `${record.name || ""} ${record.surname || ""}`.trim();
    return [fullName, record.email, record.username, record.companyName].map(normalizeText).some((value) => value && (value === normalizedRecipient || value.includes(normalizedRecipient) || normalizedRecipient.includes(value)));
  });
  if (userMatch?.companyName) return userMatch.companyName;
  const companyMatch = getScopedRecords(getModule("companies")).find((record) => [record.name, record.authorized].map(normalizeText).some((value) => value && (value === normalizedRecipient || value.includes(normalizedRecipient) || normalizedRecipient.includes(value))));
  return companyMatch?.name || currentUser?.companyName || "";
}

function createEmailNotificationForMessage(messageRecord, emails) {
  const module = getModule("notifications");
  const description = emails.length
    ? `${messageRecord.recipient} için e-posta taslağı hazırlandı: ${emails.join(", ")}`
    : `${messageRecord.recipient} için e-posta adresi bulunamadı, kullanıcı kartını kontrol et.`;
  const notificationRecord = {
    id: createId("mail"),
    date: messageRecord.date,
    type: "E-posta Bildirimi",
    moduleName: "Mesajlar",
    companyName: messageRecord.companyName || currentUser?.companyName || "",
    description,
    priority: messageRecord.priority || "Normal",
    readStatus: "Okunmadı",
    status: emails.length ? "Açık" : "Kontrol Edilecek",
  };
  module.records = [notificationRecord, ...module.records];
  return notificationRecord;
}

function openEmailDraftForMessage(messageRecord, emails) {
  if (!emails.length) return;
  const subject = encodeURIComponent(`[Artı Destek] ${messageRecord.subject || "Yeni mesaj"}`);
  const body = encodeURIComponent(
    [
      `Merhaba,`,
      "",
      `Artı Destek portalında size yeni bir mesaj gönderildi.`,
      "",
      `Gönderen: ${messageRecord.sender || "-"}`,
      `Alıcı: ${messageRecord.recipient || "-"}`,
      `Öncelik: ${messageRecord.priority || "Normal"}`,
      "",
      messageRecord.message || "",
      "",
      "Portala giriş yaparak konuşmayı takip edebilirsiniz.",
    ].join("\n"),
  );
  const link = document.createElement("a");
  link.href = `mailto:${emails.join(",")}?subject=${subject}&body=${body}`;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function getRecordMessageThreadId(record) {
  return record.threadId || `thread-${normalizeText(`${record.subject || record.type || "mesaj"}-${record.sender || ""}-${record.recipient || ""}`).replace(/[^a-z0-9]/g, "-") || record.id}`;
}

function getMessageThreads(records) {
  const groups = new Map();
  records.forEach((record) => {
    const threadId = getRecordMessageThreadId(record);
    if (!groups.has(threadId)) groups.set(threadId, []);
    groups.get(threadId).push(record);
  });

  return [...groups.entries()]
    .map(([id, items]) => {
      const sorted = [...items].sort((a, b) => getMessageTimestamp(a) - getMessageTimestamp(b));
      const latest = sorted[sorted.length - 1] || {};
      const unread = sorted.filter((record) => record.status === "Açık").length;
      const urgent = sorted.some((record) => record.priority === "Acil" || record.priority === "Yüksek");
      return {
        id,
        items: sorted,
        latest,
        unread,
        urgent,
        title: latest.subject || latest.type || "Mesaj",
        recipient: latest.recipient || "Tüm ekip",
      };
    })
    .sort((a, b) => getMessageTimestamp(b.latest) - getMessageTimestamp(a.latest));
}

function sendPortalMessage(form) {
  const module = getModule("messages");
  const formData = new FormData(form);
  const message = String(formData.get("message") || "").trim();
  if (!message) {
    window.alert(trText("Mesaj metni boş olamaz."));
    return;
  }

  const now = new Date();
  const subject = String(formData.get("subject") || "").trim() || "Genel";
  const existingThread = selectedMessageThreadId && getMessageThreads(module.records).some((thread) => thread.id === selectedMessageThreadId);
  if (existingThread) {
    module.records = module.records.map((item) =>
      getRecordMessageThreadId(item) === selectedMessageThreadId && item.status === "Açık" ? { ...item, status: "Cevaplandı", threadId: selectedMessageThreadId } : item,
    );
  }
  const record = {
    id: createId("msg"),
    threadId: existingThread ? selectedMessageThreadId : createId("thread"),
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    timestamp: now.toISOString(),
    type: String(formData.get("type") || "Personel Mesajı"),
    sender: currentUser?.displayName || currentUser?.email || "Admin",
    recipient: String(formData.get("recipient") || "Tüm ekip"),
    companyName: getRecipientCompanyName(String(formData.get("recipient") || "")),
    subject,
    message,
    priority: String(formData.get("priority") || "Normal"),
    status: "Açık",
  };

  module.records = [record, ...module.records];
  selectedMessageThreadId = record.threadId;
  let emailNotificationRecord = null;
  if (formData.get("emailNotify") === "on") {
    const emails = getRecipientEmails(record.recipient);
    emailNotificationRecord = createEmailNotificationForMessage(record, emails);
    openEmailDraftForMessage(record, emails);
  }
  addAudit("Mesaj", module, record, `${record.recipient} alıcısına mesaj gönderildi.`);
  saveRecords();
  if (isRemoteMode && !canManageRecords()) {
    upsertRemotePortalRecord(module, record);
    if (emailNotificationRecord) upsertRemotePortalRecord(getModule("notifications"), emailNotificationRecord);
  }
  renderPayrollCenter();
  renderSideNav();
  renderIcons();
}

function closeMessageThread(threadId) {
  const module = getModule("messages");
  module.records = module.records.map((record) => (getRecordMessageThreadId(record) === threadId ? { ...record, status: "Kapandı", threadId } : record));
  addAudit("Mesaj", module, { id: threadId, subject: threadId }, "Konuşma kapatıldı.");
  selectedMessageThreadId = "";
  saveRecords();
  renderPayrollCenter();
  renderSideNav();
  renderIcons();
}

function renderDashboard() {
  const periodMonths = getDashboardPeriodMonths();
  const periodLabel = getDashboardPeriodLabel(periodMonths);
  const projects = getScopedRecords(getModule("projects")).filter((record) => recordMatchesMonths(record, periodMonths, ["date", "startDate", "endDate"]));
  const invoices = getScopedRecords(getModule("invoices")).filter((record) => recordMatchesMonths(record, periodMonths, ["dueDate", "date"]));
  const personnel = getScopedRecords(getModule("personnel"));
  const attendance = getScopedRecords(getModule("attendance")).filter((record) => periodMonths.includes(record.period));
  const payroll = getScopedRecords(getModule("payroll")).filter((record) => periodMonths.includes(record.period));
  const documents = getScopedRecords(getModule("presentations"));
  const leaves = getScopedRecords(getModule("leaves")).filter((record) => recordMatchesMonths(record, periodMonths, ["startDate", "endDate", "date"]));
  const tasks = getScopedRecords(getModule("tasks")).filter((record) => recordMatchesMonths(record, periodMonths, ["dueDate", "date"]));
  const notifications = getScopedRecords(getModule("notifications")).filter((record) => record.status === "Açık");
  const messages = getScopedRecords(getModule("messages")).filter((record) => record.status !== "Kapandı");
  const checklist = getScopedRecords(getModule("documentsChecklist"));
  const activeProjects = projects.filter((record) => normalizeText(record.status) === "aktif").length;
  const passiveProjects = projects.filter((record) => normalizeText(record.status) === "pasif").length;
  const waitingProjects = projects.filter((record) => normalizeText(record.status) === "beklemede").length;
  const issuedInvoices = invoices.filter((record) => record.status === "Fatura Kesildi").length;
  const pendingInvoices = invoices.filter((record) => record.status !== "Fatura Kesildi").length;
  const totalHours = attendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = attendance.reduce((sum, record) => sum + parseHour(record.overtimeHours), 0);
  const pendingPayroll = payroll.filter((record) => record.payrollStatus !== "Personele Açıldı").length;
  const missingDocuments = personnel.filter(
    (person) => !hasDocumentForPerson(person, documents),
  ).length;
  const pendingLeaves = leaves.filter((record) => record.approval === "Bekliyor").length;
  const openTasks = tasks.filter((record) => record.status !== "Tamamlandı").length;
  const qualityTotals = projects.reduce(
    (summary, project) => {
      const quality = getProjectQuality(project);
      summary.total += quality.total;
      summary.defects += quality.nok + quality.rnok;
      if (quality.defectRate >= 5) summary.risky += 1;
      return summary;
    },
    { total: 0, defects: 0, risky: 0 },
  );
  const qualityRate = qualityTotals.total ? (qualityTotals.defects / qualityTotals.total) * 100 : 0;
  const incompleteChecklist = checklist.filter((record) => record.status !== "Tam").length;
  const overdueInvoices = invoices.filter((record) => record.paymentStatus === "Gecikti").length;
  const alerts = [
    qualityTotals.risky ? `${qualityTotals.risky} projede kalite hata oranı kritik eşiğe yaklaştı.` : "",
    pendingInvoices ? `${pendingInvoices} fatura sonuçlandırılmayı bekliyor.` : "",
    overdueInvoices ? `${overdueInvoices} faturada tahsilat gecikmesi görünüyor.` : "",
    pendingPayroll ? `${pendingPayroll} bordro personele açılmadan bekliyor.` : "",
    missingDocuments ? `${missingDocuments} personelde özlük belgesi kontrolü eksik görünüyor.` : "",
    incompleteChecklist ? `${incompleteChecklist} personelde checklist tamamlanmamış.` : "",
    pendingLeaves ? `${pendingLeaves} izin talebi onay bekliyor.` : "",
    notifications.length ? `${notifications.length} açık bildirim takip bekliyor.` : "",
  ].filter(Boolean);
  const kpis = [
    ["Aktif Proje", activeProjects, "projects", "good"],
    ["Pasif Proje", passiveProjects, "projects", passiveProjects > 0 ? "bad" : "good"],
    ["Bekleyen Proje", waitingProjects, "projects", getKpiState(waitingProjects)],
    ["Kalite Hata Oranı", `%${qualityRate.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`, "quality", qualityRate >= 5 ? "bad" : "good"],
    ["Fatura Kesilen", issuedInvoices, "invoices", "good"],
    ["Kesilmeyen Fatura", pendingInvoices, "invoices", getKpiState(pendingInvoices)],
    ["Geciken Tahsilat", overdueInvoices, "invoices", getKpiState(overdueInvoices)],
    [`${periodLabel} ${trText("Çalışma")}`, `${totalHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "attendance", "neutral"],
    [`${periodLabel} ${trText("Mesai")}`, `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "attendance", "neutral"],
    ["Eksik Özlük", missingDocuments, "presentations", getKpiState(missingDocuments)],
    ["Eksik Checklist", incompleteChecklist, "documentsChecklist", getKpiState(incompleteChecklist)],
    ["Açık Görev", openTasks, "tasks", getKpiState(openTasks)],
    ["Açık Bildirim", notifications.length, "notifications", getKpiState(notifications.length)],
    ["Açık Mesaj", messages.length, "messages", getKpiState(messages.length)],
  ];
  const cards = [
    { id: "payrollCenter", value: pendingPayroll ? `${pendingPayroll}` : "OK", label: "Bordro Merkezi", icon: "grid", color: "purple" },
    { id: "companies", value: getRecordCount("companies"), label: "Firmalar", icon: "building", color: "cyan" },
    { id: "projects", value: `${getRecordCount("projects")} / ${getRecordCount("projects")}`, label: "Projeler / Parçalar", icon: "folder", color: "green" },
    { id: "personnel", value: getPersonnelTotal(), label: "Personeller", icon: "users", color: "orange" },
    { id: "personnel360", value: getPersonnelTotal(), label: "Personel 360", icon: "users", color: "green" },
    { id: "users", value: getRecordCount("users"), label: "Kullanıcılar", icon: "contact", color: "red" },
    { id: "presentations", value: getRecordCount("presentations"), label: "Özlük Belgeleri", icon: "presentation", color: "purple" },
    { id: "attendance", value: getRecordCount("attendance"), label: "Puantaj", icon: "calendar", color: "blue" },
    { id: "leaves", value: getRecordCount("leaves"), label: "İzinler", icon: "calendar", color: "cyan" },
    { id: "trainings", value: getRecordCount("trainings"), label: "Eğitimler", icon: "presentation", color: "green" },
    { id: "assets", value: getRecordCount("assets"), label: "Zimmetler", icon: "folder", color: "purple" },
    { id: "tasks", value: getRecordCount("tasks"), label: "Görevler", icon: "note", color: "blue" },
    { id: "invoices", value: getRecordCount("invoices"), label: "Faturalar", icon: "invoice", color: "cyan" },
    { id: "quality", value: `%${qualityRate.toLocaleString("tr-TR", { maximumFractionDigits: 1 })}`, label: "Kalite Yönetimi", icon: "barChart", color: "green" },
    { id: "documentsChecklist", value: getRecordCount("documentsChecklist"), label: "Evrak Kontrol", icon: "checklist", color: "blue" },
    { id: "notifications", value: notifications.length, label: "Bildirim Merkezi", icon: "bell", color: "red" },
    { id: "messages", value: messages.length, label: "Mesajlar", icon: "message", color: "purple" },
    { id: "reports", value: getRecordCount("reports"), label: "Raporlar", icon: "chart", color: "green" },
    { id: "security", value: getRecordCount("security"), label: "Güvenlik", icon: "lock", color: "purple" },
    { id: "settings", value: getRecordCount("settings"), label: "Kurumsal Ayarlar", icon: "settings", color: "dark-green" },
    { id: "payroll", value: getRecordCount("payroll"), label: "Bordro", icon: "invoice", color: "dark-green" },
  ];
  const calmDashboardCards = ["payrollCenter", "personnel", "payroll", "notifications", "messages", "reports"];
  const visibleCards = cards.filter((card) => {
    const module = getModule(card.id);
    return calmDashboardCards.includes(card.id) && canAccessModule(module) && !module.dashboardHidden;
  });
  const monthlyBreakdown = periodMonths.map((month) => {
    const monthProjects = getScopedRecords(getModule("projects")).filter((record) => recordMatchesMonths(record, [month], ["date", "startDate", "endDate"]));
    const monthInvoices = getScopedRecords(getModule("invoices")).filter((record) => recordMatchesMonths(record, [month], ["dueDate", "date"]));
    const monthAttendance = getScopedRecords(getModule("attendance")).filter((record) => record.period === month);
    return {
      month,
      projects: monthProjects.length,
      invoices: monthInvoices.length,
      hours: monthAttendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0),
    };
  });

  document.querySelector("#pageContent").innerHTML = `
    <section class="executive-dashboard">
      <div class="executive-hero">
        <div class="executive-headline">
          <span>${escapeHtml(trText("Yönetici Özeti"))}</span>
          <div class="dashboard-period-controls">
          <label class="dashboard-month-picker">
            ${escapeHtml(trText("Ay"))}
            <select id="dashboardMonthSelect">
              ${getDashboardMonths()
                .map((month) => `<option value="${escapeHtml(month)}" ${month === dashboardMonth ? "selected" : ""}>${escapeHtml(month)}</option>`)
                .join("")}
            </select>
          </label>
          <label class="dashboard-month-picker">
            ${escapeHtml(trText("Aralık"))}
            <select id="dashboardRangeSelect">
              ${dashboardRangeOptions
                .map(([value, label]) => `<option value="${escapeHtml(value)}" ${value === dashboardRange ? "selected" : ""}>${escapeHtml(trText(label))}</option>`)
                .join("")}
            </select>
          </label>
          </div>
        </div>
        <h2>${escapeHtml(trText("Artı Destek operasyon görünümü"))}</h2>
        <p>${escapeHtml(periodLabel)} ${currentLanguage === "en" ? "period totals for projects, HR, payroll and finance are shown together." : "döneminde projeler, insan kaynakları, bordro ve finans süreçlerini tek ekranda izleyin."}</p>
      </div>
      <div class="kpi-grid">
        ${kpis
          .filter(([, , moduleId]) => canAccessModule(getModule(moduleId)))
          .map(
            ([label, value, moduleId, state]) => `
              <button class="kpi-card ${state}" type="button" data-nav="${moduleId}">
                <strong>${escapeHtml(value)}</strong>
                <span>${escapeHtml(trText(label))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="monthly-breakdown">
        ${monthlyBreakdown
          .map(
            (item) => `
              <div>
                <strong>${escapeHtml(item.month)}</strong>
                <span>${escapeHtml(trText("Projeler"))}: ${escapeHtml(item.projects)}</span>
                <span>${escapeHtml(trText("Faturalar"))}: ${escapeHtml(item.invoices)}</span>
                <span>${escapeHtml(trText("Çalışma"))}: ${escapeHtml(item.hours.toLocaleString("tr-TR", { maximumFractionDigits: 1 }))} sa</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="ops-grid">
        <section class="ops-panel">
          <h3>${escapeHtml(trText("Öncelikli Uyarılar"))}</h3>
          ${
            alerts.length
              ? alerts.map((alert) => `<p class="alert-row">${escapeHtml(alert)}</p>`).join("")
              : `<p class="empty-state">${escapeHtml(trText("Kritik uyarı görünmüyor."))}</p>`
          }
        </section>
        <section class="ops-panel">
          <h3>${escapeHtml(trText("Son İşlemler"))}</h3>
          ${
            getModule("audit").records.length
              ? getModule("audit").records
                  .slice(0, 4)
                  .map((record) => `<p><b>${escapeHtml(record.action)}</b> ${escapeHtml(record.recordTitle)} <span>${escapeHtml(record.date)}</span></p>`)
                  .join("")
              : `<p class="empty-state">${escapeHtml(trText("Henüz işlem kaydı yok."))}</p>`
          }
        </section>
      </div>
      <div class="corporate-lanes">
        ${[
          ["Kalite", qualityRate >= 5 ? "Riskli" : "Kontrol altında", "quality", qualityRate >= 5 ? "bad" : "good"],
          ["İK / HR", missingDocuments || incompleteChecklist ? "Evrak takibi var" : "Tamam", "personnel360", missingDocuments || incompleteChecklist ? "bad" : "good"],
          ["Bordro", pendingPayroll ? "Kontrol edilecek" : "Yayınlandı", "payrollCenter", pendingPayroll ? "bad" : "good"],
          ["Finans", overdueInvoices ? "Tahsilat gecikti" : "Normal", "invoices", overdueInvoices ? "bad" : "good"],
          ["Raporlama", "PDF / Excel çıktıları aktif", "reports", "good"],
        ]
          .filter(([, , moduleId]) => canAccessModule(getModule(moduleId)))
          .map(
            ([title, text, moduleId, state]) => `
              <button class="lane-card ${state}" type="button" data-nav="${moduleId}">
                <span class="nav-icon" style="--module-color:${moduleAccentColors[moduleId] || "#0d3154"}" data-icon="${getModule(moduleId).icon}"></span>
                <strong>${escapeHtml(trText(title))}</strong>
                <small>${escapeHtml(trText(text))}</small>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="dashboard-grid">
      ${visibleCards
        .map(
          (card) => `
            <article class="dash-card ${card.color}" style="--module-color:${moduleAccentColors[card.id] || "#0d3154"}">
              <div class="inner">
                <h2>${escapeHtml(card.value)}</h2>
                <p>${escapeHtml(trText(card.label))}</p>
                <span class="card-icon" data-icon="${card.icon}"></span>
              </div>
              <button type="button" data-nav="${card.id}">${escapeHtml(trText("Yönet"))} <span>➜</span></button>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderPayrollCenter() {
  const periodMonths = getDashboardPeriodMonths();
  const periodLabel = getDashboardPeriodLabel(periodMonths);
  const monthName = getMonthName(dashboardMonth);
  const personnel = getScopedRecords(getModule("personnel"));
  const activePersonnel = personnel.filter((record) => String(record.status).toLocaleUpperCase("tr") !== "PASİF");
  const hired = personnel.filter((record) => recordMatchesMonths(record, periodMonths, ["startDate"])).length;
  const left = personnel.filter((record) => recordMatchesMonths(record, periodMonths, ["exitDate"])).length;
  const payroll = getScopedRecords(getModule("payroll")).filter((record) => periodMonths.includes(record.period));
  const attendance = getScopedRecords(getModule("attendance")).filter((record) => periodMonths.includes(record.period));
  const finalPayroll = payroll.filter((record) => record.payrollStatus === "Personele Açıldı" || record.managementApproval === "Onaylandı").length;
  const openedPayroll = payroll.filter((record) => record.publishStatus === "Personele Açıldı").length;
  const totalNet = payroll.reduce((sum, record) => sum + parseMoney(record.netSalary), 0);
  const totalAdvance = payroll.reduce((sum, record) => sum + parseMoney(record.advance), 0);
  const totalDeduction = payroll.reduce((sum, record) => sum + parseMoney(record.deduction), 0);
  const totalHours = attendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = attendance.reduce((sum, record) => sum + parseHour(record.overtimeHours) + getAttendanceDayOvertime(record), 0);
  const payrollProgress = payroll.length ? Math.round((finalPayroll / payroll.length) * 100) : 0;
  const workplaceNames = [...new Set(getScopedRecords(getModule("companies")).map((record) => record.name).filter(Boolean))];
  const companies = getScopedRecords(getModule("companies"));
  const tasks = getScopedRecords(getModule("tasks")).filter((record) => record.status !== "Tamamlandı");
  const reports = getScopedRecords(getModule("reports"));
  const messages = getScopedRecords(getModule("messages")).filter((record) => record.status !== "Kapandı");
  const notificationRecords = getScopedRecords(getModule("notifications"));
  const unreadNotifications = notificationRecords.filter((record) => record.readStatus !== "Okundu" && record.status !== "Tamamlandı");
  const urgentNotifications = notificationRecords.filter((record) => record.priority === "Acil" && record.status !== "Tamamlandı");
  const emailQueueRecords = notificationRecords.filter((record) => record.type === "E-posta Bildirimi" && record.status !== "Tamamlandı");
  const invoices = getScopedRecords(getModule("invoices")).filter((record) => recordMatchesMonths(record, periodMonths, ["dueDate", "collectionDate", "date"]));
  const calendarRecords = getScopedRecords(getModule("payrollCalendar")).filter((record) => periodMonths.includes(record.period) || recordMatchesMonths(record, periodMonths, ["date"]));
  const allCalendarRecords = getScopedRecords(getModule("payrollCalendar"));
  const legislationRecords = getScopedRecords(getModule("legislation"));
  const automationRecords = getScopedRecords(getModule("automationRules"));
  const experienceRecords = getScopedRecords(getModule("experienceTests"));
  const templateRecords = getScopedRecords(getModule("dataTemplates"));
  const backupRecords = canManageRecords() ? getScopedRecords(getModule("backupCenter")) : [];
  const securityRecords = canManageRecords() ? getScopedRecords(getModule("security")) : [];
  const settingsRecords = canManageRecords() ? getScopedRecords(getModule("settings")) : [];
  const registryRecords = getScopedRecords(getModule("employeeRegistry"));
  const performanceRecords = getScopedRecords(getModule("performanceReviews")).filter((record) => !record.period || periodMonths.includes(record.period));
  const recruitmentRecords = getScopedRecords(getModule("recruitment")).filter((record) => record.status !== "Tamamlandı" || recordMatchesMonths(record, periodMonths, ["interviewDate"]));
  const bankBesRecords = getScopedRecords(getModule("bankBes"));
  const formRecords = getScopedRecords(getModule("matbuForms"));
  const leaveRecords = getScopedRecords(getModule("leaves"));
  const monthlyLeaves = leaveRecords.filter((record) => recordMatchesMonths(record, periodMonths, ["startDate", "endDate", "date"]));
  const pendingLeaves = monthlyLeaves.filter((record) => record.approval === "Bekliyor").length;
  const accidentRecords = getScopedRecords(getModule("accidentChecks")).filter((record) => recordMatchesMonths(record, periodMonths, ["date"]));
  const todayIso = toIsoDate(new Date());
  const todayAccidentCheck = getScopedRecords(getModule("accidentChecks")).find((record) => toInputDate(record.date) === todayIso && record.accidentStatus === "Kontrol Edildi");
  const trialAlerts = personnel
    .map((person) => ({ person, employment: getPersonEmploymentInsights(person) }))
    .filter((item) => item.employment.trialRemaining >= 0 && item.employment.trialRemaining <= 7);
  const selectedCompanyName = selectedRatingCompany === "all" ? "" : selectedRatingCompany;
  const companyRatingRows = getCompanyPersonnelRatings(selectedCompanyName);
  const allPayrollRecords = getScopedRecords(getModule("payroll"));
  const allAttendanceRecords = getScopedRecords(getModule("attendance"));
  const documentRecords = getScopedRecords(getModule("presentations"));
  const checklistRecords = getScopedRecords(getModule("documentsChecklist"));
  if (!selectedReportPerson || !personnel.some((record) => record.name === selectedReportPerson)) {
    selectedReportPerson = personnel[0]?.name || payroll[0]?.person || "";
  }
  const avgPerformance = performanceRecords.length
    ? Math.round(performanceRecords.reduce((sum, record) => sum + Number(record.score || 0), 0) / performanceRecords.length)
    : 0;
  const besCount = bankBesRecords.filter((record) => record.besStatus === "Var").length;
  const bankPaidCount = bankBesRecords.filter((record) => record.paymentStatus === "Ödendi").length;
  const overdueInvoices = invoices.filter((record) => record.paymentStatus !== "Ödendi" && isDueOrOverdue(record.dueDate));
  const payrollPaymentAlerts = payroll.filter((record) => isDueOrOverdue(record.paymentDate) && record.publishStatus !== "Personele Açıldı");
  const advanceAlerts = payroll.filter((record) => parseMoney(record.advance) > 0 && record.payrollStatus !== "Personele Açıldı");
  const calendarDueAlerts = calendarRecords.filter((record) => isDueOrOverdue(record.date) && !["Tamamlandı", "Devam Ediyor"].includes(record.status));
  const events = {
    5: ["Maaş Ödeme"],
    10: ["Puantaj Teslim"],
    15: ["SGK Son Gün"],
    19: ["Resmi Tatil"],
    25: ["Müşteri Onayı"],
    28: ["Bordro Kapanış"],
  };
  calendarRecords.forEach((record) => {
    const date = toInputDate(record.date);
    const day = Number(date.split("-")[2]);
    if (!day) return;
    events[day] = [...(events[day] || []), record.event || "İşlem"];
  });
  const days = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    const date = getDateFromDashboardDay(day);
    const weekend = date.getDay() === 0 || date.getDay() === 6;
    return { day, weekend, events: events[day] || [] };
  });
  const processSteps = [
    ["Puantaj Teslim", attendance.length, attendance.length ? "done" : "waiting", "calendar"],
    ["İK Kontrol", payroll.filter((record) => record.hrApproval === "Onaylandı").length, "done", "operationsHub"],
    ["Muhasebe", payroll.filter((record) => record.accountingApproval === "Onaylandı").length, "done", "operationsHub"],
    ["Admin Onayı", payroll.filter((record) => record.managementApproval === "Onaylandı").length, "done", "operationsHub"],
    ["Personele Yayın", openedPayroll, openedPayroll === payroll.length && payroll.length ? "done" : "waiting", "operationsHub"],
  ];
  const kpis = [
    ["Çalışan", personnel.length, "users"],
    ["İşe Alınan", hired, "contact"],
    ["İşten Ayrılan", left, "contact"],
    ["Mevcut Çalışan", activePersonnel.length, "users"],
    ["Hesaplanmış / Final", `${finalPayroll}/${Math.max(payroll.length, 1)}`, "checklist"],
    ["Devir", activePersonnel.length, "send"],
  ];
  const compactRows = (headers, rows) => `
    <div class="bordro-table">
      <table>
        <thead><tr>${headers.map((header) => `<th>${escapeHtml(trText(header))}</th>`).join("")}</tr></thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map(
                    (row) => `
                      <tr>${row.map((cell) => `<td>${escapeHtml(trText(String(cell || "-")))}</td>`).join("")}</tr>
                    `,
                  )
                  .join("")
              : `<tr><td colspan="${headers.length}">${escapeHtml(trText("Kayıt bulunamadı."))}</td></tr>`
          }
        </tbody>
      </table>
    </div>
  `;
  const crudPanel = (title, moduleId, columnKeys, sourceRecords = getScopedRecords(getModule(moduleId))) => {
    const module = getModule(moduleId);
    const visibleColumns = columnKeys
      .map((key) => module.columns?.find(([columnKey]) => columnKey === key))
      .filter(Boolean);
    const canEdit = canManageRecords() && !module.noActions;

    return `
      <article class="bordro-panel crud-panel">
        <header>
          <div>
            <b>${escapeHtml(trText(module.title))}</b>
            <h3>${escapeHtml(trText(title))}</h3>
          </div>
          <div class="panel-tools">
            ${canEdit ? `<button type="button" data-action="add" data-module="${moduleId}">${escapeHtml(trText("Ekle"))}</button>` : ""}
            <button type="button" data-action="export" data-module="${moduleId}">${escapeHtml(trText("EXCEL"))}</button>
            <button type="button" data-action="export-pdf" data-module="${moduleId}">${escapeHtml(trText("PDF"))}</button>
          </div>
        </header>
        <div class="bordro-table">
          <table>
            <thead>
              <tr>
                ${canEdit ? `<th>${escapeHtml(trText("İşlemler"))}</th>` : ""}
                ${visibleColumns.map(([, label]) => `<th>${escapeHtml(trText(label))}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${
                sourceRecords.length
                  ? sourceRecords
                      .map(
                        (record) => `
                          <tr>
                            ${
                              canEdit
                                ? `<td>
                                    <span class="actions">
                                      <button class="icon-action" type="button" title="${escapeHtml(trText("Düzenle"))}" data-action="edit" data-module="${moduleId}" data-id="${record.id}"><span data-icon="edit"></span></button>
                                      <button class="icon-action" type="button" title="${escapeHtml(trText("Sil"))}" data-action="delete" data-module="${moduleId}" data-id="${record.id}"><span data-icon="trash"></span></button>
                                      ${
                                        moduleId === "payroll"
                                          ? `
                                            <button class="icon-action" type="button" title="${escapeHtml(trText("Muhasebe Onayı"))}" data-action="payroll-accounting" data-id="${record.id}"><span data-icon="check"></span></button>
                                            <button class="icon-action" type="button" title="${escapeHtml(trText("Yönetici Onayı"))}" data-action="payroll-management" data-id="${record.id}"><span data-icon="check"></span></button>
                                            <button class="icon-action" type="button" title="${escapeHtml(trText("Personele Yayın"))}" data-action="payroll-publish" data-id="${record.id}"><span data-icon="send"></span></button>
                                          `
                                          : ""
                                      }
                                      ${
                                        ["leaves", "tasks", "notifications", "invoices"].includes(moduleId)
                                          ? `<button class="icon-action" type="button" title="${escapeHtml(trText("Onayla"))}" data-action="approval-complete" data-module="${moduleId}" data-id="${record.id}"><span data-icon="check"></span></button>`
                                          : ""
                                      }
                                      ${
                                        moduleId === "notifications"
                                          ? `<button class="icon-action" type="button" title="${escapeHtml(trText("Okundu İşaretle"))}" data-action="notification-read" data-module="${moduleId}" data-id="${record.id}"><span data-icon="eye"></span></button>`
                                          : ""
                                      }
                                    </span>
                                  </td>`
                                : ""
                            }
                            ${visibleColumns
                              .map(([key]) => {
                                const value = moduleId === "attendance" && key === "totalHours" ? calculateAttendanceTotal(record) : getExportValue(record[key]);
                                return `<td>${escapeHtml(trText(String(value || "-")))}</td>`;
                              })
                              .join("")}
                          </tr>
                        `,
                      )
                      .join("")
                  : `<tr><td colspan="${visibleColumns.length + (canEdit ? 1 : 0)}">${escapeHtml(trText("Kayıt bulunamadı."))}</td></tr>`
              }
            </tbody>
          </table>
        </div>
      </article>
    `;
  };
  const quickActions = `
    <section class="bordro-actions">
      <h3>${escapeHtml(trText("Hızlı İşlemler"))}</h3>
      <button type="button" data-payroll-center-tab="setup">${escapeHtml(trText("Kurulum & Kontrol"))}</button>
      <button type="button" data-payroll-center-tab="operationsHub">${escapeHtml(trText("İK & Bordro İşlemleri"))}</button>
      <button type="button" data-payroll-center-tab="calendar">${escapeHtml(trText("Takvimi Aç"))}</button>
      <button type="button" data-payroll-center-tab="forms">${escapeHtml(trText("Matbu Formlar"))}</button>
      <button type="button" data-payroll-center-tab="operationsHub">${escapeHtml(trText("Günlük Kontrol"))}</button>
      <button type="button" data-payroll-center-tab="operationsHub">${escapeHtml(trText("Bordro Hesaplayıcı"))}</button>
      <button type="button" data-payroll-center-tab="reports">${escapeHtml(trText("Rapor Hazırla"))}</button>
      <button type="button" data-payroll-center-tab="redBulletin">${escapeHtml(trText("KVKK & Bülten"))}</button>
    </section>
  `;
  const selfServicePayroll = isPersonnelUser()
    ? payroll.filter((record) => recordBelongsToPersonnel(getModule("payroll"), record))
    : payroll;
  const selfServiceDocuments = isPersonnelUser()
    ? documentRecords.filter((record) => recordBelongsToPersonnel(getModule("presentations"), record))
    : documentRecords;
  const selfServiceLeaves = isPersonnelUser()
    ? getScopedRecords(getModule("leaves")).filter((record) => recordBelongsToPersonnel(getModule("leaves"), record))
    : getScopedRecords(getModule("leaves"));
  const selfServiceCards = `
    <section class="self-service-grid">
      ${selfServicePayroll
        .map(
          (record) => `
            <article class="self-service-card">
              <div>
                <span>${escapeHtml(record.period || "-")}</span>
                <h3>${escapeHtml(record.person || "-")}</h3>
                <p>${escapeHtml(`${trText("Net Maaş")}: ${record.netSalary || "-"} · ${trText("Avans")}: ${record.advance || "0 TL"}`)}</p>
              </div>
              <div class="self-service-actions">
                <strong class="${record.publishStatus === "Personele Açıldı" ? "status-green" : "status-red"}">${escapeHtml(trText(record.publishStatus || "Kapalı"))}</strong>
                <button type="button" data-action="payroll-seen" data-id="${record.id}">${escapeHtml(trText("Bordro görüntülendi"))}</button>
                <button type="button" data-action="payroll-publish" data-id="${record.id}">${escapeHtml(trText("Bordro onaylandı"))}</button>
              </div>
            </article>
          `,
        )
        .join("") || `<p class="empty-state">${escapeHtml(trText("Kayıt bulunamadı."))}</p>`}
    </section>
  `;
  const personSelfServicePanel = `
    <section class="self-service-hub">
      <article class="bordro-panel">
        <header>
          <div>
            <b>${escapeHtml(trText("Personel Self-Servis"))}</b>
            <h3>${escapeHtml(currentUser?.displayName || trText("Personel"))}</h3>
          </div>
        </header>
        <div class="self-service-mini-grid">
          ${[
            ["Bordro", selfServicePayroll.length, "invoice"],
            ["Özlük Belgeleri", selfServiceDocuments.length, "presentation"],
            ["İzinler", selfServiceLeaves.length, "calendar"],
            ["Mesajlar", messages.length, "message"],
          ]
            .map(
              ([label, value, icon]) => `
                <button type="button" data-payroll-center-tab="${label === "Mesajlar" ? "assistant" : label === "Bordro" ? "operationsHub" : "operationsHub"}">
                  <span data-icon="${icon}"></span>
                  <strong>${escapeHtml(String(value))}</strong>
                  <small>${escapeHtml(trText(label))}</small>
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
      ${selfServiceCards}
    </section>
  `;
  const customerPortalPanel = `
    <section class="customer-portal-grid">
      <article class="bordro-panel customer-hero-panel">
        <header>
          <div>
            <b>${escapeHtml(trText("Müşteri Portalı"))}</b>
            <h3>${escapeHtml(currentUser?.companyName || currentUser?.displayName || trText("Sade müşteri görünümü"))}</h3>
            <p>${escapeHtml(trText("Kendi projelerini, faturalarını, raporlarını ve mesajlarını tek ekranda izler."))}</p>
          </div>
        </header>
        <div class="self-service-mini-grid">
          ${[
            ["Projeler", getScopedRecords(getModule("projects")).length, "folder", "operationsHub"],
            ["Faturalar", getScopedRecords(getModule("invoices")).length, "invoice", "operationsHub"],
            ["Raporlar", reports.length, "chart", "reports"],
            ["Mesajlar", messages.length, "message", "assistant"],
          ]
            .map(
              ([label, value, icon, tab]) => `
                <button type="button" data-payroll-center-tab="${tab}">
                  <span data-icon="${icon}"></span>
                  <strong>${escapeHtml(String(value))}</strong>
                  <small>${escapeHtml(trText(label))}</small>
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
      ${crudPanel("Müşteri Projeleri", "projects", ["code", "company", "part", "problem", "status", "invoiceStatus"], getScopedRecords(getModule("projects")))}
      ${crudPanel("Müşteri Faturaları", "invoices", ["invoiceNo", "company", "amount", "paymentStatus", "status"], getScopedRecords(getModule("invoices")))}
    </section>
  `;
  const calendarPanel = `
    <article class="bordro-panel calendar-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Takvimler"))}</b>
          <h3>${escapeHtml(monthName)}</h3>
        </div>
        <div class="calendar-legend">
          <span class="today">${escapeHtml(trText("Bugün"))}</span>
          <span class="holiday">${escapeHtml(trText("Tatil Günleri"))}</span>
          <span class="weekend">${escapeHtml(trText("Haftasonu"))}</span>
        </div>
      </header>
      <div class="mini-calendar">
        ${["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => `<strong>${escapeHtml(currentLanguage === "en" ? trText(day) : day)}</strong>`).join("")}
        ${days
          .map(
            ({ day, weekend, events: dayEvents }) => `
              <button class="${weekend ? "weekend" : ""} ${dayEvents.length ? "has-event" : ""}" type="button" data-calendar-day="${day}">
                <small>${day}</small>
                ${dayEvents.map((event) => `<span>${escapeHtml(trText(event))}</span>`).join("")}
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const periodSummaryPanel = `
    <aside class="bordro-panel authority-panel">
      <header>
        <div>
          <b>${escapeHtml(workplaceNames[0] || "Artı Destek Hizmetleri A.Ş.")}</b>
          <h3>${escapeHtml(trText("Dönem Özeti"))}</h3>
        </div>
        <button type="button" data-payroll-center-tab="reports">${escapeHtml(trText("Raporlar"))}</button>
      </header>
      <label class="workplace-filter">
        ${escapeHtml(trText("İş Yeri Listesi"))}
        <select>
          <option>${escapeHtml(trText("Tümü"))}</option>
          ${workplaceNames.slice(0, 8).map((name) => `<option>${escapeHtml(name)}</option>`).join("")}
        </select>
      </label>
      <div class="process-flow">
        ${processSteps
          .map(
            ([label, count, state, nav]) => `
              <button class="${state}" type="button" data-payroll-center-tab="${nav}">
                <span>${escapeHtml(trText(label))}</span>
                <strong>${escapeHtml(count)}</strong>
              </button>
            `,
          )
          .join("")}
      </div>
      ${compactRows(
        ["Başlık", "Durum"],
        [
          ["Net Bordro", formatMoney(totalNet)],
          ["Banka Ödemesi", `${bankPaidCount}/${Math.max(bankBesRecords.length, 1)}`],
          ["BES Kaydı", `${besCount}/${Math.max(bankBesRecords.length, 1)}`],
          ["Kesilmeyen Fatura", invoices.filter((record) => record.status !== "Fatura Kesildi").length],
          ["Açık Görev", tasks.length],
        ],
      )}
    </aside>
  `;
  const renderStatusPill = (label, type = "neutral") => `<span class="ad-status-pill ${type}">${escapeHtml(trText(label))}</span>`;
  const getPersonRisk = (person) => {
    const personPayroll = payroll.filter((record) => personMatchesRecord(person, record));
    const personAttendance = attendance.filter((record) => personMatchesRecord(person, record));
    const personTasks = tasks.filter((record) => personMatchesRecord(person, record));
    const checklist = checklistRecords.find((record) => personMatchesRecord(person, record));
    const checklistCompletion = checklist ? getChecklistCompletion(checklist) : { rate: hasDocumentForPerson(person, documentRecords) ? 100 : 0 };
    const personAdvance = personPayroll.reduce((sum, record) => sum + parseMoney(record.advance), 0);
    const personDeduction = personPayroll.reduce((sum, record) => sum + parseMoney(record.deduction), 0);
    const personOvertime = personAttendance.reduce((sum, record) => sum + parseHour(record.overtimeHours) + getAttendanceDayOvertime(record), 0);
    const personHours = personAttendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
    const details = [];
    let score = 8;
    if (checklistCompletion.rate < 100) {
      score += 28;
      details.push(`${trText("Özlük")}: %${checklistCompletion.rate}`);
    }
    if (!hasDocumentForPerson(person, documentRecords)) {
      score += 16;
      details.push(trText("Belge yükü bekliyor"));
    }
    if (personAdvance > 0) {
      score += Math.min(18, personAdvance / 2500);
      details.push(`${trText("Avans")}: ${formatMoney(personAdvance)}`);
    }
    if (personDeduction > 0) {
      score += Math.min(16, personDeduction / 2000);
      details.push(`${trText("Kesinti")}: ${formatMoney(personDeduction)}`);
    }
    if (personOvertime >= 20) {
      score += 18;
      details.push(`${trText("Mesai")}: ${personOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`);
    }
    if (personHours > 0 && personHours < 120) {
      score += 12;
      details.push(`${trText("Düşük saat")}: ${personHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`);
    }
    if (personTasks.length) {
      score += Math.min(16, personTasks.length * 6);
      details.push(`${trText("Açık görev")}: ${personTasks.length}`);
    }
    const finalScore = Math.min(100, Math.round(score));
    return {
      person,
      score: finalScore,
      tone: finalScore >= 70 ? "danger" : finalScore >= 40 ? "warning" : "good",
      detail: details.slice(0, 3).join(" · ") || trText("Kontrol altında"),
      overtime: personOvertime,
      advance: personAdvance,
      deduction: personDeduction,
    };
  };
  const personRiskItems = activePersonnel.map(getPersonRisk).sort((a, b) => b.score - a.score);
  const portalHealthScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100 -
          Math.min(32, personRiskItems.filter((item) => item.tone === "danger").length * 8) -
          Math.min(18, overdueInvoices.length * 5) -
          Math.min(18, payrollPaymentAlerts.length * 5) -
          Math.min(16, calendarDueAlerts.length * 4) -
          Math.min(16, tasks.length * 3),
      ),
    ),
  );
  const topPriorityItems = [
    ...personRiskItems.slice(0, 3).map((item) => ({
      title: item.person.name || "-",
      detail: item.detail,
      score: item.score,
      tone: item.tone,
      tab: "operationsHub",
    })),
    ...payrollPaymentAlerts.slice(0, 2).map((record) => ({
      title: record.person || trText("Maaş ödeme alarmı"),
      detail: `${record.period || periodLabel} · ${record.paymentDate || "-"}`,
      score: 86,
      tone: "danger",
      tab: "operationsHub",
    })),
    ...overdueInvoices.slice(0, 2).map((record) => ({
      title: record.company || record.invoiceNo || trText("Geciken tahsilat"),
      detail: `${formatMoney(parseMoney(record.amount))} · ${record.dueDate || "-"}`,
      score: 82,
      tone: "danger",
      tab: "operationsHub",
    })),
  ].sort((a, b) => b.score - a.score).slice(0, 6);
  const nextPayrollEstimate = totalNet + Math.round((totalNet / Math.max(periodMonths.length, 1)) * 0.04);
  const executiveBriefPanel = `
    <section class="executive-brief-grid">
      <article class="bordro-panel morning-brief">
        <header>
          <div>
            <b>${escapeHtml(trText("Sabah Yönetici Özeti"))}</b>
            <h3>${escapeHtml(trText("Bugün önce bunlara bak."))}</h3>
          </div>
          <strong class="${portalHealthScore >= 75 ? "good" : portalHealthScore >= 50 ? "warning" : "danger"}">${portalHealthScore}</strong>
        </header>
        <div class="brief-list">
          ${
            topPriorityItems.length
              ? topPriorityItems
                  .map(
                    (item, index) => `
                      <button class="${item.tone}" type="button" data-payroll-center-tab="${item.tab}">
                        <small>${String(index + 1).padStart(2, "0")}</small>
                        <span>
                          <strong>${escapeHtml(item.title)}</strong>
                          <em>${escapeHtml(item.detail)}</em>
                        </span>
                        <b>${escapeHtml(String(item.score))}</b>
                      </button>
                    `,
                  )
                  .join("")
              : `<p class="empty-state">${escapeHtml(trText("Bugün kritik işlem yok. Sistem sakin görünüyor."))}</p>`
          }
        </div>
      </article>
      <article class="bordro-panel prediction-panel">
        <header>
          <div>
            <b>${escapeHtml(trText("Sürpriz: Akıllı Tahmin"))}</b>
            <h3>${escapeHtml(trText("Bir sonraki dönem için erken sinyal"))}</h3>
          </div>
        </header>
        <div class="prediction-orbit">
          <strong>${escapeHtml(formatMoney(nextPayrollEstimate))}</strong>
          <span>${escapeHtml(trText("Tahmini net bordro yükü"))}</span>
        </div>
        ${compactRows(
          ["Sinyal", "Yorum"],
          [
            ["Mesai Baskısı", totalOvertime > 30 ? "Artıyor" : "Normal"],
            ["Avans Riski", totalAdvance > 0 ? "Takip edilmeli" : "Düşük"],
            ["Evrak Kontrol", personRiskItems.some((item) => item.detail.includes("Özlük")) ? "Açık kayıt var" : "Tamam"],
          ],
        )}
      </article>
    </section>
  `;
  const riskRadarPanel = `
    <section class="risk-radar-grid">
      <article class="bordro-panel risk-radar-card">
        <header>
          <div>
            <b>${escapeHtml(trText("Akıllı Risk Radarı"))}</b>
            <h3>${escapeHtml(trText("Personel, bordro, avans ve evrak riski tek skorda."))}</h3>
          </div>
          <button type="button" data-payroll-center-tab="reports">${escapeHtml(trText("Raporla"))}</button>
        </header>
        <div class="risk-radar-list">
          ${personRiskItems
            .slice(0, 5)
            .map(
              (item) => `
                <button class="${item.tone}" type="button" data-payroll-center-tab="operationsHub">
                  <span style="--risk:${item.score}%"><i></i></span>
                  <strong>${escapeHtml(item.person.name || "-")}</strong>
                  <small>${escapeHtml(item.detail)}</small>
                  <b>${escapeHtml(String(item.score))}</b>
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="bordro-panel differentiator-panel">
        <header>
          <div>
            <b>${escapeHtml(trText("Sürpriz: Yönetim Nabzı"))}</b>
            <h3>${escapeHtml(trText("Bu panelin farkı"))}</h3>
          </div>
        </header>
        <div class="differentiator-list">
          ${[
            ["Önce uyarır", "Sadece tablo değil, riskleri sıraya koyar."],
            ["Kişi bazlı düşünür", "Maaş, avans, evrak, mesai ve görevleri tek kişide birleştirir."],
            ["Karar verir gibi gösterir", "Bugün neye bakacağını otomatik öne çıkarır."],
          ]
            .map(
              ([title, text]) => `
                <div>
                  <span data-icon="check"></span>
                  <strong>${escapeHtml(trText(title))}</strong>
                  <small>${escapeHtml(trText(text))}</small>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
  const payrollCalculatorPanel = `
    <article class="bordro-panel payroll-calculator-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Brüt / Net Hesaplama"))}</b>
          <h3>${escapeHtml(trText("Bordro Hesaplayıcı"))}</h3>
        </div>
        <a href="https://www.verginet.net/" target="_blank" rel="noreferrer">${escapeHtml(trText("VergiNET referansı"))}</a>
      </header>
      <div class="salary-calculator" id="salaryCalculator">
        <label>${escapeHtml(trText("Brüt Ücret"))}<input id="calcGrossSalary" inputmode="decimal" placeholder="50.000 TL" /></label>
        <label>${escapeHtml(trText("Net Ücret"))}<input id="calcNetSalary" inputmode="decimal" placeholder="37.000 TL" /></label>
        <label>${escapeHtml(trText("Birikmiş Vergi Matrahı"))}<input id="calcCumulativeTaxBase" inputmode="decimal" placeholder="128.000 TL" /></label>
        <label>${escapeHtml(trText("Damga Vergisi"))}<input id="calcStampTaxRate" inputmode="decimal" value="0,759" /></label>
        <div class="salary-result" id="salaryCalcResult">
          <strong>${escapeHtml(trText("Hesaplama bekliyor"))}</strong>
          <span>${escapeHtml(trText("Brüt veya net alanına tutar yazınca diğer alan otomatik hesaplanır; 12 aylık gelir vergisi projeksiyonu da kontrol edilir."))}</span>
        </div>
      </div>
      <p class="calculator-note">${escapeHtml(trText("Not: Hesaplama yaklaşık bordro projeksiyonudur; mevzuat oranları dönemsel olarak kontrol edilmelidir."))}</p>
    </article>
  `;
  const legislationLinksPanel = `
    <article class="bordro-panel legislation-links">
      <header>
        <div>
          <b>${escapeHtml(trText("Resmi ve Faydalı Linkler"))}</b>
          <h3>${escapeHtml(trText("İK / Bordro Mevzuat Kütüphanesi"))}</h3>
        </div>
      </header>
      <div>
        ${[
          ["SGK", "https://www.sgk.gov.tr/", "Prim, bildirge ve sigortalılık kontrolleri"],
          ["Çalışma ve Sosyal Güvenlik Bakanlığı", "https://www.csgb.gov.tr/", "İş hukuku ve çalışma hayatı duyuruları"],
          ["Gelir İdaresi Başkanlığı", "https://www.gib.gov.tr/", "Vergi, beyan ve gelir vergisi duyuruları"],
          ["Resmi Gazete", "https://www.resmigazete.gov.tr/", "Yürürlüğe giren mevzuat takibi"],
          ["İŞKUR", "https://www.iskur.gov.tr/", "İşe alım, istihdam ve teşvik takipleri"],
          ["KVKK", "https://www.kvkk.gov.tr/", "Personel verisi ve açık rıza süreçleri"],
          ["VergiNET", "https://www.verginet.net/", "Brüt-net hesap ve vergi bilgi referansı"],
        ]
          .map(
            ([name, url, detail]) => `
              <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
                <strong>${escapeHtml(name)}</strong>
                <span>${escapeHtml(trText(detail))}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const payrollExportPanel = `
    <article class="bordro-panel bank-export-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Banka Ödeme Dosyası"))}</b>
          <h3>${escapeHtml(trText("Garanti BBVA maaş ödeme Excel çıktısı"))}</h3>
        </div>
      </header>
      ${compactRows(
        ["Dönem", "Kayıt", "Net Ödenecek"],
        [[periodLabel, payroll.length, formatMoney(payroll.reduce((sum, record) => sum + (parseMoney(record.netPayable) || Math.max(0, parseMoney(record.netSalary) - parseMoney(record.advance) - parseMoney(record.deduction))), 0))]],
      )}
      <div class="bank-export-actions">
        <button type="button" data-action="garanti-export">${escapeHtml(trText("Garanti Maaş Dosyasını İndir"))}</button>
        <button type="button" data-action="attendance-template">${escapeHtml(trText("Puantaj Excel Şablonu İndir"))}</button>
      </div>
      <p class="calculator-note">${escapeHtml(trText("Puantaj şablonuna birden fazla personel satırı girip sisteme kayıt açmak için aynı kolon yapısı kullanılır."))}</p>
    </article>
  `;
  const attendanceImportPanel = `
    <article class="bordro-panel attendance-import-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Toplu Puantaj Yükleme"))}</b>
          <h3>${escapeHtml(trText("Excel şablonundan çoklu puantaj aktarımı"))}</h3>
        </div>
      </header>
      <label class="bulk-upload-box" for="attendanceBulkFile">
        <span data-icon="upload"></span>
        <strong>${escapeHtml(trText("Puantaj dosyası seç"))}</strong>
        <small>${escapeHtml(trText("Şablonu Excel'de doldurup CSV olarak kaydedin; personeller tek seferde içe aktarılır."))}</small>
        <input id="attendanceBulkFile" type="file" accept=".csv,.txt" ${canManageRecords() ? "" : "disabled"} />
      </label>
      <p class="calculator-note">${escapeHtml(trText("Kolonlar: Personel, Dönem, Günlük Saat, 1-31 gün durumları, manuel saatler ve mesailer."))}</p>
    </article>
  `;
  const legalOpsPanel = `
    <article class="bordro-panel legal-ops-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("SGK / Teşvik Kontrolü"))}</b>
          <h3>${escapeHtml(trText("İşe giriş ve teşvik ön kontrol ekranı"))}</h3>
        </div>
      </header>
      <div class="legal-link-grid">
        <a href="https://www.sgk.gov.tr/" target="_blank" rel="noreferrer"><span data-icon="external"></span><strong>${escapeHtml(trText("SGK işe giriş ekranına git"))}</strong></a>
        <a href="https://www.iskur.gov.tr/" target="_blank" rel="noreferrer"><span data-icon="external"></span><strong>${escapeHtml(trText("İŞKUR teşvik kontrolüne git"))}</strong></a>
        <a href="https://www.turkiye.gov.tr/sosyal-guvenlik-kurumu" target="_blank" rel="noreferrer"><span data-icon="external"></span><strong>${escapeHtml(trText("e-Devlet SGK hizmetleri"))}</strong></a>
      </div>
      ${compactRows(
        ["Personel", "T.C. Kimlik", "Teşvik Kontrolü", "Not"],
        registryRecords.map((record) => [record.person, maskIdentity(record.identityNo), record.incentiveStatus || "Kontrol Edilecek", record.incentiveNote || "-"]),
      )}
      <p class="calculator-note">${escapeHtml(trText("TC kimlik ile otomatik teşvik sorgusu resmi SGK/İŞKUR entegrasyonu gerektirir; burada kayıt, link ve kontrol sonucu birlikte tutulur."))}</p>
    </article>
  `;
  const companyRatingPanel = `
    <article class="bordro-panel company-rating-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Firma Bazlı Personel Reytingi"))}</b>
          <h3>${escapeHtml(selectedCompanyName || trText("Tüm firmalar"))}</h3>
        </div>
      </header>
      <div class="rating-company-filter">
        <label for="ratingCompanySelect">${escapeHtml(trText("Firma seç"))}</label>
        <select id="ratingCompanySelect">
          <option value="all">${escapeHtml(trText("Tüm firmalar"))}</option>
          ${companies
            .map((company) => `<option value="${escapeHtml(company.name)}" ${company.name === selectedRatingCompany ? "selected" : ""}>${escapeHtml(company.name)}</option>`)
            .join("")}
        </select>
      </div>
      ${compactRows(
        ["Personel", "Performans", "Devamsızlık", "Rapor", "Reyting"],
        companyRatingRows.map((row) => [row.person.name, row.avgScore, row.absent, row.report, `${row.rating}/100`]),
      )}
    </article>
  `;
  const trialWarningPanel = `
    <article class="bordro-panel trial-warning-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Deneme Süresi Uyarıları"))}</b>
          <h3>${escapeHtml(trText("Bitişe 1 hafta kalan personeller"))}</h3>
        </div>
      </header>
      ${
        trialAlerts.length
          ? compactRows(
              ["Personel", "Deneme Bitişi", "Kalan", "Uyarı"],
              trialAlerts.map((item) => [item.person.name, formatDate(toIsoDate(item.employment.trialEnd)), item.employment.trialRemaining, "İK kontrol etmeli"]),
            )
          : `<p class="empty-state">${escapeHtml(trText("Bu hafta deneme süresi biten personel görünmüyor."))}</p>`
      }
    </article>
  `;
  const accidentCheckPanel = `
    <article class="bordro-panel accident-check-panel ${todayAccidentCheck ? "is-done" : "needs-check"}">
      <header>
        <div>
          <b>${escapeHtml(trText("Günlük İş Kazası Kontrolü"))}</b>
          <h3>${escapeHtml(todayAccidentCheck ? trText("Bugün kontrol edildi") : trText("Bugün kontrol bekliyor"))}</h3>
        </div>
        <button type="button" data-action="daily-accident-check">${escapeHtml(trText(todayAccidentCheck ? "Kontrol Edildi" : "Bugünü Kontrol Edildi İşaretle"))}</button>
      </header>
      ${compactRows(
        ["Tarih", "İşyeri", "İş Kazası", "Durum"],
        accidentRecords.map((record) => [formatDate(record.date), record.workplace, record.accidentStatus, record.status]),
      )}
    </article>
  `;
  const privacyPanel = `
    <section class="privacy-center-grid">
      <article class="bordro-panel privacy-hero-panel">
        <header>
          <div>
            <b>${escapeHtml(trText("KVKK ve Veri Saklama"))}</b>
            <h3>${escapeHtml(trText("KVKK ve veri saklama süreçlerini rol bazlı takip et."))}</h3>
          </div>
        </header>
        <div class="privacy-kpis">
          ${[
            ["Yüksek Risk", getScopedRecords(getModule("privacyCenter")).filter((record) => record.risk === "Yüksek" || record.risk === "Acil").length],
            ["Kontrol Edilecek", getScopedRecords(getModule("privacyCenter")).filter((record) => record.status === "Kontrol Edilecek").length],
            ["Güncel", getScopedRecords(getModule("privacyCenter")).filter((record) => record.status === "Güncel").length],
          ]
            .map(([label, value]) => `<article><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(trText(label))}</span></article>`)
            .join("")}
        </div>
      </article>
      ${crudPanel("Veri Saklama Merkezi", "privacyCenter", ["process", "dataType", "retention", "owner", "consent", "risk", "status"], getScopedRecords(getModule("privacyCenter")))}
    </section>
  `;
  const payrollWorkflowPanel = `
    <article class="bordro-panel workflow-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Bordro Operasyon Akışı"))}</b>
          <h3>${escapeHtml(trText("Dönem Kapatma Merkezi"))}</h3>
        </div>
        <button type="button" data-payroll-center-tab="operationsHub">${escapeHtml(trText("Bordro İşlemleri"))}</button>
      </header>
      <div class="workflow-steps">
        ${[
          ["Puantaj Kontrol", attendance.length ? "Tamamlandı" : "Bekliyor", attendance.length ? "done" : "waiting", "operationsHub"],
    ["Avans / Kesinti", totalAdvance || totalDeduction ? "Kontrol Edilecek" : "Tamamlandı", totalAdvance || totalDeduction ? "warning" : "done", "operationsHub"],
    ["Bordro Hesaplama", payroll.length ? `${payroll.length} kayıt` : "Bekliyor", payroll.length ? "done" : "waiting", "operationsHub"],
    ["Admin Onayı", "Otomatik", "done", "operationsHub"],
    ["Ödeme / Yayın", `${openedPayroll}/${Math.max(payroll.length, 1)}`, openedPayroll === payroll.length && payroll.length ? "done" : "warning", "operationsHub"],
        ]
          .map(
            ([label, state, tone, tab], index) => `
              <button class="${tone}" type="button" data-payroll-center-tab="${tab}">
                <small>${String(index + 1).padStart(2, "0")}</small>
                <strong>${escapeHtml(trText(label))}</strong>
                <span>${escapeHtml(trText(state))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const alertPanel = `
    <article class="bordro-panel command-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Operasyon Komuta Merkezi"))}</b>
          <h3>${escapeHtml(trText("Bugün Öncelik Verilecek İşler"))}</h3>
        </div>
      </header>
      <div class="command-list">
        ${[
          ["Eksik Puantaj / Kontrol", attendance.filter((record) => calculateAttendanceTotal(record) === "0").length, "warning", "operationsHub"],
          ["Maaş Ödeme Alarmı", payrollPaymentAlerts.length, "danger", "operationsHub"],
          ["Avans Kontrol Alarmı", advanceAlerts.length, "danger", "operationsHub"],
          ["Özel Gün / Mevzuat Alarmı", calendarDueAlerts.length, "danger", "calendar"],
          ["Deneme Süresi Uyarısı", trialAlerts.length, "danger", "operationsHub"],
          ["İş Kazası Günlük Kontrol", todayAccidentCheck && todayAccidentCheck.status === "Tamamlandı" ? 0 : 1, "danger", "operationsHub"],
          ["Açık Görev", tasks.length, tasks.length ? "danger" : "good", "redBulletin"],
          ["Geciken Tahsilat", overdueInvoices.length, "danger", "operationsHub"],
          ["Kesilmeyen Fatura", invoices.filter((record) => record.status !== "Fatura Kesildi").length, "warning", "operationsHub"],
        ]
          .map(
            ([label, count, tone, tab]) => `
              <button class="${count && tone === "danger" ? "critical-blink" : ""}" type="button" data-payroll-center-tab="${tab}">
                ${renderStatusPill(count ? String(count) : "OK", count ? tone : "good")}
                <span>${escapeHtml(trText(label))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const notificationCenterPanel = `
    <article class="bordro-panel notification-command-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Bildirim Akışı"))}</b>
          <h3>${escapeHtml(trText("Acil ve okunmamış bildirimleri tek ekranda yönet."))}</h3>
        </div>
        <button type="button" data-payroll-center-tab="redBulletin">${escapeHtml(trText("Tümünü Gör"))}</button>
      </header>
      <div class="notification-metrics">
        ${[
          ["Okunmadı", unreadNotifications.length, unreadNotifications.length ? "danger" : "good"],
          ["Acil", urgentNotifications.length, urgentNotifications.length ? "danger" : "good"],
          ["E-posta Kuyruğu", emailQueueRecords.length, emailQueueRecords.length ? "warning" : "good"],
        ]
          .map(
            ([label, value, tone]) => `
              <article class="${tone}">
                <strong>${escapeHtml(String(value))}</strong>
                <span>${escapeHtml(trText(label))}</span>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="notification-list">
        ${
          notificationRecords.length
            ? notificationRecords
                .slice(0, 5)
                .map(
                  (record) => `
                    <div class="${record.priority === "Acil" ? "urgent" : ""} ${record.readStatus === "Okundu" || record.status === "Tamamlandı" ? "read" : ""}">
                      <span>${escapeHtml(trText(record.priority || "Normal"))}</span>
                      <strong>${escapeHtml(record.description || record.type || "-")}</strong>
                      <small>${escapeHtml(`${record.date || "-"} · ${trText(record.readStatus || "Okunmadı")}`)}</small>
                      ${
                        canManageRecords() && record.readStatus !== "Okundu"
                          ? `<button type="button" data-action="notification-read" data-module="notifications" data-id="${record.id}">${escapeHtml(trText("Okundu İşaretle"))}</button>`
                          : ""
                      }
                    </div>
                  `,
                )
                .join("")
            : `<p class="empty-state">${escapeHtml(trText("Kayıt bulunamadı."))}</p>`
        }
      </div>
    </article>
  `;
  const emailAutomationPanel = `
    <article class="bordro-panel email-automation-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Otomatik Mail Merkezi"))}</b>
          <h3>${escapeHtml(trText("Mail taslakları ve gönderim kuyruğu buradan izlenir."))}</h3>
        </div>
      </header>
      ${compactRows(
        ["Başlık", "Durum"],
        [
          ["E-posta Kuyruğu", emailQueueRecords.length],
          ["Tam Otomatik Mail İçin", "Resend / SendGrid veya Supabase Edge Function bağlanacak."],
          ["Canlı senkron açık", isRemoteMode ? "Aktif" : "Yerel mod"],
        ],
      )}
    </article>
  `;
  const smartAlertRows = [
    ["Bordro", payrollPaymentAlerts.length || payroll.filter((record) => record.publishStatus !== "Personele Açıldı").length, "Bordro yayın ve ödeme kontrolü", "operationsHub"],
    ["Puantaj", attendance.filter((record) => calculateAttendanceTotal(record) === "0").length, "Eksik veya sıfır saatli puantaj kontrolü", "operationsHub"],
    ["Fatura", overdueInvoices.length || invoices.filter((record) => record.status !== "Fatura Kesildi").length, "Bekleyen fatura ve tahsilat kontrolü", "operationsHub"],
    ["Mesaj", messages.length, "Açık duyuru ve mesaj takibi", "assistant"],
    ["Bildirim", unreadNotifications.length + urgentNotifications.length, "Okunmamış ve acil bildirim kontrolü", "redBulletin"],
    ["Görev", tasks.length, "Tamamlanmamış görevler", "redBulletin"],
  ];
  const smartAlertsPanel = `
    <article class="bordro-panel smart-alert-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Akıllı Uyarı Merkezi"))}</b>
          <h3>${escapeHtml(trText("Bugünün sade öncelikleri"))}</h3>
        </div>
      </header>
      <div class="smart-alert-list">
        ${smartAlertRows
          .map(
            ([label, count, detail, tab]) => `
              <button class="${count ? "needs-attention" : "is-clear"}" type="button" data-payroll-center-tab="${tab}">
                <strong>${escapeHtml(count ? String(count) : "OK")}</strong>
                <span>${escapeHtml(trText(label))}</span>
                <small>${escapeHtml(trText(detail))}</small>
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const assistantAnswer = buildAssistantAnswer("");
  const assistantPanel = `
    <article class="bordro-panel smart-assistant">
      <header>
        <div>
          <b>${escapeHtml(trText("Yapay Zeka Bordro Asistanı"))}</b>
          <h3>${escapeHtml(trText("Sorunu yaz, paneldeki verilerden kısa cevap al."))}</h3>
        </div>
        <a class="chatgpt-link" href="https://chatgpt.com/" target="_blank" rel="noreferrer">
          <span data-icon="bot"></span>
          ChatGPT
        </a>
      </header>
      <div class="assistant-box">
        <label>
          ${escapeHtml(trText("Asistana Sor"))}
          <input id="aiAssistantQuestion" type="search" placeholder="${escapeHtml(trText("Bu ay kimlerin bordrosu bekliyor?"))}" />
        </label>
        <button type="button" data-action="ai-ask">${escapeHtml(trText("Asistana Sor"))}</button>
      </div>
      <div class="ai-prompt-row">
        ${["Bu ay kimlerin bordrosu bekliyor?", "Eksik evrak var mı?", "Canlı kullanıma hazır mıyız?", "Güvenlik ve yedek durumu ne?", "Raporlarda ne eksik?"]
          .map((question) => `<button type="button" data-ai-question="${escapeHtml(question)}">${escapeHtml(trText(question))}</button>`)
          .join("")}
      </div>
      <div class="ai-answer" id="aiAssistantAnswer">
        <strong>${escapeHtml(trText("Cevap hazır"))}</strong>
        <p>${escapeHtml(assistantAnswer)}</p>
      </div>
    </article>
  `;
  const easyPortalPanel = `
    <article class="bordro-panel easy-portal-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Kolay Portal Görünümleri"))}</b>
          <h3>${escapeHtml(trText("Admin, personel ve müşteri için en sık kullanılan işler tek ekranda toplandı."))}</h3>
        </div>
      </header>
      <div class="easy-portal-grid">
        ${[
          ["Admin Komuta", "Bordro, uyarı, fatura ve görevleri tek ekranda yönet.", "home"],
          ["Personel Portalı", "Bordro, evrak, izin ve mesajları sade izleme ekranı.", "selfService"],
          ["Müşteri Portalı", "Proje, fatura, rapor ve müşteri mesajları tek yerde.", "company"],
        ]
          .map(
            ([title, text, tab]) => `
              <button type="button" data-payroll-center-tab="${tab}">
                <strong>${escapeHtml(trText(title))}</strong>
                <span>${escapeHtml(trText(text))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
  const messageThreads = getMessageThreads(messages);
  if (!selectedMessageThreadId || !messageThreads.some((thread) => thread.id === selectedMessageThreadId)) {
    selectedMessageThreadId = messageThreads[0]?.id || "";
  }
  const activeMessageThread = messageThreads.find((thread) => thread.id === selectedMessageThreadId);
  const messageParticipants = getMessageParticipants();
  const portalPeople = getPortalPresencePeople();
  const messageBoardPanel = `
    <section class="team-chat-shell">
      <aside class="team-chat-sidebar">
        <header>
          <div>
            <b>${escapeHtml(trText("İç İletişim"))}</b>
            <h3>${escapeHtml(trText("Konuşmalar"))}</h3>
            <small class="live-sync-badge ${isRemoteMode ? "online" : ""}">${escapeHtml(trText(isRemoteMode ? "Canlı senkron açık" : "Yerel mod"))}</small>
          </div>
          <span>${escapeHtml(messages.length)}</span>
        </header>
        <div class="team-thread-list">
          ${
            messageThreads.length
              ? messageThreads
                  .map(
                    (thread) => `
                      <button class="${thread.id === selectedMessageThreadId ? "active" : ""} ${thread.urgent ? "urgent" : ""}" type="button" data-message-thread="${escapeHtml(thread.id)}">
                        <strong>${escapeHtml(trText(thread.title))}</strong>
                        <span>${escapeHtml(`${trText(thread.recipient)} · ${thread.latest.sender || "-"}`)}</span>
                        <small>${escapeHtml(`${trText("Son mesaj")}: ${thread.latest.message || "-"}`)}</small>
                        ${thread.unread ? `<em>${escapeHtml(thread.unread)}</em>` : ""}
                      </button>
                    `,
                  )
                  .join("")
              : `<p>${escapeHtml(trText("Aktif konuşma yok."))}</p>`
          }
        </div>
      </aside>
      <article class="team-chat-panel">
        <header class="team-chat-header">
          <div>
            <b>${escapeHtml(trText("Teams tarzı hızlı iletişim"))}</b>
            <h3>${escapeHtml(trText(activeMessageThread?.title || "Yeni Mesaj"))}</h3>
            <span>${escapeHtml(trText(activeMessageThread?.recipient || "Tüm ekip"))}</span>
          </div>
          <div class="panel-tools">
            ${activeMessageThread && canManageRecords() ? `<button type="button" data-action="message-close" data-thread="${escapeHtml(activeMessageThread.id)}">${escapeHtml(trText("Konuşmayı Kapat"))}</button>` : ""}
          </div>
        </header>
        <div class="team-chat-feed">
          ${
            activeMessageThread
              ? activeMessageThread.items
                  .map((record) => {
                    const mine = normalizeText(record.sender) === normalizeText(currentUser?.displayName || currentUser?.email || "");
                    return `
                      <div class="chat-bubble ${mine ? "mine" : ""} ${record.priority === "Acil" || record.priority === "Yüksek" ? "important" : ""}">
                        <small>${escapeHtml(`${record.sender || "-"} · ${record.date || ""} ${record.time || ""}`.trim())}</small>
                        <p>${escapeHtml(record.message || "-")}</p>
                        <span>${escapeHtml(trText(record.type || "Mesaj"))} · ${escapeHtml(trText(record.priority || "Normal"))}</span>
                      </div>
                    `;
                  })
                  .join("")
              : `<div class="chat-empty">${escapeHtml(trText("Aktif konuşma yok."))}</div>`
          }
        </div>
        <form class="team-chat-composer" id="messageComposer">
          <div class="composer-grid">
            <label>
              ${escapeHtml(trText("Alıcı"))}
              <select name="recipient">
                ${messageParticipants
                  .map((person) => `<option value="${escapeHtml(person)}" ${person === activeMessageThread?.recipient ? "selected" : ""}>${escapeHtml(trText(person))}</option>`)
                  .join("")}
              </select>
            </label>
            <label>
              ${escapeHtml(trText("Tür"))}
              <select name="type">
                ${["Duyuru", "Personel Mesajı", "Müşteri Mesajı", "İç Not"]
                  .map((type) => `<option value="${escapeHtml(type)}" ${type === activeMessageThread?.latest?.type ? "selected" : ""}>${escapeHtml(trText(type))}</option>`)
                  .join("")}
              </select>
            </label>
            <label>
              ${escapeHtml(trText("Öncelik"))}
              <select name="priority">
                ${["Normal", "Yüksek", "Acil"]
                  .map((priority) => `<option value="${escapeHtml(priority)}">${escapeHtml(trText(priority))}</option>`)
                  .join("")}
              </select>
            </label>
          </div>
          <label>
            ${escapeHtml(trText("Konu"))}
            <input name="subject" value="${escapeHtml(activeMessageThread?.title || "")}" placeholder="${escapeHtml(trText("Konu yaz"))}" />
          </label>
          <label>
            ${escapeHtml(trText("Mesaj yaz"))}
            <textarea name="message" rows="4" placeholder="${escapeHtml(trText("Mesaj yaz"))}"></textarea>
          </label>
          <label class="inline-check email-notify-check">
            <input name="emailNotify" type="checkbox" checked />
            <span>${escapeHtml(trText("E-posta bildirimi hazırla"))}</span>
          </label>
          <div class="composer-actions">
            <button type="button" data-action="message-new">${escapeHtml(trText("Yeni Mesaj"))}</button>
            <button type="button" data-action="message-send">${escapeHtml(trText("Mesaj Gönder"))}</button>
          </div>
        </form>
      </article>
      <aside class="team-chat-info">
        <article>
          <b>${escapeHtml(trText("Mesaj Özeti"))}</b>
          ${compactRows(
            ["Başlık", "Toplam"],
            [
              ["Açık", messages.filter((record) => record.status === "Açık").length],
              ["Acil", messages.filter((record) => record.priority === "Acil").length],
              ["Duyuru", messages.filter((record) => record.type === "Duyuru").length],
              ["Müşteri Mesajı", messages.filter((record) => record.type === "Müşteri Mesajı").length],
              ["E-posta Kuyruğu", emailQueueRecords.length],
            ],
          )}
        </article>
        <article>
          <b>${escapeHtml(trText("Kişiler"))}</b>
          <div class="chat-people">
            ${portalPeople
              .slice(0, 14)
              .map(
                (person) => `
                  <button type="button" data-message-recipient="${escapeHtml(person.name)}">
                    <i class="${person.online ? "online" : "offline"}"></i>
                    <strong>${escapeHtml(person.name)}</strong>
                    <span>${escapeHtml(`${trText(person.role)} · ${person.online ? trText("Online") : trText("Offline")}`)}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
      </aside>
    </section>
  `;
  const attendanceMatrix = `
    <article class="bordro-panel attendance-matrix-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Odoo tarzı puantaj matrisi"))}</b>
          <h3>${escapeHtml(trText("Çalışan Bazlı Günlük Saat ve Durum"))}</h3>
        </div>
        <div class="panel-tools">
          ${canManageRecords() ? `<button type="button" data-action="add" data-module="attendance">${escapeHtml(trText("Ekle"))}</button>` : ""}
          <button type="button" data-action="export" data-module="attendance">${escapeHtml(trText("EXCEL"))}</button>
          <button type="button" data-action="export-pdf" data-module="attendance">${escapeHtml(trText("PDF"))}</button>
        </div>
      </header>
      <div class="attendance-matrix">
        <div class="attendance-row head">
          <strong>${escapeHtml(trText("Personel"))}</strong>
          ${Array.from({ length: 31 }, (_, index) => `<b>${index + 1}</b>`).join("")}
          <strong>${escapeHtml(trText("Toplam"))}</strong>
        </div>
        ${
          attendance.length
            ? attendance
                .map((record) => {
                  const total = calculateAttendanceTotal(record);
                  return `
                    <div class="attendance-row">
                      <button type="button" data-action="edit" data-module="attendance" data-id="${record.id}">${escapeHtml(record.person || "-")}</button>
                      ${Array.from({ length: 31 }, (_, index) => {
                        const day = index + 1;
                        const state = record[`day${day}`] || "-";
                        const manual = record[`hour${day}`] || "";
                        const overtime = record[`overtimeDay${day}`] || "";
                        const tone =
                          state === "Geldi"
                            ? "present"
                            : state === "Gelmedi"
                              ? "absent"
                              : state === "Raporlu"
                                ? "report"
                                : state === "Geçici Görev"
                                  ? "duty"
                                  : "empty";
                        return `<span class="${tone}" title="${escapeHtml(`${state}${manual ? ` · ${manual} sa` : ""}${overtime ? ` · ${overtime} mesai` : ""}`)}">${escapeHtml(manual || (state === "Geldi" ? record.dailyHours || "7,5" : state === "-" ? "" : state.slice(0, 1)))}</span>`;
                      }).join("")}
                      <strong>${escapeHtml(total)} sa</strong>
                    </div>
                  `;
                })
                .join("")
            : `<p class="empty-state">${escapeHtml(trText("Kayıt bulunamadı."))}</p>`
        }
      </div>
      <div class="matrix-legend">
        ${[
          ["present", "Geldi"],
          ["absent", "Gelmedi"],
          ["report", "Raporlu"],
          ["duty", "Geçici Görev"],
          ["empty", "Boş"],
        ]
          .map(([className, label]) => `<span><i class="${className}"></i>${escapeHtml(trText(label))}</span>`)
          .join("")}
      </div>
    </article>
  `;
  const employee360Panel = `
    <article class="bordro-panel employee-command-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Personel 360"))}</b>
          <h3>${escapeHtml(trText("Tek Personel Dosyası"))}</h3>
        </div>
      </header>
      <div class="employee-command-grid">
        ${personnel
          .slice(0, 6)
          .map((person) => {
            const checklist = getScopedRecords(getModule("documentsChecklist")).find((record) => personMatchesRecord(person, record));
            const completion = checklist ? getChecklistCompletion(checklist) : { rate: 0 };
            const personPayroll = payroll.filter((record) => personMatchesRecord(person, record));
            return `
              <button type="button" data-payroll-center-tab="definitions">
                <strong>${escapeHtml(person.name || "-")}</strong>
                <span>${escapeHtml(`${person.department || "-"} · ${person.role || "-"}`)}</span>
                <em>${escapeHtml(`${trText("Özlük")}: %${completion.rate} · ${trText("Bordro")}: ${personPayroll.length}`)}</em>
              </button>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
  const reportBarData = [
    ["Net Bordro", totalNet, "#7c3aed", formatMoney(totalNet)],
    ["Avans", totalAdvance, "#ec4899", formatMoney(totalAdvance)],
    ["Kesinti", totalDeduction, "#e11d48", formatMoney(totalDeduction)],
    ["Mesai", totalOvertime, "#a855f7", `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`],
    ["Fatura", invoices.reduce((sum, record) => sum + parseMoney(record.amount), 0), "#c026d3", formatMoney(invoices.reduce((sum, record) => sum + parseMoney(record.amount), 0))],
  ];
  const reportMax = Math.max(...reportBarData.map(([, value]) => Number(value) || 0), 1);
  const issuedInvoices = invoices.filter((record) => record.status === "Fatura Kesildi").length;
  const waitingInvoices = invoices.filter((record) => record.status === "Fatura Beklemede").length;
  const rejectedInvoices = invoices.filter((record) => record.status === "Onay Verilmedi").length;
  const invoicePieTotal = Math.max(issuedInvoices + waitingInvoices + rejectedInvoices, 1);
  const issuedAngle = Math.round((issuedInvoices / invoicePieTotal) * 360);
  const waitingAngle = issuedAngle + Math.round((waitingInvoices / invoicePieTotal) * 360);
  const reportChartsPanel = `
    <section class="report-visual-grid">
      <article class="bordro-panel report-chart-card">
        <header>
          <div>
            <b>${escapeHtml(trText("Dikey Grafik"))}</b>
            <h3>${escapeHtml(trText("Bordro ve Finans Özeti"))}</h3>
          </div>
        </header>
        <div class="report-bar-chart">
          ${reportBarData
            .map(
              ([label, value, color, display]) => `
                <div class="report-bar" style="--bar-color:${color};--bar-height:${Math.max(8, Math.round((Number(value) / reportMax) * 100))}%">
                  <i></i>
                  <strong>${escapeHtml(display)}</strong>
                  <span>${escapeHtml(trText(label))}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="bordro-panel report-chart-card">
        <header>
          <div>
            <b>${escapeHtml(trText("Pasta Grafik"))}</b>
            <h3>${escapeHtml(trText("Fatura Dağılımı"))}</h3>
          </div>
        </header>
        <div class="report-pie-wrap">
          <div class="report-pie" style="--issued:${issuedAngle}deg;--waiting:${waitingAngle}deg"></div>
          <div class="report-pie-legend">
            <span><i class="issued"></i>${escapeHtml(trText("Fatura Kesildi"))}: ${issuedInvoices}</span>
            <span><i class="waiting"></i>${escapeHtml(trText("Fatura Beklemede"))}: ${waitingInvoices}</span>
            <span><i class="rejected"></i>${escapeHtml(trText("Onay Verilmedi"))}: ${rejectedInvoices}</span>
          </div>
        </div>
      </article>
    </section>
  `;
  const growthItems = [
    {
      title: "Gerçek kullanıcı testi",
      value: experienceRecords.filter((record) => record.status === "Tamamlandı").length,
      total: Math.max(experienceRecords.length, 1),
      detail: `${experienceRecords.filter((record) => record.status !== "Tamamlandı").length} açık test`,
      tab: "growth",
      tone: experienceRecords.every((record) => record.status === "Tamamlandı") ? "good" : "warning",
    },
    {
      title: "Veri giriş şablonları",
      value: templateRecords.filter((record) => record.status === "Hazır").length,
      total: Math.max(templateRecords.length, 1),
      detail: `${templateRecords.filter((record) => record.status === "Hazır").length} hazır şablon`,
      tab: "growth",
      tone: templateRecords.some((record) => record.status !== "Hazır") ? "warning" : "good",
    },
    {
      title: "Akıllı hatırlatmalar",
      value: automationRecords.filter((record) => record.status === "AKTİF").length,
      total: Math.max(automationRecords.length, 1),
      detail: `${automationRecords.filter((record) => record.status === "AKTİF").length} aktif kural`,
      tab: "legislation",
      tone: automationRecords.some((record) => record.status !== "AKTİF") ? "warning" : "good",
    },
    {
      title: "Yapay zeka destekli cevaplar",
      value: smartAlertRows.filter(([, count]) => Number(count) > 0).length,
      total: Math.max(smartAlertRows.length, 1),
      detail: "Bordro, fatura, evrak, mesai ve rapor soruları",
      tab: "assistant",
      tone: "good",
    },
    {
      title: "Müşteri/personel portalı",
      value: getScopedRecords(getModule("users")).filter((record) => ["PERSONEL", "MUSTERI", "KULLANICI"].includes(normalizeUserType(record.type))).length,
      total: Math.max(getScopedRecords(getModule("users")).length, 1),
      detail: "Rol bazlı izleme ve admin yönetimi",
      tab: "system",
      tone: "good",
    },
    {
      title: "Kurumsal raporlama",
      value: reports.filter((record) => record.status === "Hazır").length,
      total: Math.max(reports.length, 1),
      detail: `${reports.filter((record) => record.status !== "Hazır").length} taslak rapor`,
      tab: "reports",
      tone: reports.some((record) => record.status !== "Hazır") ? "warning" : "good",
    },
    {
      title: "Güvenlik ve yedekleme",
      value: backupRecords.filter((record) => record.status === "Hazır").length + settingsRecords.filter((record) => record.status === "AKTİF").length,
      total: Math.max(backupRecords.length + settingsRecords.length, 1),
      detail: "Manuel yedek, rol ve ayar kontrolü",
      tab: "growth",
      tone: backupRecords.length ? "good" : "warning",
    },
  ];
  const readinessRate = Math.round(
    (growthItems.reduce((sum, item) => sum + Math.min(item.value / item.total, 1), 0) / Math.max(growthItems.length, 1)) * 100,
  );
  const growthCenterPanel = `
    <section class="growth-center">
      <article class="bordro-panel growth-summary-panel">
        <div>
          <span>${escapeHtml(trText("Ürün Kontrol Listesi"))}</span>
          <h3>${escapeHtml(trText("Canlı kullanıma hazırlık durumunu tek ekranda takip et."))}</h3>
          <p>${escapeHtml(trText("Portalın büyümesi için takip edeceğimiz 7 ana başlık burada."))}</p>
        </div>
        <div class="readiness-meter" style="--ready:${readinessRate}%">
          <strong>%${readinessRate}</strong>
          <span>${escapeHtml(trText("Hazırlık"))}</span>
        </div>
      </article>
      <div class="growth-card-grid">
        ${growthItems
          .map(
            (item) => `
              <button class="growth-card ${item.tone}" type="button" data-payroll-center-tab="${item.tab}">
                <span>${escapeHtml(trText(item.title))}</span>
                <strong>${escapeHtml(`${item.value}/${item.total}`)}</strong>
                <small>${escapeHtml(trText(item.detail))}</small>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
  const backupActionPanel = `
    <article class="bordro-panel backup-action-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Yedek ve Güvenlik"))}</b>
          <h3>${escapeHtml(trText("Manuel yedek al ve canlı kullanım güvenliğini kontrol et."))}</h3>
        </div>
        ${canManageRecords() ? `<button type="button" data-action="backup-export">${escapeHtml(trText("Yedek Al"))}</button>` : ""}
      </header>
      ${compactRows(
        ["Başlık", "Durum"],
        [
          ["Son yedek", backupRecords[0]?.date || "-"],
          ["Aktif ayarlar", settingsRecords.filter((record) => record.status === "AKTİF").length],
          ["Güvenlik rolleri", securityRecords.length],
          ["Canlı veri modu", isRemoteMode ? "Supabase bağlı" : "Yerel demo"],
        ],
      )}
    </article>
  `;
  const documentsReady = personnel.length > 0 && personnel.every((record) => hasCompleteDocumentsForPerson(record.name));
  const setupSteps = [
    ["Firma bilgileri", companies.length > 0 && companies.some((record) => record.contractStatus === "Aktif" || record.contractFile || record.offerFile), "company", "Firma, yetkili, sözleşme ve fiyat teklifini hazırla.", `${companies.length} firma`],
    ["Personel kartları", documentsReady, "operationsHub", "Personel, sicil, özlük checklist ve işe alım kayıtlarını tamamla.", `${personnel.length} personel`],
    ["Kullanıcı ve yetki", getScopedRecords(getModule("users")).some((record) => ["ADMIN", "YONETICI", "KULLANICI", "MUSTERI", "PERSONEL"].includes(normalizeUserType(record.type))), "company", "Admin, personel ve müşteri hesaplarını rolüne göre ayır.", `${getScopedRecords(getModule("users")).length} kullanıcı`],
    ["Puantaj ve takvim", attendance.length > 0 && allCalendarRecords.length > 0, "calendar", "Aylık puantajı, ödeme günlerini ve hatırlatmaları planla.", `${attendance.length} puantaj`],
    ["Bordro tanımları", payroll.length > 0 && bankBesRecords.length > 0, "operationsHub", "Brüt/net, banka, BES, avans ve kesinti kayıtlarını kontrol et.", `${payroll.length} bordro`],
    ["Rapor ve yedek", reports.some((record) => record.status === "Hazır") && (backupRecords.length > 0 || !canManageRecords()), "reports", "Kişi bazlı raporları ve düzenli yedeği hazır tut.", `${reports.length} rapor`],
  ];
  const setupWizardPanel = `
    <section class="setup-wizard">
      <article class="bordro-panel setup-wizard-hero">
        <div>
          <span>${escapeHtml(trText("Kurulum Sihirbazı"))}</span>
          <h3>${escapeHtml(trText("Portal canlı kullanıma bu adımlarla hazırlanır."))}</h3>
          <p>${escapeHtml(trText("İlk kurulumda soldaki menüde kaybolmadan bu kartları takip etmek yeterli."))}</p>
        </div>
        <strong>${escapeHtml(`${setupSteps.filter(([, done]) => done).length}/${setupSteps.length}`)}</strong>
      </article>
      <div class="setup-step-grid">
        ${setupSteps
          .map(
            ([title, done, tab, detail, value], index) => `
              <button class="${done ? "done" : "waiting"}" type="button" data-payroll-center-tab="${tab}">
                <small>${String(index + 1).padStart(2, "0")}</small>
                <strong>${escapeHtml(trText(title))}</strong>
                <span>${escapeHtml(trText(detail))}</span>
                <em>${escapeHtml(done ? trText("Tamamlandı") : trText("Bekliyor"))} · ${escapeHtml(value)}</em>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
  const moduleLauncherPanel = `
    <section class="module-launcher">
      <header>
        <div>
          <b>${escapeHtml(trText("Bordro Merkezi Menü"))}</b>
          <h3>${escapeHtml(trText("Aradığın işlemi tek tıkla aç."))}</h3>
        </div>
      </header>
      <div>
        ${[
          ["Kontrol", "checklist", "setup"],
          ["Asistan & Mesaj", "bot", "assistant"],
          ["Takvim", "calendar", "calendar"],
          ["İK & İşlemler", "grid", "operationsHub"],
          ["Bordro", "invoice", "operationsHub"],
          ["Müşteri", "building", "company"],
          ["KVKK", "shield", "redBulletin"],
          ["Rapor", "chart", "reports"],
          ["Bülten", "bell", "redBulletin"],
        ]
          .map(
            ([label, icon, tab]) => `
              <button type="button" data-payroll-center-tab="${tab}">
                <span data-icon="${icon}"></span>
                <strong>${escapeHtml(trText(label))}</strong>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
  const reportPerson = personnel.find((record) => record.name === selectedReportPerson) || { name: selectedReportPerson };
  const personReportMonths = dashboardRange === "year" ? fixedDashboardMonths : periodMonths;
  const personReportRows = personReportMonths.map((month) => {
    const monthPayroll = allPayrollRecords.filter((record) => record.period === month && personMatchesRecord(reportPerson, record));
    const monthAttendance = allAttendanceRecords.filter((record) => record.period === month && personMatchesRecord(reportPerson, record));
    const net = monthPayroll.reduce((sum, record) => sum + parseMoney(record.netSalary), 0);
    const gross = monthPayroll.reduce((sum, record) => sum + parseMoney(record.grossSalary), 0);
    const advance = monthPayroll.reduce((sum, record) => sum + parseMoney(record.advance), 0);
    const deduction = monthPayroll.reduce((sum, record) => sum + parseMoney(record.deduction), 0);
    const overtime = monthAttendance.reduce((sum, record) => sum + parseHour(record.overtimeHours) + getAttendanceDayOvertime(record), 0);
    return { month, net, gross, advance, deduction, overtime };
  });
  const personReportMax = Math.max(...personReportRows.flatMap((row) => [row.net, row.advance, row.deduction]), 1);
  const personReportTotals = personReportRows.reduce(
    (acc, row) => ({
      net: acc.net + row.net,
      gross: acc.gross + row.gross,
      advance: acc.advance + row.advance,
      deduction: acc.deduction + row.deduction,
      overtime: acc.overtime + row.overtime,
    }),
    { net: 0, gross: 0, advance: 0, deduction: 0, overtime: 0 },
  );
  const personReportPanel = `
    <section class="person-report-panel bordro-panel">
      <header>
        <div>
          <b>${escapeHtml(trText("Kişiye Özel Bordro Raporu"))}</b>
          <h3>${escapeHtml(trText("Maaş, avans, kesinti ve mesai grafiği"))}</h3>
        </div>
        <div class="panel-tools">
          <select id="personReportSelect">
            ${personnel
              .map((person) => `<option value="${escapeHtml(person.name)}" ${person.name === selectedReportPerson ? "selected" : ""}>${escapeHtml(person.name)}</option>`)
              .join("")}
          </select>
          <button type="button" data-action="person-report-pdf">${escapeHtml(trText("PDF"))}</button>
        </div>
      </header>
      <div class="person-report-kpis">
        ${[
          ["Net Maaş", formatMoney(personReportTotals.net)],
          ["Brüt Maaş", formatMoney(personReportTotals.gross)],
          ["Avans", formatMoney(personReportTotals.advance)],
          ["İcra/Kesinti", formatMoney(personReportTotals.deduction)],
          ["Mesai", `${personReportTotals.overtime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`],
        ]
          .map(([label, value]) => `<article><strong>${escapeHtml(value)}</strong><span>${escapeHtml(trText(label))}</span></article>`)
          .join("")}
      </div>
      <div class="person-report-chart">
        ${personReportRows
          .map(
            (row) => `
              <div>
                <span>${escapeHtml(row.month)}</span>
                <i class="net" style="--h:${Math.max(4, Math.round((row.net / personReportMax) * 100))}%"></i>
                <i class="advance" style="--h:${Math.max(4, Math.round((row.advance / personReportMax) * 100))}%"></i>
                <i class="deduction" style="--h:${Math.max(4, Math.round((row.deduction / personReportMax) * 100))}%"></i>
              </div>
            `,
          )
          .join("")}
      </div>
      ${compactRows(
        ["Ay", "Net Maaş", "Brüt Maaş", "Avans", "İcra/Kesinti", "Mesai"],
        personReportRows.map((row) => [row.month, formatMoney(row.net), formatMoney(row.gross), formatMoney(row.advance), formatMoney(row.deduction), `${row.overtime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`]),
      )}
    </section>
  `;
  const redBulletinItems = [
    ["Maaş ödeme alarmı", payrollPaymentAlerts.length, payrollPaymentAlerts.length ? "danger" : "good", "Bordro ödeme tarihi gelen kayıtları kontrol et."],
    ["Geciken tahsilat", overdueInvoices.length, overdueInvoices.length ? "danger" : "good", "Vadesi gelen ve ödenmeyen faturaları takip et."],
    ["Acil görev", tasks.filter((record) => record.priority === "Acil" || record.priority === "Yüksek").length, "danger", "Yüksek öncelikli işler tamamlanmalı."],
    ["Takvim uyarısı", calendarDueAlerts.length, calendarDueAlerts.length ? "danger" : "good", "Bugün veya geçmiş tarihli planları kapat."],
    ["Deneme süresi", trialAlerts.length, trialAlerts.length ? "danger" : "good", "Deneme süresi bitimine 1 hafta kalan personeller."],
    ["İş kazası kontrolü", todayAccidentCheck && todayAccidentCheck.status === "Tamamlandı" ? 0 : 1, todayAccidentCheck && todayAccidentCheck.status === "Tamamlandı" ? "good" : "danger", "Günlük iş kazası bildirimi kontrolünü kapat."],
    ["Okunmamış bordro", payroll.filter((record) => record.publishStatus === "Personele Açıldı" && record.viewStatus !== "Görüldü").length, "warning", "Personele açılan ama görülmeyen bordrolar."],
  ];
  const redBulletinPanel = `
    <section class="red-bulletin-grid">
      ${redBulletinItems
        .map(
          ([title, value, tone, detail]) => `
            <article class="${Number(value) > 0 ? tone : "good"}">
              <strong>${escapeHtml(String(value))}</strong>
              <span>${escapeHtml(trText(title))}</span>
              <small>${escapeHtml(trText(detail))}</small>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
  const todayLabel = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
  const prozonPanoStats = [
    ["Aktif Çalışan Sayısı", activePersonnel.length, "users"],
    ["Bu Ay Yapılan Bordro Sayısı", payroll.length, "invoice"],
    ["Bu Ay İşe Giren Personel Sayısı", hired, "contact"],
    ["Bu Ay İşten Çıkan Personel Sayısı", left, "contact"],
    ["Bu Ayki Yıllık İzin Sayısı", monthlyLeaves.length, "calendar"],
    ["İK Onayı Bekleyen İzinler", pendingLeaves, "wallet"],
  ];
  const prozonNewsCards = (legislationRecords.length
    ? legislationRecords.map((record) => ({
        title: record.title,
        date: record.validUntil || record.period,
        source: record.source || "Mevzuat",
        text: `${record.value || trText("Güncel mevzuat kaydı")} · ${record.status || trText("Kontrol Edilecek")}`,
      }))
    : [
        {
          title: "7582 Sayılı Kanun Yayımlandı",
          date: todayLabel,
          source: "Resmi Gazete",
          text: "Vergi ve SGK takibi için mevzuat parametreleri kontrol edilmelidir.",
        },
        {
          title: "Beyanname ve Bildirge Hatırlatmaları",
          date: todayLabel,
          source: "İK & Bordro",
          text: "Muhtasar, SGK ve maaş ödeme takvimi aylık bazda takip edilmelidir.",
        },
      ]).slice(0, 2);
  const workplaceDistribution = companies.length
    ? companies.map((company) => {
        const count = personnel.filter((person) => normalizeText(person.companyName) === normalizeText(company.name)).length;
        return [company.name, count];
      })
    : [[currentUser?.companyName || "GLOBAL KALİTEKONTROL", activePersonnel.length]];
  const workplaceMax = Math.max(...workplaceDistribution.map(([, count]) => Number(count) || 0), 1);
  const splitName = (name = "") => {
    const parts = String(name).trim().split(/\s+/).filter(Boolean);
    return {
      first: parts.slice(0, -1).join(" ") || parts[0] || "",
      last: parts.length > 1 ? parts.at(-1) : "",
    };
  };
  const prozonValue = (record, key, index) => {
    if (key === "__row") return index + 1;
    if (key === "__code") return record.code || record.registryNo || record.invoiceNo || record.id || `AD-${String(index + 1).padStart(3, "0")}`;
    if (key === "__firstName") return splitName(record.name || record.person || record.candidate).first;
    if (key === "__lastName") return splitName(record.name || record.person || record.candidate).last;
    if (key === "__fullName") return record.name || record.person || record.candidate || record.owner || "";
    if (key === "__workplace") return record.companyName || record.company || record.name || currentUser?.companyName || "GLOBAL KALİTEKONTROL";
    if (key === "__default") return record.contractStatus === "Aktif" || record.status === "AKTİF" || record.status === "Güncel" ? "✓" : "";
    if (key === "__page") return record.status || "Aktif";
    if (key === "__blank") return "";
    return record[key] ?? "";
  };
  const prozonFilterCell = (type = "search") => {
    if (type === "date") return `<span class="prozon-filter-date"><span data-icon="search"></span><span data-icon="calendar"></span></span>`;
    if (type === "select") return `<span class="prozon-filter-select">${escapeHtml(trText("Tümü"))}<span data-icon="chevron"></span></span>`;
    return `<span class="prozon-filter-search"><span data-icon="search"></span></span>`;
  };
  const renderProzonTable = (columns, records, moduleId) => {
    const canEdit = canManageRecords();
    return `
      <div class="prozon-grid-shell">
        <aside class="prozon-grid-rail">
          ${canEdit && moduleId ? `<button type="button" data-action="add" data-module="${moduleId}" title="${escapeHtml(trText("Ekle"))}">+</button>` : ""}
          ${canEdit && moduleId ? `<button type="button" data-action="export" data-module="${moduleId}" title="${escapeHtml(trText("Excel"))}"><span data-icon="download"></span></button>` : ""}
        </aside>
        <div class="prozon-grid-scroll">
          <table class="prozon-data-grid">
            <thead>
              <tr>${columns.map(([, label]) => `<th>${escapeHtml(trText(label))}<span data-icon="filter"></span></th>`).join("")}</tr>
              <tr>${columns.map(([, , type]) => `<td>${prozonFilterCell(type)}</td>`).join("")}</tr>
            </thead>
            <tbody>
              ${
                records.length
                  ? records
                      .map(
                        (record, index) => `
                          <tr data-row-id="${escapeHtml(record.id || String(index))}">
                            ${columns.map(([key]) => `<td>${escapeHtml(String(prozonValue(record, key, index) || ""))}</td>`).join("")}
                          </tr>
                        `,
                      )
                      .join("")
                  : `<tr class="is-empty"><td colspan="${columns.length}"></td></tr>`
              }
            </tbody>
          </table>
        </div>
      </div>
    `;
  };
  const youtubeUrl = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  const prozonListScreen = ({ title, subtitle, icon, moduleId, columns, records, primaryLabel, helpQuery, toolbar = "", groupable = false }) => `
    <section class="prozon-list-screen">
      <header class="prozon-list-heading">
        <div class="prozon-title-block">
          <span data-icon="${icon}"></span>
          <div>
            <h2>${escapeHtml(trText(title))}</h2>
            <p>${escapeHtml(trText(subtitle))}</p>
          </div>
        </div>
        <div class="prozon-list-actions">
          ${toolbar}
          ${primaryLabel && moduleId && canManageRecords() ? `<button class="primary" type="button" data-action="add" data-module="${moduleId}"><span data-icon="${icon}"></span>${escapeHtml(trText(primaryLabel))}</button>` : ""}
          <button type="button" data-payroll-center-tab="${payrollCenterTab}"><span data-icon="refresh"></span>${escapeHtml(trText("Yenile"))}</button>
          ${helpQuery ? `<a href="${youtubeUrl(helpQuery)}" target="_blank" rel="noreferrer" title="${escapeHtml(trText("Video anlatım"))}"><span data-icon="youtube"></span></a>` : ""}
          <button type="button" title="${escapeHtml(trText("Yardım"))}">?</button>
        </div>
      </header>
      ${groupable ? `<div class="prozon-group-strip"><span data-icon="chevron"></span>${escapeHtml(trText("Gruplamak istediğiniz sütunu bu alana sürükleyiniz."))}</div>` : ""}
      ${renderProzonTable(columns, records, moduleId)}
    </section>
  `;
  const prozonParameterScreen = () => `
    <section class="prozon-list-screen prozon-parameter-screen">
      <header class="prozon-list-heading">
        <div class="prozon-title-block">
          <span data-icon="settings"></span>
          <div>
            <h2>${escapeHtml(trText("Şirket Parametreleri"))}</h2>
            <p>${escapeHtml(trText("Şirket parametrelerini bu ekranda düzenleyebilirsiniz."))}</p>
          </div>
        </div>
        <div class="prozon-list-actions">
          <a href="${youtubeUrl("şirket parametreleri bordro ayarları")}" target="_blank" rel="noreferrer"><span data-icon="youtube"></span></a>
          <button type="button">?</button>
        </div>
      </header>
      <nav class="prozon-inner-tabs">
        ${["Yol/Yemek Parametreleri", "Genel Parametreler", "Bordro Parametreleri", "FM Tanımlamaları", "PDKS Tanımlamaları", "Muhtasar Bilgileri", "Entegrasyonlar"]
          .map((label, index) => `<button class="${index === 1 ? "active" : ""}" type="button">${escapeHtml(trText(label))}</button>`)
          .join("")}
      </nav>
      <div class="prozon-form-card">
        <h3>${escapeHtml(trText("Sağlık Raporu Genel Prensipleri"))}:</h3>
        <div class="prozon-form-row">
          <label>${escapeHtml(trText("Ödeme Tipi"))}: <select><option>${escapeHtml(trText("Raporlu Günler İçin Ödeme Yapma"))}</option><option>${escapeHtml(trText("Raporlu Günleri Öde"))}</option></select></label>
          <label><input type="checkbox" /> ${escapeHtml(trText("Ücretli Raporlu Günleri Teşviklendir"))}</label>
          <label><input type="checkbox" /> ${escapeHtml(trText("Oto. Vizite RP. Çek"))}</label>
        </div>
        <div class="prozon-form-row">
          <label>${escapeHtml(trText("Avans Varsayılan Onaylama Tipi"))}: <select><option>${escapeHtml(trText("Sadece Üst Yönetici ve İK Onaylar"))}</option></select></label>
          <label><input type="checkbox" /> ${escapeHtml(trText("İK'nın Avans Atamasında Personel Onayı Gerekli"))}</label>
        </div>
        <div class="prozon-form-row">
          <label>${escapeHtml(trText("Bordro Hesaplama Tipi"))}: <select><option>${escapeHtml(trText("Dinamik Puantajlı"))}</option></select></label>
          <label>${escapeHtml(trText("Deneme Süresi(Gün)"))}: <input value="60" /></label>
          <label>${escapeHtml(trText("Varsayılan Dil"))}: <select><option>${escapeHtml(trText("Türkçe"))}</option><option>English</option></select></label>
        </div>
      </div>
    </section>
  `;
  const tabContents = {
    home: `
      <section class="prozon-pano-layout">
        <article class="prozon-stat-board">
          <div class="prozon-stat-grid">
            ${prozonPanoStats
              .map(
                ([label, value, icon]) => `
                  <button class="prozon-stat-card" type="button" data-payroll-center-tab="${
                    label.includes("İzin") ? "leaveTop" : label.includes("Bordro") ? "payrollTop" : label.includes("Çalışan") || label.includes("Personel") ? "personnelTop" : "home"
                  }">
                    <span>
                      <b>${escapeHtml(trText(label))}</b>
                      <strong>${escapeHtml(String(value))}</strong>
                    </span>
                    <i data-icon="${icon}"></i>
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
        <aside class="prozon-news-stack">
          ${prozonNewsCards
            .map(
              (card) => `
                <article class="prozon-news-card">
                  <div class="prozon-news-thumb">
                    <strong>AD</strong>
                    <span>${escapeHtml(trText("mevzuat"))}</span>
                  </div>
                  <div>
                    <h3>${escapeHtml(trText(card.title))}</h3>
                    <p>${escapeHtml(trText(card.text))}</p>
                    <small>${escapeHtml(`${card.source} · ${card.date || todayLabel}`)}</small>
                    <button type="button" data-payroll-center-tab="managementTop">${escapeHtml(trText("Devamı İçin Tıklayınız."))}</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </aside>
      </section>
      <section class="prozon-chart-card">
        <h3>${escapeHtml(trText("İşyerlerine Göre Personel Sayısı Dağılımı"))}</h3>
        <div class="prozon-workplace-chart">
          ${workplaceDistribution
            .map(
              ([name, count]) => `
                <div>
                  <span>${escapeHtml(name)}</span>
                  <b style="--w:${Math.max(4, Math.round(((Number(count) || 0) / workplaceMax) * 100))}%"></b>
                  <strong>${escapeHtml(String(count))}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    `,
    assistant: `
      <section class="bordro-board">${assistantPanel}${smartAlertsPanel}</section>
      ${messageBoardPanel}
      <section class="bordro-board">${notificationCenterPanel}${emailAutomationPanel}</section>
      ${easyPortalPanel}
    `,
    setup: `
      ${setupWizardPanel}
      ${growthCenterPanel}
      <section class="bordro-tab-content two-col">
        ${backupActionPanel}
      </section>
    `,
    messages: `
      ${messageBoardPanel}
      ${quickActions}
    `,
    growth: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("Gelişim Merkezi"))}</span>
          <h2>${escapeHtml(trText("Kullanıcı testi, veri düzeni, bildirim, asistan, portal, rapor ve yedek süreçleri tek yerde."))}</h2>
          <p>${escapeHtml(`${trText("Hazırlık")}: %${readinessRate} · ${experienceRecords.length} ${trText("test")} · ${templateRecords.length} ${trText("şablon")}`)}</p>
        </div>
        <div class="payroll-progress">
          <strong>%${readinessRate}</strong>
          <span>${escapeHtml(trText("Finale Hazırlık"))}</span>
        </div>
      </section>
      ${growthCenterPanel}
      <section class="bordro-tab-content two-col">
        ${crudPanel("Kullanıcı Deneyimi Testleri", "experienceTests", ["persona", "scenario", "screen", "finding", "action", "owner", "status"], experienceRecords)}
        ${crudPanel("Veri Giriş Şablonları", "dataTemplates", ["moduleName", "templateName", "requiredFields", "sample", "owner", "status"], templateRecords)}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Akıllı Hatırlatma Kuralları", "automationRules", ["rule", "trigger", "target", "owner", "status"], automationRecords)}
        ${backupActionPanel}
      </section>
      ${
        canManageRecords()
          ? `<section class="bordro-tab-content two-col">
              ${crudPanel("Yedekleme Takibi", "backupCenter", ["date", "type", "scope", "owner", "status"], backupRecords)}
              ${crudPanel("Güvenlik ve Rol Kontrolü", "security", ["role", "scope", "canAdd", "canEdit", "canDelete", "sensitiveAccess"], securityRecords)}
            </section>`
          : ""
      }
    `,
    menu: `
      <section class="bordro-tab-grid">
        ${[
          ["Akıllı Asistan", "Bordro, avans, fatura, mesai ve evrak sorularını hızlı cevaplar.", "assistant"],
          ["Mesajlar", "Duyuru, personel mesajı ve müşteri mesajları tek yerde.", "assistant"],
          ["Gelişim Merkezi", "Canlı kullanım hazırlığı, veri şablonları, yedek ve güvenlik kontrolü.", "growth"],
          ["Personel Yönetimi", "Personel kartları, özlük, izin, zimmet ve eğitim kayıtları.", "personnel360"],
          ["Bordro İşlemleri", "Bordro listesi, onay durumu, personele yayın ve görüntülenme takibi.", "payroll"],
          ["Takvim Yönetimi", "Puantaj teslim, maaş ödeme, SGK ve kapanış tarihleri.", "payrollCenter"],
          ["İK Metrikleri", "Devir, performans, işe alım ve departman kırılımları.", "operationsHub"],
          ["Raporlar", "Bordro, avans, mesai, fatura ve maliyet grafikleri.", "reports"],
          ["Banka / BES Takibi", "IBAN, banka ödeme ve BES kayıtları İK & Bordro ekranında yönetilir.", "operationsHub"],
        ]
          .map(
            ([title, text, nav]) => `
              <button type="button" data-payroll-center-tab="${
                nav === "personnel360"
                  ? "operationsHub"
                  : nav === "payroll"
                    ? "operationsHub"
                    : nav === "reports"
                      ? "reports"
                      : nav === "payrollCenter"
                        ? "calendar"
                        : nav
              }">
                <strong>${escapeHtml(trText(title))}</strong>
                <span>${escapeHtml(trText(text))}</span>
              </button>
            `,
          )
          .join("")}
      </section>
    `,
    system: `
      <section class="bordro-tab-content two-col">
        ${crudPanel("Sistem Ayarları", "settings", ["setting", "value", "description", "status"], getScopedRecords(getModule("settings")))}
        ${backupActionPanel}
      </section>
      ${quickActions}
    `,
    calendar: `
      <section class="bordro-tab-content">${calendarPanel}</section>
      <section class="bordro-tab-content">
        ${crudPanel("Bordro Takvimi", "payrollCalendar", ["date", "event", "period", "responsible", "reminder", "status"], calendarRecords)}
      </section>
    `,
    forms: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("Matbu Formlar"))}</span>
          <h2>${escapeHtml(trText("İşe gelmeme, ihtar, savunma ve deneme süreci formları tek merkezde."))}</h2>
          <p>${escapeHtml(`${formRecords.length} ${trText("hazır form")} · ${formRecords.filter((record) => record.status === "İmzalandı").length} ${trText("imzalı")}`)}</p>
        </div>
      </section>
      <section class="bordro-tab-content">
        ${crudPanel("Matbu Form Arşivi", "matbuForms", ["formName", "category", "person", "formDate", "status"], formRecords)}
      </section>
    `,
    compliance: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("Günlük Kontroller"))}</span>
          <h2>${escapeHtml(trText("İş kazası, SGK bildirge ve yasal son gün kontrolleri günlük izlenir."))}</h2>
          <p>${escapeHtml(todayAccidentCheck ? trText("Bugün iş kazası kontrolü kapatıldı.") : trText("Bugün iş kazası kontrolü bekliyor."))}</p>
        </div>
      </section>
      <section class="bordro-tab-content two-col">
        ${accidentCheckPanel}
        ${legalOpsPanel}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Günlük Kontrol Kayıtları", "accidentChecks", ["date", "workplace", "checkedBy", "accidentStatus", "sgkStatus", "status"], accidentRecords)}
        ${crudPanel("Bordro Takvimi", "payrollCalendar", ["date", "event", "period", "responsible", "reminder", "status"], calendarRecords)}
      </section>
    `,
    company: `
      ${customerPortalPanel}
      <section class="bordro-tab-content">
        ${crudPanel("Şirket Yönetimi", "companies", ["name", "authorized", "email", "phone", "city", "contractStatus", "contractFile", "offerFile"], companies)}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Kullanıcı ve Rol Yönetimi", "users", ["email", "name", "surname", "companyName", "type", "status"], getScopedRecords(getModule("users")))}
        ${crudPanel("Sistem Ayarları", "settings", ["setting", "value", "description", "status"], getScopedRecords(getModule("settings")))}
      </section>
    `,
    operationsHub: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("İK & Bordro İşlemleri"))}</span>
          <h2>${escapeHtml(trText("Tanımlar, İK metrikleri, bordro işlemleri ve avans tek ekranda toplandı."))}</h2>
          <p>${escapeHtml(`${activePersonnel.length} ${trText("Mevcut Çalışan")} · ${formatMoney(totalAdvance)} ${trText("Avans")} · ${tasks.length} ${trText("Açık Görev")}`)}</p>
        </div>
      </section>
      <section class="bordro-tab-content">${payrollCalculatorPanel}</section>
      <section class="bordro-tab-content">${attendanceMatrix}</section>
      <section class="bordro-tab-content">${attendanceImportPanel}</section>
      <section class="bordro-kpis">
        ${[
          ["Mevcut Çalışan", activePersonnel.length, "users"],
          ["Performans", avgPerformance, "barChart"],
          ["Açık Pozisyon", recruitmentRecords.filter((record) => record.status === "Açık").length, "checklist"],
          ["Avans", formatMoney(totalAdvance), "wallet"],
          ["Kesinti", formatMoney(totalDeduction), "invoice"],
          ["Açık Görev", tasks.length, "note"],
        ]
          .map(
            ([label, value, icon]) => `
              <article>
                <span data-icon="${icon}"></span>
                <small>${escapeHtml(periodLabel)}</small>
                <strong>${escapeHtml(value)}</strong>
                <b>${escapeHtml(trText(label))}</b>
              </article>
            `,
          )
          .join("")}
      </section>
      <section class="bordro-tab-content two-col">
        ${employee360Panel}
        ${payrollWorkflowPanel}
      </section>
      <section class="bordro-tab-content two-col">
        ${accidentCheckPanel}
        ${legalOpsPanel}
      </section>
      <section class="bordro-tab-content two-col">
        ${trialWarningPanel}
        ${companyRatingPanel}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Personel Tanımları", "personnel", ["name", "companyName", "department", "role", "startDate", "trialEndDate", "grossSalary", "status"], personnel)}
        ${crudPanel("Bordro İşlemleri", "payroll", ["person", "period", "grossSalary", "netSalary", "cumulativeTaxBase", "incomeTaxAmount", "advance", "netPayable", "payrollStatus"], payroll)}
      </section>
      <section class="bordro-tab-content two-col">
        ${payrollExportPanel}
        ${crudPanel("Banka / BES", "bankBes", ["person", "bankName", "iban", "besStatus", "besRate", "paymentStatus", "status"], bankBesRecords)}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Aylık Puantaj Girişi", "attendance", ["person", "period", "dailyHours", "totalHours", "overtimeHours", "status"], attendance)}
        ${crudPanel("İzin ve Tatil Yönetimi", "leaves", ["person", "type", "startDate", "endDate", "dayCount", "approval", "status"], getScopedRecords(getModule("leaves")))}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Günlük Kontrol Kayıtları", "accidentChecks", ["date", "workplace", "checkedBy", "accidentStatus", "sgkStatus", "status"], accidentRecords)}
        ${crudPanel("Sicil Yönetimi", "employeeRegistry", ["registryNo", "person", "identityNo", "department", "employmentType", "incentiveStatus", "status"], registryRecords)}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Özlük Evrak Checklist", "documentsChecklist", ["person", "identity", "sgk", "contract", "kvkk", "health", "iban", "status"], getScopedRecords(getModule("documentsChecklist")))}
        ${crudPanel("Fatura ve Tahsilat İşlemleri", "invoices", ["invoiceNo", "company", "amount", "withholding", "paymentStatus", "status"], invoices)}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Performans", "performanceReviews", ["person", "period", "target", "score", "reviewer", "result", "status"], performanceRecords)}
        ${crudPanel("İşe Alım", "recruitment", ["position", "department", "candidate", "stage", "interviewDate", "responsible", "status"], recruitmentRecords)}
      </section>
    `,
    definitions: `
      <section class="bordro-tab-content two-col">
        ${employee360Panel}
        ${crudPanel("Personel Tanımları", "personnel", ["name", "department", "role", "city", "startDate", "documentStatus", "status"], personnel)}
        ${crudPanel("Sicil Yönetimi", "employeeRegistry", ["registryNo", "person", "identityNo", "department", "manager", "employmentType", "status"], registryRecords)}
        ${crudPanel("Özlük Evrak Checklist", "documentsChecklist", ["person", "identity", "sgk", "contract", "kvkk", "health", "iban", "status"], getScopedRecords(getModule("documentsChecklist")))}
        ${crudPanel("İşe Alım", "recruitment", ["position", "department", "candidate", "stage", "interviewDate", "responsible", "status"], recruitmentRecords)}
      </section>
    `,
    payrollDefinitions: `
      <section class="bordro-tab-content">${payrollCalculatorPanel}</section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Bordro Tanımları ve Kayıtları", "payroll", ["person", "period", "grossSalary", "netSalary", "cumulativeTaxBase", "incomeTaxAmount", "advance", "deduction", "netPayable", "payrollStatus"], payroll)}
        ${crudPanel("Banka / BES", "bankBes", ["person", "bankName", "iban", "besStatus", "besRate", "paymentStatus", "status"], bankBesRecords)}
      </section>
      <section class="bordro-tab-content">${payrollExportPanel}</section>
      ${quickActions}
    `,
    selfService: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("Bordro self-servis"))}</span>
          <h2>${escapeHtml(trText("Personel bordrosunu görür, onaylar ve yayın durumunu takip eder."))}</h2>
          <p>${escapeHtml(`${selfServicePayroll.filter((record) => record.publishStatus === "Personele Açıldı").length} ${trText("Personele Açıldı")} · ${selfServicePayroll.filter((record) => record.viewStatus === "Görüldü").length} ${trText("Görüldü")}`)}</p>
        </div>
      </section>
      ${personSelfServicePanel}
    `,
    customerPortal: `
      ${customerPortalPanel}
    `,
    hrMetrics: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("İK Metrikleri Paneli"))}</span>
          <h2>${escapeHtml(trText("Çalışan devir oranı, performans, işe alım ve eğitim kırılımları tek ekranda izlenir."))}</h2>
          <p>${escapeHtml(`${activePersonnel.length} ${trText("Mevcut Çalışan")} · ${avgPerformance} ${trText("Puan")} · ${recruitmentRecords.filter((record) => record.status === "Açık").length} ${trText("Açık")}`)}</p>
        </div>
        <div class="payroll-progress">
          <strong>${escapeHtml(`${avgPerformance || 0}`)}</strong>
          <span>${escapeHtml(trText("Ortalama Performans"))}</span>
        </div>
      </section>
      <section class="bordro-kpis">
        ${[
          ["Mevcut Çalışan", activePersonnel.length, "users"],
          ["İşe Alınan", hired, "contact"],
          ["İşten Ayrılan", left, "contact"],
          ["Performans", avgPerformance, "barChart"],
          ["Açık Pozisyon", recruitmentRecords.filter((record) => record.status === "Açık").length, "checklist"],
          ["Eğitim", getScopedRecords(getModule("trainings")).length, "presentation"],
        ]
          .map(
            ([label, value, icon]) => `
              <article>
                <span data-icon="${icon}"></span>
                <small>${escapeHtml(periodLabel)}</small>
                <strong>${escapeHtml(value)}</strong>
                <b>${escapeHtml(trText(label))}</b>
              </article>
            `,
          )
          .join("")}
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Performans", "performanceReviews", ["person", "period", "target", "score", "reviewer", "result", "status"], performanceRecords)}
        ${crudPanel("İşe Alım", "recruitment", ["position", "department", "candidate", "stage", "interviewDate", "responsible", "status"], recruitmentRecords)}
      </section>
      <section class="bordro-tab-content two-col">
        <article class="bordro-panel">
          <h3>${escapeHtml(trText("Departman Dağılımı"))}</h3>
          ${compactRows(
            ["Departman", "Çalışan"],
            [...new Set(personnel.map((record) => record.department || "Tanımsız"))].map((department) => [
              department,
              personnel.filter((record) => (record.department || "Tanımsız") === department).length,
            ]),
          )}
        </article>
        <article class="bordro-panel">
          <h3>${escapeHtml(trText("Risk ve Uyum"))}</h3>
          ${compactRows(["Başlık", "Durum"], [["Eksik Checklist", getScopedRecords(getModule("documentsChecklist")).filter((record) => record.status !== "Tam").length], ["Banka Ödemesi", `${bankPaidCount}/${Math.max(bankBesRecords.length, 1)}`], ["BES Kaydı", `${besCount}/${Math.max(bankBesRecords.length, 1)}`], ["Açık Görev", tasks.length]])}
        </article>
      </section>
    `,
    reports: `
      ${personReportPanel}
      ${reportChartsPanel}
      <section class="bordro-tab-content two-col">
        ${crudPanel("Raporlar", "reports", ["title", "period", "type", "owner", "status"], reports)}
        <article class="bordro-panel">
          <h3>${escapeHtml(trText("Rapor Özeti"))}</h3>
          ${compactRows(["Başlık", "Toplam"], [["Net Bordro", formatMoney(totalNet)], ["Avans", formatMoney(totalAdvance)], ["Kesinti", formatMoney(totalDeduction)], ["Mesai", `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`], ["SGK Raporları", payroll.length], ["BES Ödeme Raporları", besCount], ["Personel Raporları", personnel.length], ["Muhasebe Raporları", invoices.length]])}
        </article>
      </section>
      ${quickActions}
    `,
    operations: `
      <section class="bordro-tab-content">${payrollWorkflowPanel}</section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Bordro İşlemleri", "payroll", ["person", "period", "netSalary", "payrollStatus", "accountingApproval", "managementApproval", "publishStatus", "viewStatus"], payroll)}
        ${crudPanel("Fatura ve Tahsilat İşlemleri", "invoices", ["invoiceNo", "company", "amount", "withholding", "paymentStatus", "status"], invoices)}
      </section>
    `,
    legislation: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("Mevzuat ve Yasal Parametreler"))}</span>
          <h2>${escapeHtml(trText("Bordro hesaplama parametreleri ve yasal kontroller tek yerde tutulur."))}</h2>
          <p>${escapeHtml(`${legislationRecords.filter((record) => record.status === "Güncel").length} ${trText("Güncel")} · ${legislationRecords.filter((record) => record.status !== "Güncel").length} ${trText("Kontrol Edilecek")}`)}</p>
        </div>
      </section>
      <section class="bordro-tab-content two-col">
        ${crudPanel("Mevzuat ve Yasal Parametreler", "legislation", ["title", "period", "value", "source", "validUntil", "status"], legislationRecords)}
        ${legislationLinksPanel}
        ${legalOpsPanel}
        ${crudPanel("Otomasyon Kuralları", "automationRules", ["rule", "trigger", "target", "owner", "status"], automationRecords)}
      </section>
    `,
    privacy: `
      ${privacyPanel}
    `,
    advance: `
      <section class="bordro-tab-content">
        ${crudPanel("Borç / Avans Yönetimi", "payroll", ["person", "period", "advance", "deduction", "netSalary", "payrollStatus"], payroll)}
      </section>
    `,
    redBulletin: `
      <section class="bordro-hero compact-hero">
        <div>
          <span>${escapeHtml(trText("KVKK, Kırmızı Bülten ve Duyurular"))}</span>
          <h2>${escapeHtml(trText("Maaş, avans, tahsilat, KVKK riski, görev ve şirket duyuruları tek ekranda takip edilir."))}</h2>
          <p>${escapeHtml(`${redBulletinItems.filter(([, value]) => Number(value) > 0).length} ${trText("aktif uyarı")} · ${getScopedRecords(getModule("notifications")).length} ${trText("duyuru")}`)}</p>
        </div>
      </section>
      ${redBulletinPanel}
      ${privacyPanel}
      <section class="bordro-tab-content two-col">
        ${notificationCenterPanel}
        ${emailAutomationPanel}
      </section>
      <section class="bordro-tab-content two-col">
        <article class="bordro-panel">
          <h3>${escapeHtml(trText("Önemli İş Takibi"))}</h3>
          ${compactRows(["Uyarı", "Adet", "Durumu"], [["Maaş ödeme alarmı", payrollPaymentAlerts.length, payrollPaymentAlerts.length ? "Kontrol" : "Tamam"], ["Açık görev", tasks.length, tasks.length ? "Açık" : "Tamam"], ["Kesilmeyen fatura", invoices.filter((record) => record.status !== "Fatura Kesildi").length, "Kontrol"], ["Takvim uyarısı", calendarDueAlerts.length, calendarDueAlerts.length ? "Kontrol" : "Tamam"]])}
        </article>
        ${crudPanel("Duyurular ve Kırmızı Bülten Girişi", "notifications", ["date", "type", "moduleName", "description", "priority", "status"], getScopedRecords(getModule("notifications")))}
      </section>
    `,
  };
  const prozonMenuItems = [
    ["PANO", "grid", "home"],
    ["İŞ YERLERİ", "building", "companyTop"],
    ["PERSONELLER", "users", "personnelTop"],
    ["İZİN YÖNETİMİ", "calendar", "leaveTop"],
    ["BORDRO", "invoice", "payrollTop"],
    ["FİNANS", "wallet", "financeTop"],
    ["HEDEF BÜTÇE", "chart", "budgetTop"],
    ["RAPORLAR", "barChart", "reports"],
    ["TANIMLAMALAR", "menu", "definitionsTop"],
    ["YÖNETİM", "flag", "managementTop"],
  ];
  const prozonSubTabs = {
    companyTop: [["workplaces", "İşyerleri Listesi"]],
    personnelTop: [
      ["personnel", "Personel Listesi"],
      ["preRegister", "Ön Kayıt Listesi"],
      ["extraPayments", "Ek Ödeme Listesi"],
      ["benefits", "Yan Haklar"],
      ["deductions", "Kesintiler"],
      ["sickReports", "Hastalık Raporları"],
      ["overtime", "Fazla Çalışmalar"],
      ["advances", "Avanslar"],
    ],
    leaveTop: [
      ["leaveRequests", "İzin Talepleri"],
      ["hrPendingLeaves", "İK Onayı Bekleyen İzin Talepleri"],
      ["leaveFees", "İzin Ücretleri Listesi"],
      ["compensatory", "Telafi Çalışmaları"],
      ["manualEntitlement", "Manuel Hakediş Ekleme"],
      ["bridgeLeave", "Köprü İzin Tarihleri"],
      ["leaveDefs", "İzin Tanımlamaları"],
    ],
    payrollTop: [
      ["payrollList", "Bordro Listesi"],
      ["attendanceSchedule", "Puantaj Cetveli"],
      ["absenceForm", "Devamsızlık Formu"],
      ["rules", "Kurlar"],
      ["payrollExcel", "Bordro Excel Alımları"],
      ["severance", "Kıdem/İhbar Hesapla"],
      ["pdks", "PDKS"],
      ["fixedAttendance", "Sabit Puantaj Cetveli"],
    ],
    financeTop: [["banks", "Banka Tanımlamaları"], ["bankSlips", "Banka Fişleri"], ["cash", "Kasa Tanımlamaları"], ["cashSlips", "Kasa Fişleri"]],
    budgetTop: [["personBudget", "Personel Hedef Bütçe"]],
    reports: [
      ["detailedPersonnel", "Detaylı Personel Raporu"],
      ["allCompanyPersonnel", "Detaylı Personel Raporu (Tüm Şirketler)"],
      ["compensationLoad", "Tazminat Yükü Raporu"],
      ["personBalances", "Personel Bakiyeleri Raporu"],
      ["workCertificate", "Çalışma Belgesi Raporu"],
      ["costCenter", "Masraf Merkezi"],
    ],
    definitionsTop: [
      ["companyParams", "Şirket Parametreleri"],
      ["companyHierarchy", "Şirket Hiyerarşisi"],
      ["personDefs", "Personel Tanımlamaları"],
      ["payrollDefs", "Bordro Tanımlamaları"],
      ["benefitDeductionDefs", "Yan Hak / Kesinti Tanımlamaları"],
      ["incentiveDefs", "Teşvik Tanımlamaları"],
    ],
    managementTop: [["documentTypes", "Belge Türleri"], ["laws", "Kanunlar"], ["minimumWage", "Asgari Ücret Parametreleri"], ["sgkParams", "SGK Parametreleri"], ["payrollParams", "Bordro Parametreleri"], ["other", "Diğer"]],
  };
  const topScreenDefaults = Object.fromEntries(Object.entries(prozonSubTabs).map(([tab, items]) => [tab, items[0]?.[0]]));
  const activeSubTab = prozonActiveSubTabs[payrollCenterTab] || topScreenDefaults[payrollCenterTab] || "";
  const documentTypeRows = [
    { id: "doc1", no: "1", title: "HİZMET AKDİ İLE TÜM SİGORTA KOLLARINA TABİ ÇALIŞANLAR", default: "✓" },
    { id: "doc2", no: "2", title: "SOSYAL GÜVENLİK DESTEK PRİMİNE TABİ ÇALIŞANLAR", default: "" },
    { id: "doc4", no: "4", title: "YER ALTINDA SÜREKLİ ÇALIŞANLAR", default: "" },
    { id: "doc5", no: "5", title: "YER ALTINDA GRUPLU (MÜNAVEBELİ) ÇALIŞANLAR", default: "" },
    { id: "doc6", no: "6", title: "YER ÜSTÜ GRUPLU ÇALIŞANLAR", default: "" },
    { id: "doc7", no: "7", title: "3308 SAYILI KANUNDA BELİRTİLEN ADAY ÇIRAK, ÇIRAK VE İŞLETMELERDE MESLEKİ EĞİTİM GÖREN ÖĞRENCİLER", default: "" },
    { id: "doc12", no: "12", title: "GEÇİCİ 20. MADDEYE TABİ OLANLAR", default: "" },
    { id: "doc29", no: "29", title: "TÜM SİGORTA KOLLARINA TABİ ÇALIŞIP 60 GÜN FİİLİ HİZMET SÜRESİ ZAMMINA TABİ ÇALIŞANLAR", default: "" },
    { id: "doc42", no: "42", title: "3308 SAYILI KANUNDA BELİRTİLEN ADAY ÇIRAK, ÇIRAK VE İŞLETMELERDE MESLEKİ EĞİTİM GÖREN ÖĞRENCİLER", default: "" },
    { id: "doc90", no: "90", title: "İTİBARİ HİZMET SÜRESİNE TABİ OLARAK ÇALIŞANLAR", default: "" },
  ];
  const screenFactories = {
    companyTop: () =>
      prozonListScreen({
        title: "İşyerleri Listesi",
        subtitle: "İşyerleri ile ilgili işlemlere bu ekrandan erişebilirsiniz",
        icon: "building",
        moduleId: "companies",
        primaryLabel: "Yeni İşyeri",
        helpQuery: "Prozon işyerleri listesi işyeri tanımlama",
        columns: [["__code", "KOD"], ["name", "TANIM"], ["startDate", "AÇILIŞ TARİHİ", "date"], ["endDate", "KAPANIŞ TARİHİ", "date"], ["taxNo", "TESCİL NO"], ["__default", "VARSAYILAN", "select"], ["city", "SGK SİCİL NO"]],
        records: companies,
      }),
    personnelTop: () =>
      prozonListScreen({
        title: activeSubTab === "preRegister" ? "Personel Ön Kayıt Listesi" : activeSubTab === "advances" ? "Avanslar" : "Personel Listesi",
        subtitle: "Personeller ile ilgili işlemlere bu ekrandan erişebilirsiniz",
        icon: "users",
        moduleId: activeSubTab === "advances" ? "payroll" : "personnel",
        primaryLabel: activeSubTab === "preRegister" ? "Yeni Ön Kayıt" : activeSubTab === "advances" ? "Yeni Avans" : "Yeni Personel",
        helpQuery: "personel yönetimi ön kayıt yan hak kesinti avans",
        groupable: true,
        columns:
          activeSubTab === "advances"
            ? [["person", "AD SOYAD"], ["period", "DÖNEM"], ["advance", "AVANS"], ["deduction", "KESİNTİ"], ["netPayable", "NET ÖDENECEK"], ["payrollStatus", "DURUM", "select"]]
            : [["status", "DURUM", "select"], ["__firstName", "AD"], ["__lastName", "SOYAD"], ["email", "EPOSTA"], ["phone", "GSM"], ["department", "ÖN KAYIT TANIM"], ["__page", "SAYFA BİLGİSİ"]],
        records: activeSubTab === "advances" ? payroll : personnel,
      }),
    leaveTop: () =>
      prozonListScreen({
        title: "İzin Talep Listesi",
        subtitle: activeSubTab === "hrPendingLeaves" ? "İK onayı bekleyen izin talepleri" : "İzin Talepleri",
        icon: "calendar",
        moduleId: "leaves",
        primaryLabel: "Toplu İzin",
        helpQuery: "izin yönetimi yıllık izin talebi onay süreci",
        toolbar: `<select><option>${escapeHtml(trText("Tümü"))}</option><option>${escapeHtml(trText("Bekliyor"))}</option><option>${escapeHtml(trText("Onaylandı"))}</option></select>`,
        columns: [["__code", "SİCİL NO"], ["person", "AD SOYAD"], ["identityNo", "TCKİMLİKNO"], ["type", "İZİN TANIMI"], ["approval", "ONAY DURUMU", "select"], ["startDate", "İZİN BAŞLANGIÇ ...", "date"], ["endDate", "İŞE DÖNÜŞ TARİHİ", "date"], ["dayCount", "GÜN"]],
        records: activeSubTab === "hrPendingLeaves" ? leaveRecords.filter((record) => record.approval === "Bekliyor") : leaveRecords,
      }),
    payrollTop: () =>
      activeSubTab === "rules"
        ? prozonListScreen({
            title: "Kurlar",
            subtitle: "Bu ekranda kur değerlerini yönetebilirsiniz.",
            icon: "chart",
            moduleId: "legislation",
            helpQuery: "TC Merkez Bankası kur bordro",
            toolbar: `<label>${escapeHtml(trText("Tarih"))}: <input type="text" value="${escapeHtml(todayLabel)}" /></label><button type="button"><span data-icon="download"></span>${escapeHtml(trText("TC Merkez Bankasından Kurları Al"))}</button>`,
            groupable: true,
            columns: [["validUntil", "TARİH", "date"], ["source", "DÖVİZ", "select"], ["value", "ALIŞ"], ["value", "SATIŞ"], ["period", "EFEKTİF A..."], ["status", "EFEKTİF S..."]],
            records: legislationRecords,
          })
        : prozonListScreen({
            title: activeSubTab === "severance" ? "Kıdem/İhbar Hesapla" : "Bordro Listesi",
            subtitle: "Bordro ve puantaj işlemlerini bu ekrandan yönetebilirsiniz.",
            icon: "invoice",
            moduleId: activeSubTab === "attendanceSchedule" ? "attendance" : "payroll",
            primaryLabel: "Yeni Bordro",
            helpQuery: "bordro listesi puantaj cetveli kıdem ihbar hesaplama",
            groupable: true,
            columns: [["person", "AD SOYAD"], ["period", "DÖNEM"], ["grossSalary", "BRÜT"], ["netSalary", "NET"], ["advance", "AVANS"], ["netPayable", "NET ÖDEME"], ["payrollStatus", "DURUM", "select"]],
            records: payroll,
          }),
    financeTop: () =>
      prozonListScreen({
        title: activeSubTab === "banks" ? "Banka Tanım Listesi" : "Finans Listesi",
        subtitle: "Bu formda banka tanımlarını listeleyebilirsiniz.",
        icon: "wallet",
        moduleId: "bankBes",
        primaryLabel: "Yeni Banka",
        helpQuery: "banka tanımları bordro banka fişleri",
        columns: [["bankName", "BANKA ADI"], ["person", "PERSONEL"], ["iban", "IBAN"], ["besStatus", "BES", "select"], ["paymentStatus", "ÖDEME DURUMU", "select"]],
        records: bankBesRecords,
      }),
    budgetTop: () =>
      prozonListScreen({
        title: "Personel Hedef Bütçe",
        subtitle: "Karşılaştırma yapmak için bütçe taslaklarını seçiniz.",
        icon: "chart",
        moduleId: "reports",
        helpQuery: "personel hedef bütçe bordro maliyet raporu",
        columns: [["status", "SEÇ", "select"], ["title", "TANIM"], ["period", "BAŞLANGIÇ TA...", "date"], ["period", "BİTİŞ TARİHİ", "date"], ["type", "AÇIKLAMA"]],
        records: reports,
      }),
    reports: () =>
      prozonListScreen({
        title: "Detaylı Personel Raporu",
        subtitle: "Bu ekranda personellerinizin bilgilerini detaylı şekilde raporlayabilirsiniz.",
        icon: "barChart",
        moduleId: "reports",
        primaryLabel: "Excel'e Aktar",
        helpQuery: "detaylı personel raporu bordro raporlama",
        groupable: true,
        columns: [["__fullName", "AD SOYAD"], ["__workplace", "SON ÇALIŞILAN İŞYERİ"], ["city", "İLİ"], ["identityNo", "TCKİMLİKNO"], ["registryNo", "SGK SİCİL NO"], ["__code", "SİCİL NO"]],
        records: personnel,
      }),
    definitionsTop: () => prozonParameterScreen(),
    managementTop: () =>
      prozonListScreen({
        title: "Belge Türleri Listesi",
        subtitle: "Belge Türleri oluşturup, düzenleyebilirsiniz.",
        icon: "invoice",
        moduleId: "legislation",
        helpQuery: "SGK belge türleri kanunlar bordro parametreleri",
        columns: [["no", "BELGE NO"], ["title", "TANIM"], ["default", "VARSAYILAN", "select"]],
        records: documentTypeRows,
      }),
  };
  tabContents.companyTop = screenFactories.companyTop();
  tabContents.personnelTop = screenFactories.personnelTop();
  tabContents.leaveTop = screenFactories.leaveTop();
  tabContents.payrollTop = screenFactories.payrollTop();
  tabContents.financeTop = screenFactories.financeTop();
  tabContents.budgetTop = screenFactories.budgetTop();
  tabContents.reports = screenFactories.reports();
  tabContents.definitionsTop = screenFactories.definitionsTop();
  tabContents.managementTop = screenFactories.managementTop();
  const activeContent = tabContents[payrollCenterTab] || tabContents.home;

  document.querySelector("#pageContent").innerHTML = `
    <section class="prozon-dashboard-shell">
      <header class="prozon-mainbar">
        <div class="prozon-brandmark logo-mode">
          <img src="assets/arti-destek-logo.png" alt="Artı Destek" />
        </div>
        <h2>${escapeHtml((currentUser?.companyName || "GLOBAL KALİTEKONTROL").toLocaleUpperCase("tr"))} - (${dashboardYear})</h2>
        <div class="prozon-toolbar">
          <button type="button" data-payroll-center-tab="assistant" title="${escapeHtml(trText("Ara"))}"><span data-icon="search"></span></button>
          <button type="button" data-payroll-center-tab="definitionsTop"><span data-icon="grid"></span>${escapeHtml(trText("Ayarlar"))}</button>
          <button class="prozon-avatar" type="button" data-payroll-center-tab="selfService">${escapeHtml((currentUser?.displayName || "GT").split(" ").map((part) => part[0]).join("").slice(0, 2).toLocaleUpperCase("tr"))}</button>
        </div>
      </header>
      <nav class="prozon-horizontal-nav" aria-label="${escapeHtml(trText("Bordro modülleri"))}">
          ${prozonMenuItems
            .map(
              ([label, icon, tab]) => `
                <button class="${tab === payrollCenterTab ? "active" : ""}" type="button" data-payroll-center-tab="${tab}">
                  <span data-icon="${icon}"></span>
                  ${escapeHtml(trText(label))}
                </button>
              `,
            )
            .join("")}
      </nav>
      ${
        prozonSubTabs[payrollCenterTab]?.length
          ? `<nav class="prozon-sub-nav" aria-label="${escapeHtml(trText("Alt menü"))}">
              ${prozonSubTabs[payrollCenterTab]
                .map(
                  ([id, label]) => `
                    <button class="${id === activeSubTab ? "active" : ""}" type="button" data-prozon-subtab="${id}">
                      <span></span>${escapeHtml(trText(label))}
                    </button>
                  `,
                )
                .join("")}
            </nav>`
          : ""
      }
      <main class="prozon-content">
        ${
          payrollCenterTab === "home"
            ? `<header class="prozon-page-title">
                <div>
                  <h1>${escapeHtml(`${trText("Hoşgeldin")} ${currentUser?.displayName || "Gürkan Tabakoğlu"}...`)}</h1>
                </div>
                <div class="bordro-period">
                  <strong class="prozon-date">${escapeHtml(todayLabel)}</strong>
                  <button class="prozon-check-button" type="button" data-action="daily-accident-check" title="${escapeHtml(trText("Günlük kontrol"))}">
                    <span data-icon="checklist"></span>
                  </button>
                  <label>${escapeHtml(trText("Tarih Aralığı"))}
                    <select id="dashboardRangeSelect">
                      ${dashboardRangeOptions
                        .map(([value, label]) => `<option value="${escapeHtml(value)}" ${value === dashboardRange ? "selected" : ""}>${escapeHtml(trText(label))}</option>`)
                        .join("")}
                    </select>
                  </label>
                  <label>${escapeHtml(trText("Dönem"))}
                    <select id="dashboardMonthSelect">
                      ${getDashboardMonths()
                        .map((month) => `<option value="${escapeHtml(month)}" ${month === dashboardMonth ? "selected" : ""}>${escapeHtml(month)}</option>`)
                        .join("")}
                    </select>
                  </label>
                </div>
              </header>`
            : ""
        }
        ${activeContent}
      </main>
    </section>
  `;
}

function renderPersonnel360() {
  const personnelRecords = getScopedRecords(getModule("personnel"));
  if (!selectedPersonnel360Id || !personnelRecords.some((person) => person.id === selectedPersonnel360Id)) {
    selectedPersonnel360Id = personnelRecords[0]?.id || "";
  }
  const person = personnelRecords.find((record) => record.id === selectedPersonnel360Id);

  if (!person) {
    document.querySelector("#pageContent").innerHTML = `
      <section class="data-card">
        <div class="module-intro">
          <div>
            <span>${escapeHtml(trText("Personel 360"))}</span>
            <h2>${escapeHtml(trText("Kayıt bulunamadı."))}</h2>
            <p>${escapeHtml(trText("Personelin tüm İK dosyası tek ekranda izlenir."))}</p>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const related = getPersonRelatedRecords(person);
  const checklist = related.checklist ? getChecklistCompletion(related.checklist) : { complete: 0, total: 7, rate: 0 };
  const totalHours = related.attendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = related.attendance.reduce((sum, record) => sum + parseHour(record.overtimeHours), 0);
  const openTasks = related.tasks.filter((record) => record.status !== "Tamamlandı").length;
  const pendingLeaves = related.leaves.filter((record) => record.approval === "Bekliyor").length;
  const latestPayroll = related.payroll[0];
  const employment = getPersonEmploymentInsights(person);
  const advanceTotal = getPersonAdvanceTotal(person);

  document.querySelector("#pageContent").innerHTML = `
    <section class="person-360">
      <div class="person-selector">
        ${personnelRecords
          .map(
            (item) => `
              <button class="${item.id === selectedPersonnel360Id ? "active" : ""}" type="button" data-person360="${item.id}">
                ${escapeHtml(item.name || "-")}
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="person-hero">
        <div class="person-avatar">${escapeHtml((person.name || "P").slice(0, 1).toLocaleUpperCase("tr"))}</div>
        <div>
          <span>${escapeHtml(trText("Personel 360"))}</span>
          <h2>${escapeHtml(person.name || "-")}</h2>
          <p>${escapeHtml([person.department, person.role, person.city].filter(Boolean).join(" · "))}</p>
        </div>
        <strong class="${String(person.status).toLocaleUpperCase("tr") === "PASİF" ? "status-red" : "status-green"}">${escapeHtml(trText(person.status || "AKTİF"))}</strong>
      </div>
      <div class="person-kpis">
        ${[
          ["Özlük", `${checklist.rate}%`, checklist.rate === 100 ? "good" : "bad"],
          ["Bordro", latestPayroll?.payrollStatus || "Yok", latestPayroll?.payrollStatus === "Personele Açıldı" ? "good" : "bad"],
          ["Toplam Çalışma", `${totalHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "neutral"],
          ["Mesai", `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "neutral"],
          ["Deneme Süresi", employment.trialState, employment.trialTone],
          ["Kıdem Tazminatı", formatMoney(employment.severance), employment.severance ? "neutral" : "warning"],
          ["İhbar Tazminatı", formatMoney(employment.notice), "neutral"],
          ["Toplam Avans", formatMoney(advanceTotal), advanceTotal ? "warning" : "good"],
          ["Açık Görev", openTasks, openTasks ? "bad" : "good"],
          ["İzin", pendingLeaves ? `${pendingLeaves} bekliyor` : `${related.leaves.length} kayıt`, pendingLeaves ? "bad" : "good"],
        ]
          .map(
            ([label, value, state]) => `
              <article class="person-kpi ${state}">
                <strong>${escapeHtml(value)}</strong>
                <span>${escapeHtml(trText(label))}</span>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="person-sections person-alert-strip">
        <section class="person-section ${employment.trialTone === "danger" ? "danger" : ""}">
          <header><h3>${escapeHtml(trText("Deneme / Kıdem Özeti"))}</h3></header>
          <div class="person-line">
            <span><small>${escapeHtml(trText("Deneme Bitişi"))}</small><b>${escapeHtml(formatDate(toIsoDate(employment.trialEnd)) || "-")}</b></span>
            <span><small>${escapeHtml(trText("Kıdem Süresi"))}</small><b>${escapeHtml(`${employment.serviceYears.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} yıl`)}</b></span>
            <span><small>${escapeHtml(trText("İhbar Süresi"))}</small><b>${escapeHtml(`${employment.noticeWeeks} hafta`)}</b></span>
            <span><small>${escapeHtml(trText("Brüt Referans"))}</small><b>${escapeHtml(formatMoney(employment.gross))}</b></span>
          </div>
        </section>
      </div>
      <div class="person-sections">
        ${renderPersonSection("Özlük Belgeleri", "presentations", related.documents, ["type", "date", "owner", "status"])}
        ${renderPersonSection("Checklist", "documentsChecklist", related.checklist ? [related.checklist] : [], ["identity", "sgk", "contract", "kvkk", "health", "iban", "status"])}
        ${renderPersonSection("Bordro", "payroll", related.payroll, ["period", "netSalary", "advance", "payrollStatus", "viewStatus"])}
        ${renderPersonSection("Puantaj", "attendance", related.attendance, ["period", "dailyHours", "totalHours", "overtimeHours", "status"])}
        ${renderPersonSection("İzinler", "leaves", related.leaves, ["type", "startDate", "endDate", "approval"])}
        ${renderPersonSection("Eğitimler", "trainings", related.trainings, ["title", "date", "validUntil", "status"])}
        ${renderPersonSection("Zimmetler", "assets", related.assets, ["asset", "serial", "givenDate", "status"])}
        ${renderPersonSection("Görevler", "tasks", related.tasks, ["title", "priority", "dueDate", "status"])}
      </div>
    </section>
  `;
}

function renderPersonSection(title, moduleId, records, keys) {
  const module = getModule(moduleId);
  return `
    <section class="person-section">
      <header>
        <h3>${escapeHtml(trText(title))}</h3>
        <button type="button" data-nav="${moduleId}">${escapeHtml(trText("Detay"))}</button>
      </header>
      ${
        records.length
          ? records
              .slice(0, 4)
              .map(
                (record) => `
                  <div class="person-line">
                    ${keys
                      .map((key) => {
                        const column = module.columns?.find(([columnKey]) => columnKey === key);
                        const label = column?.[1] || key;
                        const value = key === "totalHours" ? calculateAttendanceTotal(record) : getExportValue(record[key] ?? "");
                        return `<span><small>${escapeHtml(trText(label))}</small><b>${escapeHtml(trText(String(value || "-")))}</b></span>`;
                      })
                      .join("")}
                  </div>
                `,
              )
              .join("")
          : `<p class="empty-state">${escapeHtml(trText("Kayıt bulunamadı."))}</p>`
      }
    </section>
  `;
}

function renderApprovalsCenter() {
  const items = getApprovalItems();
  const grouped = ["payroll", "leaves", "invoices", "projects", "documentsChecklist", "tasks"].map((moduleId) => ({
    module: getModule(moduleId),
    items: items.filter((item) => item.moduleId === moduleId),
  }));

  document.querySelector("#pageContent").innerHTML = `
    <section class="approval-center">
      <div class="approval-hero">
        <span>${escapeHtml(trText("Onay Merkezi"))}</span>
        <h2>${escapeHtml(trText("Bekleyen onaylar tek merkezden tamamlanır."))}</h2>
        <p>${escapeHtml(`${items.length} ${currentLanguage === "en" ? "pending item" : "bekleyen işlem"} · ${canManageRecords() ? "Admin yetkisi aktif" : "Sadece izleme modu"}`)}</p>
      </div>
      <div class="approval-summary">
        ${grouped
          .map(
            ({ module, items: moduleItems }) => `
              <button type="button" data-nav="${module.id}">
                <strong>${moduleItems.length}</strong>
                <span>${escapeHtml(trText(module.title))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="approval-list">
        ${
          items.length
            ? items
                .map(
                  (item) => `
                    <article class="approval-item ${item.state}">
                      <div>
                        <span>${escapeHtml(trText(getModule(item.moduleId).title))}</span>
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(trText(item.detail))}</p>
                      </div>
                      <strong>${escapeHtml(trText(renderApprovalBadge(item)))}</strong>
                      ${
                        canManageRecords()
                          ? `<button class="btn btn-green" type="button" data-action="approval-complete" data-module="${item.moduleId}" data-id="${item.id}">${escapeHtml(trText("Onayla"))}</button>`
                          : `<button class="btn btn-light" type="button" data-nav="${item.moduleId}">${escapeHtml(trText("Detay"))}</button>`
                      }
                    </article>
                  `,
                )
                .join("")
            : `<div class="approval-empty"><h3>${escapeHtml(trText("Kritik uyarı görünmüyor."))}</h3><p>${escapeHtml(trText("Bekleyen onaylar tek merkezden tamamlanır."))}</p></div>`
        }
      </div>
    </section>
  `;
}

function renderChartBlock() {
  const months = ["05.2026", "04.2026", "03.2026", "02.2026", "01.2026", "12.2025", "11.2025", "10.2025", "09.2025", "08.2025", "07.2025", "06.2025"];
  const monthData = getMonthData(selectedMonth);
  const selectedValues = monthData[selectedDay] ?? { ok: 0, nok: 0, rok: 0, rnok: 0 };
  const total = selectedValues.ok + selectedValues.nok + selectedValues.rok + selectedValues.rnok;
  const safeTotal = Math.max(total, 1);
  const chartHeight = Math.max(8, Math.round((total / 2000) * 270));
  const nextDayValues = monthData[selectedDay + 1] ?? { ok: 0 };
  const nextHeight = Math.max(0, Math.round((nextDayValues.ok / 2000) * 270));

  return `
    <section class="panel-card">
      <div class="panel-body">
        <div class="month-tabs">
          <button class="btn btn-green" type="button" data-action="export">EXCEL</button>
          ${months.map((month) => `<button class="${month === selectedMonth ? "active" : ""}" type="button" data-month="${month}">${month}</button>`).join("")}
        </div>
        <div class="day-selector">
          ${Array.from({ length: 31 }, (_, index) => index + 1)
            .map((day) => `<button class="${day === selectedDay ? "active" : ""}" type="button" data-day="${day}">${day}</button>`)
            .join("")}
        </div>
        <h2 class="chart-title">${selectedMonth} Aylık Parça Kontrol Grafiği - ${String(selectedDay).padStart(2, "0")}. Gün</h2>
        <div class="stacked-chart">
          <span class="y-axis y2000">2,000</span>
          <span class="y-axis y1500">1,500</span>
          <span class="y-axis y1000">1,000</span>
          <span class="y-axis y500">500</span>
          <span class="y-axis y0">0</span>
          <div class="bar-stack" style="height:${chartHeight}px">
            <span class="bar-ok" style="height:${Math.round((selectedValues.ok / safeTotal) * chartHeight)}px"></span>
            <span class="bar-nok" style="height:${Math.round((selectedValues.nok / safeTotal) * chartHeight)}px"></span>
            <span class="bar-rok" style="height:${Math.round((selectedValues.rok / safeTotal) * chartHeight)}px"></span>
            <span class="bar-rnok" style="height:${Math.round((selectedValues.rnok / safeTotal) * chartHeight)}px"></span>
          </div>
          <span class="bar-small" style="height:${nextHeight}px"></span>
          <span class="x-label x1">01.05.2026</span>
          <span class="x-label x2">${String(selectedDay).padStart(2, "0")}.${selectedMonth}</span>
          <span class="x-label x3">${String(Math.min(selectedDay + 3, 31)).padStart(2, "0")}.${selectedMonth}</span>
        </div>
        <div class="legend">
          <span><i style="background:#ff9f45"></i> OK</span>
          <span><i style="background:#e4493d"></i> NOK</span>
          <span><i style="background:#12345a"></i> ROK</span>
          <span><i style="background:#6f7f95"></i> RNOK</span>
        </div>
      </div>
    </section>
    <section class="panel-card">
      <div class="panel-body">
        <h2 class="table-title">${selectedMonth} Aylık Parça Kontrol Tablosu</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>${selectedMonth} -></th>
                ${Array.from({ length: 31 }, (_, index) => index + 1)
                  .map((day) => `<th class="day-cell"><button class="day-button ${day === selectedDay ? "active" : ""}" type="button" data-day="${day}">${day}</button></th>`)
                  .join("")}
              </tr>
            </thead>
            <tbody>${renderMonthRows(monthData)}</tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function getMonthData(month) {
  const monthIndex = Number(month.slice(0, 2));
  const seed = Math.max(monthIndex, 1);
  const data = {};

  Array.from({ length: 31 }, (_, index) => index + 1).forEach((day) => {
    data[day] = { ok: 0, nok: 0, rok: 0, rnok: 0 };
  });

  data[4] = {
    ok: 760 + seed * 29,
    nok: 120 + seed * 12,
    rok: 24 + seed * 2,
    rnok: seed % 2 ? 0 : 8,
  };
  data[5] = { ok: 20 + seed * 3, nok: seed % 3, rok: 0, rnok: 0 };
  data[12] = { ok: seed * 8, nok: seed, rok: seed % 4, rnok: 0 };
  data[18] = { ok: seed * 5, nok: 0, rok: seed % 3, rnok: 0 };

  return data;
}

function renderMonthRows(monthData) {
  const rows = [
    ["OK", "ok"],
    ["NOK", "nok"],
    ["ROK", "rok"],
    ["RNOK", "rnok"],
    ["Toplam", "total"],
    ["Hata Oranı %", "rate"],
  ];

  return rows
    .map(([label, key]) => {
      const cells = Array.from({ length: 31 }, (_, index) => {
        const day = index + 1;
        const values = monthData[day] ?? { ok: 0, nok: 0, rok: 0, rnok: 0 };
        const total = values.ok + values.nok + values.rok + values.rnok;
        const value =
          key === "total"
            ? total
            : key === "rate"
              ? total > 0
                ? ((values.nok / total) * 100).toFixed(2)
                : "-"
              : values[key];
        return `<td class="${day === selectedDay ? "selected-day" : ""}">${value}</td>`;
      }).join("");
      return `<tr><td><strong>${label}</strong></td>${cells}</tr>`;
    })
    .join("");
}

function getFilteredRecords(module) {
  const sourceRecords = getScopedRecords(module, module.id === "quality" ? getQualityRecords() : module.records);
  const filter = filterValue.trim().toLocaleLowerCase("tr");
  const quickFilter = quickFilters[module.id];
  const quickConfig = moduleQuickFilters[module.id];

  return sourceRecords.filter((record) => {
    const passesQuickFilter =
      !quickConfig || !quickFilter || quickFilter === "Tümü" || normalizeText(record[quickConfig.key]) === normalizeText(quickFilter);
    const passesTextFilter =
      !filter || Object.values(record).some((value) => String(getExportValue(value)).toLocaleLowerCase("tr").includes(filter));
    return passesQuickFilter && passesTextFilter;
  });
}

function getRecordTitle(module, record) {
  const firstColumn = module.columns[0]?.[0];
  return record[firstColumn] ?? record.title ?? record.name ?? record.code ?? record.email ?? "";
}

function parseMoney(value) {
  const normalized = String(value ?? "")
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const amount = Number.parseFloat(normalized);
  return Number.isFinite(amount) ? amount : 0;
}

function formatMoney(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

function parsePercent(value, fallback = 0) {
  const number = Number(String(value ?? "").replace("%", "").replace(",", "."));
  return Number.isFinite(number) ? number / 100 : fallback;
}

const defaultPayrollTaxRates = {
  sgkEmployee: 0.14,
  unemploymentEmployee: 0.01,
  incomeTax: 0.15,
  stampTax: 0.00759,
  progressiveTax: true,
};

const incomeTaxBrackets = [
  { limit: 158000, rate: 0.15 },
  { limit: 330000, rate: 0.2 },
  { limit: 1200000, rate: 0.27 },
  { limit: 4300000, rate: 0.35 },
  { limit: Infinity, rate: 0.4 },
];

function calculateProgressiveIncomeTax(monthBase, cumulativeBefore = 0) {
  const base = Math.max(0, Number(monthBase) || 0);
  let remaining = base;
  let previousLimit = 0;
  let tax = 0;
  let activeRate = incomeTaxBrackets[0].rate;
  for (const bracket of incomeTaxBrackets) {
    const bracketStart = previousLimit;
    const bracketEnd = bracket.limit;
    previousLimit = bracketEnd;
    if (cumulativeBefore >= bracketEnd) continue;
    const available = Math.max(0, Math.min(bracketEnd, cumulativeBefore + remaining) - Math.max(bracketStart, cumulativeBefore));
    if (!available) continue;
    tax += available * bracket.rate;
    activeRate = bracket.rate;
    remaining -= available;
    if (remaining <= 0) break;
  }
  return { tax, activeRate, cumulativeAfter: cumulativeBefore + base };
}

function grossToNet(grossAmount, customRates = {}) {
  const rates = { ...defaultPayrollTaxRates, ...customRates };
  const gross = Math.max(0, Number(grossAmount) || 0);
  const sgk = gross * rates.sgkEmployee;
  const unemployment = gross * rates.unemploymentEmployee;
  const incomeTaxBase = Math.max(0, gross - sgk - unemployment);
  const progressiveTax = calculateProgressiveIncomeTax(incomeTaxBase, rates.cumulativeTaxBase || 0);
  const incomeTax = rates.progressiveTax === false && rates.incomeTax ? incomeTaxBase * rates.incomeTax : progressiveTax.tax;
  const stampTax = gross * rates.stampTax;
  const net = Math.max(0, gross - sgk - unemployment - incomeTax - stampTax);
  return { gross, net, sgk, unemployment, incomeTaxBase, incomeTax, stampTax, taxRate: progressiveTax.activeRate, cumulativeAfter: progressiveTax.cumulativeAfter };
}

function netToGross(netAmount, customRates = {}) {
  const target = Math.max(0, Number(netAmount) || 0);
  if (!target) return grossToNet(0, customRates);
  let low = 0;
  let high = target * 2.2 || 1;
  while (grossToNet(high, customRates).net < target) high *= 1.35;
  for (let index = 0; index < 36; index += 1) {
    const mid = (low + high) / 2;
    if (grossToNet(mid, customRates).net < target) low = mid;
    else high = mid;
  }
  return grossToNet(high, customRates);
}

function formatPayrollAmount(value) {
  return `${Math.round(Number(value) || 0).toLocaleString("tr-TR")} TL`;
}

function maskIdentity(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length < 4) return digits || "-";
  return `${digits.slice(0, 3)}******${digits.slice(-2)}`;
}

function calculatePayrollRecordAmounts(record, changedField = "") {
  const gross = parseMoney(record.grossSalary);
  const net = parseMoney(record.netSalary);
  const cumulativeTaxBase = parseMoney(record.cumulativeTaxBase);
  if (changedField === "netSalary" || (!gross && net)) {
    const result = netToGross(net, { cumulativeTaxBase });
    const netPayable = Math.max(0, net + parseMoney(record.bonus) + parseMoney(record.overtime) - parseMoney(record.advance) - parseMoney(record.deduction));
    return {
      ...record,
      grossSalary: formatPayrollAmount(result.gross),
      netSalary: formatPayrollAmount(net),
      cumulativeTaxBase: formatPayrollAmount(cumulativeTaxBase),
      incomeTaxAmount: formatPayrollAmount(result.incomeTax),
      netPayable: formatPayrollAmount(netPayable),
    };
  }
  if (changedField === "grossSalary" || (gross && !net)) {
    const result = grossToNet(gross, { cumulativeTaxBase });
    const netPayable = Math.max(0, result.net + parseMoney(record.bonus) + parseMoney(record.overtime) - parseMoney(record.advance) - parseMoney(record.deduction));
    return {
      ...record,
      grossSalary: formatPayrollAmount(gross),
      netSalary: formatPayrollAmount(result.net),
      cumulativeTaxBase: formatPayrollAmount(cumulativeTaxBase),
      incomeTaxAmount: formatPayrollAmount(result.incomeTax),
      netPayable: formatPayrollAmount(netPayable),
    };
  }
  const netPayable = Math.max(0, net + parseMoney(record.bonus) + parseMoney(record.overtime) - parseMoney(record.advance) - parseMoney(record.deduction));
  return { ...record, cumulativeTaxBase: formatPayrollAmount(cumulativeTaxBase), netPayable: formatPayrollAmount(netPayable) };
}

function toInputDate(value) {
  const text = String(value ?? "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
  if (match) return `${match[3]}-${match[2]}-${match[1]}`;
  return "";
}

function formatDate(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return text;
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function dateFromAny(value) {
  const iso = toInputDate(value) || String(value ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function daysBetween(start, end = new Date()) {
  if (!start) return 0;
  return Math.ceil((end.getTime() - start.getTime()) / 86400000);
}

function toIsoDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getPersonMonthlyGross(person) {
  const latestPayroll = getScopedRecords(getModule("payroll"))
    .filter((record) => personMatchesRecord(person, record))
    .sort((a, b) => String(b.period || "").localeCompare(String(a.period || "")))[0];
  return parseMoney(latestPayroll?.grossSalary) || parseMoney(person.grossSalary);
}

function getPersonEmploymentInsights(person) {
  const start = dateFromAny(person.startDate);
  const today = new Date();
  const trialEnd = dateFromAny(person.trialEndDate) || (start ? addDays(start, 60) : null);
  const gross = getPersonMonthlyGross(person);
  const serviceDays = Math.max(0, daysBetween(start, today));
  const serviceYears = serviceDays / 365;
  const weeklyGross = gross / 4.333;
  const noticeWeeks = serviceDays < 180 ? 2 : serviceDays < 540 ? 4 : serviceDays < 1080 ? 6 : 8;
  const severance = serviceYears >= 1 ? gross * serviceYears : 0;
  const notice = weeklyGross * noticeWeeks;
  const trialRemaining = trialEnd ? daysBetween(today, trialEnd) : 0;
  return {
    start,
    trialEnd,
    trialRemaining,
    trialState: !trialEnd ? "Belirsiz" : trialRemaining > 7 ? `${trialRemaining} gün kaldı` : trialRemaining >= 0 ? "1 hafta içinde bitiyor" : "Deneme süresi bitti",
    trialTone: trialRemaining >= 0 && trialRemaining <= 7 ? "danger" : trialRemaining > 7 ? "warning" : "good",
    serviceYears,
    serviceDays,
    gross,
    severance,
    notice,
    noticeWeeks,
  };
}

function countAttendanceStatus(record, status) {
  return dayColumns.reduce((sum, [key]) => sum + (normalizeText(record?.[key]) === normalizeText(status) ? 1 : 0), 0);
}

function getPersonAdvanceTotal(person) {
  return getScopedRecords(getModule("payroll"))
    .filter((record) => personMatchesRecord(person, record))
    .reduce((sum, record) => sum + parseMoney(record.advance), 0);
}

function getCompanyPersonnelRatings(companyName = "") {
  const personnel = getScopedRecords(getModule("personnel")).filter((person) => !companyName || normalizeText(person.companyName) === normalizeText(companyName));
  const attendance = getScopedRecords(getModule("attendance"));
  const performance = getScopedRecords(getModule("performanceReviews"));
  return personnel
    .map((person) => {
      const personAttendance = attendance.filter((record) => personMatchesRecord(person, record));
      const absent = personAttendance.reduce((sum, record) => sum + countAttendanceStatus(record, "Gelmedi"), 0);
      const report = personAttendance.reduce((sum, record) => sum + countAttendanceStatus(record, "Raporlu"), 0);
      const scoreRecords = performance.filter((record) => personMatchesRecord(person, record));
      const avgScore = scoreRecords.length ? scoreRecords.reduce((sum, record) => sum + Number(record.score || 0), 0) / scoreRecords.length : 80;
      const rating = Math.max(0, Math.min(100, Math.round(avgScore - absent * 4 - report * 2)));
      return { person, absent, report, avgScore: Math.round(avgScore), rating, tone: rating >= 85 ? "good" : rating >= 65 ? "warning" : "danger" };
    })
    .sort((a, b) => b.rating - a.rating);
}

function isDueOrOverdue(value) {
  const date = dateFromAny(value);
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date <= today;
}

function isOptionalField(module, key) {
  return [
    "fax",
    "sector",
    "taxNo",
    "address",
    "note",
    "file",
    "certificate",
    "returnDate",
    "exitDate",
    "emergency",
    "companyName",
    "email",
    "phone",
    "bankIban",
    "bonus",
    "advance",
    "overtime",
    "deduction",
    "contractFile",
    "offerFile",
    "withholding",
    "collectionDate",
  ].includes(key) || (module.id === "projects" && (key === "endDate" || key.endsWith("Count")));
}

function parseHour(value) {
  const hour = Number(String(value ?? "0").replace(",", "."));
  return Number.isFinite(hour) ? hour : 0;
}

function getAttendanceDayHours(value, dailyHours, manualValue = "") {
  const manualHours = parseHour(manualValue);
  if (manualHours > 0) return manualHours;
  const text = String(value ?? "").trim();
  if (!text || text === "-") return 0;
  const normalized = normalizeText(text);
  if (normalized === "geldi") return dailyHours;
  if (normalized === "gecici gorev") return dailyHours;
  if (["gelmedi", "izin", "rapor", "raporlu"].includes(normalized)) return 0;
  return parseHour(text);
}

function getAttendanceDayOvertime(record) {
  return overtimeDayColumns.reduce((sum, [key]) => sum + parseHour(record?.[key]), 0);
}

function calculateAttendanceTotal(record) {
  const dailyHours = parseHour(record?.dailyHours || "7,5");
  const dayHours = dayColumns.reduce((sum, [key], index) => sum + getAttendanceDayHours(record?.[key], dailyHours, record?.[manualHourColumns[index][0]]), 0);
  const overtimeHours = parseHour(record?.overtimeHours);
  return (dayHours + overtimeHours).toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

function renderPayrollOverview(records) {
  const totalNet = records.reduce((sum, record) => sum + parseMoney(record.netSalary), 0);
  const totalAdvance = records.reduce((sum, record) => sum + parseMoney(record.advance), 0);
  const opened = records.filter((record) => record.publishStatus === "Personele Açıldı").length;
  const accountingPending = records.filter((record) => record.accountingApproval !== "Onaylandı").length;
  const managementPending = records.filter((record) => record.managementApproval !== "Onaylandı").length;
  const unseen = records.filter((record) => record.viewStatus !== "Görüldü").length;

  const items = [
    ["Toplam Net Bordro", formatMoney(totalNet)],
    ["Toplam Avans", formatMoney(totalAdvance)],
    ["Personele Açılan", opened],
    ["Muhasebe Bekleyen", accountingPending],
    ["Görülmeyen Bordro", unseen + managementPending],
  ];

  return `
    <div class="payroll-summary" aria-label="Bordro özeti">
      ${items
        .map(
          ([label, value]) => `
            <div>
              <strong>${escapeHtml(value)}</strong>
              <span>${escapeHtml(label)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="workflow-strip">
      <span>İK Hazırlar</span>
      <span>Muhasebe Onaylar</span>
      <span>Yönetici Onaylar</span>
      <span>Personele Açılır</span>
      <span>Görüldü Takibi</span>
    </div>
  `;
}

function renderInvoiceOverview(records) {
  const total = records.reduce((sum, record) => sum + parseMoney(record.amount), 0);
  const waiting = records.filter((record) => record.paymentStatus === "Tahsil Bekliyor").length;
  const overdue = records.filter((record) => record.paymentStatus === "Gecikti").length;
  const paid = records.filter((record) => record.paymentStatus === "Ödendi").length;
  const items = [
    ["Toplam Fatura", formatMoney(total)],
    ["Tahsil Bekliyor", waiting],
    ["Gecikti", overdue],
    ["Ödendi", paid],
  ];

  return `
    <div class="payroll-summary compact-summary" aria-label="Fatura özeti">
      ${items
        .map(
          ([label, value]) => `
            <div>
              <strong>${escapeHtml(value)}</strong>
              <span>${escapeHtml(trText(label))}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderChecklistOverview(records) {
  const completed = records.filter((record) => record.status === "Tam").length;
  const missing = records.length - completed;
  const avg = records.length
    ? Math.round(records.reduce((sum, record) => sum + getChecklistCompletion(record).rate, 0) / records.length)
    : 100;
  const items = [
    ["Checklist Tamamlanma", `%${avg}`],
    ["Tamamlanan", completed],
    ["Eksik", missing],
  ];

  return `
    <div class="payroll-summary compact-summary" aria-label="Evrak kontrol özeti">
      ${items
        .map(
          ([label, value]) => `
            <div>
              <strong>${escapeHtml(value)}</strong>
              <span>${escapeHtml(trText(label))}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderQualityOverview(records) {
  const risky = records.filter((record) => record.risk === "Yüksek").length;
  const totalPieces = records.reduce((sum, record) => sum + parseHour(record.total), 0);
  const avgRate = records.length
    ? records.reduce((sum, record) => sum + parseHour(record.defectRate), 0) / records.length
    : 0;
  const items = [
    ["Toplam Kontrol", totalPieces],
    ["Ortalama Hata", `%${avgRate.toLocaleString("tr-TR", { maximumFractionDigits: 2 })}`],
    ["Riskli Proje", risky],
  ];

  return `
    <div class="payroll-summary compact-summary" aria-label="Kalite özeti">
      ${items
        .map(
          ([label, value]) => `
            <div>
              <strong>${escapeHtml(value)}</strong>
              <span>${escapeHtml(trText(label))}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAttendanceOverview(records) {
  const totalHours = records.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = records.reduce((sum, record) => sum + parseHour(record.overtimeHours), 0);
  const activeCount = records.filter((record) => String(record.status).toLocaleUpperCase("tr") !== "PASİF").length;
  const items = [
    ["Aktif Puantaj", activeCount],
    ["Toplam Çalışma", `${totalHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} saat`],
    ["Toplam Mesai", `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} saat`],
  ];

  return `
    <div class="payroll-summary compact-summary" aria-label="Puantaj özeti">
      ${items
        .map(
          ([label, value]) => `
            <div>
              <strong>${escapeHtml(value)}</strong>
              <span>${escapeHtml(label)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderModuleIntro(module, records) {
  if (module.id === "users") {
    return `
      <div class="module-intro user-admin-guide">
        <div>
          <span>Güvenli kullanıcı yönetimi</span>
          <h2>Kullanıcı şifresi Supabase Authentication üzerinden verilir.</h2>
          <p>Portal ekranındaki kayıt, rol ve firma eşleşmesini yönetir. Şifreyi panelde saklamıyoruz; bu daha güvenli bir kullanım sağlar.</p>
        </div>
      </div>
    `;
  }

  if (module.id === "archive") {
    return `
      <div class="module-intro">
        <div>
          <span>Geri izlenebilirlik</span>
          <h2>Silinen kayıtlar kalıcı olarak kaybolmadan burada tutulur.</h2>
          <p>Bu bölüm admin içindir. Hangi kaydı kimin sildiğini ve hangi modülden geldiğini takip edebilirsiniz.</p>
        </div>
      </div>
    `;
  }

  if (module.id === "audit") {
    return `
      <div class="module-intro">
        <div>
          <span>Denetim izi</span>
          <h2>Eklenen, düzenlenen, silinen ve onaylanan işlemler burada listelenir.</h2>
          <p>Canlı kullanımda operasyon sorumluluğunu takip etmek için bu kayıtları düzenli kontrol edin.</p>
        </div>
      </div>
    `;
  }

  if (module.id === "projects") {
    const waiting = records.filter((record) => record.status === "Beklemede").length;
    const passive = records.filter((record) => record.status === "Pasif").length;
    return `
      <div class="module-intro compact-intro">
        <div><strong>${records.length}</strong><span>Toplam Proje</span></div>
        <div><strong>${waiting}</strong><span>Beklemede</span></div>
        <div><strong>${passive}</strong><span>Pasif</span></div>
      </div>
    `;
  }

  return "";
}

function renderRowActions(module, record) {
  const payrollActions =
    module.id === "payroll"
      ? `
        <button class="icon-action" type="button" title="Muhasebe onayı ver" data-action="payroll-accounting" data-id="${record.id}"><span data-icon="check"></span></button>
        <button class="icon-action" type="button" title="Yönetici onayı ver" data-action="payroll-management" data-id="${record.id}"><span data-icon="check"></span></button>
        <button class="icon-action" type="button" title="Personele aç" data-action="payroll-publish" data-id="${record.id}"><span data-icon="send"></span></button>
        <button class="icon-action" type="button" title="Görüldü işaretle" data-action="payroll-seen" data-id="${record.id}"><span data-icon="eye"></span></button>
      `
      : "";
  const projectActions =
    module.id === "projects"
      ? `<button class="icon-action chart-action" type="button" title="${escapeHtml(trText("Grafik"))}" data-action="project-chart" data-id="${record.id}"><span data-icon="barChart"></span></button>`
      : "";
  const personnelActions =
    module.id === "personnel"
      ? `<button class="icon-action chart-action" type="button" title="${escapeHtml(trText("Personel 360"))}" data-action="personnel-360" data-id="${record.id}"><span data-icon="eye"></span></button>`
      : "";
  const notificationActions =
    module.id === "notifications"
      ? `<button class="icon-action chart-action" type="button" title="${escapeHtml(trText("Okundu İşaretle"))}" data-action="notification-read" data-id="${record.id}"><span data-icon="eye"></span></button>`
      : "";

  return `
    <span class="actions">
      <button class="icon-action" type="button" title="${escapeHtml(trText("Düzenle"))}" data-action="edit" data-id="${record.id}"><span data-icon="edit"></span></button>
      <button class="icon-action" type="button" title="${escapeHtml(trText("Sil"))}" data-action="delete" data-id="${record.id}"><span data-icon="trash"></span></button>
      ${projectActions}
      ${personnelActions}
      ${notificationActions}
      ${payrollActions}
    </span>
  `;
}

function getVisibleColumns(module) {
  if (module.id !== "attendance") return module.columns;
  const hiddenTypes = new Set(["attendanceDay", "attendanceManualHour", "attendanceOvertime"]);
  return module.columns.filter(([, , type]) => !hiddenTypes.has(type));
}

function renderQuickFilters(module) {
  const config = moduleQuickFilters[module.id];
  if (!config) return "";
  const active = quickFilters[module.id] || "Tümü";

  return `
    <div class="quick-tabs">
      ${config.options
        .map(
          (option) => `
            <button class="${active === option ? "active" : ""}" type="button" data-quick-filter="${escapeHtml(option)}">
              ${escapeHtml(trText(option))}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAttendanceForm(record) {
  const dailyHours = record?.dailyHours || "7,5";
  const status = record?.status || "AKTİF";

  return `
    <label>
      Personel
      <input name="person" value="${escapeHtml(record?.person ?? "")}" required />
    </label>
    <label>
      Dönem
      <input name="period" value="${escapeHtml(record?.period ?? selectedMonth)}" placeholder="05.2026" required />
    </label>
    <label>
      Günlük Saat
      <select name="dailyHours" required>
        <option value="7,5" ${dailyHours === "7,5" ? "selected" : ""}>7,5</option>
        <option value="9" ${dailyHours === "9" ? "selected" : ""}>9</option>
      </select>
    </label>
    <label>
      Durumu
      <select name="status" required>
        <option value="AKTİF" ${status === "AKTİF" ? "selected" : ""}>AKTİF</option>
        <option value="PASİF" ${status === "PASİF" ? "selected" : ""}>PASİF</option>
      </select>
    </label>
    <div class="attendance-editor full-field">
      <div class="attendance-editor-head">
        <strong>Gün</strong>
        <strong>Durum</strong>
        <strong>Manuel Saat</strong>
        <strong>Mesai</strong>
      </div>
      ${dayColumns
        .map(([key, label, , options], index) => {
          const overtimeKey = overtimeDayColumns[index][0];
          const manualKey = manualHourColumns[index][0];
          return `
            <div class="attendance-editor-row">
              <span>${escapeHtml(label)}</span>
              <select name="${key}">
                ${options.map((option) => `<option value="${escapeHtml(option)}" ${(record?.[key] ?? "-") === option ? "selected" : ""}>${escapeHtml(trText(option))}</option>`).join("")}
              </select>
              <input name="${manualKey}" value="${escapeHtml(record?.[manualKey] ?? "")}" inputmode="decimal" placeholder="0" />
              <input name="${overtimeKey}" value="${escapeHtml(record?.[overtimeKey] ?? "")}" inputmode="decimal" placeholder="0" />
            </div>
          `;
        })
        .join("")}
    </div>
    <label>
      Mesai Saati
      <input name="overtimeHours" value="${escapeHtml(record ? getAttendanceDayOvertime(record).toLocaleString("tr-TR", { maximumFractionDigits: 1 }) : "0")}" readonly />
    </label>
    <label>
      Toplam Saat
      <input name="totalHours" value="${escapeHtml(record ? calculateAttendanceTotal(record) : "0")}" readonly />
    </label>
  `;
}

function renderDataPage(module) {
  const filteredRecords = getFilteredRecords(module);
  const visibleColumns = getVisibleColumns(module);
  const canEdit = !module.noActions && canManageRecords();

  document.querySelector("#pageContent").innerHTML = `
    <section class="data-card">
      ${renderModuleIntro(module, filteredRecords)}
      ${module.id === "payroll" ? renderPayrollOverview(filteredRecords) : ""}
      ${module.id === "attendance" ? renderAttendanceOverview(filteredRecords) : ""}
      ${module.id === "invoices" ? renderInvoiceOverview(filteredRecords) : ""}
      ${module.id === "documentsChecklist" ? renderChecklistOverview(filteredRecords) : ""}
      ${module.id === "quality" ? renderQualityOverview(filteredRecords) : ""}
      ${renderQuickFilters(module)}
      <div class="toolbar">
        <div class="toolbar-actions">
          ${canEdit ? `<button class="btn btn-green" type="button" data-action="add">${escapeHtml(trText("EKLE"))}</button>` : ""}
          <button class="btn btn-green" type="button" data-action="export">${escapeHtml(trText("EXCEL"))}</button>
          <button class="btn btn-orange" type="button" data-action="export-pdf">${escapeHtml(trText("PDF"))}</button>
        </div>
        <label class="filter-line">
          <span>${escapeHtml(trText(module.id === "projects" ? "Ara:" : "Filtrele :"))}</span>
          <input id="filterInput" type="search" value="${escapeHtml(filterValue)}" />
        </label>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              ${canEdit ? `<th class="sortable">${escapeHtml(trText("İşlemler"))}</th>` : ""}
              ${visibleColumns.map(([, label]) => `<th class="sortable">${escapeHtml(trText(label))}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${
              filteredRecords.length
                ? filteredRecords
                    .map(
                      (record) => `
                        <tr class="${record.id === selectedRecordId ? "selected" : ""}" data-record="${record.id}">
                          ${
                            canEdit
                              ? `<td data-label="${escapeHtml(trText("İşlemler"))}">${renderRowActions(module, record)}</td>`
                              : ""
                          }
                          ${visibleColumns.map(([key, label], index) => renderCell(module, record, key, index, label)).join("")}
                        </tr>
                      `,
                    )
                    .join("")
                : `<tr><td colspan="${visibleColumns.length + (canEdit ? 1 : 0)}">${escapeHtml(trText("Kayıt bulunamadı."))}</td></tr>`
            }
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <span>${escapeHtml(trText("Önceki"))}</span>
        <span class="active">1</span>
        <span>${escapeHtml(trText("Sonraki"))}</span>
      </div>
    </section>
  `;
}

function renderCell(module, record, key, index, label = "") {
  const value = record[key] ?? "";
  const column = module.columns.find(([columnKey]) => columnKey === key);
  const type = column?.[2];
  const labelAttr = `data-label="${escapeHtml(trText(label))}"`;
  if (type === "file") return `<td ${labelAttr}>${renderFileCell(value)}</td>`;
  if (type === "files") return `<td ${labelAttr}>${renderFilesCell(value)}</td>`;
  if (type === "date") return `<td ${labelAttr}>${escapeHtml(formatDate(value))}</td>`;
  if (type === "qualityNumber") {
    return `<td ${labelAttr}><span class="quality-badge quality-${escapeHtml(key.replace("Count", ""))}">${escapeHtml(value || "0")}</span></td>`;
  }
  if (module.id === "attendance" && key === "totalHours") return `<td ${labelAttr}><strong>${escapeHtml(calculateAttendanceTotal(record))}</strong></td>`;
  if (key === "bankIban") return `<td ${labelAttr} class="iban-cell">${escapeHtml(value)}</td>`;
  if (key === "status" && ["AKTİF", "PASİF"].includes(String(value).toLocaleUpperCase("tr"))) {
    return canManageRecords()
      ? `<td ${labelAttr}>${renderStatusButton(module, record)}</td>`
      : `<td ${labelAttr}><span class="${value === "AKTİF" ? "badge-green" : "status-red"}">${escapeHtml(trText(value))}</span></td>`;
  }

  const titleLike = index === 0 || key === "code" || key === "part" || key === "email";
  const valueText = String(value);
  const redStatus = ["Onaysız", "Onay Verilmedi", "Bekliyor", "Kapalı", "Görülmedi", "Pasif", "Reddedildi", "Gecikti", "Yüksek", "Açık", "Eksik"].includes(valueText);
  const greenStatus = ["Onaylı", "Onaylandı", "AKTİF", "Aktif", "Ödendi", "Kesildi", "Fatura Kesildi", "Hazır", "Personele Açıldı", "Görüldü", "Tamamlandı", "Tam", "Düşük"].includes(valueText);
  const orangeStatus = ["Onay Bekliyor", "Hazırlandı", "Taslak", "Devam Ediyor", "Beklemede", "Fatura Beklemede", "Tahsil Bekliyor", "Normal", "Kontrol Edilecek"].includes(valueText);

  if (redStatus) return `<td ${labelAttr}><span class="status-red">${escapeHtml(trText(value))}</span></td>`;
  if (orangeStatus) return `<td ${labelAttr}><span class="status-orange">${escapeHtml(trText(value))}</span></td>`;
  if (greenStatus) return `<td ${labelAttr}><span class="${valueText === "AKTİF" ? "badge-green" : "status-green"}">${escapeHtml(trText(value))}</span></td>`;
  if (titleLike) return `<td ${labelAttr}><a href="#${module.id}-${record.id}">${escapeHtml(value)}</a></td>`;
  return `<td ${labelAttr}>${escapeHtml(value)}</td>`;
}

function renderStatusButton(module, record) {
  const isActive = String(record.status).toLocaleUpperCase("tr") !== "PASİF";
  return `
    <button class="status-toggle ${isActive ? "active" : "passive"}" type="button" data-action="toggle-status" data-module="${module.id}" data-id="${record.id}">
      ${escapeHtml(trText(isActive ? "AKTİF" : "PASİF"))}
    </button>
  `;
}

function renderFileCell(value) {
  if (!value) return `<span class="muted">${escapeHtml(trText("Dosya yok"))}</span>`;

  if (typeof value === "object" && value.dataUrl) {
    const isImage = String(value.type || "").startsWith("image/");
    return `
      <a class="file-link" href="${value.dataUrl}" download="${escapeHtml(value.name || "dosya")}" target="_blank">
        ${isImage ? `<img src="${value.dataUrl}" alt="${escapeHtml(value.name || "Dosya")}" />` : '<span data-icon="presentation"></span>'}
        <span>${escapeHtml(value.name || "Dosya")}</span>
      </a>
    `;
  }

  return `<span>${escapeHtml(value)}</span>`;
}

function renderFilesCell(value) {
  if (!value) return `<span class="muted">${escapeHtml(trText("Dosya yok"))}</span>`;
  const files = Array.isArray(value) ? value : [value];
  if (!files.length) return `<span class="muted">${escapeHtml(trText("Dosya yok"))}</span>`;

  return `
    <div class="file-list">
      ${files.map((file) => renderFileCell(file)).join("")}
    </div>
  `;
}

function getExportValue(value) {
  if (Array.isArray(value)) return value.map((file) => file.name || "Dosya").join(", ");
  if (value && typeof value === "object") return value.name || "Dosya";
  return value ?? "";
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function getChartExportRows() {
  const monthData = getMonthData(selectedMonth);
  const header = [selectedMonth, ...Array.from({ length: 31 }, (_, index) => index + 1)];
  const rowMap = [
    ["OK", "ok"],
    ["NOK", "nok"],
    ["ROK", "rok"],
    ["RNOK", "rnok"],
    ["Toplam", "total"],
    ["Hata Oranı %", "rate"],
  ];

  return [
    header,
    ...rowMap.map(([label, key]) => [
      label,
      ...Array.from({ length: 31 }, (_, index) => {
        const values = monthData[index + 1] ?? { ok: 0, nok: 0, rok: 0, rnok: 0 };
        const total = values.ok + values.nok + values.rok + values.rnok;
        if (key === "total") return total;
        if (key === "rate") return total > 0 ? ((values.nok / total) * 100).toFixed(2) : "-";
        return values[key];
      }),
    ]),
  ];
}

function getActiveExportRows(moduleId = activeModuleId) {
  const module = getModule(moduleId);
  if (module.dashboard || module.chart) return getChartExportRows();
  if (module.id === "payrollCenter") {
    const periodMonths = getDashboardPeriodMonths();
    const payroll = getScopedRecords(getModule("payroll")).filter((record) => periodMonths.includes(record.period));
    const attendance = getScopedRecords(getModule("attendance")).filter((record) => periodMonths.includes(record.period));
    return [
      ["Dönem", "Personel", "Net Bordro", "Avans", "Kesinti", "Bordro Durumu", "Toplam Saat", "Mesai"],
      ...payroll.map((record) => {
        const personAttendance = attendance.find((item) => normalizeText(item.person) === normalizeText(record.person) && item.period === record.period);
        return [
          record.period,
          record.person,
          record.netSalary,
          record.advance,
          record.deduction,
          record.payrollStatus,
          personAttendance ? calculateAttendanceTotal(personAttendance) : "",
          personAttendance ? parseHour(personAttendance.overtimeHours) + getAttendanceDayOvertime(personAttendance) : "",
        ];
      }),
    ];
  }

  return [
    module.columns.map(([, label]) => label),
    ...getFilteredRecords(module).map((record) =>
      module.columns.map(([key]) => (module.id === "attendance" && key === "totalHours" ? calculateAttendanceTotal(record) : getExportValue(record[key]))),
    ),
  ];
}

function toCsv(rows) {
  return rows
    .map((row) =>
      row
        .map((cell) => {
          const value = String(cell ?? "").replaceAll('"', '""');
          return `"${value}"`;
        })
        .join(";"),
    )
    .join("\n");
}

function downloadExport(moduleId = activeModuleId) {
  const module = getModule(moduleId);
  const exportName = module.dashboard || module.chart ? `${selectedMonth}-grafik` : module.title;
  const blob = new Blob(["\uFEFF", toCsv(getActiveExportRows(module.id))], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${exportName}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadHtmlExcel(filename, title, headers, rows) {
  const html = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: Arial, sans-serif; }
          table { border-collapse: collapse; font-size: 10pt; }
          th { background: #4c1d95; color: #fff; font-weight: 700; }
          th, td { border: 1px solid #b7c1d1; padding: 6px 8px; mso-number-format:"\\@"; }
          .title { background: #f5f3ff; color: #4c1d95; font-size: 14pt; font-weight: 700; }
        </style>
      </head>
      <body>
        <table>
          <tr><td class="title" colspan="${headers.length}">${escapeHtml(title)}</td></tr>
          <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
          ${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell ?? ""))}</td>`).join("")}</tr>`).join("")}
        </table>
      </body>
    </html>
  `;
  const blob = new Blob(["\uFEFF", html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function findBankIbanForPerson(personName) {
  const payrollRecord = getScopedRecords(getModule("payroll")).find((record) => normalizeText(record.person) === normalizeText(personName) && record.bankIban);
  const bankRecord = getScopedRecords(getModule("bankBes")).find((record) => normalizeText(record.person) === normalizeText(personName));
  return payrollRecord?.bankIban || bankRecord?.iban || "";
}

function downloadGarantiPayrollExcel() {
  const periodMonths = getDashboardPeriodMonths();
  const payrollRows = getScopedRecords(getModule("payroll")).filter((record) => periodMonths.includes(record.period));
  const rows = payrollRows.map((record, index) => {
    const payable = parseMoney(record.netPayable) || Math.max(0, parseMoney(record.netSalary) - parseMoney(record.advance) - parseMoney(record.deduction));
    return [
      index + 1,
      record.person || "",
      findBankIbanForPerson(record.person) || record.bankIban || "",
      formatPayrollAmount(payable),
      "TRY",
      record.paymentDate || "",
      `${record.period || getDashboardPeriodLabel()} maaş ödemesi`,
    ];
  });
  downloadHtmlExcel(
    `Garanti-BBVA-Maas-Odeme-${getDashboardPeriodLabel().replaceAll(" ", "")}.xls`,
    "Garanti BBVA Maaş Ödeme Dosyası",
    ["Sıra", "Ad Soyad", "IBAN", "Tutar", "Para Birimi", "Ödeme Tarihi", "Açıklama"],
    rows,
  );
}

function downloadAttendanceTemplate() {
  const headers = ["Personel", "Dönem", "Günlük Saat", ...Array.from({ length: 31 }, (_, index) => `${index + 1}. Gün`), ...Array.from({ length: 31 }, (_, index) => `${index + 1}. Gün Manuel Saat`), ...Array.from({ length: 31 }, (_, index) => `${index + 1}. Gün Mesai`), "Durumu"];
  const rows = getScopedRecords(getModule("personnel")).map((person) => [
    person.name || "",
    dashboardMonth,
    "7,5",
    ...Array.from({ length: 31 }, () => "Geldi"),
    ...Array.from({ length: 31 }, () => ""),
    ...Array.from({ length: 31 }, () => ""),
    "AKTİF",
  ]);
  downloadHtmlExcel(`Puantaj-Toplu-Yukleme-Sablonu-${dashboardMonth}.xls`, "Puantaj Toplu Yükleme Şablonu", headers, rows);
}

function parseDelimitedLine(line, delimiter) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === delimiter && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

function parseDelimitedRows(text) {
  const cleanText = String(text || "").replace(/^\uFEFF/, "").trim();
  if (!cleanText) return [];
  const firstLine = cleanText.split(/\r?\n/)[0] || "";
  const delimiter = firstLine.includes(";") ? ";" : firstLine.includes("\t") ? "\t" : ",";
  return cleanText
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => parseDelimitedLine(line, delimiter));
}

async function importAttendanceBulkFile(file) {
  if (!canManageRecords() || !file) return;
  const text = await file.text();
  if (/^\s*</.test(text)) {
    alert("Bu dosya Excel HTML formatında görünüyor. Lütfen şablonu Excel'de CSV olarak kaydedip tekrar yükleyin.");
    return;
  }
  const rows = parseDelimitedRows(text);
  if (rows.length < 2) {
    alert("Puantaj dosyasında aktarılacak satır bulunamadı.");
    return;
  }
  const module = getModule("attendance");
  const headers = rows[0].map((cell) => normalizeText(cell));
  const personIndex = Math.max(headers.indexOf("personel"), headers.indexOf("adsoyad"), 0);
  const periodIndex = headers.indexOf("donem") >= 0 ? headers.indexOf("donem") : 1;
  const dailyIndex = headers.indexOf("gunluksaat") >= 0 ? headers.indexOf("gunluksaat") : 2;
  let imported = 0;
  rows.slice(1).forEach((row) => {
    const person = row[personIndex]?.trim();
    if (!person) return;
    const period = row[periodIndex]?.trim() || dashboardMonth;
    const dailyHours = row[dailyIndex]?.trim() || "7,5";
    const record = {
      id: createId("att"),
      person,
      period,
      dailyHours,
      status: row[96]?.trim() || "AKTİF",
    };
    for (let day = 1; day <= 31; day += 1) {
      record[`day${day}`] = row[2 + day]?.trim() || "-";
      record[`manualDay${day}`] = row[33 + day]?.trim() || "";
      record[`overtimeDay${day}`] = row[64 + day]?.trim() || "";
    }
    record.totalHours = calculateAttendanceTotal(record);
    record.overtimeHours = Array.from({ length: 31 }, (_, index) => parseMoney(record[`overtimeDay${index + 1}`])).reduce((sum, value) => sum + value, 0).toLocaleString("tr-TR", { maximumFractionDigits: 2 });
    const existingIndex = module.records.findIndex((item) => normalizeText(item.person) === normalizeText(person) && String(item.period || "") === period);
    if (existingIndex >= 0) {
      module.records[existingIndex] = { ...module.records[existingIndex], ...record, id: module.records[existingIndex].id };
    } else {
      module.records.unshift(record);
    }
    imported += 1;
  });
  addAudit("Toplu Puantaj", module, { id: createId("bulk"), count: imported }, `${imported} puantaj satırı içe aktarıldı.`);
  saveRecords();
  renderPayrollCenter();
  renderSideNav();
  renderIcons();
  alert(`${imported} puantaj satırı içe aktarıldı.`);
}

function markDailyAccidentCheck() {
  if (!canManageRecords()) return;
  const module = getModule("accidentChecks");
  const todayIso = toIsoDate(new Date());
  const existing = module.records.find((record) => toInputDate(record.date) === todayIso);
  const record = existing || {
    id: createId("ac"),
    date: todayIso,
    workplace: "Artı Destek",
    checkedBy: getCurrentUserName(),
    sgkStatus: "Takvimde",
    note: "",
  };
  record.checkedBy = getCurrentUserName();
  record.accidentStatus = "Kontrol Edildi";
  record.status = "Tamamlandı";
  record.note = record.note || "Günlük iş kazası bildirimi kontrol edildi.";
  module.records = existing ? module.records.map((item) => (item.id === existing.id ? record : item)) : [record, ...module.records];
  addAudit("Günlük Kontrol", module, record, "İş kazası bildirimi bugün için kapatıldı.");
  saveRecords();
  renderPayrollCenter();
  renderSideNav();
  renderIcons();
}

function downloadPdfExport(moduleId = activeModuleId) {
  const module = getModule(moduleId);
  if (module.id === "payroll") {
    downloadPayrollSlipPdf();
    return;
  }
  const rows = getActiveExportRows(module.id);
  const title = module.dashboard ? "Online İşlemler" : module.title;
  const logoUrl = new URL("assets/arti-destek-logo.png", window.location.href).href;
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!doctype html>
    <html lang="tr">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(title)} PDF</title>
        <style>
          body { margin: 24px; color: #263240; font-family: Arial, sans-serif; }
          header { display: flex; align-items: center; gap: 18px; margin-bottom: 22px; border-bottom: 3px solid #102b4f; padding-bottom: 14px; }
          img { width: 150px; height: auto; }
          h1 { margin: 0; color: #092142; font-size: 24px; }
          small { color: #777; }
          table { width: 100%; border-collapse: collapse; font-size: 11px; }
          th { background: #102b4f; color: #fff; }
          th, td { border: 1px solid #dfe7f0; padding: 6px; text-align: left; vertical-align: top; }
          tr:nth-child(even) td { background: #f7f9fb; }
          @media print { body { margin: 10mm; } }
        </style>
      </head>
      <body>
        <header>
          <img src="${logoUrl}" alt="Artı Destek" />
          <div>
            <h1>${escapeHtml(title)}</h1>
            <small>${new Date().toLocaleString("tr-TR")}</small>
          </div>
        </header>
        <table>
          <thead>
            <tr>${rows[0].map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows
              .slice(1)
              .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
        <script>
          window.addEventListener("load", () => {
            window.print();
          });
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function downloadPayrollSlipPdf() {
  const module = getModule("payroll");
  const records = getFilteredRecords(module);
  const logoUrl = new URL("assets/arti-destek-logo.png", window.location.href).href;
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!doctype html>
    <html lang="tr">
      <head>
        <meta charset="UTF-8" />
        <title>Artı Destek Bordro PDF</title>
        <style>
          body { margin: 0; background: #f7f2fb; color: #251044; font-family: Arial, sans-serif; }
          .page { max-width: 980px; margin: 0 auto; padding: 28px; }
          header { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 22px; padding-bottom: 14px; border-bottom: 3px solid #8b5cf6; }
          img { width: 128px; height: auto; }
          h1 { margin: 0; font-size: 26px; color: #2e1065; }
          small { color: #7c668e; font-weight: 700; }
          .slip { break-inside: avoid; margin: 0 0 18px; padding: 20px; border: 1px solid #eadcf8; border-radius: 18px; background: #fff; box-shadow: 0 14px 32px rgba(76, 29, 149, .08); }
          .slip-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; margin-bottom: 16px; }
          h2 { margin: 0; color: #2e1065; font-size: 20px; }
          .badge { padding: 7px 10px; border-radius: 999px; background: #f3e8ff; color: #7c3aed; font-weight: 900; }
          .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
          .item { padding: 12px; border-radius: 12px; background: #fbf7ff; border: 1px solid #f0e3ff; }
          .item b { display: block; color: #6b21a8; font-size: 12px; margin-bottom: 5px; }
          .item strong { color: #251044; font-size: 16px; }
          .note { margin-top: 14px; padding: 12px; border-left: 4px solid #ec4899; background: #fdf2f8; color: #5b315e; }
          @media print { body { background: #fff; } .page { padding: 10mm; } .slip { box-shadow: none; } }
        </style>
      </head>
      <body>
        <main class="page">
          <header>
            <img src="${logoUrl}" alt="Artı Destek" />
            <div>
              <h1>Bordro PDF Paketi</h1>
              <small>${new Date().toLocaleString("tr-TR")}</small>
            </div>
          </header>
          ${
            records.length
              ? records
                  .map(
                    (record) => `
                      <section class="slip">
                        <div class="slip-head">
                          <div>
                            <h2>${escapeHtml(record.person || "-")}</h2>
                            <small>${escapeHtml(record.period || "-")} dönemi bordro özeti</small>
                          </div>
                          <span class="badge">${escapeHtml(record.payrollStatus || "-")}</span>
                        </div>
                        <div class="grid">
                          ${[
                            ["Brüt Maaş", record.grossSalary],
                            ["Net Maaş", record.netSalary],
                            ["Ek Ödeme", record.bonus],
                            ["Avans", record.advance],
                            ["Fazla Mesai", record.overtime],
                            ["Kesinti", record.deduction],
                            ["Ödeme Tarihi", record.paymentDate],
                            ["IBAN", record.bankIban],
                          ]
                            .map(([label, value]) => `<div class="item"><b>${escapeHtml(label)}</b><strong>${escapeHtml(value || "-")}</strong></div>`)
                            .join("")}
                        </div>
                        <div class="note">${escapeHtml(record.note || "Bordro kaydı sistem üzerinden oluşturulmuştur.")}</div>
                      </section>
                    `,
                  )
                  .join("")
              : "<p>Kayıt bulunamadı.</p>"
          }
        </main>
        <script>window.addEventListener("load", () => window.print());</script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function getPersonReportExportRows() {
  const selectedName = selectedReportPerson || getScopedRecords(getModule("personnel"))[0]?.name || "";
  const person = { name: selectedName };
  const months = dashboardRange === "year" ? fixedDashboardMonths : getDashboardPeriodMonths();
  const payrollRecords = getScopedRecords(getModule("payroll"));
  const attendanceRecords = getScopedRecords(getModule("attendance"));
  return [
    ["Ay", "Net Maaş", "Brüt Maaş", "Avans", "İcra/Kesinti", "Mesai"],
    ...months.map((month) => {
      const monthPayroll = payrollRecords.filter((record) => record.period === month && personMatchesRecord(person, record));
      const monthAttendance = attendanceRecords.filter((record) => record.period === month && personMatchesRecord(person, record));
      const net = monthPayroll.reduce((sum, record) => sum + parseMoney(record.netSalary), 0);
      const gross = monthPayroll.reduce((sum, record) => sum + parseMoney(record.grossSalary), 0);
      const advance = monthPayroll.reduce((sum, record) => sum + parseMoney(record.advance), 0);
      const deduction = monthPayroll.reduce((sum, record) => sum + parseMoney(record.deduction), 0);
      const overtime = monthAttendance.reduce((sum, record) => sum + parseHour(record.overtimeHours) + getAttendanceDayOvertime(record), 0);
      return [
        month,
        formatMoney(net),
        formatMoney(gross),
        formatMoney(advance),
        formatMoney(deduction),
        `${overtime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`,
      ];
    }),
  ];
}

function downloadPersonReportPdf() {
  const rows = getPersonReportExportRows();
  const personName = selectedReportPerson || "Personel";
  const logoUrl = new URL("assets/arti-destek-logo.png", window.location.href).href;
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  printWindow.document.write(`
    <!doctype html>
    <html lang="tr">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(personName)} Bordro Raporu</title>
        <style>
          body { margin: 24px; color: #291044; font-family: Arial, sans-serif; }
          header { display: flex; align-items: center; gap: 18px; margin-bottom: 22px; border-bottom: 3px solid #7c3aed; padding-bottom: 14px; }
          img { width: 140px; height: auto; }
          h1 { margin: 0; color: #2e1065; font-size: 24px; }
          small { color: #7c668e; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; }
          th { background: #7c3aed; color: #fff; }
          th, td { border: 1px solid #eadcf8; padding: 8px; text-align: left; vertical-align: top; }
          tr:nth-child(even) td { background: #fbf7ff; }
          @media print { body { margin: 10mm; } }
        </style>
      </head>
      <body>
        <header>
          <img src="${logoUrl}" alt="Artı Destek" />
          <div>
            <h1>${escapeHtml(personName)} - ${escapeHtml(trText("Kişiye Özel Bordro Raporu"))}</h1>
            <small>${escapeHtml(getDashboardPeriodLabel())} · ${new Date().toLocaleString("tr-TR")}</small>
          </div>
        </header>
        <table>
          <thead>
            <tr>${rows[0].map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows
              .slice(1)
              .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
        <script>
          window.addEventListener("load", () => window.print());
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function downloadPortalBackup() {
  const payload = {
    createdAt: new Date().toISOString(),
    createdBy: getCurrentUserName(),
    period: getDashboardPeriodLabel(),
    version: storageKey,
    records: modules.reduce((acc, module) => {
      if (!module.dashboard && Array.isArray(module.records)) {
        acc[module.id] = module.records;
      }
      return acc;
    }, {}),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `arti-destek-yedek-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  const backupModule = getModule("backupCenter");
  backupModule.records = [
    {
      id: createId("backup"),
      date: new Date().toLocaleString("tr-TR"),
      type: "Manuel JSON",
      scope: "Tüm portal kayıtları",
      owner: getCurrentUserName(),
      note: "Gelişim Merkezi üzerinden indirildi.",
      status: "Hazır",
    },
    ...backupModule.records,
  ];
  addAudit("Yedek", backupModule, backupModule.records[0], "Portal yedeği indirildi.");
  saveRecords();
  renderPayrollCenter();
  renderIcons();
}

function updatePayrollWorkflow(recordId, action) {
  const module = getModule("payroll");
  const record = module.records.find((item) => item.id === recordId);
  if (!record) return;

  if (action === "payroll-accounting") {
    record.hrApproval = "Onaylandı";
    record.accountingApproval = "Onaylandı";
    record.payrollStatus = record.managementApproval === "Onaylandı" ? "Onaylandı" : "Onay Bekliyor";
  }

  if (action === "payroll-management") {
    record.managementApproval = "Onaylandı";
    record.payrollStatus = record.accountingApproval === "Onaylandı" ? "Onaylandı" : "Onay Bekliyor";
  }

  if (action === "payroll-publish") {
    record.hrApproval = "Onaylandı";
    record.accountingApproval = "Onaylandı";
    record.managementApproval = "Onaylandı";
    record.payrollStatus = "Personele Açıldı";
    record.publishStatus = "Personele Açıldı";
  }

  if (action === "payroll-seen") {
    record.viewStatus = "Görüldü";
  }

  addAudit("Bordro Akışı", module, record, action.replace("payroll-", "Bordro işlemi: "));
  selectedRecordId = record.id;
  saveRecords();
  if (activeModuleId === "payrollCenter") {
    renderPayrollCenter();
  } else {
    renderDataPage(module);
  }
  renderSideNav();
  renderIcons();
}

function completeApproval(moduleId, recordId) {
  const module = getModule(moduleId);
  const record = module.records.find((item) => item.id === recordId);
  if (!record) return;

  if (moduleId === "payroll") {
    record.hrApproval = "Onaylandı";
    record.accountingApproval = "Onaylandı";
    record.managementApproval = "Onaylandı";
    record.payrollStatus = "Personele Açıldı";
    record.publishStatus = "Personele Açıldı";
  }

  if (moduleId === "leaves") {
    record.approval = "Onaylandı";
  }

  if (moduleId === "invoices") {
    record.status = "Fatura Kesildi";
    if (!record.paymentStatus || record.paymentStatus === "Gecikti") record.paymentStatus = "Tahsil Bekliyor";
  }

  if (moduleId === "projects") {
    record.status = "Aktif";
  }

  if (moduleId === "documentsChecklist") {
    ["identity", "sgk", "contract", "kvkk", "health", "iban", "criminalRecord"].forEach((key) => {
      record[key] = "Tam";
    });
    record.status = "Tam";
  }

  if (moduleId === "tasks" || moduleId === "notifications") {
    record.status = "Tamamlandı";
    if (moduleId === "notifications") record.readStatus = "Okundu";
  }

  addAudit("Onay", module, record, "Onay Merkezi üzerinden tamamlandı.");
  saveRecords();
  if (activeModuleId === "payrollCenter") {
    renderPayrollCenter();
  } else {
    renderApprovalsCenter();
  }
  renderSideNav();
  renderIcons();
}

function toggleRecordStatus(moduleId, recordId) {
  const module = getModule(moduleId);
  const record = module.records.find((item) => item.id === recordId);
  if (!record) return;

  record.status = String(record.status).toLocaleUpperCase("tr") === "PASİF" ? "AKTİF" : "PASİF";
  addAudit("Durum Değişikliği", module, record, `Yeni durum: ${record.status}`);
  selectedRecordId = record.id;
  saveRecords();
  if (activeModuleId === "payrollCenter") {
    renderPayrollCenter();
  } else {
    renderDataPage(module);
  }
  renderSideNav();
  renderIcons();
}

function markNotificationRead(recordId) {
  const module = getModule("notifications");
  const record = module.records.find((item) => item.id === recordId);
  if (!record) return;

  record.readStatus = "Okundu";
  if (record.status !== "Tamamlandı") record.status = "Tamamlandı";
  addAudit("Bildirim", module, record, "Bildirim okundu işaretlendi.");
  selectedRecordId = record.id;
  saveRecords();
  if (activeModuleId === "payrollCenter") {
    renderPayrollCenter();
  } else {
    renderDataPage(module);
  }
  renderSideNav();
  renderIcons();
}

function openProjectChart(recordId) {
  const module = getModule("projects");
  const record = module.records.find((item) => item.id === recordId);
  if (!record) return;

  const values = [
    ["OK", "ok", parseHour(record.okCount)],
    ["NOK", "nok", parseHour(record.nokCount)],
    ["ROK", "rok", parseHour(record.rokCount)],
    ["RNOK", "rnok", parseHour(record.rnokCount)],
  ];
  const maxValue = Math.max(...values.map(([, , value]) => value), 1);
  const total = values.reduce((sum, [, , value]) => sum + value, 0);

  document.querySelector("#chartTitle").textContent = `${record.code || ""} ${trText("Grafik")}`.trim();
  document.querySelector("#chartContent").innerHTML = `
    <div class="project-chart-summary">
      <strong>${escapeHtml(record.company || "-")}</strong>
      <span>${escapeHtml(record.part || "-")}</span>
      <p>${escapeHtml(record.problem || "-")}</p>
      <small>${currentLanguage === "en" ? "Total checked quantity" : "Toplam kontrol adedi"}: ${escapeHtml(total)}</small>
    </div>
    <div class="project-quality-chart">
      ${values
        .map(
          ([label, key, value]) => `
            <div class="quality-chart-row">
              <span class="quality-badge quality-${key}">${label}</span>
              <div class="quality-bar-track">
                <i class="quality-bar quality-${key}" style="width:${Math.max(4, Math.round((value / maxValue) * 100))}%"></i>
              </div>
              <strong>${escapeHtml(value)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
  document.querySelector("#chartDialog").showModal();
  renderIcons();
}

function closeChartDialog() {
  document.querySelector("#chartDialog").close();
}

function renderModule(module) {
  document.querySelector("#pageTitle").textContent = trText(module.dashboard ? "Online İşlemler" : module.title);
  renderBreadcrumb(module);
  selectedRecordId = module.records?.[0]?.id ?? "";
  filterValue = "";

  if (module.dashboard) {
    renderDashboard();
  } else if (module.id === "payrollCenter") {
    renderPayrollCenter();
  } else if (module.id === "personnel360") {
    renderPersonnel360();
  } else if (module.id === "approvals") {
    renderApprovalsCenter();
  } else {
    renderDataPage(module);
  }

  renderIcons();
}

function switchModule(id) {
  if (id !== "payrollCenter") {
    payrollCenterTab = id === "panel" ? "home" : payrollCenterTabs.some(([tabId]) => tabId === id) ? id : payrollCenterTab;
    id = "payrollCenter";
  }

  if (!canAccessModule(getModule(id))) {
    activeModuleId = "payrollCenter";
    renderSideNav();
    renderModule(getModule("payrollCenter"));
    return;
  }

  activeModuleId = id;
  renderSideNav();
  renderModule(getModule(id));
}

function getPortalUsers() {
  return getModule("users").records.map((record) => ({
    username: record.username,
    email: record.email,
    displayName: `${record.name ?? ""} ${record.surname ?? ""}`.trim() || record.email,
    type: record.type,
    status: record.status,
  }));
}

function profileToPortalUser(profile, authUser) {
  return {
    id: authUser.id,
    username: profile.email || authUser.email,
    email: profile.email || authUser.email,
    displayName: profile.full_name || profile.email || authUser.email || "Kullanıcı",
    type: profile.role || "Kullanıcı",
    status: profile.status || "AKTİF",
    companyName: profile.company_name || "",
  };
}

async function getRemotePortalUser(authUser) {
  const { data: profile, error } = await supabaseClient
    .from("profiles")
    .select("id, email, full_name, role, status, company_name")
    .eq("id", authUser.id)
    .maybeSingle();

  if (error) throw error;
  if (!profile) throw new Error("Bu kullanıcı için portal profili bulunamadı.");
  if (String(profile.status).toLocaleUpperCase("tr") !== "AKTİF") {
    throw new Error("Bu kullanıcı pasif durumda.");
  }

  return profileToPortalUser(profile, authUser);
}

async function authenticate(username, password) {
  if (remoteClientMissing) {
    throw new Error("Canlı bağlantı yüklenemedi. İnternet bağlantısını kontrol edip sayfayı yenileyin.");
  }

  if (isRemoteMode) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error || !data.user) throw new Error("E-posta veya şifre hatalı.");
    const user = await getRemotePortalUser(data.user);
    currentUser = user;
    await loadRecords();
    return user;
  }

  return null;
}

function showLogin() {
  renderLanguageSwitch();
  document.querySelector("#loginPage").hidden = false;
  document.querySelector("#appShell").hidden = true;
  document.querySelector("#appShell").classList.remove("prozon-top-mode");
  document.querySelector("#loginError").textContent = "";
  document.querySelector("#loginUsername").focus();
}

function showApp(user) {
  renderLanguageSwitch();
  currentUser = user;
  activeModuleId = "payrollCenter";
  payrollCenterTab = isCustomerUser() ? "company" : isPersonnelUser() ? "selfService" : "home";
  if (!canAccessModule(getModule(activeModuleId))) activeModuleId = "payrollCenter";
  document.querySelector("#currentUserName").textContent = user.displayName;
  document.querySelector("#loginPage").hidden = true;
  document.querySelector("#appShell").hidden = false;
  document.querySelector("#appShell").classList.add("prozon-top-mode");
  renderSideNav();
  renderModule(getModule(activeModuleId));
  startRealtimeSync();
}

async function initSession() {
  if (remoteClientMissing) {
    showLogin();
    document.querySelector("#loginError").textContent = "Canlı bağlantı yüklenemedi. Sayfayı yenileyin.";
    renderIcons();
    return;
  }

  if (isRemoteMode) {
    try {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) throw error;
      if (data.session?.user) {
        const user = await getRemotePortalUser(data.session.user);
        currentUser = user;
        await loadRecords();
        showApp(user);
        return;
      }
    } catch (error) {
      console.error("Oturum kontrol hatası:", error);
      await supabaseClient.auth.signOut();
    }

    showLogin();
    renderIcons();
    return;
  }

  loadLocalRecords();

  try {
    const session = JSON.parse(localStorage.getItem(sessionKey));
    if (session?.username) {
      const user = getPortalUsers().find((portalUser) => portalUser.username === session.username);
      if (user) {
        showApp(user);
        return;
      }
    }
  } catch {
    localStorage.removeItem(sessionKey);
  }

  showLogin();
  renderIcons();
}

function openDialog(recordId = "", moduleId = activeModuleId) {
  const module = getModule(moduleId);
  if (!module.columns?.length) return;
  const record = module.records.find((item) => item.id === recordId);
  const defaultValues =
    !record && module.id === "payrollCalendar"
      ? {
          date: pendingCalendarDate,
          event: "Not",
          period: dashboardMonth,
          responsible: getCurrentUserName(),
          reminder: "Aynı gün",
          status: "Planlandı",
        }
      : {};
  document.querySelector("#moduleIdInput").value = module.id;
  document.querySelector("#recordIdInput").value = record?.id ?? "";
  document.querySelector("#dialogTitle").textContent = record ? `${trText(module.title)} ${trText("Düzenle")}` : `${trText(module.title)} ${trText("Ekle")}`;

  if (module.id === "attendance") {
    document.querySelector("#formGrid").innerHTML = renderAttendanceForm(record);
    document.querySelector("#recordDialog").showModal();
    return;
  }

  document.querySelector("#formGrid").innerHTML = module.columns
    .map(([key, label, type, options = []], index) => {
      const value = record?.[key] ?? defaultValues[key] ?? "";
      const required = !isOptionalField(module, key);
      const isLong = index === module.columns.length - 1 || ["problem", "description", "bankIban", "address", "note"].includes(key);
      if (type === "file") {
        const fileName = value && typeof value === "object" ? value.name : "";
        return `
          <label class="full-field">
            ${escapeHtml(trText(label))}
            <input name="${key}" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" />
            <small>${fileName ? `${escapeHtml(trText("Mevcut dosya"))}: ${escapeHtml(fileName)}` : escapeHtml(trText("Bilgisayardan dosya veya resim seçebilirsin."))}</small>
          </label>
        `;
      }
      if (type === "files") {
        const files = Array.isArray(value) ? value : value ? [value] : [];
        const fileText = files.length
          ? `${escapeHtml(trText("Mevcut dosyalar"))}: ${files.map((file) => escapeHtml(file.name || "Dosya")).join(", ")}`
          : escapeHtml(trText("Aynı kayıt için en fazla 10 dosya veya resim seçebilirsin."));
        return `
          <label class="full-field">
            ${escapeHtml(trText(label))}
            <span class="file-upload-grid">
              ${Array.from({ length: 10 }, (_, fileIndex) => `<input name="${key}" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" />`).join("")}
            </span>
            <small>${fileText}</small>
          </label>
        `;
      }
      if (type === "date") {
        return `
          <label>
            ${escapeHtml(trText(label))}
            <input name="${key}" type="date" value="${escapeHtml(toInputDate(value))}" ${required ? "required" : ""} />
          </label>
        `;
      }
      if (type === "select") {
        return `
          <label>
            ${escapeHtml(trText(label))}
            <select name="${key}" required>
              ${options
                .map(
                  (option) => `
                    <option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(trText(option))}</option>
                  `,
                )
                .join("")}
            </select>
          </label>
        `;
      }
      if (type === "readonly") {
        return `
          <label>
            ${escapeHtml(trText(label))}
            <input name="${key}" value="${escapeHtml(module.id === "attendance" ? calculateAttendanceTotal(record) : value || (module.id === "projects" ? "Otomatik atanacak" : ""))}" readonly />
          </label>
        `;
      }
      if (type === "qualityNumber") {
        return `
          <label>
            ${escapeHtml(trText(label))}
            <input name="${key}" type="number" min="0" step="1" value="${escapeHtml(value || "0")}" ${required ? "required" : ""} />
          </label>
        `;
      }
      if (type === "attendanceDay") {
        return `
          <label>
            ${escapeHtml(trText(label))}
            <input name="${key}" value="${escapeHtml(value)}" list="${key}-options" placeholder="Geldi / 4 / İzin" />
            <datalist id="${key}-options">
              ${options.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("")}
            </datalist>
          </label>
        `;
      }
      return `
        <label class="${isLong ? "full-field" : ""}">
          ${escapeHtml(trText(label))}
          ${isLong ? `<textarea name="${key}" rows="3" ${required ? "required" : ""}>${escapeHtml(value)}</textarea>` : `<input name="${key}" value="${escapeHtml(value)}" ${required ? "required" : ""} />`}
        </label>
      `;
    })
    .join("");

  document.querySelector("#recordDialog").showModal();
}

function closeDialog() {
  document.querySelector("#recordDialog").close();
}

function getSalaryCalculatorRates() {
  return {
    progressiveTax: true,
    cumulativeTaxBase: parseMoney(document.querySelector("#calcCumulativeTaxBase")?.value),
    stampTax: parsePercent(document.querySelector("#calcStampTaxRate")?.value, defaultPayrollTaxRates.stampTax),
  };
}

function renderSalaryCalculation(result, modeLabel) {
  const resultBox = document.querySelector("#salaryCalcResult");
  if (!resultBox) return;
  const monthlyRows = buildAnnualPayrollProjection(result.gross, parseMoney(document.querySelector("#calcCumulativeTaxBase")?.value));
  resultBox.innerHTML = `
    <strong>${escapeHtml(`${trText(modeLabel)}: ${formatPayrollAmount(modeLabel === "Net Ücret" ? result.net : result.gross)}`)}</strong>
    <span>${escapeHtml(`${trText("SGK")}: ${formatPayrollAmount(result.sgk)} · ${trText("İşsizlik")}: ${formatPayrollAmount(result.unemployment)} · ${trText("Gelir Vergisi")}: ${formatPayrollAmount(result.incomeTax)} · ${trText("Damga Vergisi")}: ${formatPayrollAmount(result.stampTax)}`)}</span>
    <small>${escapeHtml(`${trText("Birikmiş Matrah")}: ${formatPayrollAmount(parseMoney(document.querySelector("#calcCumulativeTaxBase")?.value))} · ${trText("Aktif Vergi Oranı")}: %${Math.round((result.taxRate || 0) * 100)}`)}</small>
    <div class="tax-projection">
      ${monthlyRows
        .map(
          (row) => `
            <span>
              <b>${escapeHtml(row.month)}</b>
              <em>${escapeHtml(formatPayrollAmount(row.incomeTax))}</em>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function buildAnnualPayrollProjection(monthlyGross, cumulativeStart = 0) {
  let cumulative = Math.max(0, Number(cumulativeStart) || 0);
  const gross = Math.max(0, Number(monthlyGross) || 0);
  return fixedDashboardMonths.map((month) => {
    const result = grossToNet(gross, { cumulativeTaxBase: cumulative });
    cumulative = result.cumulativeAfter;
    return { month, incomeTax: result.incomeTax, taxRate: result.taxRate, net: result.net, cumulative };
  });
}

function updateSalaryCalculator(source) {
  const grossInput = document.querySelector("#calcGrossSalary");
  const netInput = document.querySelector("#calcNetSalary");
  if (!grossInput || !netInput) return;
  const rates = getSalaryCalculatorRates();
  if (source === "net") {
    const result = netToGross(parseMoney(netInput.value), rates);
    grossInput.value = result.gross ? formatPayrollAmount(result.gross) : "";
    renderSalaryCalculation(result, "Brüt Ücret");
    return;
  }
  const result = grossToNet(parseMoney(grossInput.value), rates);
  netInput.value = result.net ? formatPayrollAmount(result.net) : "";
  renderSalaryCalculation(result, "Net Ücret");
}

function syncPayrollSalaryDialog(target) {
  const form = document.querySelector("#recordForm");
  if (document.querySelector("#moduleIdInput")?.value !== "payroll") return;
  const grossInput = form.querySelector('[name="grossSalary"]');
  const netInput = form.querySelector('[name="netSalary"]');
  const cumulativeInput = form.querySelector('[name="cumulativeTaxBase"]');
  if (!grossInput || !netInput) return;
  const rates = { cumulativeTaxBase: parseMoney(cumulativeInput?.value) };
  if (target === netInput) {
    const result = netToGross(parseMoney(netInput.value), rates);
    grossInput.value = result.gross ? formatPayrollAmount(result.gross) : "";
    form.querySelector('[name="incomeTaxAmount"]') && (form.querySelector('[name="incomeTaxAmount"]').value = formatPayrollAmount(result.incomeTax));
    return;
  }
  if (target === grossInput || target === cumulativeInput) {
    const result = grossToNet(parseMoney(grossInput.value), rates);
    netInput.value = result.net ? formatPayrollAmount(result.net) : "";
    form.querySelector('[name="incomeTaxAmount"]') && (form.querySelector('[name="incomeTaxAmount"]').value = formatPayrollAmount(result.incomeTax));
  }
}

async function upsertRecord(event) {
  event.preventDefault();
  const module = getModule(document.querySelector("#moduleIdInput").value);
  const recordId = document.querySelector("#recordIdInput").value;
  const form = event.currentTarget;
  const formData = new FormData(form);
  const previousRecord = module.records.find((item) => item.id === recordId);
  const record = { id: recordId || createId(module.id) };

  for (const [key, , type] of module.columns) {
    if (type === "file") {
      const file = form.querySelector(`[name="${key}"]`)?.files?.[0];
      record[key] = file
        ? {
            name: file.name,
            type: file.type || "application/octet-stream",
            dataUrl: await fileToDataUrl(file),
          }
        : previousRecord?.[key] ?? "";
    } else if (type === "files") {
      const files = Array.from(form.querySelectorAll(`[name="${key}"]`))
        .flatMap((input) => Array.from(input.files ?? []))
        .slice(0, 10);
      record[key] = files.length
        ? await Promise.all(
            files.map(async (file) => ({
              name: file.name,
              type: file.type || "application/octet-stream",
              dataUrl: await fileToDataUrl(file),
            })),
          )
        : previousRecord?.[key] ?? "";
    } else if (type === "readonly") {
      record[key] = previousRecord?.[key] ?? "";
    } else {
      record[key] = String(formData.get(key) ?? "").trim();
    }
  }

  if (module.id === "attendance") {
    record.overtimeHours = getAttendanceDayOvertime(record).toLocaleString("tr-TR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });
    record.totalHours = calculateAttendanceTotal(record);
  }

  if (module.id === "payroll") {
    const changedField = parseMoney(record.netSalary) && !parseMoney(record.grossSalary) ? "netSalary" : "grossSalary";
    Object.assign(record, calculatePayrollRecordAmounts(record, changedField));
    if (canManageRecords()) {
      record.hrApproval = "Onaylandı";
      record.accountingApproval = "Onaylandı";
      record.managementApproval = "Onaylandı";
      record.payrollStatus = record.payrollStatus === "Hazırlandı" || record.payrollStatus === "Onay Bekliyor" ? "Onaylandı" : record.payrollStatus || "Onaylandı";
    }
  }

  if (module.id === "projects") {
    record.status = record.endDate ? "Pasif" : normalizeProjectStatus(record.status);
    record.invoiceStatus = normalizeInvoiceStatus(record.invoiceStatus);
    record.code = previousRecord?.code || generateProjectCode(record.location);
  }

  if (module.id === "presentations") {
    syncDocumentChecklistFromUpload(record);
  }

  module.records = recordId
    ? module.records.map((item) => (item.id === recordId ? record : item))
    : [record, ...module.records];

  addAudit(recordId ? "Düzenleme" : "Ekleme", module, record, recordId ? "Kayıt güncellendi." : "Yeni kayıt oluşturuldu.");
  selectedRecordId = record.id;
  saveRecords();
  if (activeModuleId === "payrollCenter") {
    renderPayrollCenter();
  } else {
    renderDataPage(module);
  }
  renderSideNav();
  renderIcons();
  closeDialog();
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest("[data-lang]");
  if (langButton) {
    switchLanguage(langButton.dataset.lang);
    return;
  }

  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    switchModule(navButton.dataset.nav);
    closeMobileSidebar();
    return;
  }

  const monthButton = event.target.closest("[data-month]");
  if (monthButton) {
    selectedMonth = monthButton.dataset.month;
    selectedDay = 4;
    if (activeModuleId === "panel") renderDashboard();
    renderIcons();
    return;
  }

  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    selectedDay = Number(dayButton.dataset.day);
    if (activeModuleId === "panel") renderDashboard();
    renderIcons();
    return;
  }

  const person360Button = event.target.closest("[data-person360]");
  if (person360Button) {
    selectedPersonnel360Id = person360Button.dataset.person360;
    renderPersonnel360();
    renderIcons();
    return;
  }

  const payrollCenterButton = event.target.closest("[data-payroll-center-tab]");
  if (payrollCenterButton) {
    payrollCenterTab = payrollCenterButton.dataset.payrollCenterTab;
    activeModuleId = "payrollCenter";
    renderSideNav();
    renderPayrollCenter();
    renderIcons();
    closeMobileSidebar();
    return;
  }

  const prozonSubTabButton = event.target.closest("[data-prozon-subtab]");
  if (prozonSubTabButton) {
    prozonActiveSubTabs[payrollCenterTab] = prozonSubTabButton.dataset.prozonSubtab;
    activeModuleId = "payrollCenter";
    renderPayrollCenter();
    renderIcons();
    return;
  }

  const messageThreadButton = event.target.closest("[data-message-thread]");
  if (messageThreadButton) {
    selectedMessageThreadId = messageThreadButton.dataset.messageThread;
    payrollCenterTab = "assistant";
    activeModuleId = "payrollCenter";
    renderPayrollCenter();
    renderIcons();
    return;
  }

  const messageRecipientButton = event.target.closest("[data-message-recipient]");
  if (messageRecipientButton) {
    selectedMessageThreadId = "";
    payrollCenterTab = "assistant";
    activeModuleId = "payrollCenter";
    renderPayrollCenter();
    renderIcons();
    const form = document.querySelector("#messageComposer");
    if (form) {
      const recipientInput = form.querySelector('[name="recipient"]');
      if (recipientInput) recipientInput.value = messageRecipientButton.dataset.messageRecipient || "";
      form.querySelector('[name="subject"]')?.focus();
    }
    return;
  }

  const aiQuestionButton = event.target.closest("[data-ai-question]");
  if (aiQuestionButton) {
    const question = aiQuestionButton.dataset.aiQuestion || "";
    const input = document.querySelector("#aiAssistantQuestion");
    const answerBox = document.querySelector("#aiAssistantAnswer");
    if (input) input.value = question;
    if (answerBox) {
      answerBox.innerHTML = `<strong>${escapeHtml(trText("Cevap hazır"))}</strong><p>${escapeHtml(buildAssistantAnswer(question))}</p>`;
    }
    return;
  }

  if (event.target.id === "dashboardMonthSelect" || event.target.id === "dashboardRangeSelect") {
    return;
  }

  const calendarDayButton = event.target.closest("[data-calendar-day]");
  if (calendarDayButton) {
    const date = getDateFromDashboardDay(Number(calendarDayButton.dataset.calendarDay || "1"));
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    pendingCalendarDate = `${yyyy}-${mm}-${dd}`;
    openDialog("", "payrollCalendar");
    renderIcons();
    return;
  }

  const manageButton = event.target.closest("[data-action]");
  if (!manageButton) {
    const quickButton = event.target.closest("[data-quick-filter]");
    if (quickButton) {
      quickFilters[activeModuleId] = quickButton.dataset.quickFilter;
      renderDataPage(getModule());
      renderIcons();
      return;
    }

    const recordRow = event.target.closest("[data-record]");
    if (recordRow) {
      selectedRecordId = recordRow.dataset.record;
      renderDataPage(getModule());
      renderIcons();
    }
    return;
  }

  const action = manageButton.dataset.action;
  if (action === "ai-ask") {
    const question = document.querySelector("#aiAssistantQuestion")?.value || "";
    const answerBox = document.querySelector("#aiAssistantAnswer");
    if (answerBox) {
      answerBox.innerHTML = `<strong>${escapeHtml(trText("Cevap hazır"))}</strong><p>${escapeHtml(buildAssistantAnswer(question))}</p>`;
    }
    return;
  }

  if (action === "message-send") {
    const form = document.querySelector("#messageComposer");
    if (form) sendPortalMessage(form);
    return;
  }

  if (action === "message-new") {
    selectedMessageThreadId = "";
    const form = document.querySelector("#messageComposer");
    if (form) {
      form.reset();
      form.querySelector('[name="subject"]')?.focus();
    }
    return;
  }

  if (action === "message-close") {
    closeMessageThread(manageButton.dataset.thread || selectedMessageThreadId);
    return;
  }

  if (action === "backup-export") {
    if (canManageRecords()) downloadPortalBackup();
    return;
  }

  if (action === "person-report-pdf") {
    downloadPersonReportPdf();
    return;
  }

  if (action === "garanti-export") {
    downloadGarantiPayrollExcel();
    return;
  }

  if (action === "attendance-template") {
    downloadAttendanceTemplate();
    return;
  }

  if (action === "daily-accident-check") {
    markDailyAccidentCheck();
    return;
  }

  const module = getModule(manageButton.dataset.module || activeModuleId);
  const recordId = manageButton.dataset.id || selectedRecordId;
  const manageActions = ["add", "edit", "delete", "toggle-status", "payroll-accounting", "payroll-management", "payroll-publish", "payroll-seen", "approval-complete", "notification-read"];
  if (manageActions.includes(action) && !canManageRecords()) return;

  if (action === "add") {
    openDialog("", module.id);
  }

  if (action === "edit") {
    openDialog(recordId, module.id);
  }

  if (action === "delete") {
    const record = module.records.find((item) => item.id === recordId);
    if (record && window.confirm(`${getRecordTitle(module, record)} kaydını silmek istiyor musun?`)) {
      archiveRecord(module, record);
      addAudit("Silme", module, record, "Kayıt arşive alındı.");
      module.records = module.records.filter((item) => item.id !== recordId);
      selectedRecordId = module.records[0]?.id ?? "";
      saveRecords();
      if (activeModuleId === "payrollCenter") {
        renderPayrollCenter();
      } else {
        renderDataPage(module);
      }
      renderSideNav();
      renderIcons();
    }
  }

  if (action === "export") {
    downloadExport(module.id);
  }

  if (action === "export-pdf") {
    downloadPdfExport(module.id);
  }

  if (action === "project-chart") {
    openProjectChart(recordId);
  }

  if (action === "notification-read") {
    markNotificationRead(recordId);
  }

  if (action === "personnel-360") {
    selectedPersonnel360Id = recordId;
    switchModule("personnel360");
  }

  if (action === "approval-complete") {
    completeApproval(manageButton.dataset.module, recordId);
  }

  if (action === "toggle-status") {
    toggleRecordStatus(manageButton.dataset.module || module.id, recordId);
  }

  if (action.startsWith("payroll-")) {
    updatePayrollWorkflow(recordId, action);
  }

});

document.addEventListener("input", (event) => {
  if (event.target.id === "calcGrossSalary") {
    updateSalaryCalculator("gross");
    return;
  }

  if (event.target.id === "calcNetSalary") {
    updateSalaryCalculator("net");
    return;
  }

  if (event.target.id === "calcCumulativeTaxBase" || event.target.id === "calcStampTaxRate") {
    updateSalaryCalculator(document.querySelector("#calcNetSalary")?.value ? "net" : "gross");
    return;
  }

  if (event.target.name === "grossSalary" || event.target.name === "netSalary" || event.target.name === "cumulativeTaxBase") {
    syncPayrollSalaryDialog(event.target);
    return;
  }

  if (event.target.id === "dashboardMonthSelect") {
    dashboardMonth = event.target.value;
    if (activeModuleId === "payrollCenter") {
      renderPayrollCenter();
    } else {
      renderDashboard();
    }
    renderIcons();
    return;
  }

  if (event.target.id === "dashboardRangeSelect") {
    dashboardRange = event.target.value;
    if (activeModuleId === "payrollCenter") {
      renderPayrollCenter();
    } else {
      renderDashboard();
    }
    renderIcons();
    return;
  }

  if (event.target.id === "personReportSelect") {
    selectedReportPerson = event.target.value;
    renderPayrollCenter();
    renderIcons();
    return;
  }

  if (event.target.id === "ratingCompanySelect") {
    selectedRatingCompany = event.target.value;
    renderPayrollCenter();
    renderIcons();
    return;
  }

  if (event.target.id !== "filterInput") return;
  filterValue = event.target.value;
  renderDataPage(getModule());
  renderIcons();
  document.querySelector("#filterInput")?.focus();
});

document.addEventListener("change", (event) => {
  if (event.target?.id === "attendanceBulkFile") {
    importAttendanceBulkFile(event.target.files?.[0]);
    event.target.value = "";
  }
});

document.querySelector("#sidebarToggle").addEventListener("click", () => {
  document.body.classList.toggle("sidebar-collapsed");
});

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.querySelector("#loginUsername").value.trim();
  const password = document.querySelector("#loginPassword").value;
  const submitButton = event.currentTarget.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  submitButton.textContent = currentLanguage === "en" ? "Signing in..." : "Giriş yapılıyor...";

  try {
    const user = await authenticate(username, password);

    if (!user) {
      document.querySelector("#loginError").textContent = "Kullanıcı adı veya şifre hatalı.";
      return;
    }

    if (!isRemoteMode) {
      localStorage.setItem(sessionKey, JSON.stringify({ username: user.username }));
    }
    document.querySelector("#loginError").textContent = "";
    showApp(user);
  } catch (error) {
    document.querySelector("#loginError").textContent = error.message || "Giriş yapılamadı.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = currentLanguage === "en" ? "Sign In" : "Giriş Yap";
  }
});

document.querySelector("#logoutButton").addEventListener("click", async () => {
  localStorage.removeItem(sessionKey);
  stopRealtimeSync();
  if (isRemoteMode) await supabaseClient.auth.signOut();
  currentUser = null;
  showLogin();
});

document.querySelector("#dialogCloseButton").addEventListener("click", closeDialog);
document.querySelector("#dialogCancelButton").addEventListener("click", closeDialog);
document.querySelector("#chartCloseButton").addEventListener("click", closeChartDialog);
document.querySelector("#recordForm").addEventListener("submit", upsertRecord);

initSession();
