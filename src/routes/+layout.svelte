<script lang="ts">
	import './styles.css';
	import type { PageData } from './$types';
	import Header from '$lib/components/header.svelte';

	export let data: PageData;
</script>

<Header session={data.session} />
<main class="p-5">
	<slot />
</main>

<style>
	main {
		margin: 0 1.5em;
	}
</style>
