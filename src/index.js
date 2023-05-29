import ExpandOnTap from "./components/ExpandOnTap.vue"

export default {
    install: (app, options) => {
        app.components("ExpandOnTap", ExpandOnTap)
    }
}