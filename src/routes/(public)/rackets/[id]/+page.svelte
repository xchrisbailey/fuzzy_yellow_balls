<script lang="ts">
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { Pencil } from 'lucide-svelte';
	import { ReviewCard } from '$lib/components/review_card';

	export let data: PageData;
</script>

<h1>
	{data.racket.year}
	{title_case(data.racket.name)} by {title_case(data.racket.brand.name)}
</h1>
<div>
	<section>
		<article>
			<h2>Info</h2>
			<p>{data.racket.description}</p>
		</article>
		<hr />
		<article>
			<h2>Specs</h2>
			<dl>
				<div>
					<span>✔️</span>
					<span>
						<dt>Weight</dt>
						<dd>{data.racket.weight} {data.racket.weight_unit}</dd>
					</span>
				</div>
			</dl>
			<dl>
				<div>
					<span>✔️</span>
					<span>
						<dt>Balance</dt>
						<dd>
							{data.racket.balance}
							{data.racket.balance_unit === 'points' ? 'pts HL' : data.racket.balance_unit}
						</dd>
					</span>
				</div>
			</dl>
			<dl>
				<div>
					<span>✔️</span>
					<span>
						<dt>Head Size</dt>
						<dd>
							{data.racket.head_size} Inches
						</dd>
					</span>
				</div>
			</dl>
			<dl>
				<div>
					<span>✔️</span>
					<span>
						<dt>Swingweight</dt>
						<dd>
							{data.racket.swingweight}
						</dd>
					</span>
				</div>
			</dl>
			<dl>
				<div>
					<span>✔️</span>
					<span>
						<dt>String Pattern</dt>
						<dd>
							{data.racket.mains} Mains / {data.racket.crosses} Crosses
						</dd>
					</span>
				</div>
			</dl>
		</article>
	</section>
	<section>
		<div>
			<h2>User Reviews</h2>
			{#if data.racket.reviews?.length > 0}
				{#each data.racket.reviews as review}
					<ReviewCard user_id={data.session?.user.userId} {review} />
				{/each}
			{:else}
				<p>No reviews yet. Be the first!</p>
			{/if}

			<div>
				<a href="/reviews/rackets/add/{data.racket.id.trimEnd()}"><Pencil />Add Review</a>
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
