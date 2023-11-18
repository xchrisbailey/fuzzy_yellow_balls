<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, Drawer, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header.svelte';
	import NavigationLinks from '$lib/components/navigation_links.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data: PageData;
</script>

<Drawer>
	<NavigationLinks />
</Drawer>

<AppShell
	regionPage="relative"
	slotPageHeader="sticky top-0 z-10"
	slotSidebarLeft="p-4 w-0 md:w-64"
>
	<svelte:fragment slot="header"><Header session={data.session} /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<NavigationLinks />
	</svelte:fragment>
	<main class="p-5">
		<slot />
	</main>
</AppShell>
