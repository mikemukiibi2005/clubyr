<script lang="ts">
	import "../app.css";
    import Footer from "./Footer.svelte";
    import Menu from "./Menu.svelte";
	
	let { children } = $props();
</script>

<div class="container w-full mx-auto">
	<div class="flex justify-center space-x-2 py-7">
		<a href="/">
			<p class="text-center underline">clubyr.com</p>
		</a>
		<Menu />
	</div>
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
