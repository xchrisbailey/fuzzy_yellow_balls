<script lang="ts">
	import type { PageData } from './$types';
	import SignupForm from '$lib/components/forms/signup_form.svelte';

	export let data: PageData;
</script>

<div class="mx-auto w-full md:w-2/3">
	<h1 class="mb-4 leading-relaxed gradient-heading-pink h1">Sign Up</h1>

	<SignupForm data={data.form} />

	<p class="mt-2 font-medium leading-none hover:underline text-small text-primary">
		<a href="/login">or login</a>
	</p>
</div>
