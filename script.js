(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  var translations = {
    ar: {
      "skip": "انتقل إلى المحتوى",
      "nav.about": "من نحن",
      "nav.services": "خدماتنا",
      "nav.team": "فريقنا",
      "nav.contact": "تواصل معنا",
      "cta.book": "احجز موعدك",
      "cta.services": "اكتشف خدماتنا",
      "hero.eyebrow": "طب الأسنان · العناية بالبشرة · الأمراض الجلدية · تجميل الوجه",
      "hero.lead": "عناية بابتسامتك وبشرتك تحت سقف واحد، في عيادة هادئة ومشرقة في عين المريسة، بيروت.",
      "hero.photoAlt": "غرفة علاج في ميزون دو فيساج مطلّة على البحر",
      "about.eyebrow": "بيتنا",
      "about.title": "بيت واحد لابتسامتك وبشرتك",
      "about.p1": "يجمع ميزون دو فيساج طب الأسنان وتقويمها والأمراض الجلدية والعناية بالبشرة وتجميل الوجه في مكان واحد. يعمل اختصاصيونا جنباً إلى جنب للعناية بوجهك كاملاً.",
      "about.p2": "تبدأ كل زيارة باستشارة: نستمع إليك ونفحصك ونشرح لك الخيارات بوضوح قبل أي علاج.",
      "about.pill1": "طب الأسنان",
      "about.pill2": "تقويم الأسنان",
      "about.pill3": "الأمراض الجلدية",
      "about.pill4": "العناية بالبشرة",
      "about.pill5": "تجميل الوجه",
      "services.eyebrow": "ما نقدّمه",
      "services.title": "خدماتنا",
      "services.lead": "لست متأكداً مما تحتاجه؟ احجز استشارة وسنرشدك.",
      "s1.title": "طب الأسنان الترميمي",
      "s1.text": "حشوات وتيجان وجسور تعيد لأسنانك الراحة والقوة والوظيفة.",
      "s2.title": "طب الأسنان التجميلي",
      "s2.text": "تبييض وقشور خزفية وتصميم ابتسامة لابتسامة طبيعية واثقة.",
      "s3.title": "تقويم الأسنان",
      "s3.text": "تقويم ثابت وشفاف للأطفال والبالغين، مع تقويم الوجه والفكين لإطباق متوازن.",
      "s4.title": "الأمراض الجلدية",
      "s4.text": "تشخيص وعلاج مشاكل البشرة مثل حب الشباب والتصبّغات والحساسية.",
      "s5.title": "العناية بالبشرة والفيشل",
      "s5.text": "جلسات فيشل وعلاجات للبشرة بأجهزة متطوّرة ومنتجات طبية.",
      "s6.title": "تجميل الوجه",
      "s6.text": "علاجات غير جراحية تنعش ملامحك وتنسّقها مع الحفاظ على مظهر طبيعي.",
      "team.eyebrow": "اختصاصيونا",
      "team.title": "تعرّف إلى فريقنا",
      "team.1.name": "د. هادي وجيه",
      "team.1.role": "طب الأسنان الترميمي والتجميلي",
      "team.2.name": "د. تاتيانا صليبا",
      "team.2.role": "اختصاصية تقويم الأسنان وتقويم الوجه والفكين",
      "team.2.note": "خرّيجة جامعة القديس يوسف، بيروت",
      "exp.eyebrow": "زيارتك",
      "exp.title": "كيف نعمل",
      "exp.1.title": "الاستشارة",
      "exp.1.text": "نفحصك ونستمع إلى أهدافك ونجيب عن أسئلتك.",
      "exp.2.title": "الخطة",
      "exp.2.text": "تحصل على خطة علاج واضحة وخاصة بك.",
      "exp.3.title": "العناية",
      "exp.3.text": "علاج في أجواء هادئة، مع متابعة ونصائح للعناية في المنزل.",
      "contact.eyebrow": "زورونا",
      "contact.title": "احجز موعدك",
      "contact.lead": "أرسل لنا طلبك وسنتواصل معك لتأكيد الموعد.",
      "contact.address": "العنوان",
      "contact.phone": "الهاتف",
      "contact.email": "البريد الإلكتروني",
      "contact.hours": "ساعات العمل",
      "contact.follow": "تابعونا",
      "form.name": "الاسم",
      "form.phone": "رقم الهاتف",
      "form.service": "الخدمة",
      "form.opt.consult": "استشارة (لست متأكداً بعد)",
      "form.opt.dental": "طب الأسنان",
      "form.date": "التاريخ المفضّل",
      "form.message": "رسالة (اختياري)",
      "form.submit": "أرسل الطلب",
      "form.error": "يرجى إدخال الاسم ورقم الهاتف.",
      "form.sentWhatsapp": "جارٍ فتح واتساب لإرسال طلبك…",
      "form.sentEmail": "جارٍ فتح البريد الإلكتروني لإرسال طلبك…",
      "form.sentSocial": "تم نسخ طلبك. الصقه في رسالة لنا على إنستغرام أو فيسبوك.",
      "msg.intro": "مرحباً ميزون دو فيساج، أودّ حجز موعد.",
      "msg.name": "الاسم",
      "msg.phone": "الهاتف",
      "msg.service": "الخدمة",
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
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    english[el.getAttribute("data-i18n-alt")] = el.alt;
  });
  translations.en = Object.assign({
    "form.error": "Please enter your name and phone number.",
    "form.sentWhatsapp": "Opening WhatsApp to send your request…",
    "form.sentEmail": "Opening your email app to send your request…",
    "form.sentSocial": "Your request was copied. Paste it in a message to us on Instagram or Facebook.",
    "msg.intro": "Hello Maison De Visage, I'd like to book an appointment.",
    "msg.name": "Name",
    "msg.phone": "Phone",
    "msg.service": "Service",
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
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.alt = t(el.getAttribute("data-i18n-alt"));
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
