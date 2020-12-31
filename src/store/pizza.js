const namespaced = true
const state = {
    list:[]
};
const mutations = {
    FETCH_DETAILS(state) {
        state.list = [{
            name:'vaishu' ,
            status:'Received',
            Amount:'100'
        }]
    }
}
const actions = {
    fetchpizzaList({
        commit
    }) {
        commit('FETCH_DETAILS')

    },

}
export default {
    state,
    actions,
    mutations,
    namespaced
}
