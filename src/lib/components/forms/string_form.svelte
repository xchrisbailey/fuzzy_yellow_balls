<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import { page } from '$app/stores';
	import type { StringFormSchema } from '$lib/form_schemas';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { Brand } from '$lib/db/schema';
	import { goto } from '$app/navigation';

	export let brands: Brand[];
	export let data: SuperValidated<StringFormSchema>;

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
					await goto(`/strings/`);
				}
			}
		}
	});
	const materials = ['polyester', 'multifilament', 'natural gut', 'synthetic gut'];
</script>

<form use:enhance method="POST" class="flex flex-col gap-4">
	<label class="label">
		<span>Name</span>
		<input
			type="text"
			name="name"
			bind:value={$form.name}
			class="input variant-glass-surface"
			{...$constraints.name}
		/>
	</label>
	<label class="label">
		<span>Brand</span>
		<select
			name="brand_id"
			class="select variant-glass-surface"
			bind:value={$form.brand_id}
			{...$constraints.brand_id}
		>
			{#each brands as brand}
				<option value={brand.id}>{brand.name}</option>
			{/each}
		</select>
		<span class="text-sm"
			><a href={`/brands/add?return_to=${$page.url.pathname}`}>add brand</a></span
		>
	</label>
	<label class="label">
		<span>Material</span>
		<select
			name="material"
			class="select variant-glass-surface"
			bind:value={$form.material}
			{...$constraints.material}
		>
			{#each materials as material}
				<option value={material}>{material}</option>
			{/each}
		</select>
	</label>

	<label class="label">
		<span>Description</span>
		<textarea
			name="description"
			cols="30"
			rows="10"
			bind:value={$form.description}
			class="textarea variant-glass-surface"
			{...$constraints.description}
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add String</button>
</form>
