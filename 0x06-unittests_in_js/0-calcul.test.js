var assert = require('assert');

const calculateNumber = require("./0-calcul");

describe('calculateNumber', function () {
	it('checks if numbers round down', function () {
		assert.strictEqual(calculateNumber(1.2, 2.3), 3);
	});
	it('checks if numbers round up', function () {
		assert.strictEqual(calculateNumber(1.7, 2.6), 5);
	});
	it('checks if numbers do not round', function () {
                assert.strictEqual(calculateNumber(1, 2), 3);
	});
	it('checks 0 edge case', function () {
                assert.strictEqual(calculateNumber(0, 0), 0);
	});
	it('checks if -ve numbers round down', function () {
                assert.strictEqual(calculateNumber(-1.2, -2.3), -3);
        });
	it('checks if -ve numbers round up', function () {
                assert.strictEqual(calculateNumber(-1.7, -2.6), -5);
        });
	it('checks if -ve numbers do not round', function () {
                assert.strictEqual(calculateNumber(-1, -2), -3);
        });

});
