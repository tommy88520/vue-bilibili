<template>
  <div id="app">
    <button @click="getStudents">獲取信息</button>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'App',
    data(){
      return {
        name:'tommy'
      }
    },
    methods:{
    getStudents(){
      // 如果是正常開發，這裡的domain主機也要改成自己的主機
      axios.get('https://jsonplaceholder.typicode.com/users').then((r)=>{
        console.log(r.data);
      },
      error => {
        console.log(error.message);
      }
      )
    }
    }
  }
</script>

