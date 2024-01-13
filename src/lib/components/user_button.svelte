<script lang="ts">
	import { enhance } from '$app/forms';
	import { LogOut, Pen, User } from 'lucide-svelte';
	import type { User as LuciaUser } from 'lucia';
	import { title_case } from '$lib/helpers/title_case';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
			<h2 class="mb-1 gradient-heading-blue h3">
				{`${title_case(user.first_name)}  ${title_case(user.last_name)}`}
			</h2>
			<nav class="gap-4 list-nav">
				<ul>
					<li>
						<a href="/profile" class="flex align-middle"
							><User class="inline mr-2 w-4 h-4" />Profile</a
						>
					</li>
					<li>
						<a href="/activity" class="flex align-middle"
							><Pen class="inline mr-2 w-4 h-4" />Activity</a
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
	{/if}
</div>

<style>
	.user-menu {
		display: none;
		position: absolute;
		right: 0.5rem;
		margin-top: 0.2em;
		width: 250px;
		background: var(--green-100);
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
				& svg {
					width: 15px;
					height: 15px;
					margin-right: 0.25em;
				}
				font-size: var(--font-sm);
			}
			& li:not(:last-child) {
				margin-bottom: 0.5em;
			}
			& li button {
				background: var(--red-200);
				border-radius: 0.25em;
				padding: 0.35em;
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
