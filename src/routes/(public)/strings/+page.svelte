<script lang="ts">
	import { get_string_review_average_rating } from '$lib/helpers/get_average_rating';
	import { title_case } from '$lib/helpers/title_case';
	import { Eye, Pen, Plus } from 'lucide-svelte';
	import type { PageData } from './$types';

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
								<Eye size="15" />
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
		border-collapse: collapse;
		font-size: var(--font-sm);
		& thead {
			& tr {
				border-left: 1px solid var(--gray-100);
				border-right: 1px solid var(--gray-100);
			}
			& th {
				font-variation-settings:
					'wght' 700,
					'slnt' -4;
				letter-spacing: 0.05em;
				padding: 0.5em;
				background-color: var(--green-100);
				border-top: 1px solid var(--gray-100);
			}
		}
		& tbody {
			& tr:last-child {
				border-bottom: 1px solid var(--gray-100);
			}
			& tr:nth-of-type(even) td {
				background: var(--gray-50);
			}
			& td {
				border-top: 1px solid var(--gray-100);
				text-align: left;
				padding: 0.5em;
				border-left: 1px solid var(--gray-100);
				border-right: 1px solid var(--gray-100);
			}
			& tr:hover td {
				background-color: var(--gray-50);
			}
		}
	}

	.add_action {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
</style>
