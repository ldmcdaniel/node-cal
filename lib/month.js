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
} else if (result === 2) {
  console.log('    1  2  3  4  5  6');
} else if (result === 3) {
  console.log('       1  2  3  4  5');
} else if (result === 4) {
  console.log('          1  2  3  4');
} else if (result === 5) {
  console.log('             1  2  3');
} else if (result === 6) {
  console.log('                1  2');
} else {
  console.log('                   1');
}
