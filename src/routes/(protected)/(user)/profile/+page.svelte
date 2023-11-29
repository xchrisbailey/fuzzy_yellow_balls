<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import ProfileForm from '$lib/components/forms/profile_form.svelte';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<h1 class="mb-3 leading-relaxed gradient-heading-pink h1">
	Hello {title_case(data.session.user.first_name)}
</h1>

<section class="grid grid-cols-1 gap-5 md:grid-cols-2">
	<article>
		<h2 class="leading-relaxed gradient-heading-red h2">Your reviews</h2>
	</article>
	<article>
		<h2 class="leading-relaxed gradient-heading-red h2">Edit Your Profile</h2>
		<ProfileForm data={data.form} />
	</article>
</section>
