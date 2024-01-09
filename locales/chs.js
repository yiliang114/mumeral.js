// numeral.js locale configuration
// locale : simplified chinese (chs)
// author : badplum : https://github.com/badplum

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'chs', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
          tenThousand: '万',
          million: '百万',
          tenMillion: '千万',
          aHundredMillion: "亿",
          billion: '十亿',
          tenBillion: '百亿',
          trillion: '兆',
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '¥'
        }
    });
}));
