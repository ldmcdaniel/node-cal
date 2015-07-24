var path = require('path');
var should = require('chai').should();
var App = require(path.join(process.cwd(), './lib/zeller'));

describe('Mocha + Chai', function() {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('App', function () {
  it('should be an integer between between 0 & 6', function () {
    var zellers = Number(App);
    zellers.should.be.within(0, 6);
  })
})
