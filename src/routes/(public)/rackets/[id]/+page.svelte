<script lang="ts">
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { Pencil } from 'lucide-svelte';
	import { ReviewCard } from '$lib/components/review_card';

	export let data: PageData;
</script>

<h1 class="mb-4 leading-relaxed gradient-heading-pink h1">
	{data.racket.year}
	{title_case(data.racket.name)} by {title_case(data.racket.brand.name)}
</h1>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<section>
		<article>
			<h2 class="gradient-heading-blue h2 drop-shadow-sm">Info</h2>
			<p class="py-2 whitespace-pre-line">{data.racket.description}</p>
		</article>
		<hr class="my-5 divide-gray-50" />
		<article>
			<h2 class="gradient-heading-blue h2 drop-shadow-sm">Specs</h2>
			<dl class="list-dl">
				<div>
					<span class="badge bg-primary-500/20">✔️</span>
					<span class="flex-auto">
						<dt class="font-bold">Weight</dt>
						<dd>{data.racket.weight} {data.racket.weight_unit}</dd>
					</span>
				</div>
			</dl>
			<dl class="list-dl">
				<div>
					<span class="badge bg-primary-500/20">✔️</span>
					<span class="flex-auto">
						<dt class="font-bold">Balance</dt>
						<dd>
							{data.racket.balance}
							{data.racket.balance_unit === 'points' ? 'pts HL' : data.racket.balance_unit}
						</dd>
					</span>
				</div>
			</dl>
			<dl class="list-dl">
				<div>
					<span class="badge bg-primary-500/20">✔️</span>
					<span class="flex-auto">
						<dt class="font-bold">Head Size</dt>
						<dd>
							{data.racket.head_size} Inches
						</dd>
					</span>
				</div>
			</dl>
			<dl class="list-dl">
				<div>
					<span class="badge bg-primary-500/20">✔️</span>
					<span class="flex-auto">
						<dt class="font-bold">Swingweight</dt>
						<dd>
							{data.racket.swingweight}
						</dd>
					</span>
				</div>
			</dl>
			<dl class="list-dl">
				<div>
					<span class="badge bg-primary-500/20">✔️</span>
					<span class="flex-auto">
						<dt class="font-bold">String Pattern</dt>
						<dd>
							{data.racket.mains} Mains / {data.racket.crosses} Crosses
						</dd>
					</span>
				</div>
			</dl>
		</article>
	</section>
	<section>
		<div class="mb-4">
			<h2 class="mb-2 gradient-heading-blue h2 drop-shadow-sm">User Reviews</h2>
			{#if data.racket.reviews?.length > 0}
				{#each data.racket.reviews as review}
					<ReviewCard user_id={data.session?.user.userId} {review} />
				{/each}
			{:else}
				<p>No reviews yet. Be the first!</p>
			{/if}

			<div class="flex justify-center mt-3">
				<a href="/reviews/rackets/add/{data.racket.id.trimEnd()}" class="variant-glass-primary btn"
					><Pencil class="mr-2 w-4 h-4" />Add Review</a
				>
			</div>
		</div>
		<hr class="my-5 divide-gray-50" />
		<div>
			<h2 class="mb-2 gradient-heading-blue h2 drop-shadow-sm">YouTube Reviews</h2>
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
