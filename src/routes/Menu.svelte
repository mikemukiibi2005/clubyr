	
<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Settings, UserPlus } from "lucide-svelte";
</script>
   
<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <Settings />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Group>
        <DropdownMenu.GroupHeading>My actions</DropdownMenu.GroupHeading>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
            <a href="/signup" class="underline">
                <p>Sign up</p>
            </a>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            <a href="/signin" class="underline">
                <p>Sign in</p>
            </a>
        </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Group>
            <DropdownMenu.GroupHeading>Club actions</DropdownMenu.GroupHeading>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
                <a href="/cb" class="underline">Search</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
                <a href="/onboarding" class="underline">Create</a>
            </DropdownMenu.Item>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
  
  