var path = require('path');
var should = require('chai').should();
var zellers = require(path.join(process.cwd(), './lib/zeller'));


describe('zellers', function () {
  it('should be a number', function () {
    zellers.should.be.a('number');
  });
  it('should be between between 0 & 6', function () {
    zellers.should.be.within(0, 6);
  });
  it('should be a whole number between 0 & 6', function () {
    [0,1,2,3,4,5,6].should.include.members([zellers])
  })
})
