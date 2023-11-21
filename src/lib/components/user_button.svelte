<script lang="ts">
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { LogOut, Pen, User } from 'lucide-svelte';
	import type { User as LuciaUser } from 'lucia/dist/auth';
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
		class="shadow hover:rotate-45 w-[2.5rem]"
		border="border-2 border-primary-300-600-token hover:!border-primary-400 transition duration-200"
		cursor="cursor-pointer"
	/>
</button>

<div class="z-50 p-4 w-72 shadow-xl card" data-popup="popup_menu">
	<h2 class="mb-1 gradient-heading-blue h3">
		{`${title_case(user.first_name)}  ${title_case(user.last_name)}`}
	</h2>
	<nav class="gap-4 list-nav">
		<ul>
			<li>
				<a href="/profile" class="flex align-middle"><User class="inline mr-2 w-4 h-4" />Profile</a>
			</li>
			<li>
				<a href="/activity" class="flex align-middle"><Pen class="inline mr-2 w-4 h-4" />Activity</a
				>
			</li>
			<li>
				<form method="POST" action="/?/logout" use:enhance class="flex flex-col">
					<button class="variant-filled-warning btn" type="submit">
						<LogOut class="mr-2 w-4 h-4 text-warning-800" />
						logout
					</button>
				</form>
			</li>
		</ul>
	</nav>
</div>
