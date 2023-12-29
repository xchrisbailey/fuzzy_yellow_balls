<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Brand } from '$lib/db/schema';
	import type { RacketFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';

	export let brands: Brand[];
	export let data: SuperValidated<RacketFormSchema>;

	const id = $page.params.id;

	const { form, enhance, constraints } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				// toast.trigger({
				// 	message: form.message.text,
				// 	background:
				// 		form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				// });
			}

			if (form.message?.type === 'success') {
				await goto(`/rackets/${id}`);
			}
		}
	});
</script>

<form method="POST" use:enhance>
	<label>
		<span>Name</span>
		<input type="text" name="name" bind:value={$form.name} {...$constraints.name} />
	</label>

	<label>
		<span>Model Year</span>
		<input type="number" name="year" bind:value={$form.year} {...$constraints.year} />
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
	<div>
		<label>
			<span>Weight</span>
			<div>
				<input type="number" name="weight" bind:value={$form.weight} {...$constraints.weight} />
				<select name="weight_unit" bind:value={$form.weight_unit}>
					<option value="grams">Grams</option>
					<option value="ounces">Ounces</option>
				</select>
			</div>
		</label>
		<label>
			<span>Balance</span>
			<div>
				<input type="number" name="balance" bind:value={$form.balance} {...$constraints.balance} />
				<select name="balance_unit" bind:value={$form.balance_unit}>
					<option value="points">Points HL</option>
					<option value="inches">Inches</option>
					<option value="centimeters">Centimeters</option>
				</select>
			</div>
		</label>

		<label>
			<span>Head Size (inches)</span>
			<input
				type="number"
				name="head_size"
				bind:value={$form.head_size}
				{...$constraints.head_size}
			/>
		</label>
		<label>
			<span>Swingweight</span>
			<input
				type="number"
				name="swingweight"
				bind:value={$form.swingweight}
				{...$constraints.swingweight}
			/>
		</label>
	</div>
	<div>
		<span>String Pattern</span>
		<div>
			<label>
				<span>Mains</span>
				<input type="number" name="mains" bind:value={$form.mains} {...$constraints.mains} />
			</label>
			<label>
				<span>Crosses</span>
				<input type="number" name="crosses" bind:value={$form.crosses} {...$constraints.crosses} />
			</label>
		</div>
	</div>
	<label
		><span>Description</span>
		<textarea
			name="description"
			bind:value={$form.description}
			{...$constraints.description}
			cols="30"
			rows="10"
		></textarea>
	</label>
	<button>Add</button>
</form>
