<script lang="ts">
    import * as Accordion from "@/components/ui/accordion/index";
   </script>
    
<div class="w-11/12 my-6">
    <Accordion.Root type="single" class="sm:max-w-[70%]">
        <Accordion.Item value="item-1">
            <Accordion.Trigger>What is clubyr.com?</Accordion.Trigger>
            <Accordion.Content
            ><p class="inline underline">clubyr.com</p> is a hub for high school clubs to collaborate and grow.</Accordion.Content
            >
        </Accordion.Item>
        <Accordion.Item value="item-2">
            <Accordion.Trigger>What is our mission?</Accordion.Trigger>
            <Accordion.Content>
            To connect clubs with similar goals and ambitions for the greater good.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
            <Accordion.Trigger>What is our vision?</Accordion.Trigger>
            <Accordion.Content>
            To become the leading hub for useful and lasting social connections, at high school and beyond.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
            <Accordion.Trigger>What benefit is it?</Accordion.Trigger>
            <Accordion.Content>
            Yes. It's animated by default, but you can disable it if you prefer.
            </Accordion.Content>
        </Accordion.Item>
        </Accordion.Root>
</div>