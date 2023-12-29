<script lang="ts">
	import type { Session } from 'lucia';
	import UserButton from './user_button.svelte';
	import { LogIn } from 'lucide-svelte';

	export let session: Session | null;
</script>

<header>
	<div>Fuzzy Yellow Balls</div>
	{#if !session?.user}
		<a href="/login">
			<LogIn />
			login</a
		>
	{:else}
		<!-- <UserButton user={session.user} /> -->
	{/if}
</header>
