<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import type { StringFormSchema } from '$lib/form_schemas';
	import type { Brand } from '$lib/db/schema';
	import { goto } from '$app/navigation';

	export let brands: Brand[];
	export let data: SuperValidated<StringFormSchema>;

	const { form, enhance, constraints } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				// toast.trigger({
				// 	message: form.message.text,
				// 	background:
				// 		form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				// });

				if (form.message?.type === 'success') {
					await goto(`/strings/`);
				}
			}
		}
	});
	const materials = ['polyester', 'multifilament', 'natural gut', 'synthetic gut'];
</script>

<form use:enhance method="POST">
	<label>
		<span>Name</span>
		<input type="text" name="name" bind:value={$form.name} {...$constraints.name} />
	</label>
	<label>
		<span>Brand</span>
		<select name="brand_id" bind:value={$form.brand_id} {...$constraints.brand_id}>
			{#each brands as brand}
				<option value={brand.id}>{brand.name}</option>
			{/each}
		</select>
		<span><a href={`/brands/add?return_to=${$page.url.pathname}`}>add brand</a></span>
	</label>
	<label>
		<span>Material</span>
		<select name="material" bind:value={$form.material} {...$constraints.material}>
			{#each materials as material}
				<option value={material}>{material}</option>
			{/each}
		</select>
	</label>

	<label>
		<span>Description</span>
		<textarea
			name="description"
			cols="30"
			rows="10"
			bind:value={$form.description}
			{...$constraints.description}
		></textarea>
	</label>
	<button>Add String</button>
</form>
