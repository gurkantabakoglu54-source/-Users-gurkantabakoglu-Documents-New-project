import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputPath = "/Users/gurkantabakoglu/Desktop/Farplas_Yapilan_Isler_Ozet_2026-06-24.xlsx";

const mailRows = [
  ["2026-06-24 14:27", "Çiğdem Köse", "ik1@global-kalite.com", "Farplas T1 Forklift Operatörü (Emekli Personel) Giriş İşlemleri", "Giriş işlemleri", "Emekli Farplas T1 forklift operatörü Erkan Duman için giriş işlemleri talep edildi. Ekli evrak var.", "Yandex Mail araması", "Açık / işlem bekliyor"],
  ["2026-06-23", "Sevda Beyza SOLAKA", "muhasebe1@global-kalite.com", "T3 yedek parça kontrolü Çalışma Detayı ve Proforma Hakk.", "Fatura / proforma", "İlgili fatura bilgiye sunuldu. Ekli dosya var.", "Yandex Mail araması", "Bilgi / muhasebe"],
  ["2026-06-23", "Nuray ÇİFCİ", "gkkfarplas@global-kalite.com", "FARPLAS PERSONEL VARDİYA SAYILARI", "Vardiya", "Farplas 22.06.2026 personel vardiya sayıları eklendi.", "Yandex Mail araması", "Raporlandı"],
  ["2026-06-23", "Nuray ÇİFCİ", "gkkfarplas@global-kalite.com", "FARPLAS PERSONEL PUANTAJ TAKİP", "Puantaj", "Farplas 22.06.2026 puantaj listesi eklendi.", "Yandex Mail araması", "Raporlandı"],
  ["2026-06-23", "Nuray ÇİFCİ", "gkkfarplas@global-kalite.com", "FARPLAS ASAKAI", "Asakai", "Farplas 22.06.2026 asakai dosyası eklendi.", "Yandex Mail araması", "Raporlandı"],
  ["2026-06-22", "DenizBank / Buse KOZMAÇ", "denizbank.com / ik4@global-kalite.com", "maaş ödeme dekont talebi hk.", "Maaş ödeme dekontu", "Personel maaş ödeme dekontları için banka yazışması görüldü.", "Yandex Mail araması", "Finans / İK"],
  ["2026-06-20", "Halil Çelikbilek", "halil.celikbilek@farplas.com", "[EXTERNAL]:FW: T1 Lojistik Desteği Haziran", "Lojistik destek / satın alma", "Satın alma talebi oluşturuldu. Sat No: 1028013261.", "Yandex Mail araması", "Tamamlanan bildirim"],
  ["2026-06-19", "Sevda Beyza SOLAKA", "muhasebe1@global-kalite.com", "T3 yedek parça kontrolü Çalışma Detayı ve Proforma Hakk.", "Maliyet / proforma", "Haziran ayı maliyet tablosu ve proforma eklendi; SAT oluşturulması istendi.", "Yandex Mail araması", "SAT / muhasebe"],
  ["2026-06-19", "Sevda Beyza SOLAKA", "muhasebe1@global-kalite.com", "[EXTERNAL]:FW: T1 Lojistik Desteği Haziran", "Maliyet / proforma", "Haziran ayı maliyet tablosu ve proforma eklendi; SAT oluşturulması istendi.", "Yandex Mail araması", "SAT / muhasebe"],
  ["2026-06-16", "Çiğdem Köse", "ik1@global-kalite.com", "Farplas personel listesi", "Personel listesi", "15 üretim destek, 5 lojistik, 1 kalite personeli listelendi. Lojistik iş çağrıları için Admin-ist referansı verildi.", "Yandex Mail araması", "Personel kapsamı"],
  ["2026-06-12", "Onur Üstün / Sevda Beyza / Tayip F. Tekir", "farplas.com / global-kalite.com", "TESİSLERDE GÖREVLİ PERSONEL SAYI", "Tesis bazlı personel sayısı", "Farplas tarafı tesis bazlı personel sayılarını talep etti; görevli personel listesi paylaşıldı.", "Yandex Mail araması", "Yanıtlandı"],
  ["2026-06-10", "Sevda Beyza SOLAKA", "muhasebe1@global-kalite.com", "[EXTERNAL]:RE: [EXTERNAL]:Ödeme Talebi", "Ödeme takibi", "23.04.2026 tarihli Farplas 682.261,27 TL borç bakiyesinin vade/ödeme takibi yapıldı.", "Yandex Mail araması", "Finans takibi"],
  ["2026-06-09", "Ertuğrul YILMAZ", "ertugrul.yilmaz@global-kalite.com", "2026 Mayıs aylık raporu", "Aylık rapor", "Genel yapılan işlerle ilgili Mayıs ayı raporu eklendi.", "Yandex Mail araması", "Raporlandı"],
  ["2026-06-09", "Çiğdem Köse", "ik1@global-kalite.com", "işe başlatmış olduğum personel ücreti hakedişi hk.", "Hakediş / personel", "2 ay çalışmış personel listesi paylaşıldı.", "Yandex Mail araması", "Hakediş takibi"],
  ["2026-06-04", "Aylin Delikoca / Sevda Beyza SOLAKA", "farplas.com / global-kalite.com", "[EXTERNAL]:RE: [EXTERNAL]:Ödeme Talebi", "Ödeme takibi", "Vadesi geçmiş bakiye ve 12 Haziran ödeme bilgisi yazışmaları görüldü.", "Yandex Mail araması", "Finans takibi"],
  ["2026-06-02", "Ertuğrul YILMAZ", "ertugrul.yilmaz@global-kalite.com", "Mayıs ayı pirim dosyaları", "Prim", "Mayıs ayı prim dosyaları eklendi.", "Yandex Mail araması", "Raporlandı"],
];

const timelineRows = [
  ["2023-05", "Vardiya sayıları", "Mayıs vardiya sayıları hazırlanmış ve güncellenmiş.", "Vardiya Sayıları MAYIS dosyaları", "Bilgisayar dosyaları"],
  ["2023-06/07", "Vardiya ve servis", "Haziran vardiya, Temmuz vardiya ve servis dosyaları tutulmuş.", "Vardiya Sayıları HAZİRAN / TEMMUZ SERVİS", "Bilgisayar dosyaları"],
  ["2023-07", "Sözleşme taslağı", "Dış destek personel sözleşme taslağı oluşturulmuş.", "DIŞ DESTEK PERSONEL SÖZLEŞME TASLAK 2023_rev", "Bilgisayar dosyaları"],
  ["2023-08/09", "Vardiya ve servis", "Ağustos-Eylül vardiya sayıları ve servis dosyaları hazırlanmış.", "AĞUSTOS/EYLÜL Vardiya ve Servis", "Bilgisayar dosyaları"],
  ["2023-09/10", "Günlük maliyet", "Eylül-Ekim günlük maliyet tablosu hazırlanmış.", "Farplas Günlük Maliyet Tablosu Eylül-Ekim 2023", "Bilgisayar dosyaları"],
  ["2023-10/11", "Vardiya, servis ve maliyet", "Ekim-Kasım vardiya sayıları, servis ve günlük maliyet tabloları tutulmuş.", "Farplas Vardiya Ekim-Kasım", "Bilgisayar dosyaları"],
  ["2023-11/12", "Vardiya, servis ve maliyet", "Kasım-Aralık vardiya, servis ve maliyet tabloları hazırlanmış.", "Kasım-Aralık klasörü", "Bilgisayar dosyaları"],
  ["2024-01/02", "Vardiya, servis ve maliyet", "Ocak-Şubat servis, vardiya ve günlük maliyet tabloları hazırlanmış.", "Ocak Şubat klasörü", "Bilgisayar dosyaları"],
  ["2024-01", "Prim kriterleri", "Farplas prim kriterleri dosyası oluşturulmuş.", "1-Farplas Prim Kriterleri_Ocak_2024.xlsx", "Bilgisayar dosyaları"],
  ["2024-03", "Servis, vardiya ve puantaj", "Şubat-Mart servis/vardiya ve Farplas puantaj dosyası tutulmuş.", "Farplas Mart / A-FARPLAS PUANTAJ 2024", "Bilgisayar dosyaları"],
  ["2024-04/05", "Servis, vardiya ve maliyet", "Mart-Nisan ve Nisan-Mayıs dönemlerine ait servis, vardiya ve maliyet tabloları hazırlanmış.", "Farplas Mart-Nisan / Vardiya Nisan-Mayıs", "Bilgisayar dosyaları"],
  ["2024-05/06", "Çalışma detayı, servis ve vardiya", "Mayıs-Haziran çalışma detay tablosu, servis maliyeti, vardiya ve servis dosyaları hazırlanmış.", "FARPLAS ÇALIŞMA DETAY TABLO / Farplas Servis Maliyet", "Bilgisayar dosyaları"],
  ["2024-09", "Sözleşme / tadil", "Farplas sözleşme PDF'i ve destek personel tadil protokolü taslağı oluşturulmuş.", "FARPLAS.pdf / Farplas_Destek Personel-Tadil Protokolü", "Bilgisayar dosyaları"],
  ["2024-12", "Prim durumu", "Kasım prim dosyası içinde Farplas prim durumu hazırlanmış.", "07-Farplas Prim Durumu.xlsx", "Bilgisayar dosyaları"],
  ["2025-01", "Performans değerlendirme", "Farplas değerlendirme formları dosyası oluşturulmuş.", "Farplas Değerlendirme formları.xlsx", "Bilgisayar dosyaları"],
  ["2026-01", "Kıdem, ihbar ve izin", "Farplas kıdem/ihbar hesapları ve yıllık izin dosyaları tutulmuş.", "farplas ik kıdem klasörü", "Bilgisayar dosyaları"],
  ["2026-01", "Ödeme takip", "Farplas ödeme takip dosyası indirilmiş/güncellenmiş.", "FARPLAS ÖDEME TAKİP.XLSX", "Bilgisayar dosyaları"],
  ["2026-03", "Parça kontrol", "EKV Pres Farplas parça dosyası indirilmiş.", "EKV Pres Farplas parça.xlsx", "Bilgisayar dosyaları"],
  ["2026-06", "Güncel operasyon", "Mail akışında vardiya, puantaj, asakai, personel listesi, T1 lojistik, T3 yedek parça, ödeme ve aylık rapor konuları sürüyor.", "Yandex Mail Farplas araması", "Mail kayıtları"],
];

const fileRows = [
  ["2023-05-09", "Vardiya Sayıları MAYIS1.xlsx", "Vardiya", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/VARDİYA SAYILARI Mayıs/MAYIS", "Mayıs vardiya başlangıç kayıtlarından biri"],
  ["2023-07-17", "DIŞ DESTEK PERSONEL SÖZLEŞME TASLAK 2023_rev (002).docx", "Sözleşme", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas", "Dış destek personel sözleşme taslağı"],
  ["2023-10-19", "Farplas Günlük Maliyet Tablosu Eylül-Ekim 2023.xlsx", "Maliyet", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas", "Eylül-Ekim günlük maliyet"],
  ["2023-11-20", "Farplas Günlük Maliyet Tablosu Ekim - Kasım 2023.xlsx", "Maliyet", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/Farplas Vardiya Ekim-Kasım", "Ekim-Kasım günlük maliyet"],
  ["2024-01-26", "1-Farplas Prim Kriterleri_Ocak_2024.xlsx", "Prim", "/Users/gurkantabakoglu/Desktop/Global Kalite/1-IK/4-Prim Kritelleri", "Farplas prim kriterleri"],
  ["2024-03-19", "A-FARPLAS PUANTAJ 2024.xlsx", "Puantaj", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/Farplas Vardiya Ekim-Kasım", "Farplas puantaj takibi"],
  ["2024-04-19", "Farplas Günlük Maliyet Tablosu Mart Nisan 2024.xlsx", "Maliyet", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/Farplas Mart-Nisan", "Mart-Nisan maliyet"],
  ["2024-05-20", "Farplas Günlük Maliyet Tablosu Nisan Mayıs 2024.xlsx", "Maliyet", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas", "Nisan-Mayıs maliyet"],
  ["2024-06-21", "FARPLAS ÇALIŞMA DETAY TABLO.XLSX", "Çalışma detayı", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/Mayıs - Haziran", "Mayıs-Haziran çalışma detay tablosu"],
  ["2024-06-21", "Farplas Servis Maliyet.xlsx", "Servis maliyeti", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/Mayıs - Haziran", "Servis maliyet çalışması"],
  ["2024-09-23", "FARPLAS.pdf", "Sözleşme / tadil", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/farplas Tadil sözleşmesi", "Farplas tadil/sözleşme PDF kaydı"],
  ["2024-09-23", "Farplas_Destek Personel-Tadil Protokolü (Taslak).docx", "Sözleşme / tadil", "/Users/gurkantabakoglu/Desktop/Global Kalite/10-Teklif ve Sözleşmeler/Farplas/farplas Tadil sözleşmesi", "Destek personel tadil protokolü taslağı"],
  ["2024-12-03", "07-Farplas Prim Durumu.xlsx", "Prim", "/Users/gurkantabakoglu/Desktop/Global Kalite/1-IK/11-Kasım Prim Dosyası", "Kasım prim durumu"],
  ["2025-01-15", "Farplas Değerlendirme formları.xlsx", "Performans", "/Users/gurkantabakoglu/Desktop/Global Kalite/1-IK/GK Performans Değerlendirme", "Farplas değerlendirme formları"],
  ["2026-01-06", "Kıdem-ihbar hesapları.xlsx", "İK", "/Users/gurkantabakoglu/Desktop/Global Kalite/1-IK/farplas ik kıdem", "Kıdem/ihbar hesapları"],
  ["2026-01-06", "YILLIK İZİNLER FARPLAS.xlsx", "İK", "/Users/gurkantabakoglu/Desktop/Global Kalite/1-IK/farplas ik kıdem", "Yıllık izin takibi"],
  ["2026-01-22", "FARPLAS ÖDEME TAKİP.XLSX", "Ödeme takip", "/Users/gurkantabakoglu/Downloads", "Farplas ödeme takip dosyası"],
  ["2026-03-09", "EKV Pres Farplas parça.xlsx", "Parça / kontrol", "/Users/gurkantabakoglu/Downloads", "Farplas parça kontrol dosyası"],
];

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Özet");
const timeline = workbook.worksheets.add("Zaman Çizelgesi");
const mails = workbook.worksheets.add("Mail Kayıtları");
const files = workbook.worksheets.add("Bilgisayar Dosyaları");
const notes = workbook.worksheets.add("Kaynak Notları");

function writeTable(sheet, startCell, headers, rows, headerColor = "#1F4E78") {
  const colCount = headers.length;
  const startCol = startCell.replace(/[0-9]/g, "");
  const startRow = Number(startCell.replace(/[A-Z]/gi, ""));
  const endCol = String.fromCharCode(startCol.charCodeAt(0) + colCount - 1);
  const endRow = startRow + rows.length;
  sheet.getRange(`${startCell}:${endCol}${startRow}`).values = [headers];
  if (rows.length) sheet.getRange(`${startCol}${startRow + 1}:${endCol}${endRow}`).values = rows;
  sheet.getRange(`${startCell}:${endCol}${startRow}`).format = {
    fill: { color: headerColor },
    font: { color: "#FFFFFF", bold: true },
    horizontalAlignment: "center",
    verticalAlignment: "middle",
    wrapText: true,
  };
  sheet.getRange(`${startCell}:${endCol}${endRow}`).format = {
    font: { name: "Aptos", size: 10 },
    verticalAlignment: "top",
    wrapText: true,
  };
  sheet.freezePanes.freezeRows(1);
  sheet.getRange(`${startCell}:${endCol}${endRow}`).format.autofitColumns();
  sheet.getRange(`${startCell}:${endCol}${endRow}`).format.autofitRows();
}

summary.getRange("A1:H1").values = [["Farplas Yapılan İşler Özeti", "", "", "", "", "", "", ""]];
summary.getRange("A1:H1").merge();
summary.getRange("A1:H1").format = {
  fill: { color: "#1F4E78" },
  font: { color: "#FFFFFF", bold: true, size: 16 },
  horizontalAlignment: "center",
};
summary.getRange("A3:H9").values = [
  ["Hazırlanma tarihi", "2026-06-24", "", "Kapsam", "Yandex Mail Farplas araması + bilgisayar dosya taraması", "", "", ""],
  ["Mail arama sonucu", "3188 mesaj", "", "Güncel görünen mail kaydı", mailRows.length, "", "", ""],
  ["Bilgisayar dosya dönemi", "2023-05 - 2026-03", "", "Özetlenen dosya kaydı", fileRows.length, "", "", ""],
  ["Ana iş başlıkları", "Vardiya, puantaj, asakai, personel listesi, lojistik destek, T3 yedek parça, proforma/fatura, ödeme takip, prim, sözleşme/tadil, kıdem/izin", "", "", "", "", "", ""],
  ["Güncel açık konu", "2026-06-24 Farplas T1 forklift operatörü giriş işlemleri", "", "", "", "", "", ""],
  ["Not", "Bu tablo ekranda görülen mail sonuçları ve bilgisayarda bulunan dosya ad/tarih kayıtlarına göre hazırlanmıştır; mail eklerinin tamamı tek tek açılmadan özetlenmiştir.", "", "", "", "", "", ""],
  ["Taslak alıcı", "gurkantabakoglu54@gmail.com", "", "Dosya adı", "Farplas_Yapilan_Isler_Ozet_2026-06-24.xlsx", "", "", ""],
];
summary.getRange("A3:H9").format = { font: { name: "Aptos", size: 10 }, wrapText: true, verticalAlignment: "top" };
summary.getRange("A1:H9").format.autofitColumns();
summary.getRange("A1:H9").format.autofitRows();

writeTable(timeline, "A1", ["Dönem", "İş Başlığı", "Yapılan İş / Bulgular", "Kaynak / Dosya", "Kaynak Türü"], timelineRows);
writeTable(mails, "A1", ["Tarih", "Gönderen", "E-posta", "Konu", "İş Kategorisi", "Özet", "Kaynak", "Durum"], mailRows, "#2F6B3F");
writeTable(files, "A1", ["Dosya Tarihi", "Dosya Adı", "Kategori", "Klasör", "Not"], fileRows, "#6B4E16");
writeTable(notes, "A1", ["Kaynak", "Detay"], [
  ["Yandex Mail", "Farplas araması tüm posta kutusunda 3188 mesaj döndürdü. Görünen sonuçların üst kısmı 2026 Haziran ağırlıklı iş akışını gösterdi."],
  ["Bilgisayar taraması", "Masaüstü, Documents ve Downloads içinde Farplas geçen dosya ve klasör adları tarandı. Ana kayıtlar Global Kalite/10-Teklif ve Sözleşmeler/Farplas, Global Kalite/1-IK ve Downloads altında bulundu."],
  ["Sınırlama", "Kişisel veriye hassasiyet nedeniyle mail ekleri ve tüm dosya içerikleri tek tek açılıp kopyalanmadı; tablo iş başlığı, tarih, konu ve görünen özet bazında hazırlandı."],
  ["Önerilen sonraki adım", "Gönderimden önce özellikle personel isimleri, finans tutarları ve ek dosya içerikleri gerekiyorsa ilgili dosya/mailler ayrıca kontrol edilebilir."],
], "#4F5D75");

for (const sheet of [summary, timeline, mails, files, notes]) {
  sheet.getRange("A1:K80").format = { font: { name: "Aptos" }, wrapText: true, verticalAlignment: "top" };
}

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

await workbook.render({ sheetName: "Özet", range: "A1:H9", scale: 1 });
await workbook.render({ sheetName: "Zaman Çizelgesi", range: "A1:E20", scale: 1 });
await workbook.render({ sheetName: "Mail Kayıtları", range: "A1:H17", scale: 1 });
await workbook.render({ sheetName: "Bilgisayar Dosyaları", range: "A1:E19", scale: 1 });
await workbook.render({ sheetName: "Kaynak Notları", range: "A1:B5", scale: 1 });

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

console.log(`Saved ${outputPath}`);
console.log(`Timeline rows: ${timelineRows.length}`);
console.log(`Mail rows: ${mailRows.length}`);
console.log(`File rows: ${fileRows.length}`);
