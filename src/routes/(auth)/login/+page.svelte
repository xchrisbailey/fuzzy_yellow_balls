<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { type FormSchema, schema } from './schema';
	import * as Form from '$lib/components/ui/form';

	export let form: SuperValidated<FormSchema>;
</script>

<div class="mx-auto w-1/3 max-w-full">
	<h1 class="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20">Log In</h1>
	<Form.Root method="POST" {form} {schema} let:config>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>Email</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label>password</Form.Label>
				<Form.Input type="password" />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>Submit</Form.Button>
	</Form.Root>

	<p class="mt-2 font-medium leading-none hover:underline text-small text-primary">
		<a href="/signup">or sign up</a>
	</p>

	{#if form?.message}
		<p class="error">{form.message}</p>
	{/if}
</div>
