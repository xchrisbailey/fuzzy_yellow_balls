<script lang="ts">
	import type { LoginFormSchema } from '$lib/form_schemas';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<LoginFormSchema>;

	const toast = getToastStore();

	const { form, errors, enhance } = superForm(data, {
		onUpdated({ form }) {
			if (form.message) {
				toast.trigger({
					message: form.message.text,
					background:
						form.message.type === 'error' ? 'variant-filled-error' : 'variant-filled-success'
				});
			}
		}
	});
</script>

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
