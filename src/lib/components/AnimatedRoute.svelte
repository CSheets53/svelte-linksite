<script lang="ts">
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
</script>

<!--subscribe to page url so that animation plays on change-->
{#key $page.url}
    <div in:fly={{ x: '-100%', duration: 500 }}>
        <slot />
    </div>
{/key}
