<script lang="ts">
	import type { RacketReview } from '$lib/db/schema';
	import { Star } from 'lucide-svelte';

	export let review: RacketReview;
</script>

<div>
	groundstrokes: {#each Array(review.groundstrokes) as id}
		<Star {id} />
	{/each}
</div>
<div>
	volleys: {#each Array(review.volleys) as id}
		<Star {id} />
	{/each}
</div>
<div>
	serves: {#each Array(review.serves) as id}
		<Star {id} />
	{/each}
</div>
<div>
	returns: {#each Array(review.returns) as id}
		<Star {id} />
	{/each}
</div>
<div>
	power: {#each Array(review.power) as id}
		<Star {id} />
	{/each}
</div>
<div>
	control: {#each Array(review.control) as id}
		<Star {id} />
	{/each}
</div>
<div>
	maneuverability: {#each Array(review.maneuverability) as id}
		<Star {id} />
	{/each}
</div>
<div>
	stability: {#each Array(review.stability) as id}
		<Star {id} />
	{/each}
</div>
<div>
	comfort: {#each Array(review.comfort) as id}
		<Star {id} />
	{/each}
</div>
<div>
	feel: {#each Array(review.feel) as id}
		<Star {id} />
	{/each}
</div>
<div>
	topspin: {#each Array(review.topspin) as id}
		<Star {id} />
	{/each}
</div>
<div>
	slice: {#each Array(review.slice) as id}
		<Star {id} />
	{/each}
</div>
