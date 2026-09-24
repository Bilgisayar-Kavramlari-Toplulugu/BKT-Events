/* ============================================================
   AKTİF ETKİNLİK AYARI
   Yeni bir etkinlik yayınladığında SADECE bu satırı güncelle.
   index.html otomatik olarak bu sayfaya yönlendirir.
   ============================================================ */
const ACTIVE_EVENT = "event-1.html";

/* ------------------------------------------------------------
   index.html -> aktif etkinliğe yönlendirme
   (body etiketinde data-redirect="active-event" varsa çalışır)
   ------------------------------------------------------------ */
if (document.body.dataset.redirect === "active-event") {
    window.location.replace("events/" + ACTIVE_EVENT);
}

/* ------------------------------------------------------------
   Geri sayım
   Etkinlik sayfasının body etiketine tarih ekle:
   <body data-event-date="2026-09-27T20:00:00+03:00">
   ------------------------------------------------------------ */
const eventDateAttr = document.body.dataset.eventDate;

if (eventDateAttr && document.getElementById("countdown")) {
    const targetDate = new Date(eventDateAttr).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            const msg = document.getElementById("countdown-message");
            if (msg) msg.classList.remove("hidden");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

/* ------------------------------------------------------------
   Havai fişek / konfeti (canvas-confetti yüklüyse çalışır)
   ------------------------------------------------------------ */
function triggerFireworks() {
    if (typeof confetti === "undefined") return;

    var duration = 3.5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

if (document.getElementById("fireworks-canvas")) {
    window.addEventListener('load', () => {
        setTimeout(triggerFireworks, 400);
    });
}
