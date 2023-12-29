<script lang="ts">
	import { goto } from '$app/navigation';
	import type { SignupFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<SignupFormSchema>;

	const { form, errors, enhance } = superForm(data, {
		async onUpdated({ form }) {
			if (form.message) {
				// toast.trigger({
				// 	message: form.message.text,
				// 	background:
				// 		form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				// });

				if (form.message?.type === 'success') {
					await goto('/profile');
				}
			}
		}
	});
</script>

<form method="POST" use:enhance>
	<label>
		<span>Email</span>
		<input
			aria-invalid={$errors.email ? 'true' : undefined}
			id="email"
			name="email"
			type="email"
			placeholder="email address"
			bind:value={$form.email}
		/>
		{#if $errors.email}<span>{$errors.email}</span>{/if}
	</label>
	<label>
		<span>First Name</span>
		<input
			aria-invalid={$errors.first_name ? 'true' : undefined}
			id="first_name"
			name="first_name"
			type="text"
			placeholder="First Name"
			bind:value={$form.first_name}
		/>
		{#if $errors.first_name}<span>{$errors.first_name}</span>{/if}
	</label>
	<label>
		<span>Last Name</span>
		<input
			aria-invalid={$errors.last_name ? 'true' : undefined}
			id="last_name"
			name="last_name"
			type="text"
			placeholder="Last Name"
			bind:value={$form.last_name}
		/>
		{#if $errors.last_name}<span>{$errors.last_name}</span>{/if}
	</label>
	<label>
		<span>Password</span>
		<input
			aria-invalid={$errors.password ? 'true' : undefined}
			id="password"
			name="password"
			type="password"
			placeholder="password"
			bind:value={$form.password}
		/>
		{#if $errors.password}<span>{$errors.password}</span>{/if}
	</label>

	<button>Create Account</button>
</form>
