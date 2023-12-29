<script lang="ts">
	import type { PageData } from './$types';
	import StringForm from '$lib/components/forms/string_form.svelte';

	export let data: PageData;
</script>

<h1>Add A String</h1>
<StringForm brands={data.brands} data={data.form} />
