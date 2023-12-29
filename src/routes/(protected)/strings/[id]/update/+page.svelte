<script lang="ts">
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { find_brand_by_id } from '$lib/helpers/find_brand_by_id';
	import StringForm from '$lib/components/forms/string_form.svelte';

	export let data: PageData;
</script>

<h1>
	Update {title_case(data.form.data.name)} by
	{title_case(find_brand_by_id(data.form.data.brand_id, data.brands))}
</h1>

<StringForm data={data.form} brands={data.brands} />
