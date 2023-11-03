<script lang="ts">
	import type { PageData } from './$types';
	import Form from './form.svelte';

	export let data: PageData;
</script>

<div class="mx-auto w-1/3 max-w-full">
	<h1 class="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20">Sign Up</h1>

	<Form form={data.form} />

	<p class="mt-2 font-medium leading-none hover:underline text-small text-primary">
		<a href="/login">or login</a>
	</p>
</div>
