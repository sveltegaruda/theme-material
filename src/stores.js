import { writable } from 'svelte/store'

const state = {
    sidebarFilter: {
        bgcolor: 'purple',
        bgimg: 'sidebar-1.jpg'
    },
    notify: {
        position: 'top-right',
        styleTopLeft: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; left: 20px;',
        styleTopCenter: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; left: 0px; right: 0px;',
        styleTopRight: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; right: 20px;',
        styleBottomLeft: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; bottom: 20px; left: 20px;',
        styleBottomCenter: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; bottom: 20px; left: 0px; right: 0px;',
        styleBottomRight: 'display: inline-block; margin: 15px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; bottom: 20px; right: 20px;',
        isRender: false
    },
    isMobile: false
}

const { subscribe, update } = writable(state)

const reset = () => update(state => {
    state.sidebarFilter = {
        bgcolor: 'purple',
        bgimg: 'sidebar-1.jpg'
    }
    return state
})

const setSidebarFilter = payload => update(state => {
    state.sidebarFilter = {
        bgcolor: payload.bgcolor,
        bgimg: payload.bgimg
    }
    return state
})

const setNotify = payload => update(state => {
    state.notify = {
        position: payload.position,
        isRender: payload.show
    }
    return state
})

const setMobile = payload => update(state => {
    state.isMobile = payload
    return state
})

export const links = [
    ["/material/index", "Dashboard", "dashboard", "داشبورد"],
    ["/material/user", "User", "person", "پروفایل کاربر"],
    ["/material/tables", "Tables", "content_paste", "جدول"],
    ["/material/typography", "Typography", "library_books", "تایپوگرافی"],
    ["/material/icons", "Icons", "bubble_chart", "آیکن‌ها"],
    ["/material/map", "Map", "location_ons", "نقشه"],
    ["/material/notifications", "Notifications", "notifications", "اعلان‌ها"],
    ["/material/rtl", "RTL Support", "language", "پشتیبانی از راست به چپ"],
    ["/", "Home", "unarchive", "پشتیبانی از"],
];

export default {
    subscribe,
    reset,
    setSidebarFilter,
    setNotify,
    setMobile
}
