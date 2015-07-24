module.exports = function (dayOfMonth, month, year) {
  if(month === 1 || month === 2) {
    month += 12;
    year -= 1;
    return (dayOfMonth + Math.floor((month + 1 ) * 2.6 ) + year + Math.floor(year/4) + 6 * Math.floor(year/100) + Math.floor(year/400))% 7;
  } else {
    return (dayOfMonth + Math.floor((month + 1 ) * 2.6 ) + year + Math.floor(year/4) + 6 * Math.floor(year/100) + Math.floor(year/400))% 7;
  }
};


