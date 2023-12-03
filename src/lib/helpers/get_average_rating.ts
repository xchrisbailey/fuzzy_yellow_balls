import type { Review } from '$lib/db/schema';

export function get_average_rating(reviews: Review[] | null): string {
	if (!reviews) return '-';
	const average = (
		reviews
			.map((review) => {
				return (
					(review.power +
						review.control +
						review.feel +
						review.spin +
						review.comfort +
						review.durability +
						review.playability) /
					7
				);
			})
			.reduce((a, b) => a + b, 0) / reviews.length
	).toFixed(2);

	if (isNaN(Number(average))) return '-';
	return average;
}
