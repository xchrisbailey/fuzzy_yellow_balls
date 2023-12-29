<script lang="ts">
	import { page } from '$app/stores';
	import { Book, BookHeart, Home } from 'lucide-svelte';

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="p-3 md:p-0 list-nav">
	<ul>
		<li>
			<a href="/" class={classesActive('/')}>
				<span><Home class="w-4 h-4" /></span>
				<span>home</span>
			</a>
		</li>
		<li>
			<a href="/strings" class={classesActive('/strings')}>
				<span><Book class="w-4 h-4" /></span>
				<span>strings</span></a
			>
		</li>
		<li>
			<a href="/rackets" class={classesActive('/rackets')}
				><span><BookHeart class="w-4 h-4" /></span>
				<span>rackets</span>
			</a>
		</li>
	</ul>
</nav>
