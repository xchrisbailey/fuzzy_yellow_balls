import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { LuciaError } from 'lucia';

export function error_message_format(
	error: Error | PrismaClientKnownRequestError | LuciaError | unknown
): string {
	if (error instanceof PrismaClientKnownRequestError) {
		switch (error.code) {
			case 'P2002':
				return `Item with that ${error.meta?.target ?? 'Item'} already exists`;
			case 'P2014':
				return `Invalid ID: ${error.meta?.target ?? null}`;
			default:
				return `Somethings gone wrong: ${error.code} ${error.message}`;
		}
	} else if (error instanceof LuciaError) {
		switch (error.message) {
			case 'AUTH_INVALID_KEY_ID':
				return 'Incorrect email entered';
			case 'AUTH_INVALID_PASSWORD':
				return 'Invalid password entered';
			default:
				return `Somethings gone wrong: ${error.message}`;
		}
	} else if (error instanceof Error) {
		return `Somethings gone wrong: ${error.message}`;
	} else {
		return 'Unknown error';
	}
}
