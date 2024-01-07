<script lang="ts">
	import type { Session } from 'lucia';
	// import UserButton from './user_button.svelte';
	import { LogIn } from 'lucide-svelte';

	export let session: Session | null;
</script>

<header>
	<div class="brand">Fuzzy Yellow Balls</div>
	{#if !session?.user}
		<a href="/login">
			<LogIn />
			login</a
		>
	{:else}
		<!-- <UserButton user={session.user} /> -->
	{/if}
</header>

<style>
	header {
		display: flex;
		height: 4rem;
		background: var(--black);
		justify-content: space-between;
		align-items: center;
		padding: 0.5em;
	}
	.brand {
		font-size: var(--font-lg);
		font-weight: 800;
		color: var(--primary-light);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-left: 0.25em;
	}
</style>
