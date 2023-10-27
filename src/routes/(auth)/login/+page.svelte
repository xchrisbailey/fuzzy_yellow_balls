<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { type FormSchema, formSchema } from './schema';
	import * as Form from '$lib/components/ui/form';

	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
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

{#if form?.message}
	<p class="error">{form.message}</p>
{/if}
