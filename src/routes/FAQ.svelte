<script lang="ts">
    import * as Accordion from "@/components/ui/accordion/index";
   </script>
    
   <Accordion.Root type="single" class="w-full mx-auto  sm:max-w-[70%]">
    <Accordion.Item value="item-1">
     <Accordion.Trigger>What is clubyr.com?</Accordion.Trigger>
     <Accordion.Content
      >Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content
     >
    </Accordion.Item>
    <Accordion.Item value="item-2">
     <Accordion.Trigger>What is your goal / mission?</Accordion.Trigger>
     <Accordion.Content>
      Yes. It comes with default styles that matches the other components'
      aesthetic.
     </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
     <Accordion.Trigger>What benefit is it?</Accordion.Trigger>
     <Accordion.Content>
      Yes. It's animated by default, but you can disable it if you prefer.
     </Accordion.Content>
    </Accordion.Item>
   </Accordion.Root>