<template>
      <div class="student">
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ sex }} </h2>
        <h2>學生年齡： {{ studentName }} </h2>
        <button @click="sendStudentName">給學生名</button>
        <button @click="unbind">解綁事件</button>
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
        this.$emit('tommy',this.studentName,123,666,999)
      },
      unbind(){
        this.$off('tommy')
        //this.$off(['tommy', 'demo']) 解綁多格事件寫法
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