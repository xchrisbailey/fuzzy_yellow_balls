import { LuciaError } from 'lucia';

export function error_message_format(error: Error | LuciaError | unknown): string {
	if (error instanceof LuciaError) {
		switch (error.message) {
			case 'AUTH_INVALID_KEY_ID':
				return 'Incorrect email entered';
			case 'AUTH_INVALID_PASSWORD':
				return 'Invalid password entered';
			default:
				return `Somethings gone wrong: ${error.message}`;
		}
	} else if (error instanceof Error) {
		if (error.message.includes('duplicate key value violates unique constraint')) {
			if (error.message.includes('user_id_string_id')) {
				return 'Already reviewed this product';
			}
		}
		return `Somethings gone wrong: ${error.message}`;
	} else {
		return 'Unknown error';
	}
}
