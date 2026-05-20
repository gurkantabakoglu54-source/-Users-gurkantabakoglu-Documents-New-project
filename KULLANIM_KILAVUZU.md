# Artı Destek Portal - Kullanım Kılavuzu

Bu kılavuz portalı günlük kullanımda hızlı ve doğru yönetmek için hazırlanmıştır.

## 1. Giriş

1. Portal linkini aç.
2. E-posta ve şifreni yaz.
3. Giriş Yap düğmesine bas.

Rol yapısı:
- Admin: tüm ekleme, düzenleme, silme ve yayınlama işlemlerini yapar.
- Kullanıcı: kendisine açılan kayıtları görüntüler.
- Müşteri: kendi firmasına ait kayıtları görüntüler.

## 2. Ana Sayfa

Ana sayfa yönetici kokpiti olarak çalışır.

Burada takip edilecek alanlar:
- Sabah Yönetici Özeti
- Akıllı Risk Radarı
- Bordro operasyon akışı
- Akıllı uyarılar
- Takvim
- Dönem özeti

Önerilen kullanım:
Her sabah önce Ana Sayfa açılmalı, kırmızı ve sarı uyarılar kontrol edilmelidir.

## 3. Kurulum & Kontrol

Bu bölüm portalın canlı kullanım hazırlığını gösterir.

Kontrol edilecek başlıklar:
- Firma bilgileri
- Personel kartları
- Kullanıcı ve yetki
- Puantaj ve takvim
- Bordro tanımları
- Rapor ve yedek

Her başlık tamamlandıkça portal canlı kullanım için daha hazır hale gelir.

## 4. İK & Bordro İşlemleri

Bu bölüm günlük operasyonun ana ekranıdır.

Buradan yönetilecek işlemler:
- Personel tanımları
- Bordro işlemleri
- Sicil yönetimi
- Özlük evrak checklist
- Performans
- İşe alım
- Borç / avans yönetimi
- Fatura ve tahsilat işlemleri

Yeni kayıt eklemek için:
1. İlgili panelde Ekle düğmesine bas.
2. Formu doldur.
3. Kaydet.

Kayıt düzenlemek için:
1. Satırdaki düzenle ikonuna bas.
2. Bilgiyi güncelle.
3. Kaydet.

Kayıt silmek için:
1. Satırdaki sil ikonuna bas.
2. Onay ver.

Silinen kayıtlar arşive alınır.

## 5. Bordro Tanımları

Bu bölüm maaş ve bordro hesaplama işlemleri içindir.

Yapılabilecek işlemler:
- Brüt ücretten net ücret hesaplama
- Net ücretten brüt ücret hesaplama
- Avans girme
- Kesinti girme
- Mesai girme
- Bordro durumunu takip etme
- Banka / BES bilgilerini yönetme

Brüt/net hesaplama:
1. Brüt Ücret alanına tutarı yazarsan Net Ücret otomatik hesaplanır.
2. Net Ücret alanına tutarı yazarsan Brüt Ücret otomatik hesaplanır.

## 6. Takvim Yönetimi

Takvim bölümünde puantaj, maaş günü, SGK günü, özel not ve hatırlatmalar yönetilir.

Takvime not eklemek için:
1. Ana sayfadaki takvimde ilgili güne tıkla.
2. İşlem açıklamasını yaz.
3. Hatırlatma seç.
4. Kaydet.

Puantaj girişi:
1. Takvim Yönetimi ekranına gir.
2. Aylık Puantaj Girişi bölümünden personeli seç.
3. Günlük çalışma saatlerini gir.
4. Gerekirse manuel saat veya mesai ekle.
5. Kaydet.

## 7. Mesajlar

Mesajlar bölümü iç iletişim için kullanılır.

Mesaj göndermek için:
1. Mesajlar ekranına gir.
2. Sağdaki kişi listesinden alıcı seç.
3. Konu yaz.
4. Mesaj yaz.
5. Mesaj Gönder düğmesine bas.

Online / offline göstergesi:
- Yeşil: aktif/online görünüyor
- Gri: offline görünüyor

## 8. Raporlar

Raporlar bölümünde kişi bazlı bordro ve İK verileri izlenir.

Kişiye özel rapor almak için:
1. Raporlar ekranına gir.
2. Personel seç.
3. Dönem seç.
4. Maaş, brüt, net, avans, kesinti ve mesai grafiğini kontrol et.
5. PDF düğmesine basarak çıktı al.

Dönem seçenekleri:
- Tek ay
- Son 3 ay
- Son 5 ay
- 1 yıl

## 9. Kırmızı Bülten

Bu bölüm önemli uyarılar ve duyurular içindir.

Takip edilen örnek konular:
- Maaş ödeme alarmı
- Geciken tahsilat
- Acil görev
- Takvim uyarısı
- Okunmamış bordro

Duyuru eklemek için:
1. Kırmızı Bülten ekranına gir.
2. Duyurular ve Kırmızı Bülten Girişi bölümünde Ekle düğmesine bas.
3. Başlığı, açıklamayı, önceliği ve durumu gir.
4. Kaydet.

## 10. Sistem Yönetimi

Bu bölüm kullanıcı ve portal ayarları içindir.

Admin burada:
- Kullanıcıları görüntüler
- Rol bilgisini kontrol eder
- Sistem ayarlarını takip eder

Yeni kullanıcı açma işlemi Supabase Authentication üzerinden yapılır. Kullanıcı oluşturulduktan sonra profil kaydı Admin, Kullanıcı veya Müşteri olarak eşleştirilir.

## 11. Müşteri Kullanımı

Müşteri kullanıcısı sadece kendi firmasına ait kayıtları görmelidir.

Müşteri için önerilen kullanım:
- Kendi projelerini izler
- Faturalarını takip eder
- Raporlarını görüntüler
- Mesaj gönderir

Müşteri silme ve düzenleme yapmamalıdır.

## 12. Haftalık Yönetici Rutini

Her hafta yapılması önerilen kontroller:

- Ana sayfadaki risk radarını kontrol et
- Kırmızı Bülten uyarılarını kapat
- Eksik özlük belgelerini tamamla
- Bordro kayıtlarını kontrol et
- Puantaj saatlerini kontrol et
- Avans ve kesinti kayıtlarını gözden geçir
- Fatura bekleyenleri takip et
- Raporları PDF olarak indir
- Yedek al

## 13. Aylık Bordro Rutini

Ay sonunda önerilen sıra:

1. Puantajları tamamla.
2. Eksik gün, rapor, izin ve mesai kayıtlarını kontrol et.
3. Avans ve kesintileri gir.
4. Brüt/net bordro hesaplamasını kontrol et.
5. Bordroyu admin olarak onayla.
6. Personele yayınla.
7. PDF / Excel raporlarını indir.
8. Maaş ödeme ve banka/BES kayıtlarını kontrol et.
9. Aylık yedeği al.

## 14. Güvenlik Notları

- Admin şifresi paylaşılmamalı.
- Müşteri kullanıcılarına sadece kendi firma kayıtları açılmalı.
- Her kullanıcıya ayrı e-posta ve şifre verilmeli.
- Ortak şifre kullanılmamalı.
- Haftalık yedek alınmalı.
- Eski kullanıcılar pasife alınmalı.

## 15. Destek ve Geliştirme Notları

Yeni ihtiyaç çıktığında şu formatla not alın:

| Tarih | İhtiyaç | Ekran | Öncelik | Açıklama |
|---|---|---|---|---|
| 20.05.2026 | E-posta bildirimi | Mesajlar | Orta | Yeni mesajda e-posta gitsin |

Önerilen öncelik:
- Kritik: Kullanımı engelliyor
- Yüksek: Günlük işi aksatıyor
- Orta: Verimlilik artırır
- Düşük: Görsel veya kolaylık sağlar

