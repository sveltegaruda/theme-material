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

    import store from "../../stores";
    $: stores = $store;

    let isMobile;
    const handleMobile = () => {
        isMobile = !stores.isMobile;
        store.setMobile(isMobile);
    };
</script>

<div class={stores.isMobile ? 'wrapper nav-open' : 'wrapper'}>
    <SiderMenu />

    <div class="main-panel">
        <TopBar on:handleMobile={handleMobile} />

        <div class="content">
            <div class="container-fluid">
                <slot />
            </div>
        </div>

        <BottomBar on:handleMobile={handleMobile} />
    </div>
</div>

<SideSetting />
