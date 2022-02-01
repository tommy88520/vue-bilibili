import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const countOptions = {
  namespaced: true,
  actions:{
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
  },
  mutations:{
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
  },
  state:{
    sum:0,
    school:'政治大學',
    subject:'前端',
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  },
}

const personOptions = {
  namespaced: true,
  actions:{
    
  },
  mutations:{
    ADD_PERSON(state, val){
      state.personList.unshift(val)
    }
  },
  state:{
    personList:[
      {id:'001',name:'TommyHuang'}
    ]
  },
  getters:{},
}
const store = new Vuex.Store({
  modules:{
    countOptions,
    personOptions
  }

})

export default store