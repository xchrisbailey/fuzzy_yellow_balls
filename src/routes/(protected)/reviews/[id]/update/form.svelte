<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { schema, type Schema } from './schema';
	import { Label } from '$lib/components/ui/label';

	export let form: SuperValidated<Schema>;
</script>

<h1 class="mb-2">Add A Review</h1>
<Form.Root method="POST" action="?/add" {form} {schema} let:config>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="grid grid-cols-2 gap-4">
			<Form.Field {config} name="power">
				<Form.Item class="space-y-3">
					<Form.Label>Power</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.power.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="spin">
				<Form.Item class="space-y-3">
					<Form.Label>Spin</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.spin.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="feel">
				<Form.Item class="space-y-3">
					<Form.Label>Feel</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.feel.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="control">
				<Form.Item class="space-y-3">
					<Form.Label>Control</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.control.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="durability">
				<Form.Item class="space-y-3">
					<Form.Label>Durability</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.durability.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="comfort">
				<Form.Item class="space-y-3">
					<Form.Label>Comfort</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.comfort.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="playability">
				<Form.Item class="space-y-3">
					<Form.Label>Playability</Form.Label>
					<Form.RadioGroup class="flex space-y-1" value={form.data.playability.toString()}>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="1" id="1" />
							<Label for="1" class="font-normal">1</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="2" id="2" />
							<Label for="2" class="font-normal">2</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="3" id="3" />
							<Label for="3" class="font-normal">3</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="4" id="4" />
							<Label for="4" class="font-normal">4</Label>
						</Form.Item>
						<Form.Item class="flex items-center space-y-0 space-x-3">
							<Form.RadioItem value="5" id="5" />
							<Label for="5" class="font-normal">5</Label>
						</Form.Item>
					</Form.RadioGroup>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</div>
		<div>
			<Form.Field {config} name="comments">
				<Form.Item>
					<Form.Label>Comments</Form.Label>
					<Form.Textarea placeholder="your thoughts on the string" rows={5} />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Button type="submit">Add</Form.Button>
		</div>
	</div>
</Form.Root>
