<script lang="ts">
    import Button from "@/components/ui/button/button.svelte";

    let wel_msg = $state("Welcome to clubyr.com")
</script>

<div class="flex flex-col space-y-7">
    <div>
        <p class="text-center font-medium">{wel_msg}</p>
        <p class="font-thin text-center">Hub of the fastest growing school clubs!</p>
    </div>
</div>