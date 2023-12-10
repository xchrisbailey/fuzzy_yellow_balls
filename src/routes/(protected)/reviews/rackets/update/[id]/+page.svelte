<script lang="ts">
	import RacketReviewForm from '$lib/components/forms/racket_review_form.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<RacketReviewForm data={data.form} />
