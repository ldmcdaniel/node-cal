var path = require('path');
var should = require('chai').should();
var month = require(path.join(process.cwd(), './lib/month'));
var cp = require('child_process');

describe('month', function () {
  describe('leap february', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 2 2008').toString();
      var output = cp.execSync('node cal 2 2008').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('non-leap february', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 2 2007').toString();
      var output = cp.execSync('node cal 2 2007').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('4 week month', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 2 1998').toString();
      var output = cp.execSync('node cal 2 1998').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('5 week month', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 3 1999').toString();
      var output = cp.execSync('node cal 3 1999').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('6 week month', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 8 1980').toString();
      var output = cp.execSync('node cal 8 1980').toString();
      output.should.equal(goalOutput);
    });
  });
})
describe('year', function () {
  describe('leap year', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 2004').toString();
      var output = cp.execSync('node cal 2004').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('non-leap year', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 1989').toString();
      var output = cp.execSync('node cal 1989').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('non-leap year century', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 1900').toString();
      var output = cp.execSync('node cal 1900').toString();
      output.should.equal(goalOutput);
    });
  });
  describe('leap year century', function () {
    it('should be equal to cal', function () {
      var goalOutput = cp.execSync('cal 2000').toString();
      var output = cp.execSync('node cal 2000').toString();
      output.should.equal(goalOutput);
    });
  });
})

// function testCal(arg) {
//   var sep = arg ? ' ' : '';

// }
