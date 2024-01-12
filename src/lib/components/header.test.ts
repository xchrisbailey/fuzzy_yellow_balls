// FILEPATH: /Users/chrisbailey/dev/projects/vagar.xyz/fuzzy_yellow_balls/src/lib/components/header.test.js
import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Header from './header.svelte';

describe('Header component', () => {
	it('should render login link when no user in session', () => {
		const { getByText } = render(Header, { session: null });

		expect(getByText('login')).toBeInTheDocument();
	});

	it('should render navigation links when user in session', () => {
		const { getByText } = render(Header, { session: { user: {} } });

		expect(getByText('home')).toBeInTheDocument();
		expect(getByText('strings')).toBeInTheDocument();
		expect(getByText('rackets')).toBeInTheDocument();
	});
});
