<script>
    import * as Accordion from "@/components/ui/accordion/index";


    import { Bookmark } from "lucide-svelte";

    let {shelf_name, date_created = new Date(), about="No info added."} = $props();
</script>

<div>
    <!-- <div class="flex flex-row space-x-4">
        <Bookmark />
        <p class="">{shelf_name}</p>
    </div> -->

    <Accordion.Root type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger class="">
            <span class="flex flex-row space-x-2">
                <Bookmark />
                <p class="">{shelf_name}</p> 
            </span>
          </Accordion.Trigger>
          <Accordion.Content>
            <div class="flex flex-col space-y-4">
                <span>
                    <p class="font-medium">About {shelf_name}</p>
                    <p>{about}</p>
                </span>
                
                <span>
                    <p class="font-medium">Created</p>
                    <p>{date_created.toLocaleTimeString()} {date_created.toLocaleDateString()}</p>
                </span>
            </div>
          </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>
