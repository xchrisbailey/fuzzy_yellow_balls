<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Tennis Strings</h1>

{#if !data.strings || data.strings.length === 0}
	<p>no tennis strings added yet</p>
{:else}
	{#each data.strings as string}
		{string.name}
	{/each}
{/if}
