<script>

    import JoinButton from "./JoinButton.svelte";
    import SearchButton from "./SearchButton.svelte";

</script>
<div class="container mx-auto flex flex-col space-y-6">
    <div class="flex flex-col space-y-4">
        <p class="font-thin text-center">Hub of the fastest growing school clubs!</p>
    </div>
    <div class="flex flex-row justify-around space-x-2">
        <JoinButton />
        <SearchButton />
    </div>
    
</div>