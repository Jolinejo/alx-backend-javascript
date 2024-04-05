const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleLogSpy.restore();
    });
	
    it('should use call with 100 and 200', function () {
	sendPaymentRequestToApi(100, 20);
	assert.strictEqual(consoleLogSpy.calledOnce, true);
	assert.strictEqual(consoleLogSpy.firstCall.args[0], 'The total is: 120')
    });
    it('should use call with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);
        assert.strictEqual(consoleLogSpy.calledOnce, true); 
        assert.strictEqual(consoleLogSpy.firstCall.args[0], 'The total is: 20')
    });
});
