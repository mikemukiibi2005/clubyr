<script>

    import { Button } from "@/components/ui/button";
    import { Mail } from 'lucide-svelte';
    import { UserPlus } from "lucide-svelte";
    import { Key } from 'lucide-svelte';

</script>
<div class="">
    <form method="post" action="?/signin" class="flex flex-col justify-center space-y-5">
        <label class="space-y-2">
            <span class="flex flex-row space-x-2 px-3">
                <Mail />
                <p class="font-light">Email</p>
            </span>
            <input placeholder="user@icloud.com" name="email" class="w-full border outline-none pl-3 py-2 font-light rounded-md" />
            
        </label>
        <label class="space-y-2">
            <span class="flex flex-row space-x-2 px-3">
                <Key />
                <p class="font-light">Password</p>
            </span>
            <input placeholder="*******" name="password" type="password" class="w-full border outline-none pl-3 py-2 rounded-md" />
        </label>
        <Button type="submit">
            <UserPlus />
            Sign in
        </Button>
    </form>
</div>