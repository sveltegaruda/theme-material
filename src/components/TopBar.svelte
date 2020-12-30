<script>
    import { onMount } from "svelte"
    import TopLinks from "./TopLinks.svelte";

    let isNotif = false;
    let isProfile = false;

    let toggler = null

    let isMenuVisible = false

    let html
    onMount(() => (html = document.getElementsByTagName("html")[0]))

    const toggleNav = () => {
        if (isMenuVisible) {
            html.classList.remove("nav-open")
            toggler.classList.remove("toggled")
            isMenuVisible = false
            return
        }

        html.classList.add("nav-open")
        toggler.classList.add("toggled")
        isMenuVisible = true
    }
</script>

<!-- Navbar -->
<nav
    class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
    <div class="container-fluid">
        <div class="navbar-wrapper">
            <TopLinks />
        </div>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
            bind:this={toggler}
            on:click={toggleNav}
        >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar" />
            <span class="navbar-toggler-icon icon-bar" />
            <span class="navbar-toggler-icon icon-bar" />
        </button>
        <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
                <div class="input-group no-border">
                    <input
                        type="text"
                        value=""
                        class="form-control"
                        placeholder="Search..." />
                    <button
                        type="submit"
                        class="btn btn-white btn-round btn-just-icon">
                        <i class="material-icons">search</i>
                        <div class="ripple-container" />
                    </button>
                </div>
            </form>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="nav-link" href="javascript:void(0);">
                        <i class="material-icons">dashboard</i>
                        <p class="d-lg-none d-md-block">Stats</p>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a
                        href="javascript:void(0)"
                        id="navbarDropdownMenuLink"
                        class="nav-link"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        on:click|preventDefault={() => (isNotif = !isNotif)}>
                        <i class="material-icons">notifications</i>
                        <span class="notification">5</span>
                        <p class="d-lg-none d-md-block">Some Actions</p>
                    </a>
                    <div
                        class={isNotif ? 'dropdown-menu dropdown-menu-right show' : 'dropdown-menu dropdown-menu-right'}
                        aria-labelledby="navbarDropdownMenuLink">
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Mike John responded to
                            your email</a>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">You have 5 new tasks</a>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">You're now friend with
                            Andrew</a>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Another Notification</a>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Another One</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a
                        href="javascript:void(0)"
                        id="navbarDropdownProfile"
                        class="nav-link"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        on:click|preventDefault={() => (isProfile = !isProfile)}>
                        <i class="material-icons">person</i>
                        <p class="d-lg-none d-md-block">Account</p>
                    </a>
                    <div
                        class={isProfile ? 'dropdown-menu dropdown-menu-right show' : 'dropdown-menu dropdown-menu-right'}
                        aria-labelledby="navbarDropdownProfile">
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Profile</a>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Settings</a>
                        <div class="dropdown-divider" />
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a class="dropdown-item" href="#">Log out</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->
