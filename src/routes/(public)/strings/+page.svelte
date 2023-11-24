<script lang="ts">
	import { Eye, Pen } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { title_case } from '$lib/helpers/title_case';
	import { get_average_rating } from '$lib/helpers/get_average_rating';

	export let data: PageData;
</script>

<h1 class="gradient-heading-pink h1 mb-3 leading-relaxed">Tennis Strings</h1>

{#if !data.strings || data.strings.length === 0}
	<p>no tennis strings added yet</p>
{:else}
	<div class="table-container">
		<table class="table table-hover">
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
						<td>{title_case(string.Brand.name)}</td>
						<td>{title_case(string.name)}</td>
						<td>{title_case(string.material)}</td>
						<td><p class="whitespace-pre-line">{string.description}</p></td>
						<td>{get_average_rating(string.Review)}/5</td>
						<td class="flex gap-3">
							<a href="/strings/{string.id}" class="variant-soft-primary btn-icon btn-icon-sm">
								<Eye class="h-4 w-4" />
							</a>
							{#if data.session?.user?.role === 'Admin'}
								<a
									href="/strings/{string.id}/update"
									class="variant-soft-secondary btn-icon btn-icon-sm"
								>
									<Pen class="h-4 w-4" />
								</a>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
