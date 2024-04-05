const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should use Utils.calculateNumber with "SUM" as type', function () {
    	const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	assert.strictEqual(calculateNumberSpy.calledOnce, true);
        assert.deepStrictEqual(calculateNumberSpy.firstCall.args, ['SUM', 100, 20]);
	calculateNumberSpy.restore();
    });
});
