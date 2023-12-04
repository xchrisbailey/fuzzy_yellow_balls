<script lang="ts">
	import { page } from '$app/stores';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Brand } from '$lib/db/schema';
	import type { RacketFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let brands: Brand[];
	export let data: SuperValidated<RacketFormSchema>;

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

<form method="POST" use:enhance class="flex flex-col gap-4">
	<label class="label">
		<span>Name</span>
		<input type="text" name="name" bind:value={$form.name} class="input" {...$constraints.name} />
	</label>

	<label class="label">
		<span>Brand</span>
		<select name="brand_id" class="select" bind:value={$form.brand_id} {...$constraints.brand_id}>
			{#each brands as brand}
				<option value={brand.id}>{brand.name}</option>
			{/each}
		</select>
		<span class="text-sm"
			><a href={`/brands/add?return_to=${$page.url.pathname}`}>add brand</a></span
		>
	</label>
	<label class="label">
		<span>Weight</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input
				type="text"
				name="weight"
				bind:value={$form.weight}
				{...$constraints.weight}
				class="flex-grow input"
			/>
			<select name="weight_unit" bind:value={$form.weight_unit} class="select">
				<option value="grams">Grams</option>
				<option value="ounces">Ounces</option>
			</select>
		</div>
	</label>
</form>
