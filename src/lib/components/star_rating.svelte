<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';

	export let name: string;
	export let max: number;
	export let step: number;
	export let value: number = 0;
</script>

<label>
	<span>{title_case(name)}</span>
	<input type="range" class="rating" {value} {step} {max} {name} />
</label>

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
