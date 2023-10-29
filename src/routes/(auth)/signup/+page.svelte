<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<FormSchema>;
</script>

<div class="mx-auto w-1/3 max-w-full">
	<h1 class="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20">Sign Up</h1>
	<Form.Root method="POST" {form} schema={formSchema} let:config>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label>Email</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="first_name">
			<Form.Item>
				<Form.Label>First Name</Form.Label>
				<Form.Input />
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="last_name">
			<Form.Item>
				<Form.Label>Last Name</Form.Label>
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
		<a href="/login">or login</a>
	</p>
</div>
