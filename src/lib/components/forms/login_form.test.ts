import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import LoginForm from './login_form.svelte';

describe('login form', () => {
	it('should render a login form', () => {
		const { container } = render(LoginForm);
		expect(container).toMatchSnapshot();
	});
});
