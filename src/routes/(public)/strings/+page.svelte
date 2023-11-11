<script lang="ts">
	import type { PageData } from './$types';
	import * as Table from '$lib/components/ui/table';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { title_case } from '$lib/helpers/title_case';
	import { Edit, Eye } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

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
				<Table.Head>Rating</Table.Head>
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
					<Table.Cell>4/5</Table.Cell>
					<Table.Cell class="flex gap-1 justify-between">
						<Tooltip.Root>
							<Tooltip.Trigger asChild let:builder>
								<Button
									builders={[builder]}
									href={`/strings/${string.id}`}
									size="icon"
									variant="ghost"><Eye class="w-4 h-4" /></Button
								>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>View String</p>
							</Tooltip.Content>
						</Tooltip.Root>
						{#if data.session?.user.role === 'Admin'}
							<Tooltip.Root>
								<Tooltip.Trigger asChild let:builder>
									<Button
										builders={[builder]}
										href={`/strings/${string.id}/update`}
										size="icon"
										variant="ghost"><Edit class="w-4 h-4" /></Button
									>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>Edit String</p>
								</Tooltip.Content>
							</Tooltip.Root>
						{/if}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
{/if}
