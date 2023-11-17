<script lang="ts">
	import type { PageData } from './$types';
	import Form from './form.svelte';

	export let data: PageData;
</script>

<div class="mx-auto w-1/3 max-w-full">
	<h1 class="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Sign Up</h1>

	<Form form={data.form} />

	<p class="text-small mt-2 font-medium leading-none text-primary hover:underline">
		<a href="/login">or login</a>
	</p>
</div>
