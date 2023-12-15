<script lang="ts">
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { LogOut, Pen, User } from 'lucide-svelte';
	import type { User as LuciaUser } from 'lucia';
	import { title_case } from '$lib/helpers/title_case';

	export let user: LuciaUser;
	const popup_avatar: PopupSettings = {
		event: 'click',
		target: 'popup_menu',
		placement: 'left-start'
	};
</script>

<button use:popup={popup_avatar}>
	<Avatar
		src="/tennis_ball.jpg"
		alt="tennis ball avatar"
		rounded="rounded-full"
		class="w-[2.5rem] shadow hover:rotate-45"
		border="border-2 border-primary-300-600-token hover:!border-primary-400 transition duration-200"
		cursor="cursor-pointer"
	/>
</button>

<div class="card z-50 w-72 p-4 shadow-xl" data-popup="popup_menu">
	<h2 class="gradient-heading-blue h3 mb-1">
		{`${title_case(user.first_name)}  ${title_case(user.last_name)}`}
	</h2>
	<nav class="list-nav gap-4">
		<ul>
			<li>
				<a href="/profile" class="flex align-middle"><User class="mr-2 inline h-4 w-4" />Profile</a>
			</li>
			<li>
				<a href="/activity" class="flex align-middle"><Pen class="mr-2 inline h-4 w-4" />Activity</a
				>
			</li>
			<li>
				<form method="POST" action="/?/logout" use:enhance class="flex flex-col">
					<button class="variant-filled-warning btn" type="submit">
						<LogOut class="mr-2 h-4 w-4 text-warning-800" />
						logout
					</button>
				</form>
			</li>
		</ul>
	</nav>
</div>
