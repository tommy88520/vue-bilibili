<template>
      <div class="student">
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ sex }} </h2>
        <h2>學生年齡： {{ studentName }} </h2>
        <button @click="sendStudentName">123456</button>
      </div>
</template>

<script>
import pubsub from 'pubsub-js'

  export default {
    name: 'Student',
    data() {
      // console.log(this._props);
      return{
        studentName: '我是天才',
        sex: 'male',
        newAge: 19
      }
    },
    methods:{
      sendStudentName(){
        pubsub.publish('hello',666)
      }
    }
  }
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 10px
  }
</style>