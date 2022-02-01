<template>
      <div class="demo">
        <h2>學生名稱： {{ studentInfo.studentName }} </h2>
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ studentInfo.sex }} </h2>
        <h2>學生年齡： {{ msg }} </h2>
        <button @click="changeSex">123456</button>

      </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      // console.log(this._props);
      return{
        msg: '我是天才',
        newAge: this.studentInfo.age
      }
    },
    methods:{
      changeSex(){
       this.newAge += 1
       console.log(this.newAge);
      }
    },
    props: {
      studentInfo:{
        type: Object,
        required:true
      }
    }
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>