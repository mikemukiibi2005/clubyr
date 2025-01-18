<script lang="ts">
    let {domain="*.clubyr.com"} = $props();
    let full_domain = $derived.by(() => `${domain}.clubyr.com`)
</script>

<div class="space-y-5">
    <span class="flex flex-row space-x-2">
        <p class="font-light">Website</p>
    </span>
    <span>
        <a href={full_domain}>
            <p class="text-sm font-light underline">{full_domain}</p>
        </a>
    </span>
</div>