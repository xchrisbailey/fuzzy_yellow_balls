<script>
	import { Book, Home } from 'lucide-svelte';
</script>

<nav class="list-nav">
	<ul>
		<li>
			<a href="/">
				<span class="badge bg-primary-300"><Home class="w-4 h-4" /></span>
				<span class="flex-auto">home</span>
			</a>
		</li>
		<li>
			<a href="/strings">
				<span class="badge bg-success-300"><Book class="w-4 h-4" /></span>
				<span class="flex-auto">strings</span></a
			>
		</li>
	</ul>
</nav>
