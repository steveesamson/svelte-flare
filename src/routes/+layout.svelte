<script lang="ts">
	import Footer from '$lib/comps/footer.svelte';
	import Header from '../lib/comps/header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="app flex flex-col h-screen">
	<Header />
	<main class="grow overflow-y-auto mx-auto my-4">{@render children()}</main>
	<Footer/>
</div>

