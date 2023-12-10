<script lang="ts">
	import StarRating from '$lib/components/star_rating.svelte';
	import type { ReviewFormSchema } from '$lib/form_schemas';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<ReviewFormSchema>;

	const toast = getToastStore();

	const { form, enhance, message } = superForm(data, {
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

<form method="POST" action="?/add" use:enhance>
	<div class="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
		<StarRating name="power" max={5} step={1} bind:value={$form.power} />
		<StarRating name="feel" max={5} step={1} bind:value={$form.feel} />
		<StarRating name="control" max={5} step={1} bind:value={$form.control} />
		<StarRating name="durability" max={5} step={1} bind:value={$form.durability} />
		<StarRating name="spin" max={5} step={1} bind:value={$form.spin} />
		<StarRating name="comfort" max={5} step={1} bind:value={$form.comfort} />
		<StarRating name="playability" max={5} step={1} bind:value={$form.playability} />
	</div>
	<label class="label">
		<span>Comments</span>
		<textarea bind:value={$form.comments} name="comments" cols="30" rows="10" class="textarea"
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Review</button>
</form>
