var expect = require('chai').expect;

const calculateNumber = require("./2-calcul_chai");

describe('calculateNumber', function () {
  it('checks SUM', function () {
    expect(calculateNumber('SUM', 1.2, 2.3)).to.equal(3);
    expect(calculateNumber('SUM', 1.7, 2.6)).to.equal(5);
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', -1.2, -2.3)).to.equal(-3);
    expect(calculateNumber('SUM', -1.7, -2.6)).to.equal(-5);
    expect(calculateNumber('SUM', -2, -1)).to.equal(-3);
  });

  it('checks SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 2.3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1, 3.6)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
  });

  it('checks DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
  });
});
