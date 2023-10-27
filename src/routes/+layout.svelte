<script>
	import { enhance } from '$app/forms';
	import '../app.postcss';
</script>

<header>
	<form method="post" action="/logout?" use:enhance>
		<button>logout</button>
	</form>
</header>
<slot />

