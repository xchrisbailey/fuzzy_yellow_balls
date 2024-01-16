<script lang="ts">
	import { Eye, Pen, Plus } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { get_string_review_average_rating } from '$lib/helpers/get_average_rating';

	export let data: PageData;
</script>

<h1>Tennis Strings</h1>

{#if !data.strings || data.strings.length === 0}
	<p>no tennis strings added yet</p>
{:else}
	<div>
		<table>
			<thead>
				<tr
					><th>Brand</th>
					<th>Name</th>
					<th>Material</th>
					<th>Description</th>
					<th>Rating</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each data.strings as string}
					<tr>
						<td>{title_case(string.brand.name)}</td>
						<td>{title_case(string.name)}</td>
						<td>{title_case(string.material)}</td>
						<td><p>{string.description}</p></td>
						<td>{get_string_review_average_rating(string.reviews)}/5</td>
						<td>
							<a href="/strings/{string.id}">
								<Eye />
							</a>
							{#if data.session?.user?.role === 'ADMIN'}
								<a href="/strings/{string.id}/update">
									<Pen />
								</a>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<div class="add_action">
	<a href="/strings/add"><Plus /></a>
</div>

<style>
	h1 {
		font-size: var(--font-xl);
		font-variation-settings:
			'wght' 700,
			'slnt' -3;
		background-image: var(--green-to-blue);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 0.25em;
	}
	table {
		width: 100%;
		& thead tr th {
			font-size: var(--font-sm);
			font-variation-settings: 'wght' 700;
		}
	}

	.add_action {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
