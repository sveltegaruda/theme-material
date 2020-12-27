<script>
    import { onMount } from "svelte";
    import { url, isActive } from "@roxi/routify";
    import store, { links } from "../stores";
    import PerfectScrollbar from "perfect-scrollbar";

    $: stores = $store;

    onMount(() => {
        const scrollbar = document.querySelector(".sidebar-wrapper");
        const ps = new PerfectScrollbar(scrollbar);
    });
</script>

<div
    class="sidebar"
    data-color={stores.sidebarFilter.bgcolor}
    data-background-color="white"
    data-image="/assets/img/{stores.sidebarFilter.bgimg}">
    <!--
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      -->
    <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
            <strong>Svelte Garuda</strong><br />
            <small>Supported by Creative Tim </small>
        </a>
    </div>

    <div class="sidebar-wrapper">
        <ul class="nav">
            {#each links as [path, name, icon]}
                <li class:active={$isActive(path)} class="nav-item">
                    <a class="nav-link" href={$url(path)}>
                        <i class="material-icons">{icon}</i>
                        <p>{name}</p>
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div
        class="sidebar-background"
        style="background-image: url('/assets/img/{stores.sidebarFilter.bgimg}')" />
</div>
