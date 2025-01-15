<script lang="ts">
	import "../app.css";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "$lib/components/app-sidebar.svelte";
    import Footer from "./Footer.svelte";
	
	let { children } = $props();
</script>

<div class="container w-full mx-auto py-6">
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
