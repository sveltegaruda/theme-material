<script>
    import SiderMenu2 from "../../../components/SiderMenuRtl.svelte";
    import TopBar2 from "../../../components/TopBarRtl.svelte";
    import SideSetting from "../../../components/SideSetting.svelte";
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css?family=Cairo&amp;subset=arabic"
        rel="stylesheet" />
    <link
        href="/assets/css/material-dashboard-rtl.css?v=1.1"
        rel="stylesheet" />
</svelte:head>

<div class="wrapper">
    <SiderMenu2 />

    <div class="main-panel" style="float: left;">
        <TopBar2 />

        <div class="content">
            <div class="container-fluid">
                <slot />
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="float-left">
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">
                                    تیم خلاق
                                </a>
                            </li>
                            <li>
                                <a href="https://creative-tim.com/presentation">
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">
                                    بلاگ
                                </a>
                            </li>
                            <li>
                                <a href="https://www.creative-tim.com/license">
                                    اجازه نامه
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="copyright float-right">
                        &copy; 2020, ساخته شده با
                        <i class="material-icons">favorite</i>
                        توسط
                        <a
                            href="https://www.creative-tim.com"
                            target="_blank">تیم خلاق</a>
                        برای وب بهتر.
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>

<SideSetting />
