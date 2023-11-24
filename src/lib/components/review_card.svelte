<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { Brand, Review as PrismaReview, TennisString } from '@prisma/client';
	import { Pencil, Star } from 'lucide-svelte';

	export let user_id: string | undefined;
	export let review: Review;
	export let header: boolean = false;

	interface Review extends PrismaReview {
		string?: TennisString & { Brand?: Brand };
	}

	console.log(review);
</script>

<article class="card variant-glass p-4">
	{#if review.string?.Brand && header}
		<h3 class="gradient-heading-red h3 mb-1">
			{title_case(review.string.name)} by {title_case(review.string.Brand.name)}
		</h3>
	{/if}
	<h4 class="h4">Rating</h4>
	<div class="gird-cols-1 mt-1 grid gap-1 md:grid-cols-2">
		<div class="flex items-center gap-1">
			comfort: {#each Array(review.comfort) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			power: {#each Array(review.power) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			feel: {#each Array(review.feel) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			control: {#each Array(review.control) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			durability: {#each Array(review.durability) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			spin: {#each Array(review.spin) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
		<div class="flex items-center gap-2">
			playability: {#each Array(review.playability) as id}
				<Star {id} class="h-4 w-4" />
			{/each}
		</div>
	</div>
	<hr class="my-1 divide-gray-200" />
	<h4 class="h4">Reviewer Notes</h4>
	<p>{review.comments}</p>

	{#if review.user_id === user_id}
		<div class="flex justify-end">
			<a href="/reviews/{review.id}/update" class="variant-ghost-primary btn-icon btn-icon-sm"
				><Pencil class="h-4 w-4" /></a
			>
		</div>
	{/if}
</article>
