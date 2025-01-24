<script>

    import { Button } from "@/components/ui/button";
    import { Mail, Key } from 'lucide-svelte';
    import { UserPlus } from "lucide-svelte";

</script>
<div class="">
    <form method="post" action="?/signup" class="flex flex-col justify-center space-y-7">
        <label class="space-y-2">
            <span class="flex flex-row space-x-2 px-3">
                <Mail />
                <p class="font-light">Email</p>
            </span>
            <input placeholder="user@icloud.com" name="username" class="w-full border outline-none pl-3 py-2 font-light rounded-md" />
            
        </label>
        <label class="space-y-2">
            <span class="flex flex-row space-x-2 px-3">
                <Key />
                <p class="font-light">Password</p>
            </span>
            <input placeholder="********" name="password" type="password" class="w-full border outline-none pl-3 py-2 rounded-md" />
        </label>
        <Button type="submit">
            <UserPlus />
            Sign up
        </Button>
    </form>
</div>