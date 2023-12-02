<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { Book, BookHeart, Home } from 'lucide-svelte';

	const drawerStore = getDrawerStore();
	function drawerClose() {
		drawerStore.close();
	}

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="p-3 md:p-0 list-nav">
	<ul>
		<li>
			<a href="/" on:click={drawerClose} class={classesActive('/')}>
				<span class="badge bg-primary-300"><Home class="w-4 h-4" /></span>
				<span class="flex-auto">home</span>
			</a>
		</li>
		<li>
			<a href="/strings" on:click={drawerClose} class={classesActive('/strings')}>
				<span class="badge bg-success-300"><Book class="w-4 h-4" /></span>
				<span class="flex-auto">strings</span></a
			>
		</li>
		<li>
			<a href="/" on:click={drawerClose} class={classesActive('/rackets')}
				><span class="badge bg-secondary-300"><BookHeart class="w-4 h-4" /></span>
				<span class="flex-auto">rackets</span>
			</a>
		</li>
	</ul>
</nav>
