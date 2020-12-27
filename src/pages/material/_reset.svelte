<script>
    import { onMount } from "svelte";
    import PerfectScrollbar from "perfect-scrollbar";
    import SiderMenu from "../../components/SiderMenu.svelte";
    import TopBar from "../../components/TopBar.svelte";
    import BottomBar from "../../components/BottomBar.svelte";
    import SideSetting from "../../components/SideSetting.svelte";

    onMount(() => {
        const scrollbar = document.querySelector(".wrapper");
        const ps = new PerfectScrollbar(scrollbar);
    });
</script>

<div class="wrapper">
    <SiderMenu />

    <div class="main-panel">
        <TopBar />

        <div class="content">
            <div class="container-fluid">
                <slot />
            </div>
        </div>

        <BottomBar />
    </div>
</div>

<SideSetting />
