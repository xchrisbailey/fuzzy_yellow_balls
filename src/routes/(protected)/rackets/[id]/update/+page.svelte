<script lang="ts">
	import RacketReviewForm from '$lib/components/forms/racket_review_form.svelte';
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="leading-relaxed gradient-heading-pink h1">
	Update {title_case(data.review.racket.name)} by
	{title_case(data.review.racket.brand.name)}
</h1>

<RacketReviewForm data={data.form} />
