var assert = require('assert');

const calculateNumber = require("./1-calcul");

describe('calculateNumber', function () {
	describe('SUM', function () {
		it('checks if numbers round down', function () {
			res = calculateNumber(1.2, 2.3, 'SUM');
			assert.strictEqual(res, 3);
		});
		it('checks if numbers round up', function () {
			res = calculateNumber(1.7, 2.6, 'SUM');
			assert.strictEqual(res, 5);
		});
		it('checks if numbers do not round', function () {
			res = calculateNumber(1, 2, 'SUM');
                	assert.strictEqual(res, 3);
		});
		it('checks 0 edge case', function () {
			res = calculateNumber(0, 0, 'SUM');
                	assert.strictEqual(res, 0);
		});
		it('checks if -ve numbers round down', function () {
			res = calculateNumber(-1.2, -2.3, 'SUM');
                	assert.strictEqual(res, -3);
        	});
		it('checks if -ve numbers round up', function () {
			res = calculateNumber(-1.7, -2.6, 'SUM');
                	assert.strictEqual(res, -5);
        	});
		it('checks if -ve numbers do not round', function () {
			res = calculateNumber(-2, -1, 'SUM');
                	assert.strictEqual(res, -3);
        	});
	});
	describe('SUBTRACT', function () {
		it('checks if numbers round down', function () {
			res = calculateNumber(1.2, 2.3, 'SUBTRACT');
			assert.strictEqual(res, -1);
		});
		it('checks if numbers round up', function () {
                        res = calculateNumber(1, 3.6, 'SUBTRACT');
                        assert.strictEqual(res, -3);
		});
		it('checks if numbers do not round', function () {
                        res = calculateNumber(1, 2, 'SUBTRACT');
			assert.strictEqual(res, -1);
		});
	});
	describe('DIVIDE', function () {
		it('checks accurate float +ve sign', function () {
			res = calculateNumber(1.4, 4.5, 'DIVIDE');
			assert.strictEqual(res, 0.2);
		});
		it('checks accurate +ve sign', function () {
                        res = calculateNumber(8, 4, 'DIVIDE');
                        assert.strictEqual(res, 2);
                });
		it('checks division by zero', function () {
                        res = calculateNumber(8, 0.4, 'DIVIDE');
                        assert.strictEqual(res, 'Error');
                });
	});
});
