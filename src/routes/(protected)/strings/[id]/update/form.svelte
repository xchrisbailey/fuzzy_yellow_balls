<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { Brand } from '@prisma/client';
	import { schema, type FormSchema } from './schema';

	export let form: SuperValidated<FormSchema>;
	export let current_brand: Brand | undefined;
	export let brands: Brand[];

	const materials = ['polyester', 'multifilament', 'natural gut', 'synthetic gut'];
</script>

<Form.Root method="POST" {schema} {form} let:config class="flex flex-col gap-4">
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Name</Form.Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="brand">
		<Form.Item>
			<Form.Label>Brand</Form.Label>
			<Form.Select selected={{ value: current_brand?.id ?? undefined, label: current_brand?.name }}>
				<Form.SelectTrigger placeholder="Select The Strings Brand" />
				<Form.SelectContent>
					{#each brands as brand}
						<Form.SelectItem value={brand.id}>{brand.name}</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="material">
		<Form.Item>
			<Form.Label>Material</Form.Label>
			<Form.Select selected={{ value: form.data.material, label: form.data.material }}>
				<Form.SelectTrigger placeholder="Select the Strings Material" />
				<Form.SelectContent>
					{#each materials as material}
						<Form.SelectItem value={material}>{material}</Form.SelectItem>
					{/each}
				</Form.SelectContent>
			</Form.Select>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="description">
		<Form.Item>
			<Form.Label>Description</Form.Label>
			<Form.Textarea placeholder="Add a description of this string" class="resize-none" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button type="submit">Update</Form.Button>
</Form.Root>
