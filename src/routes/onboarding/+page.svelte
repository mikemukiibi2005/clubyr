<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { Info, PlusCircle } from 'lucide-svelte';

    let {form} = $props();
</script>

<div class="my-8">
    <p class="text-center">
        Get started!
    </p>
    <div class="p-4 ">
        <form action="?/create" method="post" class="form container w-full flex flex-col space-y-6">
            <label for="">
                <p class="font-light pl-2">Club name</p>
                <input type="text" name="club" id="" class="w-full font-light outline-none border border-1 pl-2 py-1 rounded-md" />
            </label>
            <label for="">
                <p class="font-light pl-2">Domain name</p>
                <input type="text" name="domain" id="" class="w-full font-light outline-none border border-1 pl-2 py-1 rounded-md" />
            </label>
            <Button type="submit" class="w-full mx-auto">
                Create
                <PlusCircle />
            </Button>
        </form>
    </div>
</div>

{#if form?.success}
    <div class="container mx-auto">
        <span class="flex flex-row space-x-1">
            <Info />
            <p>Created</p>
            <p>{form?.id}</p>
        </span>
    </div>
{/if}