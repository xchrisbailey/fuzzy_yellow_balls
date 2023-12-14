<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { NewBrandForm } from '../../../routes/(protected)/brands/add/+page.server';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	export let data: SuperValidated<NewBrandForm>;

	const toast = getToastStore();

	const { form, enhance, constraints } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				toast.trigger({
					message: form.message.text,
					background:
						form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				});

				if (form.message?.type === 'success') {
					window.history.back();
				}
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
