<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import { Pencil } from 'lucide-svelte';
	import { ReviewCard } from '$lib/components/review_card';

	export let data: PageData;
</script>

<h1>
	{title_case(data.string.name)} by {title_case(data.string.brand.name)}
</h1>
<div>
	<section>
		<article>
			<h2>Info</h2>
			<p>{data.string.description}</p>
		</article>
	</section>
	<section>
		<div>
			<h2>User Reviews</h2>
			{#if data.string.reviews?.length > 0}
				{#each data.string.reviews as review}
					<ReviewCard user_id={data.session?.user.userId} {review} />
				{/each}
			{:else}
				<p>No reviews yet. Be the first!</p>
			{/if}

			<div>
				<a href="/reviews/add/{data.string.id.trimEnd()}"><Pencil />Add Review</a>
			</div>
		</div>
		<hr />
		<div>
			<h2>YouTube Reviews</h2>
			<div>
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
