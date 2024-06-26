$.fn.hijriDate = function (a = {}) {
  const r = {
      showWeekDay: void 0 === a.showWeekDay || a.showWeekDay,
      showGregDate: void 0 !== a.showGregDate && a.showGregDate,
      separator:
        a.separator && "string" == typeof a.separator ? a.separator : "-",
      weekDayLang:
        a.weekDayLang && "string" == typeof a.weekDayLang
          ? a.weekDayLang
          : "ar",
      hijriLang:
        a.hijriLang && "string" == typeof a.hijriLang ? a.hijriLang : "ar",
      gregLang: a.gregLang && "string" == typeof a.gregLang ? a.gregLang : "ar",
      correction:
        a.correction && "number" == typeof a.correction ? a.correction : 0,
    },
    t = new Date(),
    n = {
      ar: [
        "المحرم",
        "صفر",
        "ربيع الأول",
        "ربيع الآخر",
        "جمادى الأولى",
        "جمادى الآخرة",
        "رجب",
        "شعبان",
        "رمضان",
        "شوال",
        "ذو القعدة",
        "ذو الحجة",
      ],
      en: [
        "Muharram",
        "Safar",
        "Rabi Al-Awwal",
        "Rabi Al-Akhar",
        "Jumada Al-Awwal",
        "Jumada Al-Akhirah",
        "Rajab",
        "Shaban",
        "Ramadan",
        "Shawwal",
        "Dhu Al-Qidah",
        "Dhul Al-Hijjah",
      ],
    },
    o = "ar" === r.hijriLang ? "هـ" : "",
    i = "ar" === r.gregLang ? "م" : "";
  let h;
  function s(a, e, r) {
    (this.year = a),
      (this.month = e),
      (this.day = r),
      (this.toFixed = g),
      (this.toString = y);
  }
  function g() {
    return (
      this.day +
      Math.ceil(29.5 * (this.month - 1)) +
      354 * (this.year - 1) +
      Math.floor((3 + 11 * this.year) / 30) +
      227015 -
      1
    );
  }
  function y() {
    return `${this.day} ${n[r.hijriLang][this.month - 1]} ${this.year}`;
  }
  const c = t.getFullYear();
  let l = t.getMonth();
  const u = t.getDate(),
    d = t.getDay(),
    w = r.showGregDate
      ? `<br />${u} ${
          {
            ar: [
              "يناير",
              "فبراير",
              "مارس",
              "إبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ],
            en: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          }[r.gregLang][l]
        } ${c} ${i}`
      : "";
  h = (function (a, t, n) {
    const o = Math.floor((a - 1) / 4),
      i = Math.floor((a - 1) / 100),
      h = Math.floor((a - 1) / 400),
      s = Math.floor((367 * t - 362) / 12);
    return (
      t <= 2
        ? (e = 0)
        : t > 2 &&
          (function (a) {
            return (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;
          })(a)
        ? (e = -1)
        : (e = -2),
      0 + 365 * (a - 1) + o - i + h + s + e + (n + r.correction)
    );
  })(c, ++l, u);
  let f = new s(1421, 11, 28);
  f = (function (a) {
    const e = new s(1100, 1, 1);
    e.year = Math.floor((30 * (a - 227015) + 10646) / 10631);
    const r = new s(e.year, 1, 1),
      t = Math.ceil((a - 29 - r.toFixed()) / 29.5) + 1;
    return (
      (e.month = Math.min(t, 12)),
      (r.year = e.year),
      (r.month = e.month),
      (r.day = 1),
      (e.day = a - r.toFixed() + 1),
      e
    );
  })(h);
  const D = `<span class="week-day mx-1">${
    r.showWeekDay
      ? {
          ar: [
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت",
          ],
          en: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        }[r.weekDayLang][d]
      : ""
  }</span> ${`${f.toString()} ${o}`} ${w}`;
  this.html(D);
};
