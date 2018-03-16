const state = {
    keywords: new Set(),
    resultList: [],
}

const mutations = {

    set_keywords(state, res) {
        state.keywords.add(res)
    },
    clear_keywords(state) {
        state.keywords.clear()
    },
    set_resultList(state, res) {
        state.resultList = state.resultList.concat(res)
    },
    clear_resultList(state) {
        state.resultList.length = 0
    }
}

const actions = {

    'set_keywords': function ({commit}, res) {
        commit('set_keywords', res)
    },
    'set_resultList': function ({commit}, res) {
        commit('set_resultList', res||[])
    },
    'clear_resultList': function ({commit}, res) {
        commit('clear_resultList', res||[])
    },
    'clear_keywords': function ({commit}, res) {
        commit('clear_keywords', res)
    },

}

const getters = {
    keywords: state => {
        return state.keywords
    },
    resultList: state => {
        return state.resultList
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}
