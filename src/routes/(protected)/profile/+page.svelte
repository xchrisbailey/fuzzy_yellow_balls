<script lang="ts">
	import { title_case } from '$lib/helpers/title_case';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl scroll-m-20 text-primary">
	Hello {title_case(data.session.user.first_name)}
</h1>

<section class="grid grid-cols-2 gap-5">
	<article>
		<h2
			class="pb-2 text-3xl font-semibold tracking-tight border-b transition-colors first:mt-0 scroll-m-20"
		>
			Your reviews
		</h2>
	</article>
	<article>
		<h2
			class="pb-2 text-3xl font-semibold tracking-tight border-b transition-colors first:mt-0 scroll-m-20"
		>
			Edit Your Profile
		</h2>
	</article>
</section>
