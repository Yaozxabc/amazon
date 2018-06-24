const state={
  orderlist:[],
  parms:{}
}
const getters={
  getorderFn:function(state){
    return state.orderlist
  }
}
const actions={
  fetchOrderList({commit,state}){
    Vue.http.get('http://localhost:8080/static/abc.json',state.parms).then((res)=>{
      commit('changeOrdelist',res.data.name)
    })
  }
}
const mutations={
  changeOrdelist(state,payload){
   state.orderlist=payload
  }
}


export  default ({
  state,
  getters,
  actions,
  mutations
})
