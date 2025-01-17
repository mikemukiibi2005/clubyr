<script lang="ts">
    import { Library } from "lucide-svelte";

    let lib_name = $state("Michael's Library")
</script>

<div class="container mx-auto flex flex-col space-y-4">
    <span class="font-light flex flex-row space-x-2">
        <Library />
        <p>My library</p>
    </span>
    <span>
        <p class="font-thin">{lib_name}</p>
        <p class="text-xs font-thin">Created {new Date().toLocaleTimeString()} {new Date().toLocaleDateString()}</p>
    </span>
</div>