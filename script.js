(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  var translations = {
    ar: {
      "skip": "انتقل إلى المحتوى",
      "nav.about": "من نحن",
      "nav.services": "خدماتنا",
      "nav.experience": "التجربة",
      "nav.gallery": "المعرض",
      "nav.contact": "تواصل معنا",
      "cta.book": "احجزي الآن",
      "cta.services": "اكتشفي خدماتنا",
      "hero.eyebrow": "استوديو العناية بالوجه والبشرة",
      "hero.lead": "بيتٌ هادئ لبشرتك. جلسات وعلاجات مخصّصة تُبرز إشراقتك الطبيعية.",
      "about.eyebrow": "بيتنا",
      "about.title": "حيث تصبح العناية بالبشرة طقساً",
      "about.p1": "في ميزون دو فيساج تبدأ كل زيارة بالإصغاء. نفحص بشرتك عن قرب، ونتحدث عن روتينك وأهدافك، ثم نصمّم جلسة خاصة بك — لا حلول جاهزة للجميع.",
      "about.p2": "الاستوديو ملاذ هادئ من صخب اليوم: إضاءة ناعمة، ولمسات لطيفة، ومنتجات مختارة بعناية، لتخرجي وأنتِ تشعرين بالراحة كما تبدو بشرتك.",
      "services.eyebrow": "العلاجات",
      "services.title": "خدماتنا",
      "services.lead": "اسألينا عن العلاج الأنسب لبشرتك — يسعدنا تقديم النصيحة.",
      "s1.title": "الفيشل المميّز",
      "s1.text": "تنظيف عميق وتقشير لطيف وإزالة الشوائب وقناع مخصّص لبشرة منتعشة وصافية ومشرقة.",
      "s2.title": "جلسة الترطيب",
      "s2.text": "ترطيب مكثّف للبشرة الباهتة أو الجافة يعيد إليها النعومة والحيوية.",
      "s3.title": "التنظيف العميق",
      "s3.text": "يستهدف المسام المسدودة والشوائب لتنقية البشرة وتحسين ملمسها.",
      "s4.title": "النضارة والتفتيح",
      "s4.text": "يوحّد لون البشرة ويعيد إشراقتها — مثالي قبل المناسبات أو كدلال لنفسك.",
      "s5.title": "العناية ضد الشيخوخة",
      "s5.text": "عناية لشدّ البشرة ورفعها تدعم مرونتها وتخفّف مظهر الخطوط الدقيقة.",
      "s6.title": "استشارة البشرة",
      "s6.text": "تحليل فردي للبشرة مع روتين عناية منزلي خاص بك تتّبعينه يومياً.",
      "exp.eyebrow": "زيارتك",
      "exp.title": "تجربة ميزون",
      "exp.1.title": "الاستشارة",
      "exp.1.text": "نحلّل بشرتك ونستمع إلى ما تودّين تحقيقه.",
      "exp.2.title": "العلاج",
      "exp.2.text": "جلسة مخصّصة بمنتجات احترافية لطيفة على البشرة.",
      "exp.3.title": "الإشراقة",
      "exp.3.text": "تغادرين ببشرة مشرقة ونصائح بسيطة للحفاظ عليها.",
      "gallery.eyebrow": "لحظات",
      "gallery.title": "من الاستوديو",
      "gallery.lead": "شاهدي أحدث أعمالنا ونتائجنا على إنستغرام وفيسبوك.",
      "contact.eyebrow": "زورينا",
      "contact.title": "احجزي موعدك",
      "contact.lead": "أرسلي لنا رسالة وسنتواصل معك لتأكيد الموعد.",
      "contact.address": "العنوان",
      "contact.phone": "الهاتف",
      "contact.email": "البريد الإلكتروني",
      "contact.hours": "ساعات العمل",
      "contact.follow": "تابعينا",
      "form.name": "الاسم",
      "form.phone": "رقم الهاتف",
      "form.service": "العلاج",
      "form.date": "التاريخ المفضّل",
      "form.message": "رسالة (اختياري)",
      "form.submit": "أرسلي الطلب",
      "form.error": "يرجى إدخال الاسم ورقم الهاتف.",
      "form.sentWhatsapp": "جارٍ فتح واتساب لإرسال طلبك…",
      "form.sentEmail": "جارٍ فتح البريد الإلكتروني لإرسال طلبك…",
      "form.sentSocial": "تم نسخ طلبك. الصقيه في رسالة لنا على إنستغرام أو فيسبوك.",
      "msg.intro": "مرحباً ميزون دو فيساج، أودّ حجز موعد.",
      "msg.name": "الاسم",
      "msg.phone": "الهاتف",
      "msg.service": "العلاج",
      "msg.date": "التاريخ",
      "msg.note": "ملاحظة",
      "footer.rights": "جميع الحقوق محفوظة."
    }
  };

  // English strings are read from the HTML itself, so it stays the single source.
  var english = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!(key in english)) english[key] = el.textContent;
  });
  translations.en = Object.assign({
    "form.error": "Please enter your name and phone number.",
    "form.sentWhatsapp": "Opening WhatsApp to send your request…",
    "form.sentEmail": "Opening your email app to send your request…",
    "form.sentSocial": "Your request was copied. Paste it in a message to us on Instagram or Facebook.",
    "msg.intro": "Hello Maison De Visage, I'd like to book an appointment.",
    "msg.name": "Name",
    "msg.phone": "Phone",
    "msg.service": "Treatment",
    "msg.date": "Date",
    "msg.note": "Note"
  }, english);

  var lang = "en";
  function t(key) { return (translations[lang] && translations[lang][key]) || translations.en[key] || key; }

  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function setLanguage(next) {
    lang = next === "ar" ? "ar" : "en";
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    var toggle = document.getElementById("langToggle");
    toggle.textContent = lang === "ar" ? "English" : "العربية";
    toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    renderContactInfo();
    storageSet("mdv-lang", lang);
  }

  function localized(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || value.ar || "";
  }

  function renderContactInfo() {
    var fields = {
      address: localized(config.address),
      hours: localized(config.hours),
      phone: config.phone || "",
      email: config.email || ""
    };
    Object.keys(fields).forEach(function (name) {
      var li = document.querySelector('[data-field="' + name + '"]');
      if (!li) return;
      var value = fields[name];
      li.hidden = !value;
      var out = li.querySelector(".info-value");
      out.textContent = value;
      if (name === "phone" && value) out.href = "tel:" + value.replace(/[^\d+]/g, "");
      if (name === "email" && value) out.href = "mailto:" + value;
    });
  }

  function setupLinks() {
    document.querySelectorAll("[data-link]").forEach(function (a) {
      var url = config[a.getAttribute("data-link")];
      if (url) a.href = url; else a.remove();
    });
    var fab = document.getElementById("whatsappFab");
    if (config.whatsapp) {
      fab.href = "https://wa.me/" + String(config.whatsapp).replace(/\D/g, "");
      fab.hidden = false;
    }
  }

  function setupMenu() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("nav");
    function close() { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function setupHeader() {
    var header = document.querySelector(".site-header");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  function setupForm() {
    var form = document.getElementById("bookingForm");
    var note = document.getElementById("formNote");
    var dateInput = document.getElementById("date");
    dateInput.min = new Date().toISOString().slice(0, 10);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      form.name.classList.toggle("invalid", !name);
      form.phone.classList.toggle("invalid", !phone);
      if (!name || !phone) {
        note.textContent = t("form.error");
        (name ? form.phone : form.name).focus();
        return;
      }

      var lines = [
        t("msg.intro"),
        t("msg.name") + ": " + name,
        t("msg.phone") + ": " + phone,
        t("msg.service") + ": " + t(form.service.value)
      ];
      if (form.date.value) lines.push(t("msg.date") + ": " + form.date.value);
      if (form.message.value.trim()) lines.push(t("msg.note") + ": " + form.message.value.trim());
      var text = lines.join("\n");

      if (config.whatsapp) {
        note.textContent = t("form.sentWhatsapp");
        window.open("https://wa.me/" + String(config.whatsapp).replace(/\D/g, "") + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      } else if (config.email) {
        note.textContent = t("form.sentEmail");
        window.location.href = "mailto:" + config.email +
          "?subject=" + encodeURIComponent("Booking request — " + name) +
          "&body=" + encodeURIComponent(text);
      } else {
        if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
        note.textContent = t("form.sentSocial");
        var social = config.instagram || config.facebook;
        if (social) window.open(social, "_blank", "noopener");
      }
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  setupLinks();
  setupMenu();
  setupHeader();
  setupReveal();
  setupForm();
  document.getElementById("langToggle").addEventListener("click", function () {
    setLanguage(lang === "ar" ? "en" : "ar");
  });

  var params = new URLSearchParams(window.location.search);
  setLanguage(params.get("lang") || storageGet("mdv-lang") || config.defaultLanguage || "en");
})();
