<script lang="ts">
	import '../app.postcss';
	import type { PageData } from './$types';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/header.svelte';
	import NavigationLinks from '$lib/components/navigation_links.svelte';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data: PageData;
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10" slotSidebarLeft="p-4">
	<svelte:fragment slot="header"><Header session={data.session} /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block w-[175px]"><NavigationLinks /></div>
	</svelte:fragment>
	<main class="p-5">
		<slot />
	</main>
</AppShell>
