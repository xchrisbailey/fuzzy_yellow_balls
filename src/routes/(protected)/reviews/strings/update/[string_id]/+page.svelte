<script lang="ts">
	import type { PageData } from './$types';
	import ReviewForm from '$lib/components/forms/review_form.svelte';

	export let data: PageData;
</script>

<ReviewForm data={data.form} />
