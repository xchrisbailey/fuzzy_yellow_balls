<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mb-4">{title_case(data.string.name)} by {title_case(data.string.Brand.name)}</h1>
<div class="grid grid-cols-2 gap-4">
	<div>
		<h2>Info</h2>
		<p>{data.string.description}</p>
	</div>
	<div>
		<h2>Reviews</h2>
	</div>
</div>
