<script lang="ts">
    import CategoryIcon from "./CategoryIcon.svelte";

    let {id, name, category, cover_photo, collection_id}: {
            id:string,
            name:string,
            category:string,
            cover_photo:string,
            collection_id:string,
        } = $props();

    let cover_src = `http://localhost:8090/api/files/${collection_id}/${id}/${cover_photo}`;
</script>

<div class="flex justify-center space-x-2">
    <CategoryIcon {category} />
    <p>{name}</p>
</div>

<div class="my-5">
    <figure>
        <!-- svelte-ignore a11y_missing_attribute -->
        <img class="rounded-md w-full" src={cover_src} />
    </figure>
</div>

