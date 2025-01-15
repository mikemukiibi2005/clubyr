<script lang="ts">
    import Calendar from "lucide-svelte/icons/calendar";
    import House from "lucide-svelte/icons/house";
    import Inbox from "lucide-svelte/icons/inbox";
    import Folder from "lucide-svelte/icons/folder";
    import Settings from "lucide-svelte/icons/settings";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    
    // Menu items.
    const items = [
     {
      title: "Home",
      url: "/",
      icon: House,
     },
     {
      title: "Clubs",
      url: "/clubs",
      icon: Folder,
     },
    //  {
    //   title: "Calendar",
    //   url: "#",
    //   icon: Calendar,
    //  },
    //  {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings,
    //  },
    ];
   </script>
    
<div class="">
    <Sidebar.Root>
        <Sidebar.Content>
            <Sidebar.Group>
            <Sidebar.GroupLabel>clubyr.com</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
            <Sidebar.Menu>
            {#each items as item (item.title)}
                <Sidebar.MenuItem>
                <Sidebar.MenuButton>
                {#snippet child({ props })}
                <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                </a>
                {/snippet}
                </Sidebar.MenuButton>
                </Sidebar.MenuItem>
            {/each}
            </Sidebar.Menu>
            </Sidebar.GroupContent>
            </Sidebar.Group>
        </Sidebar.Content>
        </Sidebar.Root>
</div>
