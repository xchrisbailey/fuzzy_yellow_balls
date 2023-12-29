<script lang="ts">
	import StarRating from '$lib/components/star_rating.svelte';
	import type { ReviewFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<ReviewFormSchema>;

	const { form, enhance } = superForm(data, {
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
	<div>
		<StarRating name="power" max={5} step={1} bind:value={$form.power} />
		<StarRating name="feel" max={5} step={1} bind:value={$form.feel} />
		<StarRating name="control" max={5} step={1} bind:value={$form.control} />
		<StarRating name="durability" max={5} step={1} bind:value={$form.durability} />
		<StarRating name="spin" max={5} step={1} bind:value={$form.spin} />
		<StarRating name="comfort" max={5} step={1} bind:value={$form.comfort} />
		<StarRating name="playability" max={5} step={1} bind:value={$form.playability} />
	</div>
	<label>
		<span>Comments</span>
		<textarea bind:value={$form.comments} name="comments" cols="30" rows="10"></textarea>
	</label>
	<button>Add Review</button>
</form>
