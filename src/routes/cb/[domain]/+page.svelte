<script lang="ts">
    import About from "./About.svelte";
    import Domain from "./Domain.svelte";
    import Header from "./Header.svelte";
    import Stats from "./Stats.svelte";

    let { data } = $props();
    let { id, name, domain, about, category, cover_photo, collection_id } : {
        id:string,
        name:string,
        domain:string,
        about:string,
        category:string,
        cover_photo:string,
        collection_id:string,
    } = data;
</script>

<div class="py-5 space-y-5">
    <Header {id} {cover_photo} {name} {category} {collection_id} />
    <About {about} />
    <Domain {domain} />
    <Stats />
</div>