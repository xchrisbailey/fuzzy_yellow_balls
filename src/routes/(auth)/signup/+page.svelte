<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="POST" use:enhance>
	<input type="text" name="email" />
	<input type="password" name="password" />
	<button>Sign Up</button>
</form>

{#if form?.message}
	<p class="error">{form.message}</p>
{/if}
