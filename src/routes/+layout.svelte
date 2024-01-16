<script lang="ts">
	import './styles.css';
	import type { PageData } from './$types';
	import Header from '$lib/components/header.svelte';

	export let data: PageData;
</script>

<Header session={data.session} />
<main class="container">
	<slot />
</main>
