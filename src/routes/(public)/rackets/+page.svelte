<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { Eye, Pen } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mb-3 leading-relaxed gradient-heading-pink h1">Tennis Rackets</h1>

{#if !data.rackets || data.rackets.length === 0}
	<p>No rackets found</p>
{:else}
	<div class="table-container">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Name</th>
					<th>Brand</th>
					<th>Year</th>
					<th>Weight</th>
					<th>Balance</th>
					<th>Head Size</th>
					<th>Swingweight</th>
					<th>String Pattern</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each data.rackets as racket}
					<tr>
						<td>{title_case(racket.name)}</td>
						<td>{title_case(racket.brand.name)}</td>
						<td>{racket.year}</td>
						<td>{`${racket.weight} ${racket.weight_unit}`}</td>
						<td
							>{racket.balance}
							{racket.balance_unit === 'points' ? 'pts HL' : racket.balance_unit}</td
						>
						<td>{racket.head_size}</td>
						<td>{racket.swingweight}</td>
						<td>{`${racket.mains}M/${racket.crosses}C`}</td>

						<td class="flex gap-3">
							<a href="/rackets/{racket.id}" class="variant-soft-primary btn-icon btn-icon-sm">
								<Eye class="w-4 h-4" />
							</a>
							{#if data.session?.user?.role === 'ADMIN'}
								<a
									href="/rackets/{racket.id}/update"
									class="variant-soft-secondary btn-icon btn-icon-sm"
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
