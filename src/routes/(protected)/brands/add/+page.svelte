<script lang="ts">
	import type { PageData } from './$types';
	import NewBrandForm from '$lib/components/forms/new_brand_form.svelte';

	export let data: PageData;
</script>

<NewBrandForm data={data.form} />
