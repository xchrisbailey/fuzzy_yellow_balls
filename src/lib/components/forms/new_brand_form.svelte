<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { NewBrandForm } from '../../../routes/(protected)/brands/add/+page.server';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let data: SuperValidated<NewBrandForm>;

	const toast = getToastStore();

	const { form, enhance, constraints, message } = superForm(data, {
		onUpdated({ form }) {
			if (form.message) {
				toast.trigger({
					message: $message,
					background: 'variant-filled-error'
				});
			}
		}
	});
</script>

<form method="POST" use:enhance>
	<label>
		<span>Name</span>
		<input class="input" type="text" bind:value={$form.name} name="name" {...$constraints.name} />
	</label>
	<label class="label">
		<span>About</span>
		<textarea
			name="about"
			cols="30"
			rows="10"
			bind:value={$form.about}
			class="textarea"
			{...$constraints.about}
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Brand</button>
</form>
