<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { htmlUnescape } from 'escape-goat';
	import type { PageData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Pencil1 } from 'radix-icons-svelte';

	export let data: PageData;
</script>

<h1 class="mb-4">{title_case(data.string.name)} by {title_case(data.string.Brand.name)}</h1>
<div class="grid grid-cols-2 gap-4">
	<section>
		<article>
			<h2>Info</h2>
			<p>{data.string.description}</p>
		</article>
	</section>
	<section>
		<div class="mb-4">
			<h2>User Reviews</h2>
			<p>reviews here...</p>

			<div class="flex justify-center">
				<Button href="/strings/{data.string.id.trimEnd()}/review/add" variant="secondary"
					><Pencil1 class="mr-2 h-4 w-4" />Add Review</Button
				>
			</div>
		</div>
		<div>
			<h2 class="mb-4">YouTube Reviews</h2>
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
