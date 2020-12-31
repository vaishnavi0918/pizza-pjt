const namespaced = true
const state = {
    list:[],
    total_amount:''
};
const mutations = {
    FETCH_DETAILS(state) {
        state.list = [{
            name:'vaishu' ,
            items:'3',
            status:'Order Received',
            Amount:'400',
            status_id:'1'
        },
        {
            name:'Gayathri' ,
            items:'2',
            status:'Preparing',
            Amount:'250',
            status_id:'2'
        },
        {
            name:'Nasrin' ,
            items:'1',
            status:'Ready to Serve',
            Amount:'150',
            status_id:'3'
        },
        {
            name:'John' ,
            items:'2',
            status:'Order Received',
            Amount:'200',
            status_id:'1'
        }
    ],
        state.total_amount='1000'
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
