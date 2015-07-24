var dayOfMonth = 1,
month = 3,
year = 1961,
dayName = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
dayOfWeek = function () {
  return (dayOfMonth + Math.floor(( month + 1 ) * 2.6 ) + year + Math.floor(year/4) + 6 * Math.floor(year/100) + Math.floor(year/400))% 7;
};
module.exports = dayOfWeek();
