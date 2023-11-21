<script lang="ts">
	import { Star, Pencil } from 'lucide-svelte';
	import type { PageData } from './$types';
	import ReviewCard from '$lib/components/review_card.svelte';

	export let data: PageData;
</script>

<section class="flex flex-col gap-4">
	<h2 class="gradient-heading-pink h2">String Reviews</h2>
	{#if !data.reviews}
		<p class="text-warning-500">you have not reviews anything yet!</p>
	{:else}
		{#each data.reviews as review}
			<ReviewCard user_id={data.session?.user.userId} {review} />
		{/each}
	{/if}
</section>
