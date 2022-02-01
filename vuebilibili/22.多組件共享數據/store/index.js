import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
  // plus(context,val) {
   
  //   context.commit('PLUS',val)
  // },
  // minus(context,val){
  //   context.commit('MINUS',val)

  // },
  plusOdd(context,val){
    if(context.state.sum % 2) {
      context.commit('PLUSODD',val)
    }
  },
  plusWait(context,val){
     setTimeout(()=>{
       context.commit('PLUSWAIT',val)
     },500)
    
  }
}
const mutations = {
  PLUS(state,val){
    // console.log('mutations被調用了',a,b);
    state.sum += val

  },
  MINUS(state,val){
    // console.log('mutations被調用了',a,b);
    state.sum -= val

  },
  PLUSODD(state,val){
    state.sum += val
  },
  PLUSWAIT(state,val){
    state.sum += val
  },
  ADD_PERSON(state, val){
    state.personList.unshift(val)
  }
}
const state = {
  sum:0,
  school:'政治大學',
  subject:'前端',
  personList:[
    {id:'001',name:'TommyHuang'}
  ]
}
const getters= {
  bigSum(state){
    return state.sum * 10
  }
}
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters

})

export default store