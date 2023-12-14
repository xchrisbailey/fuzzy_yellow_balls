import { assert, describe, it } from 'vitest';
import { error_message_format } from '../errors';
import { LuciaError } from 'lucia';

describe('test fuzzy_yellow_balls', function () {
	it('test fuzzy-yellow-balls.error_message_format', function () {
		let error: LuciaError | Error | string = new LuciaError('AUTH_INVALID_KEY_ID');
		assert.equal(error_message_format(error), 'Incorrect email entered');
		error = new LuciaError('AUTH_INVALID_PASSWORD');
		assert.equal(error_message_format(error), 'Invalid password entered');
		error = new Error('SOMETHING_ELSE');
		assert.equal(error_message_format(error), 'Somethings gone wrong: SOMETHING_ELSE');
		error = 'SOMETHING_ELSE';
		assert.equal(error_message_format(error), 'Unknown error');
	});
});
