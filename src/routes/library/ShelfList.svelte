<script lang="ts">
  import ShelfCard from './ShelfCard.svelte';

    import { Book, Bookmark, Library } from "lucide-svelte";

    let shelf_list = $state([
        "Physics",
        "Coding",
        "Best of Wole Soyinka",
    ] as string[]);
</script>

<div class="container mx-auto my-6 space-y-4">
    <div class="flex flex-row space-x-4">
        <Library />
        <p class="font-light">My Collections</p>
    </div>
    {#each shelf_list as shelf_name}
        <ShelfCard {shelf_name} />
    {/each}
</div>
