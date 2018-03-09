const state = {
    advertising:[],
    api:[],
    banner:[],
    goods:[],
    goodsList:[],
    procurement:[],
    service:[],
    tcm:[]
}

const mutations = {
    DECREMENT_MAIN_COUNTER(state) {
        // state.main--
    },
    INCREMENT_MAIN_COUNTER(state) {
        // state.main++
    },
    set_advertising(state, res) {
       state.advertising = res
    },
    set_api(state, res) {
       state.api = res
    },
    set_banner(state, res) {
       state.banner = res
    },
    set_goods(state, res) {
       state.goods = res
    },
    set_goodsList(state, res) {
       state.goodsList = res
    },
    set_procurement(state, res) {
       state.procurement = res
    },
    set_service(state, res) {
       state.service = res
    },
    set_tcm(state, res) {
       state.tcm = res
    },

}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    },
    'set_advertising': function ({commit}, res) {
        commit('set_advertising', res)
    },
    'set_api': function ({commit}, res) {
        commit('set_api', res)
    },
    'set_banner': function ({commit}, res) {
        commit('set_banner', res)
    },
    'set_goods': function ({commit}, res) {
        commit('set_goods', res)
    },
    'set_goodsList': function ({commit}, res) {
        commit('set_goodsList', res)
    },
    'set_procurement': function ({commit}, res) {
        commit('set_procurement', res)
    },
    'set_service': function ({commit}, res) {
        commit('set_service', res)
    },
    'set_tcm': function ({commit}, res) {
        commit('set_tcm', res)
    }
}

const getters = {
    advertising: state => {
        return state.advertising
    },
    api: state => {
        return state.api
    },
    banner: state => {
        return state.banner
    },
    goods: state => {
        return state.goods
    },
    goodsList: state => {
        return state.goodsList
    },
    procurement: state => {
        return state.procurement
    },
    service: state => {
        return state.service
    },
    tcm: state => {
        return state.tcm
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}
