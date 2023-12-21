import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./setupTest.ts'],
		coverage: {
			exclude: ['setupTest.ts']
		},
		exclude: [...configDefaults.exclude, 'tests']
	}
});
