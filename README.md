# BKT-Events — Bilgisayar Kavramları Topluluğu Etkinlik Sayfaları

Bilgisayar Kavramları Topluluğu'nun etkinlik duyuru sayfalarını barındıran statik site. GitHub Pages üzerinden yayımlanır; ana sayfa ziyaretçiyi otomatik olarak **aktif etkinliğin** sayfasına yönlendirir.

🔗 **Canlı site:** https://bilgisayar-kavramlari-toplulugu.github.io/BKT-Events/

## Dosya Yapısı

```
/
├── index.html          # Aktif etkinliğe yönlendirir
├── events/
│   ├── event-1.html    # 27 Eylül 2026 — 2. Dönem Başlangıç Toplantısı
│   ├── event-2.html    # Yer tutucu (yakında)
│   ├── event-3.html    # Yer tutucu (yakında)
│   ├── event-4.html    # Yer tutucu (yakında)
│   └── event-5.html    # Yer tutucu (yakında)
├── css/
│   └── style.css       # Ortak stiller (glass panel, glow, animasyonlar)
├── js/
│   └── main.js         # Yönlendirme + geri sayım + konfeti
└── images/             # Etkinlik görselleri
```

## Yeni Etkinlik Yayımlama

1. **Etkinlik sayfasını hazırla:** `events/event-1.html` dosyasını şablon olarak kopyala ve içeriğini (başlık, tarih, ajanda, Meet/Takvim bağlantıları) güncelle.
2. **Geri sayım tarihini ayarla:** Sayfanın `<body>` etiketindeki özniteliği düzenle:

   ```html
   <body data-event-date="2026-09-27T20:00:00+03:00">
   ```

3. **Aktif etkinliği değiştir:** `js/main.js` dosyasının en üstündeki tek satırı güncelle:

   ```js
   const ACTIVE_EVENT = "event-2.html";
   ```

4. **Yayımla:** Değişiklikleri `main` dalına push'la. GitHub Pages birkaç dakika içinde siteyi günceller.

## Nasıl Çalışır?

- `index.html`, `js/main.js` içindeki `ACTIVE_EVENT` değerini okuyarak ziyaretçiyi `events/` altındaki ilgili sayfaya yönlendirir. JavaScript kapalıysa elle tıklanabilir yedek bağlantı gösterilir.
- Geri sayım sayacı, her etkinlik sayfasının `data-event-date` özniteliğinden hedef tarihi okur; etkinlik başladığında "Etkinlik Başlamıştır" mesajı görünür.
- Stil için [Tailwind CSS](https://tailwindcss.com) (CDN), ikonlar için [Font Awesome](https://fontawesome.com), kutlama efekti için [canvas-confetti](https://github.com/catdad/canvas-confetti) kullanılır. Derleme adımı yoktur; site tamamen statiktir.

---

© 2026 Bilgisayar Kavramları Topluluğu
