var zeller = require('./zeller');
var month = require ('./month');

var printYear = function () {
  var y;
  var days = 'Su Mo Tu We Th Fr Sa  '
  var logDays = days + days + days

  //Getting user input from the console
  process.argv.forEach(function(val, index) {
    if(index === 2 ) {
      y = Number(val);
    }
  });
  var result = zeller(1, 1, y);
  console.log('                             ' + y + '\n');
  console.log('      January               February               March');
  console.log(logDays);
  if (result === 1 && (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {


  }

}

module.exports = printYear();
