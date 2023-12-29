<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LoginFormSchema } from '$lib/form_schemas';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<LoginFormSchema>;

	// Initialize stores (temp until can be done better way for testing)

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
	<label
		><span>Email</span>
		<input
			type="text"
			name="email"
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
		/>
		{#if $errors.email}<span>{$errors.email}</span>{/if}
	</label>

	<label
		><span>Password</span>
		<input
			type="password"
			name="password"
			aria-invalid={$errors.password ? 'true' : undefined}
			bind:value={$form.password}
		/>
		{#if $errors.password}<span>{$errors.password}</span>{/if}
	</label>

	<button>Log In</button>
</form>
