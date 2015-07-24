var path = require('path');
var should = require('chai').should();
var Cal = require(path.join(process.cwd(), '/app'))

describe('Mocha + Chai', function() {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('Month', function () {
  it('should be a number between between 3 && 14', function () {
    Cal.should.equal()
    var month > 2 && var month < 15;
  })
})
