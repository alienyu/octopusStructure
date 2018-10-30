const detail = {
    state: {
        type: "",
        id: ""
    },
    mutations: {
        changeType(state, type) {
            return state.type = type;
        },
        changeID(state, id) {
            return state.id = id;
        }
    },
    actions: {
        changeDetailInfo({commit}, params) {
            commit("changeType", params.detailType);
            commit("changeID", params.detailID);
        }
    }
};

module.exports = detail;