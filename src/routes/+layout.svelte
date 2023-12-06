<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>


<div class="flex flex-col w-full container">
	<div class="p-6">
		{@render children()}
	</div>
</div>
