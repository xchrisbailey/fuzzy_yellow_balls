// star_rating.svelte unit tests
import { render } from '@testing-library/svelte';
import StarRating from './star_rating.svelte';
import { describe, expect, it } from 'vitest';

describe('StarRating', () => {
	it('should render a star rating', () => {
		const { container } = render(StarRating, { name: 'test', max: 5, step: 1 });
		expect(container).toMatchSnapshot();
	});
});
