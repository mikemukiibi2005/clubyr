<script lang="ts">
    import About from "./About.svelte";
    import Domain from "./Domain.svelte";
    import Header from "./Header.svelte";
    import Stats from "./Stats.svelte";

    let { data } = $props();
    let { name, domain, about, category } = data;
</script>

<div class="container mx-auto py-5 space-y-5">
    <div class="container mx-auto">
        <Header {name} {category} />
    </div>
    <About {about} />
    <Domain {domain} />
    <Stats />
</div>