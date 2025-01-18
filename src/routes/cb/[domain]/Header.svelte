<script lang="ts">
    import CategoryIcon from "./CategoryIcon.svelte";

    let {name, category} = $props();
</script>

<div class="flex flex-row space-x-4">
    <span class="">
        <CategoryIcon {category} />
    </span>
    <span>
        <p class="text-balance">{name}</p>
    </span>
</div>