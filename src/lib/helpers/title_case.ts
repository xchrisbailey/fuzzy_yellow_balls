export function title_case(input: string): string {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return input
		.split(' ')
		.map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
		.join(' ');
}
