<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { NewBrandForm } from '../../../routes/(protected)/brands/add/+page.server';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let data: SuperValidated<NewBrandForm>;

	const { form, enhance, constraints } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				// toast.trigger({
				// 	message: form.message.text,
				// 	background:
				// 		form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				// });

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
		<input {...$constraints.name} />
	</label>
	<label>
		<span>About</span>
		<textarea name="about" cols="30" rows="10" bind:value={$form.about} {...$constraints.about}
		></textarea>
	</label>
	<button>Add Brand</button>
</form>
