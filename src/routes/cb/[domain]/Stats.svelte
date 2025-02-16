<script lang="ts">
    let {stats="This club has many users."} = $props();
</script>

<div class="md:w-1/2 mx-auto space-y-5">
    <span class="flex flex-row space-x-2">
        <p class="font-light">Stats</p>
    </span>
    <span>
        <p class="text-sm">{stats}</p>
    </span>
</div>