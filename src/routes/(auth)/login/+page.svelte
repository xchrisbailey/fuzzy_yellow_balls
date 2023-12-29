<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from '$lib/components/forms/login_form.svelte';

	export let data: PageData;
</script>

<div>
	<h1>Log In</h1>
	<LoginForm data={data.form} />
	<p>or <a href="/signup">signup</a></p>
</div>
