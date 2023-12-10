<script lang="ts">
	import type { RacketReview } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: RacketReview;
</script>

<div class="flex items-center gap-1">
	groundstrokes: {#each Array(review.groundstrokes) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	volleys: {#each Array(review.volleys) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	serves: {#each Array(review.serves) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	returns: {#each Array(review.returns) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	power: {#each Array(review.power) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	control: {#each Array(review.control) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	maneuverability: {#each Array(review.maneuverability) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	stability: {#each Array(review.stability) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	comfort: {#each Array(review.comfort) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	feel: {#each Array(review.feel) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	topspin: {#each Array(review.topspin) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
<div class="flex items-center gap-1">
	slice: {#each Array(review.slice) as id}
		<Star {id} class="h-4 w-4" />
	{/each}
</div>
