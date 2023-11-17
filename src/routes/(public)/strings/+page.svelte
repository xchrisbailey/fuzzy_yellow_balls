<script lang="ts">
	import { Eye, Pen } from 'lucide-svelte';
	import type { PageData } from './$types';
	// import { title_case } from '$lib/helpers/title_case';
	// import { Edit, Eye } from 'lucide-svelte';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const string_table: TableSource = {
		head: ['Brand', 'Model', 'Material', 'Description', 'Rating', ''],
		body: tableMapperValues(data.strings, [
			'Brand.name',
			'name',
			'material',
			'description',
			'rating',
			'id'
		])
	};
</script>

<h1 class="mb-3">Tennis Strings</h1>

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
						<td>{string.Brand.name}</td>
						<td>{string.name}</td>
						<td>{string.material}</td>
						<td>{string.description}</td>
						<td>0/0</td>
						<td class="flex gap-3">
							<a href="/strings/{string.id}" class="btn-icon variant-soft-primary btn-icon-sm">
								<Eye class="w-4 h-4" />
							</a>
							{#if data.session?.user?.role === 'Admin'}
								<a
									href="/strings/{string.id}/update"
									class="btn-icon variant-soft-secondary btn-icon-sm"
								>
									<Pen class="w-4 h-4" />
								</a>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
