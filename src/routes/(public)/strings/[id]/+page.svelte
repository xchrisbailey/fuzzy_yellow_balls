<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import { Pencil } from 'lucide-svelte';
	import { ReviewCard } from '$lib/components/review_card';

	export let data: PageData;
</script>

<h1 class="gradient-heading-pink h1 mb-4 leading-relaxed">
	{title_case(data.string.name)} by {title_case(data.string.brand.name)}
</h1>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<section>
		<article>
			<h2 class="gradient-heading-blue h2 drop-shadow-sm">Info</h2>
			<p class="whitespace-pre-line py-2">{data.string.description}</p>
		</article>
	</section>
	<section>
		<div class="mb-4">
			<h2 class="gradient-heading-blue h2 mb-2 drop-shadow-sm">User Reviews</h2>
			{#if data.string.reviews?.length > 0}
				{#each data.string.reviews as review}
					<ReviewCard user_id={data.session?.user.userId} {review} />
				{/each}
			{:else}
				<p>No reviews yet. Be the first!</p>
			{/if}

			<div class="mt-3 flex justify-center">
				<a href="/reviews/add/{data.string.id.trimEnd()}" class="variant-glass-primary btn"
					><Pencil class="mr-2 h-4 w-4" />Add Review</a
				>
			</div>
		</div>
		<hr class="my-5 divide-gray-50" />
		<div>
			<h2 class="gradient-heading-blue h2 mb-2 drop-shadow-sm">YouTube Reviews</h2>
			<div class="space-y-4">
				{#if data.youtube_reviews.items.length > 0}
					{#each data.youtube_reviews.items as youtube_review}
						<article>
							<h3>
								<a
									href={`https://www.youtube.com/watch?v=${youtube_review.id.videoId}`}
									target="_blank"
								>
									{htmlUnescape(youtube_review.snippet.title)}
								</a>
							</h3>
							<p>{youtube_review.snippet.description}</p>
						</article>
					{/each}
				{:else}
					<p>no YouTube reviews found</p>
				{/if}
			</div>
		</div>
	</section>
</div>
