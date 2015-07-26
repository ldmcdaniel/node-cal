#!/usr/bin/env node

// var zeller = require('./lib/zeller');
if(process.argv.length === 3 && Number(process.argv[2]) > 12) {
  var year = require('./lib/year');
} else if (process.argv.length === 4 && Number(process.argv[2]) < 13 && Number(process.argv[3]) > 12) {
  var month = require('./lib/month');
}


