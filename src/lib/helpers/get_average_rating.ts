import type { RacketReview, Review } from '$lib/db/schema';

export function get_string_review_average_rating(reviews: Review[] | null): string {
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

export function get_racket_review_average_rating(reviews: RacketReview[] | null): string {
	if (!reviews) return '-';
	const average = (
		reviews
			.map((review) => {
				return (
					(review.power +
						review.control +
						review.feel +
						review.comfort +
						review.volleys +
						review.serves +
						review.returns +
						review.maneuverability +
						review.stability +
						review.topspin +
						review.slice +
						review.groundstrokes) /
					12
				);
			})
			.reduce((a, b) => a + b, 0) / reviews.length
	).toFixed(2);

	if (isNaN(Number(average))) return '-';
	return average;
}
