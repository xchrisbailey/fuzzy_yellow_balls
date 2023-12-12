<script lang="ts">
	import { page } from '$app/stores';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Brand } from '$lib/db/schema';
	import type { RacketFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';

	export let brands: Brand[];
	export let data: SuperValidated<RacketFormSchema>;

	const toast = getToastStore();

	const { form, enhance, constraints } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				toast.trigger({
					message: form.message.text,
					background:
						form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				});
			}

			if (form.message?.type === 'success') {
				await goto('/rackets');
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
		<span>Model Year</span>
		<input type="number" name="year" bind:value={$form.year} class="input" {...$constraints.year} />
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
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<label class="flex-grow label">
			<span>Weight</span>
			<div class="input-group input-group-divider grid-cols-[1fr_auto]">
				<input
					type="number"
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
		<label class="flex-grow label">
			<span>Balance</span>
			<div class="input-group input-group-divider grid-cols-[1fr_auto]">
				<input
					type="number"
					name="balance"
					bind:value={$form.balance}
					{...$constraints.balance}
					class="flex-grow input"
				/>
				<select name="balance_unit" bind:value={$form.balance_unit} class="select">
					<option value="points">Points HL</option>
					<option value="inches">Inches</option>
					<option value="centimeters">Centimeters</option>
				</select>
			</div>
		</label>

		<label class="flex-grow label">
			<span>Head Size (inches)</span>
			<input
				type="number"
				name="head_size"
				bind:value={$form.head_size}
				class="input"
				{...$constraints.head_size}
			/>
		</label>
		<label class="flex-grow label">
			<span>Swingweight</span>
			<input
				type="number"
				name="swingweight"
				class="input"
				bind:value={$form.swingweight}
				{...$constraints.swingweight}
			/>
		</label>
	</div>
	<div class="p-4 rounded border border-surface-500/20 bg-surface-400/20">
		<span class="text-lg font-bold">String Pattern</span>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<label class="label">
				<span>Mains</span>
				<input
					type="number"
					name="mains"
					class="input"
					bind:value={$form.mains}
					{...$constraints.mains}
				/>
			</label>
			<label class="label">
				<span>Crosses</span>
				<input
					type="number"
					name="crosses"
					class="input"
					bind:value={$form.crosses}
					{...$constraints.crosses}
				/>
			</label>
		</div>
	</div>
	<label class="label"
		><span>Description</span>
		<textarea
			class="textarea"
			name="description"
			bind:value={$form.description}
			{...$constraints.description}
			cols="30"
			rows="10"
		></textarea>
	</label>
	<button class="variant-ghost-primary btn">Add</button>
</form>
