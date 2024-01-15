<script lang="ts">
	import UserButton from './user_button.svelte';
	import type { Session } from 'lucia';
	import { Book, BookHeart, Home } from 'lucide-svelte';
	import { LogIn } from 'lucide-svelte';

	export let session: Session | null;
</script>

<header>
	<div class="brand">Fuzzy Yellow Balls</div>
	{#if !session?.user}
		<div class="login-link">
			<a href="/login"><LogIn /> login</a>
		</div>
	{:else}
		<div class="flex align-center nav-wrapper">
			<nav>
				<ul>
					<li><a href="/" class="nav-link"><Home /> home</a></li>
					<li><a href="/strings" class="nav-link"><Book /> strings</a></li>
					<li><a href="/rackets" class="nav-link"><BookHeart /> rackets</a></li>
				</ul>
			</nav>

			<UserButton user={session.user} />
		</div>
	{/if}
</header>

<style>
	header {
		display: flex;
		height: 4rem;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5em;
		margin-bottom: 1em;
		margin: 0px 1.5em 1em 1.5em;
		border-bottom: 1px solid var(--gray-50);
	}

	nav {
		font-size: var(--font-sm);
		height: 100%;
		display: flex;
		align-items: center;
		& ul {
			height: 100%;
			display: flex;
			align-items: stretch;
			& li {
				display: flex;
				align-items: center;
				padding: 0 0.5em;
				transition: background-color 0.2s ease-in-out;
				&:hover {
					background-color: var(--gray-50);
				}
			}
		}
	}

	.nav-link {
		color: var(--black);
		transition: color 0.2s ease-in-out;
		display: flex;
		align-items: center;
		&:hover {
			color: var(--green-700);
			text-decoration: none;
		}
		& svg {
			width: 15px;
			height: 15px;
			margin-right: 0.25em;
		}
	}

	.brand {
		font-size: var(--font-lg);
		font-variation-settings:
			'wght' 700,
			'slnt' -3;
		color: var(--green-800);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-left: 0.25em;
		background-image: var(--green-to-blue);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.nav-wrapper {
		height: 100%;
		align-items: center;
	}

	.login-link a {
		background: var(--green-200);
		border-radius: 0.25em;
		padding: 0.4em 0.3em;
		color: var(--black);
		transition: background 0.2s ease-in-out;
		& svg {
			width: 15px;
			height: 15px;
			margin-right: 0.25em;
		}
		&:hover {
			background: var(--green-300);
		}
	}
</style>
