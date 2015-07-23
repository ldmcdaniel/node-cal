var path = require('path');
var should = require('chai').should();
var Cal = require(path.join(process.cwd(), '/app'))

describe('Mocha + Chai', function() {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});
