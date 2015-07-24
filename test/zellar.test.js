var path = require('path');
var should = require('chai').should();
var zeller = require(path.join(process.cwd(), './lib/zeller'));


describe('zeller', function () {
  it('should be equal to cal date', function () {
    zeller(15, 3, 1918).should.equal(6);
  });
  it('should be equal to cal date', function () {
    zeller(19, 1, 1924).should.equal(0);
  });
  it('should be equal to cal date', function () {
    zeller(28, 2, 1931).should.equal(0);
  });
  it('should be equal to cal date', function () {
    zeller(29, 2, 1904).should.equal(2);
  });
  it('should be equal to cal date', function () {
    zeller(1, 3, 1900).should.equal(5);
  });
  // it('should be between between 0 & 6', function () {
  //   zeller.should.be.within(0, 6);
  // });
  // it('should be a whole number between 0 & 6', function () {
  //   [0,1,2,3,4,5,6].should.include.members([zeller])
  // })
})
