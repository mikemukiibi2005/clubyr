<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Plus } from "lucide-svelte";
</script>

<div class="mx-auto flex flex-row space-x-2">
    
    <Button href="/clubs/new" class="button text-center mx-auto">
        Create a club
        <Plus />
    </Button>
</div>