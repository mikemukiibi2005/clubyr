<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    
    const frameworks = [
     {
      value: "ngo",
      label: "Namilyango College"
     },
     {
      value: "spena",
      label: "St. Peter's S.S. Naalya"
     },
     {
      value: "gungas",
      label: "Mt St Mary's College Namagunga"
     },
     {
      value: "gayazahs",
      label: "Gayaza High School"
     }
    ];
    
    let framework = $state("");
    const frameworkLabel = $derived(
     frameworks.find((f) => f.value === framework)?.label ?? "Select a school"
    );
   </script>
    
   <Card.Root class="w-[350px] mx-auto space-y-6">
    <Card.Header>
     <Card.Title>Create club</Card.Title>
     <Card.Description>Create your new club in one-click.</Card.Description>
    </Card.Header>
    <Card.Content>
     <form>
      <div class="grid w-full items-center gap-4">
       <div class="flex flex-col space-y-1.5">
        <Label for="name">Name</Label>
        <Input id="name" placeholder="Name of your club" />
       </div>
       <div class="flex flex-col space-y-1.5">
        <Label for="framework">School</Label>
        <Select.Root type="single" bind:value={framework}>
         <Select.Trigger id="framework">
          {frameworkLabel}
         </Select.Trigger>
         <Select.Content>
          {#each frameworks as framework}
           <Select.Item value={framework.value} label={framework.label} />
          {/each}
         </Select.Content>
        </Select.Root>
       </div>
      </div>
     </form>
    </Card.Content>
    <Card.Footer class="flex justify-between">
     <Button variant="outline">Cancel</Button>
     <Button>Create</Button>
    </Card.Footer>
   </Card.Root>