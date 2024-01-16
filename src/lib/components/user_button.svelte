<script lang="ts">
	import { enhance } from '$app/forms';
	import { title_case } from '$lib/helpers/title_case';
	import type { User as LuciaUser } from 'lucia';
	import { LogOut, Pen, User } from 'lucide-svelte';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let user: LuciaUser;

	let is_menu_open = false;
</script>

<svelte:window
	on:click={() => {
		if (is_menu_open) {
			is_menu_open = false;
		}
	}}
/>

<div
	class="user-menu-container"
	on:click|stopPropagation
	on:keydown|stopPropagation
	role="button"
	aria-pressed="false"
	tabindex="-1"
>
	<button class="user-button" on:click={() => (is_menu_open = !is_menu_open)}>
		{user.first_name[0]}{user.last_name[0]}
	</button>

	{#if is_menu_open}
		<div
			class="user-menu {is_menu_open && 'display_menu'}"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
		>
			<h2>
				{`${title_case(user.first_name)}  ${title_case(user.last_name)}`}
			</h2>
			<nav>
				<ul>
					<li>
						<a href="/profile" class="nav-button"><User size="15" />Profile</a>
					</li>
					<li>
						<a href="/activity" class="nav-button"><Pen size="15" />Activity</a>
					</li>
					<li>
						<form method="POST" action="/?/logout" use:enhance>
							<button type="submit">
								<LogOut size="15" />
								logout
							</button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</div>

<style>
	.user-menu {
		display: none;
		position: absolute;
		right: 0.5rem;
		margin-top: 0.2em;
		width: 250px;
		background: var(--gray-50);
		box-shadow:
			0 1px 1px oklch(0% 0 109 / 0.075),
			0 2px 2px oklch(0% 0 109 / 0.075),
			0 4px 4px oklch(0% 0 109 / 0.075),
			0 8px 8px oklch(0% 0 109 / 0.075),
			0 16px 16px oklch(0% 0 109 / 0.075);
		border-radius: 1em;
		padding: 0.2em;
		& h2 {
			font-size: var(--font-lg);
			padding: 0 0.5em;
			margin-bottom: 0.5em;
		}
		& ul {
			padding: 0 0.5em;
			& li a,
			li button {
				display: flex;
				align-items: center;
				font-size: var(--font-sm);
			}
			& li:not(:last-child) {
				margin-bottom: 0.5em;
			}
			& li button {
				background: var(--red-200);
				border-radius: 0.25em;
				padding: 0.4em 0.3em;
				width: 100%;
				margin-bottom: 0.25em;
				cursor: pointer;
				transition: background 0.2s ease-in-out;
				&:hover {
					background: var(--red-300);
				}
			}
		}
	}

	.nav-button {
		padding: 0.4em 0.3em;
		width: 100%;
		margin-bottom: 0.25em;
		cursor: pointer;
		color: var(--black);
	}

	li:has(.nav-button) {
		border-radius: 0.25em;
		background: var(--green-100);
		transition: background 0.2s ease-in-out;
		&:hover {
			background: var(--green-200);
		}
	}

	.user-button {
		display: grid;
		place-content: center;
		width: 2rem;
		height: 2rem;
		background: var(--green-400);
		border-radius: 100%;
		font-size: var(--font-xs);
		margin-left: 1rem;
		transition: background 0.2s ease-in-out;
		cursor: pointer;
		&:hover {
			background: var(--green-500);
		}
	}

	.display_menu {
		display: block;
	}
</style>
