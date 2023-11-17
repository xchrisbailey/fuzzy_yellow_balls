<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import { Pencil, Star } from 'lucide-svelte';

	export let data: PageData;
</script>

<h1 class="mb-4 h1">{title_case(data.string.name)} by {title_case(data.string.Brand.name)}</h1>
<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	<section>
		<article>
			<h2 class="h2">Info</h2>
			<p class="py-2">{data.string.description}</p>
		</article>
	</section>
	<section>
		<div class="mb-4">
			<h2 class="mb-2 h2">User Reviews</h2>
			{#each data.string.Review as review}
				<article class="p-4 card variant-glass">
					<p>{review.comments}</p>
					<div class="grid gap-1 mt-1 md:grid-cols-2 gird-cols-1">
						<div class="flex gap-1 items-center">
							comfort: {#each Array(review.comfort) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							power: {#each Array(review.power) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							feel: {#each Array(review.feel) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							control: {#each Array(review.control) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							durability: {#each Array(review.durability) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							spin: {#each Array(review.spin) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
						<div class="flex gap-2 items-center">
							playability: {#each Array(review.playability) as id}
								<Star {id} class="w-4 h-4" />
							{/each}
						</div>
					</div>
					{#if review.user_id === data.session?.user.userId}
						<div class="flex justify-end">
							<a
								href="/reviews/{review.id}/update"
								class="btn-icon btn-icon-sm variant-ghost-primary"><Pencil class="w-4 h-4" /></a
							>
						</div>
					{/if}
				</article>
			{/each}

			<div class="flex justify-center mt-3">
				<a href="/reviews/add/{data.string.id.trimEnd()}" class="btn variant-glass-primary"
					><Pencil class="mr-2 w-4 h-4" />Add Review</a
				>
			</div>
		</div>
		<div>
			<h2 class="mb-2 h2">YouTube Reviews</h2>
			<div class="space-y-4">
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
			</div>
		</div>
	</section>
</div>
