<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="mx-auto w-full md:w-2/3">
	<h1 class="gradient-heading-pink h1 mb-4 leading-relaxed">Log In</h1>
	<form method="POST" class="flex flex-col gap-4" use:enhance>
		<label class="label"
			><span>Email</span>
			<input
				type="text"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
				class="input {$errors.email ? 'input-error' : ''}"
			/>
			{#if $errors.email}<span class="text-sm text-rose-500">{$errors.email}</span>{/if}
		</label>

		<label class="label"
			><span>Password</span>
			<input
				type="password"
				name="password"
				aria-invalid={$errors.password ? 'true' : undefined}
				bind:value={$form.password}
				class="input {$errors.password ? 'input-error' : ''}"
			/>
			{#if $errors.password}<span class="text-sm text-rose-500">{$errors.password}</span>{/if}
		</label>

		<button class="variant-soft-primary btn">Log In</button>
	</form>
	<p>or <a href="/signup">signup</a></p>
</div>
