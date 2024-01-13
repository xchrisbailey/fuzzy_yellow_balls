import { render, fireEvent } from '@testing-library/svelte';
import StarRating from './star_rating.svelte';

describe('StarRating component', () => {
	it('should render correctly', () => {
		const { getByLabelText } = render(StarRating, { name: 'rating', max: 5, step: 1, value: 0 });

		expect(getByLabelText('Rating')).toBeInTheDocument();
	});

	it('should update value when range input changes', async () => {
		const { getByLabelText } = render(StarRating, { name: 'rating', max: 5, step: 1, value: 0 });
		const input = <HTMLInputElement>getByLabelText('Rating');

		await fireEvent.input(input, { target: { value: 3 } });

		expect(input.value).toBe('3');
	});
});
