<script lang="ts">
	import type { PageData } from './$types';
	import SignupForm from '$lib/components/forms/signup_form.svelte';

	export let data: PageData;
</script>

<div>
	<h1>Sign Up</h1>

	<SignupForm data={data.form} />

	<p>
		<a href="/login">or login</a>
	</p>
</div>
