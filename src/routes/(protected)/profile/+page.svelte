<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20 text-primary">
	Hello {title_case(data.session.user.first_name)}
</h1>
