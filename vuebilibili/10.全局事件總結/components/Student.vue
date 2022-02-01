<template>
      <div class="student">
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ sex }} </h2>
        <h2>學生年齡： {{ studentName }} </h2>
        <button @click="sendStudentName"></button>
      </div>
</template>

<script>
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
        this.$bus.$emit('hello',666)
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