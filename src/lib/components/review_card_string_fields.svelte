<script lang="ts">
	import type { Review } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: Review;
</script>

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
