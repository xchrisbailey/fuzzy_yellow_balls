<script lang="ts">
	import type { PageData } from './$types';
	import Form from './form.svelte';

	export let data: PageData;
</script>

<Form form={data.form} brands={data.brands} current_brand={data.current_brand} />
