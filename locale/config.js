// https://github.com/iamkun/dayjs/blob/v1.9.7/src/locale/zh-cn.js
var months = [
        'يانۋار',
        'فېۋرال',
        'مارت',
        'ئاپرېل',
        'ماي',
        'ئىيۇن',
        'ئىيۇل',
        'ئاۋغۇست',
        'سېنتەبىر',
        'ئۆكتەبىر',
        'نويابىر',
        'دېكابىر'
    ];

dayjs.locale(
  {
    name: "ug-cn",
    weekdays: 'يەكشەنبە_ دۈشەنبە_ سەيشەنبە_ چارشەنبە_ پەيشەنبە_ جۈمە_ شەنبە'.split('_'),
    weekdaysShort : 'يەكشەنبە_ دۈشەنبە_ سەيشەنبە_ چارشەنبە_ پەيشەنبە_ جۈمە_ شەنبە'.split('_'),
    weekdaysMin : 'ي_د_س_چ_پ_ج_ش'.split('_'),
    months: months,
    monthsShort: months,
    ordinal: (number, period) => {
      switch (period) {
        case 'W':
          return `${number} ھەپتە`
        default:
          return `${number}كۈن`
      }
    },
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY - يىلى M - ئاينىڭ D - كۈنى ",
      LLL: "YYYY - يىلى M - ئاينىڭ D - كۈنى سائەت HH دىن mm مىنۇت",
      LLLL: "YYYY - يىلى M - ئاينىڭ D - كۈنىdddd سائەت HH دىن mm مىنۇت",
      l: "YYYY/M/D",
      ll: "YYYY - يىلى M - ئاينىڭ D - كۈنى ",
      lll: "YYYY - يىلى M - ئاينىڭ D - كۈنى HH:mm",
      llll: "YYYY - يىلى M - ئاينىڭ D - كۈنىdddd HH:mm",
    },
    relativeTime: {
        future: '%s ئىچىدە',
        past: '%s بۇرۇن',
        s: 'سېكۇنىت',
        m: 'بىر مىنۇت',
        mm: '%d مىنۇت',
        h: 'بىر سائەت',
        hh: '%d سائەت',
        d: 'بىر كۈن',
        dd: '%d كۈن',
        M: 'بىر ئاي',
        MM: '%d ئاي',
        y: 'بىر يىل',
        yy: '%d يىل'
    },
    meridiem: function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
          return 'سەھەر';
        } else if (hm < 900) {
          return 'ئەتىگەن';
        } else if (hm < 1130) {
          return 'چۈشتىن بۇرۇن';
        } else if (hm < 1230) {
          return 'چۈش';
        } else if (hm < 1800) {
          return 'چۈشتىن كىيىن';
        } else {
          return 'كەچ';
        }
    },
  }, null, false);

