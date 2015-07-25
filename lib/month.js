var zeller = require('./zeller');

var printMonth = function () {
  var monthName = ['    January ', '   February ', '     March ', '     April ', '      May ', '     June ', '     July ', '    August ', '   September ', '    October ', '   November ', '   December '];

  var arr = [];//Empty array to accept user input

  //Getting user input from the console
  process.argv.forEach(function(val, index) {
    if(index >= 2 ) {
      arr.push(Number(val));
    }
  });

  var m = arr[0];//This is the month from the user input
  var y = arr[1];//This is the year from the user input

  console.log(monthName[m-1] + y);//I use m-1 is to match the array value in monthName

  console.log('Su Mo Tu We Th Fr Sa');

  var result = zeller(1, m, y);//1 gives a default value to start a month

  if (result === 1) {
    console.log(' 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28');
    thirtyOne('29 30 31\n');
    thirty('29 30\n');
    twentyNine('29\n');
    twentyEight(' \n');
  } else if (result === 2) {
    console.log('    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27');
    thirtyOne('28 29 30 31\n');
    thirty('28 29 30\n');
    twentyNine('28 29\n');
    twentyEight('28\n');
  } else if (result === 3) {
    console.log('       1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26');
    thirtyOne('27 28 29 30 31\n');
    thirty('27 28 29 30\n');
    twentyNine('27 28 29\n');
    twentyEight('27 28\n');
  } else if (result === 4) {
    console.log('          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25');
    thirtyOne('26 27 28 29 30 31\n');
    thirty('26 27 28 29 30\n');
    twentyNine('26 27 28 29\n');
    twentyEight('26 27 28\n');
  } else if (result === 5) {
    console.log('             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24');
    thirtyOne('25 26 27 28 29 30 31\n');
    thirty('25 26 27 28 29 30\n');
    twentyNine('25 26 27 28 29\n');
    twentyEight('25 26 27 28\n');
  } else if (result === 6) {
    console.log('                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23');
    thirtyOne('24 25 26 27 28 29 30\n31');
    thirty('24 25 26 27 28 29 30\n ');
    twentyNine('24 25 26 27 28 29\n ');
    twentyEight('24 25 26 27 28\n ');
  } else {
    console.log('                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22');
    thirtyOne('23 24 25 26 27 28 29\n30 31');
    thirty('23 24 25 26 27 28 29\n30');
    twentyNine('23 24 25 26 27 28 29\n ');
    twentyEight('23 24 25 26 27 28\n ');
  };

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
}

module.exports = printMonth();
