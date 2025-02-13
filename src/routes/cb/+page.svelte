<script lang="ts">
    import { Button } from '@/components/ui/button';
    import type { ActionData } from './$types';
    import { Search } from 'lucide-svelte';
    import { enhance } from '$app/forms';

    let { form }: { form: ActionData } = $props();
</script>

<div class="md:w-1/2 mx-auto">
    <form use:enhance method="post" action="?/search" class="flex flex-col py-5 space-y-3">
        <label class="w-full">
            <input type="text" placeholder="Search by name or domain..." name="club" id="" class="w-full outline-none border rounded-md pl-2 py-2 font-light text-sm text-center" />
            {#if form?.success}
                {#each form?.results as {name, domain}}
                    <div class="my-2">
                        <a href={`/cb/${domain}`}>
                            <p class="p-2 rounded-md hover:bg-slate-200 text-sm font-light underline">{name}</p>
                        </a>
                    </div>
                {/each}
            {/if}
        </label>
        <Button class="mx-auto" type="submit">
            <Search />
            Search
        </Button>
    </form>
</div>