const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function () {
	it('Checks if success', function (done) {
		getPaymentTokenFromAPI(true)
        	.then((res) => {
			assert.deepStrictEqual(res, {data: 'Successful response from the API'});
			done();
		})
		.catch((err) => done(err));
	});
});
