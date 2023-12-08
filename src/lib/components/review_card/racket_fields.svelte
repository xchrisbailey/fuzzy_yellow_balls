<script lang="ts">
	import type { RacketReview } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: RacketReview;
</script>

<div class="flex gap-1 items-center">
	groundstrokes: {#each Array(review.groundstrokes) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	volleys: {#each Array(review.volleys) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	serves: {#each Array(review.serves) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	returns: {#each Array(review.returns) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	power: {#each Array(review.power) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	control: {#each Array(review.control) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	maneuverability: {#each Array(review.maneuverability) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	stability: {#each Array(review.stability) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	comfort: {#each Array(review.comfort) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	feel: {#each Array(review.feel) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	topspin: {#each Array(review.topspin) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
<div class="flex gap-1 items-center">
	slice: {#each Array(review.slice) as id}
		<Star {id} class="w-4 h-4" />
	{/each}
</div>
