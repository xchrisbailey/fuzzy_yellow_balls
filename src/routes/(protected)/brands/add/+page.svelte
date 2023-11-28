<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, enhance } = superForm(data.form);
</script>

<form method="POST" use:enhance>
	<label>
		<span>Name</span>
		<input class="input" type="text" bind:value={$form.name} name="name" />
	</label>
	<label class="label">
		<span>About</span>
		<textarea name="about" cols="30" rows="10" bind:value={$form.about} class="textarea"></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Brand</button>
</form>
