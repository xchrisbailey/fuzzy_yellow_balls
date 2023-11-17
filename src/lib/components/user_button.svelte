<script lang="ts">
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { LogOut, Pen, User } from 'lucide-svelte';

	const popup_avatar: PopupSettings = {
		event: 'click',
		target: 'popup_menu',
		placement: 'bottom'
	};
</script>

<button use:popup={popup_avatar}>
	<Avatar src="/tennis_ball.jpg" alt="tennis ball avatar" rounded="rounded-full" class="w-8" />
</button>
<div class="p-4 w-72 shadow-xl card" data-popup="popup_menu">
	My Account
	<a href="/profile" class="flex align-middle"><User class="inline mr-2 w-4 h-4" />Profile</a><a
		href="/"
		class="flex align-middle"><Pen class="inline mr-2 w-4 h-4" />Reviews</a
	>
	<form method="POST" action="/?/logout" use:enhance class="p-0 m-0">
		<button class="p-0 m-0 btn variant-filled-warning" type="submit">
			<LogOut class="mr-2 w-4 h-4 text-red-600" />
			logout
		</button>
	</form>
</div>
