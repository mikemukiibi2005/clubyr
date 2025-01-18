<script lang="ts">
    import { Lightbulb, Users } from "lucide-svelte";

    let {category="This club is cool!"} = $props();
</script>

{#if category=="tech"}
    <Lightbulb />
{:else}
    <Users />
{/if}