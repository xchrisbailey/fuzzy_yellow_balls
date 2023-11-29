<script lang="ts">
	import type { SignupFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<SignupFormSchema>;
	const { form, errors, enhance } = superForm(data);
</script>

<form method="POST" use:enhance class="flex flex-col gap-4">
	<label class="label">
		<span>Email</span>
		<input
			class="input {$errors.email && 'input-error'}"
			aria-invalid={$errors.email ? 'true' : undefined}
			name="email"
			type="email"
			placeholder="email address"
			bind:value={$form.email}
		/>
		{#if $errors.email}<span class="text-sm text-rose-500">{$errors.email}</span>{/if}
	</label>
	<label class="label">
		<span>First Name</span>
		<input
			class="input {$errors.first_name && 'input-error'}"
			aria-invalid={$errors.first_name ? 'true' : undefined}
			name="first_name"
			type="text"
			placeholder="First Name"
			bind:value={$form.first_name}
		/>
		{#if $errors.first_name}<span class="text-sm text-rose-500">{$errors.first_name}</span>{/if}
	</label>
	<label class="label">
		<span>Last Name</span>
		<input
			class="input {$errors.last_name && 'input-error'}"
			aria-invalid={$errors.last_name ? 'true' : undefined}
			name="last_name"
			type="text"
			placeholder="Last Name"
			bind:value={$form.last_name}
		/>
		{#if $errors.last_name}<span class="text-sm text-rose-500">{$errors.last_name}</span>{/if}
	</label>
	<label class="label">
		<span>Password</span>
		<input
			class="input {$errors.password && 'input-error'}"
			aria-invalid={$errors.password ? 'true' : undefined}
			name="password"
			type="password"
			placeholder="password"
			bind:value={$form.password}
		/>
		{#if $errors.password}<span class="text-sm text-rose-500">{$errors.password}</span>{/if}
	</label>

	<button class="variant-soft-primary btn">Create Account</button>
</form>
