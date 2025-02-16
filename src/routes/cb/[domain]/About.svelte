<script lang="ts">
    let {about="This club is cool!"} = $props();
</script>

<div class="md:w-1/2 mx-auto space-y-5">
    <span class="flex flex-row space-x-2">
        <p class="font-light">About</p>
    </span>
    <span>
        <p class="text-sm">{about}</p>
    </span>
</div>