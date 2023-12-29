<script lang="ts">
	import type { Review } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: Review;
</script>

<div>
	comfort: {#each Array(review.comfort) as id}
		<Star {id} />
	{/each}
</div>
<div>
	power: {#each Array(review.power) as id}
		<Star {id} />
	{/each}
</div>
<div>
	feel: {#each Array(review.feel) as id}
		<Star {id} />
	{/each}
</div>
<div>
	control: {#each Array(review.control) as id}
		<Star {id} />
	{/each}
</div>
<div>
	durability: {#each Array(review.durability) as id}
		<Star {id} />
	{/each}
</div>
<div>
	spin: {#each Array(review.spin) as id}
		<Star {id} />
	{/each}
</div>
<div>
	playability: {#each Array(review.playability) as id}
		<Star {id} />
	{/each}
</div>
