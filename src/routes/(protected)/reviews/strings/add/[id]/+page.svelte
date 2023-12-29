<script lang="ts">
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import ReviewForm from '$lib/components/forms/review_form.svelte';

	export let data: PageData;
</script>

<h1>
	Review {title_case(data.string.name)} by {title_case(data.string.brand.name)}
</h1>

<ReviewForm data={data.form} />
