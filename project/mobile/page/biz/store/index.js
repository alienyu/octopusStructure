Vue.use(Vuex);
import mutations from "./mutations.js"
import actions from "./actions.js"

const store = new Vuex.Store({
    state: {
        ajaxMask: false
    },
    mutations,
    actions,
    modules: {
        detail: require("./modules/detail")
    }
});

module.exports = store;