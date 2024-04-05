function calculateNumber(type, a, b) {
	const arounded = Math.round(a);
	const brounded = Math.round(b);
	if (type === 'SUM')
		return c = arounded + brounded;
	if (type === 'SUBTRACT')
		return c = arounded - brounded;
	if (type === 'DIVIDE') {
		if (brounded === 0)
			return 'Error';
		return arounded / brounded;
	}
}

module.exports = calculateNumber;
