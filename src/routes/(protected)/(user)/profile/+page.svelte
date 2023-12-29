<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';
	import ProfileForm from '$lib/components/forms/profile_form.svelte';

	export let data: PageData;
</script>

<h1>
	Hello {title_case(data.session.user.first_name)}
</h1>

<section>
	<article>
		<h2>Your reviews</h2>
	</article>
	<article>
		<h2>Edit Your Profile</h2>
		<ProfileForm data={data.form} />
	</article>
</section>
