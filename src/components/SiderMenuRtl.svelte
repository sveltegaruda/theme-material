<script>
    import { onMount } from "svelte";
    import PerfectScrollbar from "perfect-scrollbar";
    import { url, isActive } from "@roxi/routify";
    import store, { links } from "../stores";

    $: stores = $store;

    onMount(() => {
        const scrollbar = document.querySelector(".sidebar-wrapper");
        const ps = new PerfectScrollbar(scrollbar);
    });
</script>

<style>
    /*
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4 {
        font-family: "Cairo";
    }
*/
    .nav i {
        float: right;
        margin-left: 15px;
        margin-right: unset;
    }
</style>

<div
    class="sidebar"
    data-color={stores.sidebarFilter.bgcolor}
    data-background-color="white"
    data-image="/assets/img/{stores.sidebarFilter.bgimg}"
    style="left: unset;right: 0;text-align: right;">
    <!--
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      -->
    <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
            <small>تیم خلاق </small><strong>Svelte</strong>
        </a>
    </div>

    <div class="sidebar-wrapper">
        <ul class="nav" style="padding-right: 0;">
            {#each links as [path, name, icon, arabic]}
                <li class:active={$isActive(path)} class="nav-item">
                    <a class="nav-link" href={$url(path)}>
                        <i class="material-icons">{icon}</i>
                        <p title={name}>{arabic}</p>
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div
        class="sidebar-background"
        style="background-image: url('/assets/img/{stores.sidebarFilter.bgimg}')" />
</div>
