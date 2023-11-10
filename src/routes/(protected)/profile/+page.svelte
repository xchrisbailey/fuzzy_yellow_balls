<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';
	import Form from './form.svelte';

	export let data: PageData;
</script>

<h1 class="mb-3 text-primary">
	Hello {title_case(data.session.user.first_name)}
</h1>

<section class="grid grid-cols-1 gap-5 md:grid-cols-2">
	<article>
		<h2>Your reviews</h2>
	</article>
	<article>
		<h2>Edit Your Profile</h2>
		<Form form={data.form} />
	</article>
</section>
