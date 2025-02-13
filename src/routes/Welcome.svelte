<script>
    import JoinButton from "./JoinButton.svelte";
    import SearchButton from "./SearchButton.svelte";
</script>

<div class="flex flex-col space-y-6">
    <div class="flex flex-col space-y-4">
        <p class="font-thin text-center">Hub of the fastest growing school clubs!</p>
    </div>

    <div class="flex justify-center space-x-2">
        <div>
            <JoinButton />
        </div>
        <div>
            <SearchButton />
        </div> 
    </div>
</div>