<script lang="ts">

    import Button from "@/components/ui/button/button.svelte";
    import Header from "./Header.svelte";
    import SignupForm from "./SignupForm.svelte";

</script>

<div class="mb-5">
    <Header />
    <SignupForm />
    <div class="my-5 flex justify-center space-x-2">
        <p class="text-center font-light">Signed already up?</p>
        <a href="signin" class="underline font-light">Sign in</a>
    </div>
</div>