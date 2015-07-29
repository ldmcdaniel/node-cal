var cal = '../cal/cal.js';
var expect = require('chai').expect;
var path = require('path');
var parse = require(path.join(process.cwd(), '/lib/calURLParse'));

describe('calURLParse', function () {
  it('should handle the base /cal route', function () {
    expect(parse('/cal')).to.equal(cal);
  });
  it('should handle a full year route', function () {
    expect(parse('/cal/2015')).to.equal(cal + ' 2015');
    expect(parse('/cal/99999')).to.equal(cal + ' 99999');
  })
  it('should handle a month only route', function () {
    expect(parse('/cal/1')).to.equal(cal + ' 1');
  });
  it('should handle a month first route', function () {
    expect(parse('/cal/1/2015')).to.equal(cal + ' 1 2015');
  });
  it('should handle a year first route', function () {
    expect(parse('/cal/2015/1')).to.equal(cal + ' 1 2015');
  });
  it('should handle invalid routes', function () {
    // expect(parse('/cal/foo')).to.equal(undefined);
    expect(parse('/cal/foo/bar')).to.equal(undefined);
    expect(parse('/cal/2015/bar')).to.equal(undefined);
    expect(parse('/cal/foo/2015')).to.equal(undefined);
  });
})
