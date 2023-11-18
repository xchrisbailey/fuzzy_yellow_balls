<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<h1 class="leading-relaxed gradient-heading-pink h1">
	Review {title_case(data.string.name)} by {title_case(data.string.Brand.name)}
</h1>
<form method="POST" action="?/add" use:enhance>
	<div class="grid grid-cols-2 gap-4 mb-4 md:grid-cols-3">
		<label class="label">
			<span>Power</span>
			<input type="range" name="power" bind:value={$form.power} max={5} step="1" class="rating" />
		</label>
		<label class="label">
			<span>Feel</span>
			<input type="range" name="feel" bind:value={$form.feel} max={5} step="1" class="rating" />
		</label>
		<label class="label">
			<span>Control</span>
			<input
				type="range"
				name="control"
				bind:value={$form.control}
				max={5}
				step="1"
				class="rating"
			/>
		</label>
		<label class="label">
			<span>Durability</span>
			<input
				type="range"
				name="durability"
				bind:value={$form.durability}
				max={5}
				step="1"
				class="rating"
			/>
		</label>
		<label class="label">
			<span>Spin</span>
			<input type="range" name="spin" bind:value={$form.spin} max={5} step="1" class="rating" />
		</label>
		<label class="label">
			<span>Comfort</span>
			<input
				type="range"
				name="comfort"
				bind:value={$form.comfort}
				max={5}
				step="1"
				class="rating"
			/>
		</label>
		<label class="label">
			<span>Playability</span>
			<input
				type="range"
				name="playability"
				bind:value={$form.playability}
				max={5}
				step="1"
				class="rating"
			/>
		</label>
	</div>
	<label class="label">
		<span>Comments</span>
		<textarea bind:value={$form.comments} name="comments" cols="30" rows="10" class="textarea"
		></textarea>
	</label>
	<button class="variant-glass-primary btn">Add Review</button>
</form>

<style>
	/* grabbed (and slightly modified) from https://dev.to/madsstoumann/star-rating-using-a-single-input-i0l */
	.rating {
		--dir: right;
		--fill: gold;
		--fillbg: rgba(100, 100, 100, 0.15);
		--star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
		--stars: 5;
		--starsize: 2rem;
		--symbol: var(--star);
		--value: 1;
		--w: calc(var(--stars) * var(--starsize));
		--x: calc(100% * (var(--value) / var(--stars)));
		block-size: var(--starsize);
		inline-size: var(--w);
		position: relative;
		touch-action: manipulation;
		-webkit-appearance: none;
		appearance: none;
		background: none;
	}

	.rating::-moz-range-track {
		background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
		block-size: 100%;
		mask: repeat left center/var(--starsize) var(--symbol);
	}

	.rating::-webkit-slider-runnable-track {
		background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
		block-size: 100%;
		mask: repeat left center/var(--starsize) var(--symbol);
		-webkit-mask: repeat left center/var(--starsize) var(--symbol);
	}
	.rating::-moz-range-thumb {
		height: var(--starsize);
		opacity: 0;
		width: var(--starsize);
	}
	.rating::-webkit-slider-thumb {
		height: var(--starsize);
		opacity: 0;
		width: var(--starsize);
		-webkit-appearance: none;
	}

	.rating {
		display: block;
		font-family: ui-sans-serif, system-ui, sans-serif;
	}

	.rating::-moz-range-track {
		background: var(--fillbg);
	}
	.rating::-moz-range-progress {
		background: var(--fill);
		block-size: 100%;
		mask: repeat left center/var(--starsize) var(--star);
	}
	.rating::-webkit-slider-runnable-track {
		background: var(--fillbg);
	}
	.rating::-webkit-slider-thumb {
		background-color: var(--fill);
		box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);
		opacity: 1;
		width: 1px;
	}
</style>
