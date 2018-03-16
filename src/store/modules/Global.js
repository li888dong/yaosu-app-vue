const state = {
    advertising:[],
    api:[],
    banner:[],
    goods:[],
    goodsList:[],
    procurement:[],
    ANN1:[],
    ANN2:[],
    FTN1:[],
    FTN2:[],
    PNO1:[],
    PNO2:[],
    TNO1:[],
    TNO2:[],
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
       state.goodsList = state.goodsList.concat(res)
    },
    clear_goodsList(state) {
       state.goodsList.length = 0
    },
    set_procurement(state, res) {
       state.procurement = res
    },
    set_ANN1(state, res) {
       state.ANN1 = res
    },
    set_ANN2(state, res) {
       state.ANN2 = res
    },
    set_FTN1(state, res) {
       state.FTN1 = res
    },
    set_FTN2(state, res) {
       state.FTN2 = res
    },
    set_PNO1(state, res) {
       state.PNO1 = res
    },
    set_PNO2(state, res) {
       state.PNO2 = res
    },
    set_TNO1(state, res) {
       state.TNO1 = res
    },
    set_TNO2(state, res) {
       state.TNO2 = res
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
    'clear_goodsList': function ({commit}, res) {
        commit('clear_goodsList', res)
    },
    'set_procurement': function ({commit}, res) {
        commit('set_procurement', res)
    },
    'set_ANN1': function ({commit}, res) {
        commit('set_ANN1', res)
    },
    'set_ANN2': function ({commit}, res) {
        commit('set_ANN2', res)
    },
    'set_FTN1': function ({commit}, res) {
        commit('set_FTN1', res)
    },
    'set_FTN2': function ({commit}, res) {
        commit('set_FTN2', res)
    },
    'set_PNO1': function ({commit}, res) {
        commit('set_PNO1', res)
    },
    'set_PNO2': function ({commit}, res) {
        commit('set_PNO2', res)
    },
    'set_TNO1': function ({commit}, res) {
        commit('set_TNO1', res)
    },
    'set_TNO2': function ({commit}, res) {
        commit('set_TNO2', res)
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
    ANN1: state => {
        return state.ANN1
    },
    ANN2: state => {
        return state.ANN2
    },
    FTN1: state => {
        return state.FTN1
    },
    FTN2: state => {
        return state.FTN2
    },
    PNO1: state => {
        return state.PNO1
    },
    PNO2: state => {
        return state.PNO2
    },
    TNO1: state => {
        return state.TNO1
    },
    TNO2: state => {
        return state.TNO2
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
