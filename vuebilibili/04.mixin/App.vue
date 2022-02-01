<template>
  <div>
    <Student :studentInfo="studentInfo" />
  </div>
</template>

<script>
  import Student from './components/Student'
  export default {
    name: 'App',
    components: {
      Student
    },
    data () {
      return {
        msg: 'hello',
        studentInfo: {
          studentName: 'tommy',
          sex: 'male',
          age: 11
        }
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