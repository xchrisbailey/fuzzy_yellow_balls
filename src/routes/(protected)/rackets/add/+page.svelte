<script lang="ts">
	import RacketForm from '$lib/components/forms/racket_form.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<RacketForm brands={data.brands} data={data.form} />
