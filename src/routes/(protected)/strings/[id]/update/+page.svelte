<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { find_brand_by_id } from '$lib/helpers/find_brand_by_id';

	export let data: PageData;

	const { form, enhance } = superForm(data.form);
	const materials = ['polyester', 'multifilament', 'natural gut', 'synthetic gut'];
</script>

<h1 class="leading-relaxed h1 gradient-heading-pink">
	Update {title_case(data.form.data.name)} by
	{title_case(find_brand_by_id(data.form.data.brand, data.brands))}
</h1>

<form use:enhance method="POST" class="flex flex-col gap-4">
	<label class="label">
		<span>Name</span>
		<input type="text" name="name" bind:value={$form.name} class="input variant-glass-surface" />
	</label>
	<label class="label">
		<span>Brand</span>
		<select name="brand" class="select variant-glass-surface" bind:value={$form.brand}>
			{#each data.brands as brand}
				<option value={brand.id}>{brand.name}</option>
			{/each}
		</select>
	</label>
	<label class="label">
		<span>Material</span>
		<select name="material" class="select variant-glass-surface" bind:value={$form.material}>
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
		></textarea>
	</label>
	<button class="btn variant-glass-primary">Add String</button>
</form>
