<script lang="ts">
    import Button from "@/components/ui/button/button.svelte";

    let wel_msg = $state("Welcome to clubyr.com")
</script>

<div class="flex flex-col space-y-7">
    <div>
        <p class="text-center font-medium">{wel_msg}</p>
        <p class="font-thin">Hub of the fastest growing school clubs!</p>
    </div>
    <Button class="max-w-min mx-auto">
        <a class="text-center" href="/join">Join the community!</a>
    </Button>
</div>