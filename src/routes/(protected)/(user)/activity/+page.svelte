<script lang="ts">
	import { ReviewCard } from '$lib/components/review_card';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<section>
		<h2>String Reviews</h2>
		{#if !data.reviews}
			<p>you have not reviews anything yet!</p>
		{:else}
			{#each data.reviews as review}
				<ReviewCard user_id={data.session?.user.userId} {review} header />
			{/each}
		{/if}
	</section>
	<section>
		<h2>Racket Reviews</h2>
	</section>
</div>
