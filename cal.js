#!/usr/bin/env node
// var app = require('./lib/server')(1500);
var month = require('./lib/month');
var year = require('./lib/year');
// var zeller = require('./lib/zeller');
if(process.argv.length === 3 && Number(process.argv[2]) > 12) {
  year();
} else if (process.argv.length === 4 && Number(process.argv[2]) < 13 && Number(process.argv[3]) > 12) {
  month()
}


