<script lang="ts">
	import '../app.postcss';
	import UserButton from '$lib/components/user_button.svelte';
	import type { PageData } from './$types';
	import { LogIn } from 'lucide-svelte';
	import { Toaster } from 'svelte-french-toast';
	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// const flash = getFlash(page, {
	// 	clearAfterMs: 4000
	// });
	//
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
		<a href="/login" class="btn variant-soft-primary">
			<LogIn class="mr-2 w-4 h-4" />
			login</a
		>
	{:else}
		<UserButton />
	{/if}
</header>

<main class="container my-5 mx-auto">
	<slot />
</main>
