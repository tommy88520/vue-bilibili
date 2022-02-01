<template>
  <div>
    <img v-bind:src="imgSrc" alt="logo" ref="title">
    <img src="./assets/logo.png" alt="logo">
    <h1>{{ imgSrc }}</h1>
    <button @click="showDOM">test</button>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'
  export default {
    name: 'App',
    components: {
      School,
      Student
    },
    data () {
      return {
        imgSrc:'./assets/logo.png',
        msg: 'hello'
      }
    },
    methods: {
      showDOM(){
        console.log(this.$refs.title);
      }
    }
  }
</script>

<style>

</style>