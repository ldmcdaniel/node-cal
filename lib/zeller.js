var dayOfMonth = 1,
month = 3,
year = 1961,

dayOfWeek =(
    dayOfMonth
  + Math.floor(( month + 1 ) * 2.6 )
  + year
  + Math.floor(year/4)
  + 6 * Math.floor(year/100)
  + Math.floor(year/400)
  )
  % 7;
