<script>
    import { url, isActive } from "@roxi/routify";
    import { links } from "../stores";
</script>

{#each links as [path, name]}
    {#if $isActive(path)}
        <a class="navbar-brand" href={$url(path)}>{name}</a>
    {/if}
{/each}
