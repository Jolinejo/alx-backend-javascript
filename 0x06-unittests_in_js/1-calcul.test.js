var assert = require('assert');

const calculateNumber = require("./1-calcul");

describe('calculateNumber', function () {
  it('checks SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 2.3), 3);
    assert.strictEqual(calculateNumber('SUM', 1.7, 2.6), 5);
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', -1.2, -2.3), -3);
    assert.strictEqual(calculateNumber('SUM', -1.7, -2.6), -5);
    assert.strictEqual(calculateNumber('SUM', -2, -1), -3);
  });

  it('checks SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 2.3), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.6), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
  });

  it('checks DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
  });
});

