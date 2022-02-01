<template>
  <div>
    <h1>當前的和為{{ sum }}</h1>
    <h2>放大１０被的值{{ bigSum }}</h2>
    <h2>我在{{ school }},,,學習{{ subject}}</h2>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">當前求和基數</button>
    <button @click="incrementWait">等一下在家</button>


  </div>
</template>

<script>
import { mapState ,mapGetters} from 'vuex'
export default {
  name:'Count',
  data(){
    return {
      n:1,

    }
  },
  computed:{
    // sum(){
    //   return this.$store.state.sum
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    //   },
    // key的部分可隨便取名
    // ...mapState({ sum: 'sum',school:'school', subject:'subject',}),
    ...mapState(['sum','school','subject']),
    ...mapGetters(['bigSum'])
  },
  methods:{
    increment(){
      this.$store.commit('PLUS',this.n)
      // console.log(this);
    },
    decrement(){
      // this.sum -= this.n
      this.$store.commit('MINUS',this.n)

    },
    incrementOdd(){
     
      this.$store.dispatch('plusOdd',this.n)
      
    },
    incrementWait(){
      this.$store.dispatch('plusWait',this.n)
    }
  },
  mounted(){
    console.log(mapState({ sum: 'sum',school:'school', subject:'subject',}));
  }
}
</script>

<style>
  button,select { 
    margin-right: 5px
  }
</style>