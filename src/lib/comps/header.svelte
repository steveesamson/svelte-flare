<script lang="ts">
	import svelte from '$lib/images/svelte.svg';
	import github from '$lib/images/github.svg';
	import cloudflare from '$lib/images/cloudflare.svg';

</script>

<header class="text-center">
	
	<div class="corner flex items-center justify-center space-x-3 my-3 mx-auto">
		<a href="https://svelte.dev/docs/kit" >
			<img src={svelte} alt="SvelteKit"  class="w-16 h-16"/>
			<p>SvelteKit</p>
		</a>
		<a href="https://svelte.dev/docs/kit" >
			<img src={github} alt="SvelteKit" class="w-15 h-15"/>
			<p>GitHub</p>
		</a>
		<a href="https://svelte.dev/docs/kit" >
			<img src={cloudflare} alt="SvelteKit" class="w-16 h-16" />
			<p>Cloudflare</p>
		</a>
	</div>
	<!-- <p class="font-bold text-lg my-4">SveltKit + GitHub + Cloudflare</p> -->
</header>