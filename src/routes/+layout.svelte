<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import UserButton from '$lib/components/user_button.svelte';
	import '../app.postcss';
	import type { PageData } from './$types';
	import { LogIn } from 'lucide-svelte';
	import { Toaster } from 'svelte-french-toast';
	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';
	import * as Alert from '$lib/components/ui/alert';

	const flash = getFlash(page, {
		clearAfterMs: 4000
	});

	export let data: PageData;
</script>

<Toaster />
{#if $flash}
	<Alert.Root
		variant={$flash.message === 'error' ? 'destructive' : 'default'}
		class="absolute right-5 bottom-5 w-1/3 opacity-75 bg-destructive text-destructive-foreground"
	>
		<Alert.Title>{$flash.type === 'error' ? 'Uh Oh' : 'Yippy'}</Alert.Title>
		<Alert.Description>{$flash.message}</Alert.Description>
	</Alert.Root>
{/if}

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
