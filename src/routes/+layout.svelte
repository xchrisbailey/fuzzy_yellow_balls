<script lang="ts">
	import { enhance } from '$app/forms';
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header>
	{#if !data.session?.user}
		<a href="/login">login</a>
	{:else}
		<form method="post" action="/logout?" use:enhance>
			<button>logout</button>
		</form>
	{/if}
</header>
<slot />
