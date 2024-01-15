import { render } from '@testing-library/svelte';
import Header from './header.svelte';

describe('Header component', () => {
	it('should render login link when no user in session', () => {
		const { getByText } = render(Header, { session: null });

		expect(getByText('login')).toBeInTheDocument();
	});
});
