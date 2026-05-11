const icons = {
  building:
    '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h7v18"/><path d="M14 9h3a2 2 0 0 1 2 2v10"/><path d="M8 7h2"/><path d="M8 11h2"/><path d="M8 15h2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  contact: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  edit:
    '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  folder:
    '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>',
  invoice:
    '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2Z"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  calendar:
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  note: '<path d="M4 4h16v14H8l-4 4Z"/>',
  archive: '<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1Z"/><path d="M10 12h4"/>',
  panel:
    '<path d="M12 3a9 9 0 0 0-9 9h4a5 5 0 0 1 10 0h4a9 9 0 0 0-9-9Z"/><path d="m12 12 4-4"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  presentation:
    '<path d="M3 4h18v12H3Z"/><path d="M12 16v4"/><path d="m8 20 4-4 4 4"/>',
  save:
    '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  trash:
    '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};

const dayColumns = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return [`day${day}`, String(day), "attendanceDay", ["-", "Geldi", "Gelmedi", "İzin", "Rapor"]];
});
const overtimeDayColumns = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return [`overtimeDay${day}`, `${day}. Gün Mesai`, "attendanceOvertime"];
});

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
      ["type", "Türü", "select", ["Admin", "Müşteri", "Kullanıcı"]],
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
      ["startDate", "İşe Giriş"],
      ["exitDate", "Çıkış Tarihi"],
      ["emergency", "Acil Durum"],
      ["documentStatus", "Özlük Durumu", "select", ["Tam", "Eksik", "Kontrol Edilecek"]],
      ["status", "Durumu", "select", ["AKTİF", "PASİF"]],
    ],
    records: [
      { id: "ps1", name: "Zehra Battal", department: "İnsan Kaynakları", role: "İK Uzmanı", city: "Sakarya", phone: "(264)502 92 10", startDate: "01/03/2024", emergency: "Kazım Battal - (264)502 92 10", status: "AKTİF" },
      { id: "ps2", name: "Faruk Türker", department: "Operasyon", role: "Operasyon Ve Kalite Müdürü", city: "Kocaeli", phone: "(506)604 27 04", startDate: "15/01/2023", emergency: "Servet Kün - (542)377 02 54", status: "AKTİF" },
      { id: "ps3", name: "Murat Oğuz", department: "Yönetim", role: "Kurucu Ortak", city: "Sakarya", phone: "(264)502 92 10", startDate: "01/01/2022", emergency: "Zehra Battal - (264)502 92 10", status: "AKTİF" },
      { id: "ps4", name: "Gürkan Tabakoğlu", department: "Yönetim", role: "Kurucu Ortak", city: "Sakarya", phone: "(264)502 92 10", startDate: "01/01/2022", emergency: "Murat Oğuz - (264)502 92 10", status: "AKTİF" },
    ],
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
      ["dueDate", "Vade", "date"],
      ["status", "Durumu", "select", ["Fatura Kesildi", "Fatura Beklemede", "Onay Verilmedi"]],
      ["file", "Fatura Dosyası", "file"],
    ],
    records: [
      { id: "i1", invoiceNo: "GKK2026000000219", company: "Kale Oto", project: "AD54000000005", amount: "36.500 TL", tax: "%20", dueDate: "2026-05-30", status: "Fatura Kesildi", file: "" },
      { id: "i2", invoiceNo: "GKK2026000000220", company: "Cofle TK Otomotiv", project: "AD54000000004", amount: "24.800 TL", tax: "%20", dueDate: "2026-06-15", status: "Fatura Beklemede", file: "" },
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
    ],
  },
  {
    id: "archive",
    title: "Arşiv",
    icon: "archive",
    breadcrumb: ["Panel", "Arşiv", "Silinen Kayıtlar"],
    noActions: true,
    adminOnly: true,
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
      ["bonus", "Ek Ödeme"],
      ["advance", "Avans"],
      ["overtime", "Fazla Mesai"],
      ["deduction", "Kesinti"],
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
      { id: "bd1", person: "Zehra Battal", period: "05.2026", grossSalary: "42.500 TL", netSalary: "31.800 TL", bonus: "2.000 TL", advance: "0 TL", overtime: "850 TL", deduction: "0 TL", paymentDate: "05.05.2026", bankIban: "TR00 0000 0000 0000 0000 0000 01", payrollStatus: "Onay Bekliyor", hrApproval: "Onaylandı", accountingApproval: "Bekliyor", managementApproval: "Bekliyor", publishStatus: "Kapalı", viewStatus: "Görülmedi", file: "", note: "Mayıs bordrosu kontrol bekliyor" },
      { id: "bd2", person: "Faruk Türker", period: "05.2026", grossSalary: "58.000 TL", netSalary: "43.250 TL", bonus: "3.500 TL", advance: "1.000 TL", overtime: "1.200 TL", deduction: "500 TL", paymentDate: "05.05.2026", bankIban: "TR00 0000 0000 0000 0000 0000 02", payrollStatus: "Personele Açıldı", hrApproval: "Onaylandı", accountingApproval: "Onaylandı", managementApproval: "Onaylandı", publishStatus: "Personele Açıldı", viewStatus: "Görüldü", file: "", note: "Personele yayınlandı" },
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
let activeModuleId = "panel";
let selectedRecordId = "";
let filterValue = "";
let selectedMonth = "05.2026";
let selectedDay = 4;
let currentUser = null;
let remoteReady = false;
let remoteSaveQueue = Promise.resolve();
const quickFilters = {};

const moduleQuickFilters = {
  users: { key: "type", options: ["Tümü", "Admin", "Müşteri", "Kullanıcı"] },
  invoices: { key: "status", options: ["Tümü", "Fatura Kesildi", "Fatura Beklemede", "Onay Verilmedi"] },
  projects: { key: "status", options: ["Tümü", "Aktif", "Pasif", "Beklemede"] },
  personnel: { key: "status", options: ["Tümü", "AKTİF", "PASİF"] },
  payroll: { key: "payrollStatus", options: ["Tümü", "Hazırlandı", "Onay Bekliyor", "Onaylandı", "Personele Açıldı"] },
  tasks: { key: "status", options: ["Tümü", "Bekliyor", "Devam Ediyor", "Tamamlandı"] },
  leaves: { key: "approval", options: ["Tümü", "Bekliyor", "Onaylandı", "Reddedildi"] },
};

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
    return;
  }

  const { data: rows, error } = await supabaseClient
    .from("portal_records")
    .select("module_id, record_id, data, company_name")
    .order("created_at", { ascending: true });

  if (error) throw error;

  if (!rows?.length) {
    remoteReady = true;
    if (canManageRecords()) saveRecords();
    return;
  }

  modules.forEach((module) => {
    const moduleRows = rows.filter((row) => row.module_id === module.id);
    if (!moduleRows.length) {
      module.records = [];
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

  if (module.id === "attendance") {
    return {
      dailyHours: "7,5",
      overtimeHours: "0",
      status: "AKTİF",
      ...Object.fromEntries(dayColumns.map(([key]) => [key, record[key] || "-"])),
      ...record,
      ...Object.fromEntries(overtimeDayColumns.map(([key]) => [key, record[key] || ""])),
      totalHours: calculateAttendanceTotal(record),
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

function saveRecords() {
  const data = {};
  modules.forEach((module) => {
    data[module.id] = module.records;
  });
  localStorage.setItem(storageKey, JSON.stringify(data));

  if (!isRemoteMode || !remoteReady || !canManageRecords()) return;

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

function canAccessModule(module) {
  if (!currentUser) return true;

  const type = normalizeUserType(currentUser.type);
  if (module.adminOnly && !(type === "SUPER ADMIN" || type === "ADMIN")) return false;
  if (type === "SUPER ADMIN" || type === "ADMIN" || type === "KULLANICI") return true;
  if (type === "PERSONEL") return ["panel", "tasks", "payroll", "presentations", "reports", "attendance", "leaves", "trainings", "assets"].includes(module.id);
  if (type === "MUSTERI") return ["panel", "projects", "invoices", "reports"].includes(module.id);
  return true;
}

function canManageRecords() {
  if (!currentUser) return true;
  const type = normalizeUserType(currentUser.type);
  return type === "SUPER ADMIN" || type === "ADMIN";
}

function getRecordCount(moduleId) {
  return getModule(moduleId).records?.length ?? 0;
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

function renderSideNav() {
  document.querySelector("#sideNav").innerHTML = modules
    .filter(canAccessModule)
    .map(
      (module) => `
        <button class="${module.id === activeModuleId ? "active" : ""}" type="button" data-nav="${module.id}">
          <span data-icon="${module.icon}"></span>
          <span>${escapeHtml(module.title)}</span>
        </button>
        ${(module.children ?? [])
          .map(
            (child) => `
              <button class="child" type="button" data-nav="${module.id}">
                <span data-icon="${module.icon}"></span>
                <span>${escapeHtml(child)}</span>
              </button>
            `,
          )
          .join("")}
      `,
    )
    .join("");
}

function renderBreadcrumb(module) {
  document.querySelector("#breadcrumb").innerHTML = module.breadcrumb
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderDashboard() {
  const projects = getModule("projects").records;
  const invoices = getModule("invoices").records;
  const personnel = getModule("personnel").records;
  const attendance = getModule("attendance").records;
  const payroll = getModule("payroll").records;
  const documents = getModule("presentations").records;
  const leaves = getModule("leaves").records;
  const tasks = getModule("tasks").records;
  const activeProjects = projects.filter((record) => normalizeText(record.status) === "aktif").length;
  const pendingInvoices = invoices.filter((record) => record.status !== "Fatura Kesildi").length;
  const totalHours = attendance.reduce((sum, record) => sum + parseHour(calculateAttendanceTotal(record)), 0);
  const totalOvertime = attendance.reduce((sum, record) => sum + parseHour(record.overtimeHours), 0);
  const pendingPayroll = payroll.filter((record) => record.payrollStatus !== "Personele Açıldı").length;
  const missingDocuments = personnel.filter(
    (person) => !documents.some((documentRecord) => normalizeText(documentRecord.person) === normalizeText(person.name)),
  ).length;
  const pendingLeaves = leaves.filter((record) => record.approval === "Bekliyor").length;
  const openTasks = tasks.filter((record) => record.status !== "Tamamlandı").length;
  const alerts = [
    pendingInvoices ? `${pendingInvoices} fatura sonuçlandırılmayı bekliyor.` : "",
    pendingPayroll ? `${pendingPayroll} bordro personele açılmadan bekliyor.` : "",
    missingDocuments ? `${missingDocuments} personelde özlük belgesi kontrolü eksik görünüyor.` : "",
    pendingLeaves ? `${pendingLeaves} izin talebi onay bekliyor.` : "",
  ].filter(Boolean);
  const kpis = [
    ["Aktif Proje", activeProjects, "projects"],
    ["Bekleyen Fatura", pendingInvoices, "invoices"],
    ["Toplam Çalışma", `${totalHours.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "attendance"],
    ["Toplam Mesai", `${totalOvertime.toLocaleString("tr-TR", { maximumFractionDigits: 1 })} sa`, "attendance"],
    ["Eksik Özlük", missingDocuments, "presentations"],
    ["Açık Görev", openTasks, "tasks"],
  ];
  const cards = [
    { id: "companies", value: getRecordCount("companies"), label: "Firmalar", icon: "building", color: "cyan" },
    { id: "projects", value: `${getRecordCount("projects")} / ${getRecordCount("projects")}`, label: "Projeler / Parçalar", icon: "folder", color: "green" },
    { id: "personnel", value: getPersonnelTotal(), label: "Personeller", icon: "users", color: "orange" },
    { id: "users", value: getRecordCount("users"), label: "Kullanıcılar", icon: "contact", color: "red" },
    { id: "presentations", value: getRecordCount("presentations"), label: "Özlük Belgeleri", icon: "presentation", color: "purple" },
    { id: "attendance", value: getRecordCount("attendance"), label: "Puantaj", icon: "calendar", color: "blue" },
    { id: "leaves", value: getRecordCount("leaves"), label: "İzinler", icon: "calendar", color: "cyan" },
    { id: "trainings", value: getRecordCount("trainings"), label: "Eğitimler", icon: "presentation", color: "green" },
    { id: "assets", value: getRecordCount("assets"), label: "Zimmetler", icon: "folder", color: "purple" },
    { id: "tasks", value: getRecordCount("tasks"), label: "Görevler", icon: "note", color: "blue" },
    { id: "invoices", value: getRecordCount("invoices"), label: "Faturalar", icon: "invoice", color: "cyan" },
    { id: "reports", value: getRecordCount("reports"), label: "Raporlar", icon: "chart", color: "green" },
    { id: "payroll", value: getRecordCount("payroll"), label: "Bordro", icon: "invoice", color: "dark-green" },
  ];
  const visibleCards = cards.filter((card) => canAccessModule(getModule(card.id)));

  document.querySelector("#pageContent").innerHTML = `
    <section class="executive-dashboard">
      <div class="executive-hero">
        <span>Yönetici Özeti</span>
        <h2>Artı Destek operasyon görünümü</h2>
        <p>Projeler, insan kaynakları, bordro ve finans süreçlerini tek ekranda izleyin.</p>
      </div>
      <div class="kpi-grid">
        ${kpis
          .filter(([, , moduleId]) => canAccessModule(getModule(moduleId)))
          .map(
            ([label, value, moduleId]) => `
              <button class="kpi-card" type="button" data-nav="${moduleId}">
                <strong>${escapeHtml(value)}</strong>
                <span>${escapeHtml(label)}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="ops-grid">
        <section class="ops-panel">
          <h3>Öncelikli Uyarılar</h3>
          ${
            alerts.length
              ? alerts.map((alert) => `<p class="alert-row">${escapeHtml(alert)}</p>`).join("")
              : '<p class="empty-state">Kritik uyarı görünmüyor.</p>'
          }
        </section>
        <section class="ops-panel">
          <h3>Yetki Matrisi</h3>
          <p><b>Admin</b> tüm kayıtları yönetir.</p>
          <p><b>Kullanıcı</b> operasyonu izler, silme ve düzenleme yapamaz.</p>
          <p><b>Müşteri</b> kendi firmasına ait proje, fatura ve raporları görür.</p>
        </section>
        <section class="ops-panel">
          <h3>Son İşlemler</h3>
          ${
            getModule("audit").records.length
              ? getModule("audit").records
                  .slice(0, 4)
                  .map((record) => `<p><b>${escapeHtml(record.action)}</b> ${escapeHtml(record.recordTitle)} <span>${escapeHtml(record.date)}</span></p>`)
                  .join("")
              : '<p class="empty-state">Henüz işlem kaydı yok.</p>'
          }
        </section>
      </div>
    </section>
    <section class="dashboard-grid">
      ${visibleCards
        .map(
          (card) => `
            <article class="dash-card ${card.color}">
              <div class="inner">
                <h2>${escapeHtml(card.value)}</h2>
                <p>${escapeHtml(card.label)}</p>
                <span class="card-icon" data-icon="${card.icon}"></span>
              </div>
              <button type="button" data-nav="${card.id}">Yönet <span>➜</span></button>
            </article>
          `,
        )
        .join("")}
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
  const filter = filterValue.trim().toLocaleLowerCase("tr");
  const quickFilter = quickFilters[module.id];
  const quickConfig = moduleQuickFilters[module.id];

  return module.records.filter((record) => {
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
  ].includes(key) || (module.id === "projects" && key === "endDate");
}

function parseHour(value) {
  const hour = Number(String(value ?? "0").replace(",", "."));
  return Number.isFinite(hour) ? hour : 0;
}

function getAttendanceDayHours(value, dailyHours) {
  const text = String(value ?? "").trim();
  if (!text || text === "-") return 0;
  const normalized = normalizeText(text);
  if (normalized === "geldi") return dailyHours;
  if (["gelmedi", "izin", "rapor"].includes(normalized)) return 0;
  return parseHour(text);
}

function getAttendanceDayOvertime(record) {
  return overtimeDayColumns.reduce((sum, [key]) => sum + parseHour(record?.[key]), 0);
}

function calculateAttendanceTotal(record) {
  const dailyHours = parseHour(record?.dailyHours || "7,5");
  const dayHours = dayColumns.reduce((sum, [key]) => sum + getAttendanceDayHours(record?.[key], dailyHours), 0);
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
        <div class="role-matrix">
          <strong>Rol Kuralları</strong>
          <p>Admin: ekle, düzenle, sil, onayla.</p>
          <p>Kullanıcı: sadece izleme.</p>
          <p>Müşteri: kendi firma kayıtlarını izleme.</p>
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

  return `
    <span class="actions">
      <button class="icon-action" type="button" title="Düzenle" data-action="edit" data-id="${record.id}"><span data-icon="edit"></span></button>
      <button class="icon-action" type="button" title="Sil" data-action="delete" data-id="${record.id}"><span data-icon="trash"></span></button>
      ${payrollActions}
    </span>
  `;
}

function getVisibleColumns(module) {
  if (module.id !== "attendance") return module.columns;
  const hiddenTypes = new Set(["attendanceDay", "attendanceOvertime"]);
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
              ${escapeHtml(option)}
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
        <strong>Geldi / Saat / İzin</strong>
        <strong>Mesai</strong>
      </div>
      ${dayColumns
        .map(([key, label, , options], index) => {
          const overtimeKey = overtimeDayColumns[index][0];
          return `
            <div class="attendance-editor-row">
              <span>${escapeHtml(label)}</span>
              <input name="${key}" value="${escapeHtml(record?.[key] ?? "-")}" list="${key}-options" placeholder="Geldi / 4 / İzin" />
              <datalist id="${key}-options">
                ${options.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("")}
              </datalist>
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
      ${renderQuickFilters(module)}
      <div class="toolbar">
        <div class="toolbar-actions">
          ${canEdit ? '<button class="btn btn-green" type="button" data-action="add">EKLE</button>' : ""}
          <button class="btn btn-green" type="button" data-action="export">EXCEL</button>
          <button class="btn btn-orange" type="button" data-action="export-pdf">PDF</button>
        </div>
        <label class="filter-line">
          <span>${module.id === "projects" ? "Ara:" : "Filtrele :"}</span>
          <input id="filterInput" type="search" value="${escapeHtml(filterValue)}" />
        </label>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              ${canEdit ? '<th class="sortable">İşlemler</th>' : ""}
              ${visibleColumns.map(([, label]) => `<th class="sortable">${escapeHtml(label)}</th>`).join("")}
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
                              ? `<td data-label="İşlemler">${renderRowActions(module, record)}</td>`
                              : ""
                          }
                          ${visibleColumns.map(([key, label], index) => renderCell(module, record, key, index, label)).join("")}
                        </tr>
                      `,
                    )
                    .join("")
                : `<tr><td colspan="${visibleColumns.length + (canEdit ? 1 : 0)}">Kayıt bulunamadı.</td></tr>`
            }
          </tbody>
        </table>
      </div>
      <div class="pagination">
        <span>Önceki</span>
        <span class="active">1</span>
        <span>Sonraki</span>
      </div>
    </section>
  `;
}

function renderCell(module, record, key, index, label = "") {
  const value = record[key] ?? "";
  const column = module.columns.find(([columnKey]) => columnKey === key);
  const type = column?.[2];
  const labelAttr = `data-label="${escapeHtml(label)}"`;
  if (type === "file") return `<td ${labelAttr}>${renderFileCell(value)}</td>`;
  if (type === "files") return `<td ${labelAttr}>${renderFilesCell(value)}</td>`;
  if (type === "date") return `<td ${labelAttr}>${escapeHtml(formatDate(value))}</td>`;
  if (module.id === "attendance" && key === "totalHours") return `<td ${labelAttr}><strong>${escapeHtml(calculateAttendanceTotal(record))}</strong></td>`;
  if (key === "bankIban") return `<td ${labelAttr} class="iban-cell">${escapeHtml(value)}</td>`;
  if (key === "status" && ["AKTİF", "PASİF"].includes(String(value).toLocaleUpperCase("tr"))) {
    return canManageRecords()
      ? `<td ${labelAttr}>${renderStatusButton(module, record)}</td>`
      : `<td ${labelAttr}><span class="${value === "AKTİF" ? "badge-green" : "status-red"}">${escapeHtml(value)}</span></td>`;
  }

  const titleLike = index === 0 || key === "code" || key === "part" || key === "email";
  const valueText = String(value);
  const redStatus = ["Onaysız", "Onay Verilmedi", "Bekliyor", "Kapalı", "Görülmedi", "Pasif", "Reddedildi"].includes(valueText);
  const greenStatus = ["Onaylı", "Onaylandı", "AKTİF", "Aktif", "Ödendi", "Kesildi", "Fatura Kesildi", "Hazır", "Personele Açıldı", "Görüldü", "Tamamlandı"].includes(valueText);
  const orangeStatus = ["Onay Bekliyor", "Hazırlandı", "Taslak", "Devam Ediyor", "Beklemede", "Fatura Beklemede"].includes(valueText);

  if (redStatus) return `<td ${labelAttr}><span class="status-red">${escapeHtml(value)}</span></td>`;
  if (orangeStatus) return `<td ${labelAttr}><span class="status-orange">${escapeHtml(value)}</span></td>`;
  if (greenStatus) return `<td ${labelAttr}><span class="${valueText === "AKTİF" ? "badge-green" : "status-green"}">${escapeHtml(value)}</span></td>`;
  if (titleLike) return `<td ${labelAttr}><a href="#${module.id}-${record.id}">${escapeHtml(value)}</a></td>`;
  return `<td ${labelAttr}>${escapeHtml(value)}</td>`;
}

function renderStatusButton(module, record) {
  const isActive = String(record.status).toLocaleUpperCase("tr") !== "PASİF";
  return `
    <button class="status-toggle ${isActive ? "active" : "passive"}" type="button" data-action="toggle-status" data-module="${module.id}" data-id="${record.id}">
      ${isActive ? "AKTİF" : "PASİF"}
    </button>
  `;
}

function renderFileCell(value) {
  if (!value) return '<span class="muted">Dosya yok</span>';

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
  if (!value) return '<span class="muted">Dosya yok</span>';
  const files = Array.isArray(value) ? value : [value];
  if (!files.length) return '<span class="muted">Dosya yok</span>';

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

function getActiveExportRows() {
  const module = getModule();
  if (module.dashboard || module.chart) return getChartExportRows();

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

function downloadExport() {
  const module = getModule();
  const exportName = module.dashboard || module.chart ? `${selectedMonth}-grafik` : module.title;
  const blob = new Blob(["\uFEFF", toCsv(getActiveExportRows())], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${exportName}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadPdfExport() {
  const module = getModule();
  const rows = getActiveExportRows();
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
  renderDataPage(module);
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
  renderDataPage(module);
  renderSideNav();
  renderIcons();
}

function renderModule(module) {
  document.querySelector("#pageTitle").textContent = module.dashboard ? "Online İşlemler" : module.title;
  renderBreadcrumb(module);
  selectedRecordId = module.records?.[0]?.id ?? "";
  filterValue = "";

  if (module.dashboard) {
    renderDashboard();
  } else {
    renderDataPage(module);
  }

  renderIcons();
}

function switchModule(id) {
  if (!canAccessModule(getModule(id))) {
    activeModuleId = "panel";
    renderSideNav();
    renderModule(getModule("panel"));
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
  document.querySelector("#loginPage").hidden = false;
  document.querySelector("#appShell").hidden = true;
  document.querySelector("#loginError").textContent = "";
  document.querySelector("#loginUsername").focus();
}

function showApp(user) {
  currentUser = user;
  if (!canAccessModule(getModule(activeModuleId))) activeModuleId = "panel";
  document.querySelector("#currentUserName").textContent = user.displayName;
  document.querySelector("#loginPage").hidden = true;
  document.querySelector("#appShell").hidden = false;
  renderSideNav();
  renderModule(getModule(activeModuleId));
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

function openDialog(recordId = "") {
  const module = getModule();
  const record = module.records.find((item) => item.id === recordId);
  document.querySelector("#moduleIdInput").value = module.id;
  document.querySelector("#recordIdInput").value = record?.id ?? "";
  document.querySelector("#dialogTitle").textContent = record ? `${module.title} Düzenle` : `${module.title} Ekle`;

  if (module.id === "attendance") {
    document.querySelector("#formGrid").innerHTML = renderAttendanceForm(record);
    document.querySelector("#recordDialog").showModal();
    return;
  }

  document.querySelector("#formGrid").innerHTML = module.columns
    .map(([key, label, type, options = []], index) => {
      const value = record?.[key] ?? "";
      const required = !isOptionalField(module, key);
      const isLong = index === module.columns.length - 1 || ["problem", "description", "bankIban", "address", "note"].includes(key);
      if (type === "file") {
        const fileName = value && typeof value === "object" ? value.name : "";
        return `
          <label class="full-field">
            ${escapeHtml(label)}
            <input name="${key}" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" />
            <small>${fileName ? `Mevcut dosya: ${escapeHtml(fileName)}` : "Bilgisayardan dosya veya resim seçebilirsin."}</small>
          </label>
        `;
      }
      if (type === "files") {
        const files = Array.isArray(value) ? value : value ? [value] : [];
        const fileText = files.length ? `Mevcut dosyalar: ${files.map((file) => escapeHtml(file.name || "Dosya")).join(", ")}` : "Aynı kayıt için en fazla 10 dosya veya resim seçebilirsin.";
        return `
          <label class="full-field">
            ${escapeHtml(label)}
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
            ${escapeHtml(label)}
            <input name="${key}" type="date" value="${escapeHtml(toInputDate(value))}" ${required ? "required" : ""} />
          </label>
        `;
      }
      if (type === "select") {
        return `
          <label>
            ${escapeHtml(label)}
            <select name="${key}" required>
              ${options
                .map(
                  (option) => `
                    <option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>
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
            ${escapeHtml(label)}
            <input name="${key}" value="${escapeHtml(module.id === "attendance" ? calculateAttendanceTotal(record) : value || (module.id === "projects" ? "Otomatik atanacak" : ""))}" readonly />
          </label>
        `;
      }
      if (type === "attendanceDay") {
        return `
          <label>
            ${escapeHtml(label)}
            <input name="${key}" value="${escapeHtml(value)}" list="${key}-options" placeholder="Geldi / 4 / İzin" />
            <datalist id="${key}-options">
              ${options.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("")}
            </datalist>
          </label>
        `;
      }
      return `
        <label class="${isLong ? "full-field" : ""}">
          ${escapeHtml(label)}
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

  if (module.id === "projects") {
    record.status = record.endDate ? "Pasif" : normalizeProjectStatus(record.status);
    record.invoiceStatus = normalizeInvoiceStatus(record.invoiceStatus);
    record.code = previousRecord?.code || generateProjectCode(record.location);
  }

  module.records = recordId
    ? module.records.map((item) => (item.id === recordId ? record : item))
    : [record, ...module.records];

  addAudit(recordId ? "Düzenleme" : "Ekleme", module, record, recordId ? "Kayıt güncellendi." : "Yeni kayıt oluşturuldu.");
  selectedRecordId = record.id;
  saveRecords();
  renderDataPage(module);
  renderSideNav();
  renderIcons();
  closeDialog();
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    switchModule(navButton.dataset.nav);
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
  const module = getModule();
  const recordId = manageButton.dataset.id || selectedRecordId;
  const manageActions = ["add", "edit", "delete", "toggle-status", "payroll-accounting", "payroll-management", "payroll-publish", "payroll-seen"];
  if (manageActions.includes(action) && !canManageRecords()) return;

  if (action === "add") {
    openDialog();
  }

  if (action === "edit") {
    openDialog(recordId);
  }

  if (action === "delete") {
    const record = module.records.find((item) => item.id === recordId);
    if (record && window.confirm(`${getRecordTitle(module, record)} kaydını silmek istiyor musun?`)) {
      archiveRecord(module, record);
      addAudit("Silme", module, record, "Kayıt arşive alındı.");
      module.records = module.records.filter((item) => item.id !== recordId);
      selectedRecordId = module.records[0]?.id ?? "";
      saveRecords();
      renderDataPage(module);
      renderSideNav();
      renderIcons();
    }
  }

  if (action === "export") {
    downloadExport();
  }

  if (action === "export-pdf") {
    downloadPdfExport();
  }

  if (action === "toggle-status") {
    toggleRecordStatus(manageButton.dataset.module || module.id, recordId);
  }

  if (action.startsWith("payroll-")) {
    updatePayrollWorkflow(recordId, action);
  }

});

document.addEventListener("input", (event) => {
  if (event.target.id !== "filterInput") return;
  filterValue = event.target.value;
  renderDataPage(getModule());
  renderIcons();
  document.querySelector("#filterInput")?.focus();
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
  submitButton.textContent = "Giriş yapılıyor...";

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
    submitButton.textContent = "Giriş Yap";
  }
});

document.querySelector("#logoutButton").addEventListener("click", async () => {
  localStorage.removeItem(sessionKey);
  if (isRemoteMode) await supabaseClient.auth.signOut();
  currentUser = null;
  showLogin();
});

document.querySelector("#dialogCloseButton").addEventListener("click", closeDialog);
document.querySelector("#dialogCancelButton").addEventListener("click", closeDialog);
document.querySelector("#recordForm").addEventListener("submit", upsertRecord);

initSession();
