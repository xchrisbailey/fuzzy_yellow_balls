<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/header.svelte';
	import NavigationLinks from '$lib/components/navigation_links.svelte';

	export let data: PageData;
</script>

<NavigationLinks />
<Header session={data.session} />
<NavigationLinks />
<main class="p-5">
	<slot />
</main>
