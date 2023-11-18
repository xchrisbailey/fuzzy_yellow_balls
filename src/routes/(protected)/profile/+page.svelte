<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form);
</script>

<h1 class="mb-3 text-primary">
	Hello {title_case(data.session.user.first_name)}
</h1>

<section class="grid grid-cols-1 gap-5 md:grid-cols-2">
	<article>
		<h2>Your reviews</h2>
	</article>
	<article>
		<h2>Edit Your Profile</h2>
		<form method="POST" use:enhance class="flex flex-col gap-4">
			<label class="label">
				<span>Email</span>
				<input
					class="input variant-glass {$errors.email && 'input-error'}"
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
					class="input variant-glass {$errors.first_name && 'input-error'}"
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
					class="input variant-glass {$errors.last_name && 'input-error'}"
					aria-invalid={$errors.last_name ? 'true' : undefined}
					name="last_name"
					type="text"
					placeholder="Last Name"
					bind:value={$form.last_name}
				/>
				{#if $errors.last_name}<span class="text-sm text-rose-500">{$errors.last_name}</span>{/if}
			</label>

			<button class="variant-soft-secondary btn">Update Account</button>
		</form>
	</article>
</section>
