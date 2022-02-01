<template>
  <div>
    <h1>人員列表</h1>
    <h3>Count的合:{{ sum }}</h3>
    <input type="text" placeholder="請輸入你想要的" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState} from 'vuex'
export default {
  name:'Person',
  data(){
    return {
      name: ''
    }
  },
  computed:{
    // personList(){
    //   // return this.$store.state.personList
      
    // }
    ...mapState(['personList','sum'])
  },
  methods:{
    add(){
      const personObj = { id: nanoid(), name:this.name}
      this.name = ''
      this.$store.commit('ADD_PERSON',personObj)
    }
    // const personObj = { id: nanoid(), name:this.name}
    // ...mapActions(['add'])
  }
}
</script>

<style>

</style>