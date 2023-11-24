<script lang="ts">
	import { AppBar, getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import type { Session } from 'lucia';
	import UserButton from './user_button.svelte';
	import { LogIn, Menu } from 'lucide-svelte';

	export let session: Session | null;

	const drawerStoreSettings: DrawerSettings = {
		bgDrawer: 'bg-surface-500 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-3/4',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	const drawerStore = getDrawerStore();

	function drawerOpen() {
		drawerStore.open(drawerStoreSettings);
	}
</script>

<AppBar
	gridColumns="md:grid-cols-2 grid-cols-3"
	slotLead="md:hidden"
	slotDefault="md:place-content-start place-content-center"
	slotTrail="place-content-end"
	background="bg-transparent"
>
	<svelte:fragment slot="lead"><button on:click={drawerOpen}><Menu /></button></svelte:fragment>

	<div class="gradient-heading-pink h2 font-bold lowercase leading-relaxed drop-shadow-sm">
		Fuzzy Yellow Balls
	</div>
	<svelte:fragment slot="trail">
		{#if !session?.user}
			<a href="/login" class="variant-soft-primary btn">
				<LogIn class="mr-2 h-4 w-4" />
				login</a
			>
		{:else}
			<UserButton user={session.user} />
		{/if}
	</svelte:fragment>
</AppBar>
