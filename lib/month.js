var zeller = require('./zeller');

// console.log(zeller(1, 3, 1961));
var arr = [];
process.argv.forEach(function(val, index) {
  if(index >= 2 ) {
    arr.push(val);
  }
});
console.log(zeller(1, Number(arr[0]), Number(arr[1])))
// console.log(arr);
