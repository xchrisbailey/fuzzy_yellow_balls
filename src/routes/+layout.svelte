<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import UserButton from '$lib/components/user_button.svelte';
	import '../app.postcss';
	import type { PageData } from './$types';
	import { LogIn } from 'lucide-svelte';
	import { Toaster } from 'svelte-french-toast';

	export let data: PageData;
</script>

<Toaster />

<header class="container flex justify-between my-3 mx-auto">
	<div class="text-3xl font-bold">The String Bar</div>
	<nav class="flex items-center">
		<ul class="flex gap-5">
			<li><a href="/">home</a></li>
			<li><a href="/strings">strings</a></li>
		</ul>
	</nav>
	{#if !data.session?.user}
		<Button href="/login">
			<LogIn class="mr-2 w-4 h-4" />
			login</Button
		>
	{:else}
		<UserButton />
	{/if}
</header>

<main class="container my-5 mx-auto">
	<slot />
</main>
