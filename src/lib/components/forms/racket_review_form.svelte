<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { RacketReviewFormSchema } from '$lib/form_schemas';
	import StarRating from '../star_rating.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: SuperValidated<RacketReviewFormSchema>;

	const toast = getToastStore();

	const racket_id = $page.params.racket_id;

	const { form, enhance } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				toast.trigger({
					message: form.message.text,
					background:
						form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				});

				if (form.message.type === 'success') {
					await goto(`/rackets/${racket_id}`);
				}
			}
		}
	});
</script>

<form method="POST" use:enhance>
	<div class="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
		<StarRating name="groundstrokes" max={5} step={1} bind:value={$form.groundstrokes} />
		<StarRating name="volleys" max={5} step={1} bind:value={$form.volleys} />
		<StarRating name="serves" max={5} step={1} bind:value={$form.serves} />
		<StarRating name="returns" max={5} step={1} bind:value={$form.returns} />
		<StarRating name="power" max={5} step={1} bind:value={$form.power} />
		<StarRating name="control" max={5} step={1} bind:value={$form.control} />
		<StarRating name="maneuverability" max={5} step={1} bind:value={$form.maneuverability} />
		<StarRating name="stability" max={5} step={1} bind:value={$form.stability} />
		<StarRating name="comfort" max={5} step={1} bind:value={$form.comfort} />
		<StarRating name="feel" max={5} step={1} bind:value={$form.feel} />
		<StarRating name="topspin" max={5} step={1} bind:value={$form.topspin} />
		<StarRating name="slice" max={5} step={1} bind:value={$form.slice} />
	</div>
	<label class="label">
		<span>Comments</span>
		<textarea bind:value={$form.comments} name="comments" cols="30" rows="10" class="textarea"
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Review</button>
</form>
