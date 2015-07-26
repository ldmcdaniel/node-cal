var zeller = require('./zeller');

var y;
var days = 'Su Mo Tu We Th Fr Sa  ';
var logDays = days + days + days;
var monthNames = ['      January' ,'               February', '               March',
                  '       April', '                  May', '                   June',
                  '        July', '                 August', '              September',
                  '      October', '               November', '              December']
//Getting user input from the console
process.argv.forEach(function(val, index) {
  if(index === 2 ) {
    y = Number(val);
  }
});
var result = zeller(1, 1, y);
// console.log(result);

var month31 = [ '                   1  2  3  4  5  6  7',
                ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
                ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
                '16 17 18 19 20 21 22 23 24 25 26 27 28',
                '23 24 25 26 27 28 29 30 31            ',
                '30 31                                 '],
    month30 = [ '                   1  2  3  4  5  6  7',
                ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
                ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
                '16 17 18 19 20 21 22 23 24 25 26 27 28',
                '23 24 25 26 27 28 29 30               ',
                '30                                    '],
    month29 = [ '                   1  2  3  4  5  6  7',
                ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
                ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
                '16 17 18 19 20 21 22 23 24 25 26 27 28',
                '23 24 25 26 27 28 29                  ',
                '                                      '],
    month28 = [ '                   1  2  3  4  5  6  7',
                ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
                ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
                '16 17 18 19 20 21 22 23 24 25 26 27 28',
                '23 24 25 26 27 28                     ',
                '                                      '],
    ind = [0, 3, 6, 9, 12, 15, 18, 0, 3, 6, 9, 12, 15, 18];

var printYear = function () {
  console.log('                             ' + y + '\n');
  months(0, 1, 2);
  if (result === 1) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(13);
    } else {
      printNonLeapYear(13);
    }
  } else if (result === 2) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(12);
    } else {
      printNonLeapYear(12);
    }
  } else if (result === 3) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(11);
    } else {
      printNonLeapYear(11);
    }
  } else if (result === 4) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(10);
    } else {
      printNonLeapYear(10);
    }
  } else if (result === 5) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(9);
    } else {
      printNonLeapYear(9);
    }
  } else if (result === 6) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(8);
    } else {
      printNonLeapYear(8);
    }
  } else if (result === 0) {
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
      printLeapYear(7);
    } else {
      printNonLeapYear(7);
    }
  }
}

module.exports = printYear();

function months (first, second, third) {
  console.log(monthNames[first] + monthNames[second] + monthNames[third]);
  console.log(logDays);
}

function printLeapYear(x) {
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x], ind[x] + 20) + '  ' + month29[i].slice(ind[x-3], ind[x-3] + 20) + '  ' + month31[i].slice(ind[x-4], ind[x-4] + 20));
  };
  months(3, 4, 5);
  for (var i = 0; i < 6; i++) {
    console.log(month30[i].slice(ind[x], ind[x] + 20) + '  ' + month31[i].slice(ind[x-2], ind[x-2] + 20) + '  ' + month30[i].slice(ind[x-5], ind[x-5] + 20));
  };
  months(6, 7, 8);
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x], ind[x] + 20) + '  ' + month31[i].slice(ind[x-3], ind[x-3] + 20) + '  ' + month30[i].slice(ind[x-6], ind[x-6] + 20));
  };
  months(9, 10, 11);
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x-1], ind[x-1] + 20) + '  ' + month30[i].slice(ind[x-4], ind[x-4] + 20) + '  ' + month31[i].slice(ind[x-6], ind[x-6] + 20));
  };
}

function printNonLeapYear (x) {
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x], ind[x] + 20) + '  ' + month28[i].slice(ind[x-3], ind[x-3] + 20) + '  ' + month31[i].slice(ind[x-3], ind[x-3] + 20));
  };
  months(3, 4, 5);
  for (var i = 0; i < 6; i++) {
    console.log(month30[i].slice(ind[x-6], ind[x-6] + 20) + '  ' + month31[i].slice(ind[x-1], ind[x-1] + 20) + '  ' + month30[i].slice(ind[x-4], ind[x-4] + 20));
  };
  months(6, 7, 8);
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x-6], ind[x-6] + 20) + '  ' + month31[i].slice(ind[x-2], ind[x-2] + 20) + '  ' + month30[i].slice(ind[x-5], ind[x-5] + 20));
  };
  months(9, 10, 11);
  for (var i = 0; i < 6; i++) {
    console.log(month31[i].slice(ind[x], ind[x] + 20) + '  ' + month30[i].slice(ind[x-3], ind[x-3] + 20) + '  ' + month31[i].slice(ind[x-5], ind[x-5] + 20));
  };
}
