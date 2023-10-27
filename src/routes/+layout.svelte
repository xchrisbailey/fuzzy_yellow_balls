<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import UserButton from '$lib/components/user_button.svelte';
	import '../app.postcss';
	import type { PageData } from './$types';
	import { LogIn } from 'lucide-svelte';

	export let data: PageData;
</script>

<header class="container flex justify-between my-3 mx-auto">
	<div class="text-3xl font-bold">The String Bar</div>
	{#if !data.session?.user}
		<Button href="/login">
			<LogIn class="mr-2 w-4 h-4" />
			login</Button
		>
	{:else}
		<UserButton image={data?.session?.user?.image} />
	{/if}
</header>

<main class="container my-5 mx-auto">
	<slot />
</main>
