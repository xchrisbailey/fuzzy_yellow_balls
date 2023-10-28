<script lang="ts">
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from './ui/button';
	import { enhance } from '$app/forms';
	import { LogOut } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Avatar.Root>
			<Avatar.Image src="/tennis_ball.jpg" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Profile</DropdownMenu.Item>
			<DropdownMenu.Item>Reviews</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<form method="post" action="/logout?" use:enhance class="p-0 m-0">
				<Button variant="ghost" class="p-0 m-0">
					<LogOut class="w-4 h-4 mr-2 text-red-600" />
					logout
				</Button>
			</form>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
