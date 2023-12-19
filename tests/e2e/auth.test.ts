import { test } from '@playwright/test';

const USER = {
	email: 'test@example.com',
	first_name: 'Test',
	last_name: 'User',
	password: 'password'
};

test.describe('user authentication', () => {
	test.describe('logging in', () => {
		test('should be able to login', async ({ page }) => {});
		test('should not be able to login with invalid credentials', async ({ page }) => {});
	});

	test.describe('registering', () => {
		test('should be able to register', async ({ page }) => {});
		test('should not be able to register with missing fields', async ({ page }) => {});
	});

	test.describe('user updates', () => {
		test('should be able to reset password', async ({ page }) => {});
		test('should be able to update profile', async ({ page }) => {});
	});

	test('should be able to logout', async ({ page }) => {});
});
