<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { PlusCircle } from 'lucide-svelte';

    let {form} = $props();
</script>

<div class="my-8">
    <p class="font-extralight text-center text-lg my-5">
        Get started...
    </p>
    <div class="">
        <form action="?/create" method="post" class="flex flex-col space-y-9" enctype="multipart/form-data">
            <label for="">
                <p class="font-light pl-2">About</p>
                <input placeholder="Tell them about it..." required type="text" name="about" id="" class="w-full font-light outline-none border border-1 pl-2 py-2 rounded-md" />
            </label>
            <label for="">
                <p class="font-light pl-2">Club name</p>
                <input placeholder="What is your club's name..?" required type="text" name="name" id="" class="w-full font-light outline-none border border-1 pl-2 py-2 rounded-md" />
            </label>
            <label for="">
                <p class="font-light pl-2">Domain</p>
                <input placeholder="https://*.clubyr.com" required type="text" name="domain" id="" class="w-full font-light outline-none border border-1 pl-2 py-2 rounded-md" />
            </label>
            <label for="">
                <p class="font-light pl-2">Cover photo</p>
                <input placeholder="" required accept=".jpg, .jpeg, .png, .webp" type="file" name="cover" id="" class="w-full font-light text-xs outline-none border border-1 pl-2 py-2 rounded-md" />
            </label>
            <Button type="submit" class="">
                <PlusCircle />
                Create
            </Button>
        </form>
    </div>
</div>

{#if form?.success}
    <div class="">
        <span class="container mx-auto flex flex-row justify-center space-x-1">
            <a href={`/cb/${form?.domain}/`}>
                <p class="underline font-light text-sm">{`${form?.domain}.clubyr.com`}</p>
            </a>
        </span>
    </div>
{/if}