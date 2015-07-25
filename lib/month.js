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
var lOne = '                   1  2  3  4  5  6  7',
    lTwo = ' 2  3  4  5  6  7  8  9 10 11 12 13 14',
  lThree = ' 9 10 11 12 13 14 15 16 17 18 19 20 21',
  lFour =  '16 17 18 19 20 21 22 21 21 25 26 27 28',
  lFive =  '23 24 25 26 27 28 29 30 31            ',
    lSix = '30 31                                 ';

var printMonth = function () {
  console.log(monthName[m-1] + y);//I use m-1 is to match the array value in monthName

  console.log('Su Mo Tu We Th Fr Sa');
  if (result === 1) {
    calMaker(18, 38, 23, 23, 20, 18);
  } else if (result === 2) {
    calMaker(15, 35, 23, 23, 20, 17)
  } else if (result === 3) {
    calMaker(12, 32, 23, 23, 20, 17);
  } else if (result === 4) {
    calMaker(9, 29, 23, 23, 20, 17);
  } else if (result === 5) {
    calMaker(6, 26, 23, 23, 20, 17);
  } else if (result === 6) {
    calMaker(3, 23, 23, 3, 20, 17);
  } else if (result === 0) {
    calMaker(0, 20, 20, 2, 20, 17)
  };
}

function calMaker(begS, endS, threeZeroFive, threeZeroSix, twoNine, twoEight) {
  console.log(lOne.slice(begS, endS) + '\n' + lTwo.slice(begS, endS) + '\n' + lThree.slice(begS, endS) + '\n' + lFour.slice(begS, endS));
  thirtyOne(lFive.slice(begS, endS) + '\n' + lSix.slice(begS, endS));
  thirty(lFive.slice(begS, threeZeroFive) + '\n' + lSix.slice(begS, threeZeroSix));
  twentyNine(lFive.slice(begS, twoNine) + '\n');
  twentyEight(lFive.slice(begS, twoEight) + '\n');
}

function thirtyOne(x) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
      console.log(x);
    }
  };
  function thirty(x) {
    if (m === 4 || m === 6 || m === 9 || m === 11) {
      console.log(x);
    }
  };
  function twentyNine(x) {
    if (m === 2 && ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0))) {
      console.log(x);
    }
  };
  function twentyEight(x) {
    if (m === 2 && ((y % 4 !== 0) || (y % 4 === 0 && y % 100 === 0 && y % 400 !== 0))) {
      console.log(x)
    };
  };


module.exports = printMonth();
