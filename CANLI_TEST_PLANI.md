# Artı Destek Portal - Canlı Test Planı

Bu planın amacı portalı gerçek kullanıma almadan önce küçük bir pilot veri setiyle tüm kritik akışları kontrol etmektir.

## 1. Test Süresi ve Kapsam

Önerilen pilot süre: 5 iş günü.

Test edilecek modüller:
- Giriş ve kullanıcı yetkileri
- Bordro Merkezi
- Personel ve özlük belgeleri
- Puantaj ve takvim
- Bordro hesaplama
- Avans, kesinti ve fatura takibi
- Mesajlaşma
- Kişiye özel raporlar
- PDF / Excel çıktıları
- Akıllı Risk Radarı ve Sabah Yönetici Özeti

## 2. Test İçin Örnek Veri

Canlı testte en az şu kayıtlar girilmeli:

| Veri | Minimum Adet | Açıklama |
|---|---:|---|
| Firma | 2 | Bir aktif, bir takipte firma |
| Personel | 5 | Farklı departman ve şehirlerden |
| Kullanıcı | 3 | Admin, kullanıcı, müşteri |
| Bordro | 3 | Net/brüt, avans, kesinti içeren kayıtlar |
| Puantaj | 3 | 7,5 saat, 9 saat ve manuel saat örnekleri |
| Özlük Belgesi | 3 | En az bir personelde dosya yüklenmeli |
| Fatura | 3 | Kesildi, beklemede, onay verilmedi |
| Takvim Notu | 3 | Maaş ödeme, puantaj teslim, özel not |
| Mesaj | 3 | Duyuru, personel mesajı, müşteri mesajı |

## 3. Rol Bazlı Testler

### Admin

Admin kullanıcısı şunları yapabilmeli:
- Kayıt ekleme
- Kayıt düzenleme
- Kayıt silme
- Bordro yayınlama
- Dosya yükleme
- PDF / Excel indirme
- Mesaj gönderme
- Kullanıcı ve rol yönetimi

Başarılı kabul kriteri:
Admin tüm yönetim işlemlerini hata almadan tamamlar.

### Kullanıcı

Kullanıcı rolü şunları yapabilmeli:
- Kayıtları görüntüleme
- Kendi ilgili bordro, mesaj ve raporlarını izleme

Kullanıcı rolü şunları yapamamalı:
- Silme
- Düzenleme
- Yönetici işlemleri

Başarılı kabul kriteri:
Kullanıcı izleme modunda kalır, kritik yönetim butonları çalışmaz.

### Müşteri

Müşteri rolü şunları yapabilmeli:
- Kendi firmasına ait kayıtları görüntüleme
- Kendi faturalarını ve raporlarını izleme
- Mesaj alanını kullanma

Başarılı kabul kriteri:
Müşteri başka firmaların kayıtlarını görmez.

## 4. Kritik Test Senaryoları

### Senaryo 1 - Personel Ekleme

1. Admin olarak giriş yap.
2. İK & Bordro İşlemleri bölümüne gir.
3. Yeni personel ekle.
4. Durumu AKTİF seç.
5. Kaydı düzenleyip tekrar kaydet.

Beklenen sonuç:
Personel listede görünür, aktif durum korunur.

### Senaryo 2 - Özlük Belgesi Yükleme

1. Özlük belgesi ekranına gir.
2. Personel seç.
3. En az bir dosya yükle.
4. Kaydı tamamla.

Beklenen sonuç:
Personel özlük kontrolünde eksik sayılmamalı, risk skoru düşmeli.

### Senaryo 3 - Puantaj Girişi

1. Takvim Yönetimi > Aylık Puantaj Girişi ekranına gir.
2. Bir personel için 7,5 saatlik günler gir.
3. Bir güne manuel 5 saat gir.
4. Bir güne mesai saati gir.

Beklenen sonuç:
Toplam saat ve mesai toplamı otomatik hesaplanır.

### Senaryo 4 - Bordro Hesaplama

1. Bordro Tanımları ekranına gir.
2. Brüt ücret yaz.
3. Net ücretin otomatik hesaplandığını kontrol et.
4. Net ücret yaz.
5. Brüt ücretin otomatik hesaplandığını kontrol et.

Beklenen sonuç:
Brüt/net hesaplama çift yönlü çalışır.

### Senaryo 5 - Fatura Durumu

1. Fatura kaydı aç.
2. Durumu sırasıyla şu seçeneklerle test et:
   - Fatura Kesildi
   - Fatura Beklemede
   - Onay Verilmedi
3. Tevkifat alanını doldur.

Beklenen sonuç:
Fatura listesi ve raporlar doğru durumu gösterir.

### Senaryo 6 - Mesajlaşma

1. Mesajlar ekranına gir.
2. Sağdaki kişi listesinden bir kullanıcı seç.
3. Konu ve mesaj yaz.
4. Mesaj gönder.

Beklenen sonuç:
Mesaj konuşma listesine düşer, kişi bazlı başlatma çalışır.

### Senaryo 7 - Yönetici Kokpiti

1. Ana sayfaya gir.
2. Sabah Yönetici Özeti kartını kontrol et.
3. Akıllı Risk Radarı kartını kontrol et.
4. Kırmızı riskli kayıt varsa ilgili sekmeye geç.

Beklenen sonuç:
Panel kritik işleri önceliklendirir ve ilgili ekrana yönlendirir.

### Senaryo 8 - PDF / Excel Çıktısı

1. Raporlar ekranına gir.
2. Bir personel seç.
3. Aylık ve yıllık dönemleri test et.
4. PDF indir.
5. Excel indirilebilen listeleri kontrol et.

Beklenen sonuç:
PDF açılır, Excel/CSV dosyası indirilir.

## 5. Mobil Test

Telefon üzerinden şu kontroller yapılmalı:
- Giriş ekranı düzgün açılıyor mu?
- Menü taşmadan çalışıyor mu?
- Bordro Merkezi okunabilir mi?
- Mesaj gönderilebiliyor mu?
- Rapor/PDF butonları görünüyor mu?
- Takvim günlerine tıklanabiliyor mu?

Başarılı kabul kriteri:
Telefon üzerinden temel izleme ve mesaj işlemleri yapılabilir.

## 6. Hata Kayıt Formatı

Test sırasında her hata şu formatla not alınmalı:

| Tarih | Kullanıcı | Ekran | Hata | Beklenen | Öncelik |
|---|---|---|---|---|---|
| 20.05.2026 | Admin | Bordro | PDF açılmadı | PDF açılmalı | Yüksek |

Öncelik seçenekleri:
- Kritik: Canlı kullanımı engeller
- Yüksek: Ana işlem bozulur
- Orta: Kullanımı zorlaştırır
- Düşük: Görsel veya küçük düzenleme

## 7. Canlıya Geçiş Kabul Kriteri

Portal canlı kullanıma geçebilir demek için:
- Admin işlemleri sorunsuz çalışmalı
- Kullanıcı ve müşteri yetkileri doğru olmalı
- En az 5 personel ile test tamamlanmalı
- PDF / Excel çıktıları çalışmalı
- Mesajlaşma temel akışı çalışmalı
- Mobil görünüm temel işlemleri karşılamalı
- Kritik hata kalmamalı

## 8. İlk Canlı Gün Kontrol Listesi

- Admin giriş yaptı
- Kullanıcılar giriş yaptı
- En az bir bordro kaydı açıldı
- En az bir puantaj girildi
- En az bir mesaj gönderildi
- En az bir rapor indirildi
- Yedek alındı
- Hata listesi oluşturuldu

