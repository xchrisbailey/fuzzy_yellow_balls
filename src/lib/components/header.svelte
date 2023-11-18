<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import type { Session } from 'lucia';
	import UserButton from './user_button.svelte';
	import { LogIn, Menu } from 'lucide-svelte';

	export let session: Session | null;
</script>

<AppBar
	gridColumns="md:grid-cols-2 grid-cols-3"
	slotLead="md:hidden"
	slotDefault="md:place-content-start place-content-center"
	slotTrail="place-content-end"
	background="bg-transparent"
>
	<svelte:fragment slot="lead"><Menu /></svelte:fragment>

	<div class="font-bold leading-relaxed lowercase gradient-heading-pink h2 drop-shadow-sm">
		The String Bar
	</div>
	<svelte:fragment slot="trail">
		{#if !session?.user}
			<a href="/login" class="variant-soft-primary btn">
				<LogIn class="mr-2 w-4 h-4" />
				login</a
			>
		{:else}
			<UserButton />
		{/if}
	</svelte:fragment>
</AppBar>
