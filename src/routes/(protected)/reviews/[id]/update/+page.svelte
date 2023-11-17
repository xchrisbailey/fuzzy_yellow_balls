<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, enhance } = superForm(data.form);
</script>

<form method="POST" use:enhance>
	<label class="label">
		<span>Power</span>
		<input type="range" name="power" bind:value={$form.power} max={5} step="1" />
	</label>
	<label class="label">
		<span>Feel</span>
		<input type="range" name="feel" bind:value={$form.feel} max={5} step="1" />
	</label>
	<label class="label">
		<span>Control</span>
		<input type="range" name="control" bind:value={$form.control} max={5} step="1" />
	</label>
	<label class="label">
		<span>Durability</span>
		<input type="range" name="durability" bind:value={$form.durability} max={5} step="1" />
	</label>
	<label class="label">
		<span>Spin</span>
		<input type="range" name="spin" bind:value={$form.spin} max={5} step="1" />
	</label>
	<label class="label">
		<span>Comfort</span>
		<input type="range" name="comfort" bind:value={$form.comfort} max={5} step="1" />
	</label>
	<label class="label">
		<span>Playability</span>
		<input type="range" name="playability" bind:value={$form.playability} max={5} step="1" />
	</label>
	<label class="label">
		<span>Comments</span>
		<textarea bind:value={$form.comments} name="comments" cols="30" rows="10" class="textarea"
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Review</button>
</form>
