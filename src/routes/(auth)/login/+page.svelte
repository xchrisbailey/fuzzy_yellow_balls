<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from '$lib/components/forms/login_form.svelte';

	export let data: PageData;
</script>

<div class="mx-auto w-full md:w-2/3">
	<h1 class="gradient-heading-pink h1 mb-4 leading-relaxed">Log In</h1>
	<LoginForm data={data.form} />
	<p>or <a href="/signup">signup</a></p>
</div>
