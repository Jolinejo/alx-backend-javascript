const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should use Utils.calculateNumber with "SUM" as type', function () {
    	const consoleLogSpy = sinon.spy(console, 'log');
	const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
	sendPaymentRequestToApi(100, 20);
	assert.strictEqual(consoleLogSpy.calledOnce, true);
	assert.strictEqual(calculateNumberStub.calledOnce, true);
	assert.strictEqual(calculateNumberStub.returnValues[0], 10);
        assert.deepStrictEqual(calculateNumberStub.firstCall.args, ['SUM', 100, 20]);
	assert.strictEqual(consoleLogSpy.firstCall.args[0], 'The total is: 10')
	consoleLogSpy.restore();
	calculateNumberStub.restore();
    });
});
