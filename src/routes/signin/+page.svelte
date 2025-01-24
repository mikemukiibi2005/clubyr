<script lang="ts">

    import Header from "./Header.svelte";
    import SigninForm from "./SigninForm.svelte";

</script>
<div class="">
    <Header />
    <SigninForm />
    <div class="my-5 flex justify-center space-x-2">
        <p class="text-center font-light">First time?</p>
        <a href="/signup" class="underline font-light">Sign up</a>
    </div>
</div>