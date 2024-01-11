<script lang="ts">
	import type { Session } from 'lucia';
	import { Book, BookHeart, Home } from 'lucide-svelte';
	import { LogIn } from 'lucide-svelte';

	export let session: Session | null;
</script>

<header>
	<div class="brand">Fuzzy Yellow Balls</div>
	<div>
		{#if !session?.user}
			<a href="/login"><LogIn /> login</a>
		{:else}
			<nav>
				<ul>
					<li><a href="/"><Home /> home</a></li>
					<li><a href="/strings"><Book /> strings</a></li>
					<li><a href="/rackets"><BookHeart /> rackets</a></li>
				</ul>
			</nav>
			<!-- <UserButton user={session.user} /> -->
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		height: 4rem;
		justify-content: space-between;
		align-items: center;
		padding: 0.5em;
		margin-bottom: 1em;
		margin: 0px 1.5em 1em 1.5em;
		border-bottom: 1px solid var(--gray-50);
	}

	nav {
		font-size: var(--font-sm);
		margin-right: 1em;
		& ul {
			display: flex;
			gap: 2em;
			& li {
				display: flex;
				align-items: center;
				gap: 0.2em;
				& svg {
					width: 15px;
					height: 15px;
					margin-right: 0.25em;
				}
			}
		}
		& a {
			color: var(--black);
			transition: color 0.2s ease-in-out;
			&:hover {
				color: var(--green-700);
				text-decoration: none;
			}
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
</style>
