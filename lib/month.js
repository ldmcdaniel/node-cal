var zeller = require('./zeller');

var arr = [];

process.argv.forEach(function(val, index) {
  if(index >= 2 ) {
    arr.push(Number(val));
  }
});
var monthName = ['    January ', '   February ', '     March ', '     April ', '      May ', '     June ', '     July ', '    August ', '   September ', '    October ', '   November ', '   December '];
console.log(monthName[arr[0]-1] + arr[1]);
console.log('Su Mo Tu We Th Fr Sa');
var result = zeller(1, arr[0], arr[1]);
if (result === 1) {
  console.log(' 1  2  3  4  5  6  7');
  console.log(' 8  9 10 11 12 13 14');
  console.log('15 16 17 18 19 20 21');
  console.log('22 23 24 25 26 27 28');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('29 30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('29 30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('29');
  } else {
    console.log('');
  };
  console.log('');
} else if (result === 2) {
  console.log('    1  2  3  4  5  6');
  console.log(' 7  8  9 10 11 12 13');
  console.log('14 15 16 17 18 19 20');
  console.log('21 22 23 24 25 26 27');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('28 29 30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('28 29 30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('28 29');
  } else {
    console.log('28');
  };
  console.log('');
} else if (result === 3) {
  console.log('       1  2  3  4  5');
  console.log(' 6  7  8  9 10 11 12');
  console.log('13 14 15 16 17 18 19');
  console.log('20 21 22 23 24 25 26');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('27 28 29 30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('27 28 29 30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('27 28 29');
  } else {
    console.log('27 28');
  };
  console.log('');
} else if (result === 4) {
  console.log('          1  2  3  4');
  console.log(' 5  6  7  8  9 10 11');
  console.log('12 13 14 15 16 17 18');
  console.log('19 20 21 22 23 24 25');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('26 27 28 29 30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('26 27 28 29 30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('26 27 28 29');
  } else {
    console.log('26 27 28');
  };
  console.log('');
} else if (result === 5) {
  console.log('             1  2  3');
  console.log(' 4  5  6  7  8  9 10');
  console.log('11 12 13 14 15 16 17');
  console.log('18 19 20 21 22 23 24');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('25 26 27 28 29 30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('25 26 27 28 29 30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('25 26 27 28 29');
  } else {
    console.log('25 26 27 28');
  };
  console.log('');
} else if (result === 6) {
  console.log('                1  2');
  console.log(' 3  4  5  6  7  8  9');
  console.log('10 11 12 13 14 15 16');
  console.log('17 18 19 20 21 22 23');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('24 25 26 27 28 29 30');
    console.log('31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('24 25 26 27 28 29 30');
    console.log('');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('24 25 26 27 28 29');
    console.log('');
  } else {
    console.log('24 25 26 27 28');
    console.log('');
  };
} else {
  console.log('                   1');
  console.log(' 2  3  4  5  6  7  8');
  console.log(' 9 10 11 12 13 14 15');
  console.log('16 17 18 19 20 21 22');
  if (arr[0] === 1 || arr[0] === 3 || arr[0] === 5 || arr[0] === 7 || arr[0] === 8 || arr[0] === 10 || arr[0] === 12) {
    console.log('23 24 25 26 27 28 29');
    console.log('30 31');
  } else if (arr[0] === 4 || arr[0] === 6 || arr[0] === 9 || arr[0] === 11) {
    console.log('23 24 25 26 27 28 29');
    console.log('30');
  } else if (arr[0] === 2 && ((arr[1] % 400 === 0) || (arr[1] % 4 === 0 && arr[1] % 100 !== 0))) {
    console.log('23 24 25 26 27 28 29');
    console.log('');
  } else {
    console.log('23 24 25 26 27 28');
    console.log('');
  };
}
