<script>
    import store from "../stores";
    $: stores = $store;

    const handleFilter = (payload) => {
        store.setSidebarFilter(payload);
    };

    let isSetting = false;
</script>

<div class="fixed-plugin">
    <div
        class={isSetting ? 'dropdown show-dropdown open show' : 'dropdown show-dropdown'}>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
            href="javascript:void(0)"
            data-toggle="dropdown"
            on:click|preventDefault={() => (isSetting = !isSetting)}>
            <i class="fa fa-cog fa-2x" />
        </a>
        <ul class="dropdown-menu">
            <li class="header-title">Sidebar Filters</li>
            <li class="adjustments-line">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                    href="javascript:void(0)"
                    class="switch-trigger active-color">
                    <div class="badge-colors ml-auto mr-auto">
                        <span
                            class="badge filter badge-purple"
                            data-color="purple"
                            on:click={() => handleFilter({
                                    bgcolor: 'purple',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                        <span
                            class="badge filter badge-azure"
                            data-color="azure"
                            on:click={() => handleFilter({
                                    bgcolor: 'azure',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                        <span
                            class="badge filter badge-green"
                            data-color="green"
                            on:click={() => handleFilter({
                                    bgcolor: 'green',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                        <span
                            class="badge filter badge-warning"
                            data-color="orange"
                            on:click={() => handleFilter({
                                    bgcolor: 'orange',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                        <span
                            class="badge filter badge-danger"
                            data-color="danger"
                            on:click={() => handleFilter({
                                    bgcolor: 'danger',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                        <span
                            class="badge filter badge-rose active"
                            data-color="rose"
                            on:click={() => handleFilter({
                                    bgcolor: 'rose',
                                    bgimg: stores.sidebarFilter.bgimg,
                                })} />
                    </div>
                    <div class="clearfix" />
                </a>
            </li>
            <li class="header-title">Images</li>
            <li class="active">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                    href="javascript:void(0)"
                    class="img-holder switch-trigger"
                    on:click={() => handleFilter({
                            bgcolor: stores.sidebarFilter.bgcolor,
                            bgimg: 'sidebar-1.jpg',
                        })}>
                    <img src="/assets/img/sidebar-1.jpg" alt="" />
                </a>
            </li>
            <li>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                    href="javascript:void(0)"
                    class="img-holder switch-trigger"
                    on:click={() => handleFilter({
                            bgcolor: stores.sidebarFilter.bgcolor,
                            bgimg: 'sidebar-2.jpg',
                        })}>
                    <img src="/assets/img/sidebar-2.jpg" alt="" />
                </a>
            </li>
            <li>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                    href="javascript:void(0)"
                    class="img-holder switch-trigger"
                    on:click={() => handleFilter({
                            bgcolor: stores.sidebarFilter.bgcolor,
                            bgimg: 'sidebar-3.jpg',
                        })}>
                    <img src="/assets/img/sidebar-3.jpg" alt="" />
                </a>
            </li>
            <li>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a
                    href="javascript:void(0)"
                    class="img-holder switch-trigger"
                    on:click={() => handleFilter({
                            bgcolor: stores.sidebarFilter.bgcolor,
                            bgimg: 'sidebar-4.jpg',
                        })}>
                    <img src="/assets/img/sidebar-4.jpg" alt="" />
                </a>
            </li>
            <li class="button-container">
                <a
                    href="https://www.creative-tim.com/product/assets"
                    target="_blank"
                    class="btn btn-primary btn-block">Free Download</a>
            </li>
            <!-- <li class="header-title">Want more components?</li>
              <li class="button-container">
                  <a href="https://www.creative-tim.com/product/assets-pro" target="_blank" class="btn btn-warning btn-block">
                    Get the pro version
                  </a>
              </li> -->
            <li class="button-container">
                <a
                    href="https://demos.creative-tim.com/assets/docs/2.1/getting-started/introduction.html"
                    target="_blank"
                    class="btn btn-default btn-block">
                    View Documentation
                </a>
            </li>
            <li class="button-container github-star">
                <a
                    class="github-button"
                    href="https://github.com/creativetimofficial/assets"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star ntkme/github-buttons on GitHub">Star</a>
            </li>
            <li class="header-title">Thank you for 95 shares!</li>
            <li class="button-container text-center">
                <button id="twitter" class="btn btn-round btn-twitter"><i
                        class="fa fa-twitter" />
                    &middot; 45</button>
                <button id="facebook" class="btn btn-round btn-facebook"><i
                        class="fa fa-facebook-f" />
                    &middot; 50</button>
                <br />
                <br />
            </li>
        </ul>
    </div>
</div>
