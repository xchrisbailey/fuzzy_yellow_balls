import { expect, test } from '@playwright/test';

const USER = {
	email: 'test@example.com',
	first_name: 'Test',
	last_name: 'User',
	password: 'password'
};

test.describe('user authentication', () => {
	test.describe('logging in', () => {
		test('should be able to login', async ({ page }) => {
			await page.goto('/login');
			await page.locator('input[name="email"]').fill(USER.email);
			await page.locator('input[name="password"]').fill(USER.password);
			await page.getByRole('button', { name: 'Log In' }).click();
			await page.waitForURL('/');

			await page.goto('/profile');

			expect(page.getByRole('heading', { name: 'Hello Test' })).toBeVisible();
		});

		test('should not be able to login with invalid credentials', async ({ page }) => {
			await page.goto('/login');
			await page.locator('input[name="email"]').fill('wrong');
			await page.locator('input[name="password"]').fill('wronggggg');
			await page.getByRole('button', { name: 'Log In' }).click();

			await page.waitForLoadState('networkidle');
			expect(page.getByText('Invalid email')).toBeVisible();
		});
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
