// var dayOfMonth = 1,
// month = 3,
// year = 1961,
// dayName = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
// var dayOfWeek = function (dayOfMonth, month, year) {
//   return (dayOfMonth + Math.floor(( month + 1 ) * 2.6 ) + year + Math.floor(year/4) + 6 * Math.floor(year/100) + Math.floor(year/400))% 7;
// };
module.exports = function (dayOfMonth, month, year) {
  if(month === 1) {
    var modMonth = 13;
    var modYear = year - 1;
    return (dayOfMonth + Math.floor(( modMonth + 1 ) * 2.6 ) + modYear + Math.floor(modYear/4) + 6 * Math.floor(modYear/100) + Math.floor(modYear/400))% 7;
  } else if (month === 2) {
    var modMonth = 14;
    var modYear = year - 1;
    return (dayOfMonth + Math.floor(( modMonth + 1 ) * 2.6 ) + modYear + Math.floor(modYear/4) + 6 * Math.floor(modYear/100) + Math.floor(modYear/400))% 7;
  } else {
    return (dayOfMonth + Math.floor(( month + 1 ) * 2.6 ) + year + Math.floor(year/4) + 6 * Math.floor(year/100) + Math.floor(year/400))% 7;
  }
};


