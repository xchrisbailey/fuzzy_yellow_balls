<script lang="ts">
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from './ui/button';
	import { enhance } from '$app/forms';
	import { LogOut, Pen, User } from 'lucide-svelte';
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
			<DropdownMenu.Item
				><a href="/profile" class="flex align-middle"><User class="inline mr-2 w-4 h-4" />Profile</a
				></DropdownMenu.Item
			>
			<DropdownMenu.Item
				><a href="/" class="flex align-middle"><Pen class="inline mr-2 w-4 h-4" />Reviews</a
				></DropdownMenu.Item
			>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<form method="post" action="/logout?" use:enhance class="p-0 m-0">
				<Button variant="ghost" class="p-0 m-0">
					<LogOut class="mr-2 w-4 h-4 text-red-600" />
					logout
				</Button>
			</form>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
