<script lang="ts">
	import type { Brand, Review as DrizzleReview, TString } from '$lib/db/schema';
	import { title_case } from '$lib/helpers/title_case';
	import { Pencil, Star } from 'lucide-svelte';

	export let user_id: string | undefined;
	export let review: Review;
	export let header: boolean = false;

	interface Review extends DrizzleReview {
		string?: TString & { brand?: Brand };
	}

	console.log(review);
</script>

<article class="p-4 card variant-glass">
	{#if review.string?.brand && header}
		<h3 class="mb-1 gradient-heading-red h3">
			{title_case(review.string.name)} by {title_case(review.string.brand.name)}
		</h3>
	{/if}
	<h4 class="h4">Rating</h4>
	<div class="grid gap-1 mt-1 md:grid-cols-2 gird-cols-1">
		<div class="flex gap-1 items-center">
			comfort: {#each Array(review.comfort) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			power: {#each Array(review.power) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			feel: {#each Array(review.feel) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			control: {#each Array(review.control) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			durability: {#each Array(review.durability) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			spin: {#each Array(review.spin) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			playability: {#each Array(review.playability) as id}
				<Star {id} class="w-4 h-4" />
			{/each}
		</div>
	</div>
	<hr class="my-1 divide-gray-200" />
	<h4 class="h4">Reviewer Notes</h4>
	<p>{review.comments}</p>

	{#if review.user_id === user_id}
		<div class="flex justify-end">
			<a href="/reviews/{review.id}/update" class="variant-ghost-primary btn-icon btn-icon-sm"
				><Pencil class="w-4 h-4" /></a
			>
		</div>
	{/if}
</article>
