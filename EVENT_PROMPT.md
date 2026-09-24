# Yeni Etkinlik Sayfası Üretme Promptu

Yeni bir etkinlik sayfası oluştururken aşağıdaki promptu kopyala, `[...]` içindeki değişkenleri doldur ve yapay zekâ asistanına ver.

---

## Prompt Şablonu

```
`events/event-1.html` dosyasını tasarım şablonu olarak kullanarak yeni bir etkinlik
sayfası oluştur: `events/event-[ETKİNLİK_NO].html`

Sayfanın genel tasarımını, bölüm düzenini (header, hero, geri sayım, içerik,
ajanda, çalışma grupları, footer) ve stilini aynen koru. Ortak dosyalara olan
bağlantıları değiştirme: `../css/style.css` ve `../js/main.js` kullanılmaya
devam etsin; sayfa içine CSS veya JS gömme.

Aşağıdaki bilgilerle içeriği güncelle:

## Etkinlik Bilgileri
- Etkinlik başlığı: [ETKİNLİK_BAŞLIĞI]
  (örn: "Yapay Zekâ Atölyesi: LLM'lere Giriş")
- Üst rozet metni (hero'daki küçük etiket): [ROZET_METNİ]
  (örn: "2. Dönem 1. Teknik Atölye")
- Ana başlık (hero H1, iki satırlı, ikinci satır gradyanlı): [ANA_BAŞLIK]
- Tanıtım paragrafı (hero altındaki 1-2 cümle): [TANITIM_METNİ]

## Tarih ve Katılım
- Tarih: [TARİH]  (örn: "11 Ekim 2026, Pazar")
- Saat: [SAAT]  (örn: "20.00 – 21.30 (TSİ)")
- Geri sayım için ISO tarih — body etiketine data-event-date olarak ekle:
  [ISO_TARİH]  (örn: "2026-10-11T20:00:00+03:00")
- Format: [FORMAT]  (örn: "Çevrim İçi (Online)" veya "Yüz Yüze — X Amfisi")
- Google Meet bağlantısı: [MEET_LİNKİ]
  (sayfadaki TÜM "Google Meet ile Katıl" buton ve bağlantılarında kullan)
- Google Takvim bağlantısı: [TAKVİM_LİNKİ]
  (sayfadaki TÜM "Takvime Ekle" butonlarında kullan; yoksa bu butonları kaldır)

## İçerik Bölümü (Vizyon/Tanıtım alanı)
- Bölüm başlığı: [İÇERİK_BAŞLIĞI]
- Açıklama paragrafları: [İÇERİK_METNİ]
- Sağdaki kart (hedefler/kazanımlar listesi, 3-4 madde): [KART_MADDELERİ]

## Ajanda (4-6 madde, her biri başlık + kısa açıklama)
1. [AJANDA_1]
2. [AJANDA_2]
3. [AJANDA_3]
4. [AJANDA_4]
5. [AJANDA_5 — opsiyonel]
6. [AJANDA_6 — opsiyonel]

## Diğer
- Çalışma grupları bölümünü: [aynen koru / kaldır / şu şekilde güncelle: ...]
- İstatistikler (üye sayısı vb.): [İSTATİSTİKLER]  (örn: "810+ Aktif Üye, 5 Çalışma Grubu")
- Sayfa <title> etiketi ve footer'daki etkinlik adını da yeni etkinliğe göre güncelle.

Sayfa hazır olunca:
1. `js/main.js` içindeki ACTIVE_EVENT değerini "event-[ETKİNLİK_NO].html" yap.
2. Değişiklikleri commit'leyip GitHub'a (main dalına) push'la.
```

---

## Örnek Kullanım (Event 1'in değerleriyle)

| Değişken | Değer |
|---|---|
| ETKİNLİK_NO | 1 |
| ETKİNLİK_BAŞLIĞI | 2. Dönem Başlangıç Toplantısı |
| ROZET_METNİ | 2. Dönem Başlangıç Toplantısı |
| ANA_BAŞLIK | Geleceği Birlikte / Kodluyor ve Üretiyoruz |
| TARİH | 27 Eylül 2026, Pazar |
| SAAT | 20.00 – 21.00 (TSİ) |
| ISO_TARİH | 2026-09-27T20:00:00+03:00 |
| FORMAT | Çevrim İçi (Online) |
| MEET_LİNKİ | https://meet.google.com/ytm-jtzg-vbr |
