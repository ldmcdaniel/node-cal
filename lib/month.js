var zeller = require('./zeller');
var monthName = ['    January ', '   February ', '     March ', '     April ', '      May ', '     June ', '     July ', '    August ', '   September ', '    October ', '   November ', '   December '];
var d, m, y;
//Getting user input from the console
process.argv.forEach(function(val, index) {
  if(index === 2 ) {
    m = Number(val);
  } else if (index === 3) {
    y = Number(val);
  }
});

var result = zeller(1, m, y);//1 gives a default value to start a month
var l1 =   '                   1  2  3  4  5  6  7',
    l2 =   ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
    l3 =   ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
    l4 =   '16 17 18 19 20 21 22 23 24 25 26 27 28',
    l5 =   '23 24 25 26 27 28 29 30 31            ',
    l6 =   '30 31                                 ',
    l530 = '23 24 25 26 27 28 29 30               ',
    l630 = '30                                    ',
    l529 = '23 24 25 26 27 28 29                  ',
    l629 = '                                      ',
    l528 = '23 24 25 26 27 28                     ',
    l628 = '                                      ';

var printMonth = function () {
  console.log(monthName[m-1] + y);//I use m-1 is to match the array value in monthName

  console.log('Su Mo Tu We Th Fr Sa');
  if (result === 1) {
    calMaker(18);
  } else if (result === 2) {
    calMaker(15)
  } else if (result === 3) {
    calMaker(12);
  } else if (result === 4) {
    calMaker(9);
  } else if (result === 5) {
    calMaker(6);
  } else if (result === 6) {
    calMaker(3);
  } else if (result === 0) {
    calMaker(0)
  };
}

function calMaker(begS) {
  console.log(l1.slice(begS, begS + 20) + '\n' + l2.slice(begS, begS + 20) + '\n' + l3.slice(begS, begS + 20) + '\n' + l4.slice(begS, begS + 20));
  if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
    console.log(l5.slice(begS, begS + 20) + '\n' + l6.slice(begS, begS + 20));
  } else if (m === 4 || m === 6 || m === 9 || m === 11) {
    console.log(l530.slice(begS, begS + 20) + '\n' + l630.slice(begS, begS + 20));
  } else if (m === 2 && ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0))) {
    console.log(l529.slice(begS, begS + 20) + '\n' + l629.slice(begS, begS + 20));
  } else if (m === 2 && ((y % 4 !== 0) || (y % 4 === 0 && y % 100 === 0 && y % 400 !== 0))) {
    console.log(l528.slice(begS, begS + 20) + '\n' + l628.slice(begS, begS + 20));
  };
}

module.exports = printMonth();
