<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import store from "../stores";
    $: stores = $store;

    export let position = "top-right";
    export let typenotif = "success";

    $: notifyStyle =
        position === "top-left"
            ? stores.notify.styleTopLeft
            : position === "top-center"
            ? stores.notify.styleTopCenter
            : position === "top-right"
            ? stores.notify.styleTopRight
            : position === "bottom-left"
            ? stores.notify.styleBottomLeft
            : position === "bottom-center"
            ? stores.notify.styleBottomCenter
            : position === "bottom-right"
            ? stores.notify.styleBottomRight
            : false;

    const handleNotify = () => {
        dispatch("handleNotify", {
            payload: {
                position,
                show: false,
            },
        });
    };
</script>

<div
    data-notify="container"
    class="col-11 col-md-4 alert alert-{typenotif} alert-with-icon animated fadeInDown"
    role="alert"
    data-notify-position={position}
    style={notifyStyle}>
    <button
        type="button"
        aria-hidden="true"
        class="close"
        data-notify="dismiss"
        style="position: absolute; right: 10px; top: 50%; margin-top: -9px; z-index: 1033;"
        on:click={handleNotify}><i class="material-icons">close</i></button><i
        data-notify="icon"
        class="material-icons">add_alert</i><span data-notify="title" />
    <span data-notify="message">Welcome to
        <b>Material Dashboard Pro</b>
        - a beautiful admin panel for every web developer.</span>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <!-- svelte-ignore a11y-missing-content -->
    <a href="#" target="_blank" data-notify="url" />
</div>
