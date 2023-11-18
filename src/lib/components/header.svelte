<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import type { Session } from 'lucia';
	import UserButton from './user_button.svelte';
	import { LogIn } from 'lucide-svelte';

	export let session: Session | null;
</script>

<AppBar
	gridColumns="grid-cols-2"
	slotDefault="place-content-start"
	slotTrail="place-content-end"
	background="bg-transparent"
>
	<div class="text-3xl font-bold">The String Bar</div>
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
