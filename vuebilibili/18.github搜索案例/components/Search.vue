<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
   return {
     keyWord: '',
   };

  },
  methods:{
    searchUsers(){
      this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then((r)=>{
        // console.log(r.data.items);
        this.$bus.$emit('getUsers',{isFirst:false,isLoading:false,errMsg:'',users:r.data.items})
        
      },error=>{
       this.$bus.$emit('getUsers',{isFirst:false,isLoading:false,errMsg:error,users:[]})})
    },
    
  }
}
</script>

<style>

</style>