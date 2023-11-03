<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import UserButton from '$lib/components/user_button.svelte';
	import '../app.postcss';
	import type { PageData } from './$types';
	import { LogIn } from 'lucide-svelte';

	export let data: PageData;
</script>

<header class="container mx-auto my-3 flex justify-between">
	<div class="text-3xl font-bold">The String Bar</div>
	{#if !data.session?.user}
		<Button href="/login">
			<LogIn class="mr-2 h-4 w-4" />
			login</Button
		>
	{:else}
		<UserButton />
	{/if}
</header>

<main class="container mx-auto my-5">
	<slot />
</main>
