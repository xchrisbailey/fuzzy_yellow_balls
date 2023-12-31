<script lang="ts">
	import type {
		Brand,
		Review as DrizzleReview,
		TString,
		RacketReview as DrizzleRacketReview,
		Racket
	} from '$lib/db/schema';
	import { title_case } from '$lib/helpers/title_case';
	import { Pencil } from 'lucide-svelte';
	import RacketFields from './racket_fields.svelte';
	import StringFields from './string_fields.svelte';

	export let user_id: string | undefined;
	export let review: Review;
	export let header: boolean = false;

	interface StringReview extends DrizzleReview {
		string: TString & { brand: Brand };
	}

	interface RacketReview extends DrizzleRacketReview {
		racket: Racket & { brand: Brand };
	}

	type Review = StringReview | RacketReview;

	const isRacketReview = (review: StringReview | RacketReview): review is RacketReview => {
		return (review as RacketReview).racket_id !== undefined;
	};

	const isStringReview = (review: StringReview | RacketReview): review is StringReview => {
		return (review as StringReview).string_id !== undefined;
	};
</script>

<article class="card variant-glass p-4">
	{#if header && isStringReview(review)}
		<h3 class="gradient-heading-red h3 mb-1">
			{title_case(review.string.name)} by {title_case(review.string.brand.name)}
		</h3>
	{:else if header && isRacketReview(review)}
		<h3 class="gradient-heading-red h3 mb-1">
			{title_case(review.racket.name)} by {title_case(review.racket.brand.name)}
		</h3>
	{/if}
	{#if isStringReview(review)}
		<h4 class="h4">Rating</h4>
		<div class="gird-cols-1 mt-1 grid gap-1 md:grid-cols-2">
			<StringFields {review} />
		</div>
	{:else if isRacketReview(review)}
		<h4 class="h4">Rating</h4>
		<div class="gird-cols-1 mt-1 grid gap-1 md:grid-cols-2">
			<RacketFields {review} />
		</div>
	{/if}

	<hr class="my-3 divide-gray-200" />
	<h4 class="h4">Reviewer Notes</h4>
	<p>{review.comments}</p>

	<div class="flex justify-end">
		{#if review.user_id === user_id && isStringReview(review)}
			<a
				href="/reviews/strings/update/{review.id}"
				class="variant-ghost-primary btn-icon btn-icon-sm"><Pencil class="h-4 w-4" /></a
			>
		{:else if review.user_id === user_id && isRacketReview(review)}
			<a
				href="/reviews/rackets/update/{review.id}"
				class="variant-ghost-primary btn-icon btn-icon-sm"><Pencil class="h-4 w-4" /></a
			>
		{/if}
	</div>
</article>
