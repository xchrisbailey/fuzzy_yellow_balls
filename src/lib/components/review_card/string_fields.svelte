<script lang="ts">
	import type { Review } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: Review;
</script>

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
