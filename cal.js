#!/usr/bin/env node
// var app = require('./lib/server')(1500);
var month = require('./lib/month');
var year = require('./lib/year');
// var zeller = require('./lib/zeller');
var URLParse = require('./lib/calURLParse');
if (process.argv.length === 2) {
  month();
} else if(process.argv.length === 3 && Number(process.argv[2]) > 1752 && process.argv.length === 3 && Number(process.argv[2]) < 10000) {
  year();
} else if (process.argv.length === 4 && Number(process.argv[2]) < 13 && Number(process.argv[3]) > 1752){
  month()
} else {
  console.log('\nERROR!  Please enter:\n\n  "node cal" to display the current month.\n  "node cal yyyy" to display the calendar for a specific year.\n  "node cal mm yyyy" to display a specific month and a specific year.\n') }
// URLParse(process.argv[2]);
