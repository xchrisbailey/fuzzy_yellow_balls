<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';
	import ProfileForm from '$lib/components/forms/profile_form.svelte';

	export let data: PageData;
</script>

<h1 class="gradient-heading-pink h1 mb-3 leading-relaxed">
	Hello {title_case(data.session.user.first_name)}
</h1>

<section class="grid grid-cols-1 gap-5 md:grid-cols-2">
	<article>
		<h2 class="gradient-heading-red h2 leading-relaxed">Your reviews</h2>
	</article>
	<article>
		<h2 class="gradient-heading-red h2 leading-relaxed">Edit Your Profile</h2>
		<ProfileForm data={data.form} />
	</article>
</section>
