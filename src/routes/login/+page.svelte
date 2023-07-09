<script lang="ts">
    import { auth, user } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
    }
</script>

{#if $user}
    <h2 class="card-title">Welcome, {$user.displayName}</h2>
    <p class="text-green-300">You are logged in</p>
    <a class="btn btn-primary" href="/login/username">Choose a username</a>
    <button class="btn btn-danger" on:click={() => signOut(auth)}>Sign Out</button>
{:else}
    <h2>Sign In</h2>
    <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}
