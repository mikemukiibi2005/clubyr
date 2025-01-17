<script lang="ts">
	import "../app.css";
    import Footer from "./Footer.svelte";
	
	let { children } = $props();
</script>

<div class="container w-full h-fit mx-auto py-6">
	<a href="/">
		<p class="text-center underline">clubyr.com</p>
	</a>
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
