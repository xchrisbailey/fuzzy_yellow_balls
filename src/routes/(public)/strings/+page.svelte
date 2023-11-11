<script lang="ts">
	import type { PageData } from './$types';
	import * as Table from '$lib/components/ui/table';
	import { title_case } from '$lib/helpers/title_case';
	import { Edit, Eye } from 'lucide-svelte';

	export let data: PageData;
</script>

<h1 class="mb-3">Tennis Strings</h1>

{#if !data.strings || data.strings.length === 0}
	<p>no tennis strings added yet</p>
{:else}
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Brand</Table.Head>
				<Table.Head>Model</Table.Head>
				<Table.Head>Material</Table.Head>
				<Table.Head>Description</Table.Head>
				<Table.Head></Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data.strings as string}
				<Table.Row>
					<Table.Cell class="font-medium">{title_case(string.Brand.name)}</Table.Cell>
					<Table.Cell>{title_case(string.name)}</Table.Cell>
					<Table.Cell>{title_case(string.material)}</Table.Cell>
					<Table.Cell>{string.description}</Table.Cell>
					<Table.Cell class="flex gap-4 justify-between"
						><Eye class="w-4 h-4" /> <Edit class="w-4 h-4" /></Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
