<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { type FormSchema, formSchema as schema } from './schema';
	import * as Form from '$lib/components/ui/form';

	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} {schema} let:config>
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
	<Form.Button>Submit</Form.Button>
</Form.Root>
