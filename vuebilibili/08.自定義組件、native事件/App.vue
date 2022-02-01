<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <Student @tommy="getStudentName" @click.native="demoNative"/>
    <Student ref="student"/>
  </div>
</template>

<script>
  import Student from './components/Student'
  import School from './components/School'

  export default {
    name: 'App',
    components: {
      Student,
      School
    },
    data () {
      return {
        msg: 'hello',
      }
    },
    methods: {
      getSchoolName(name){
        console.log(name);
      },
      getStudentName(name,...params){
        this.studentName = name;
        console.log('demo被調用了',name,params);
      },
      demoNative(){
        alert('native事件')
      }
    },
    mounted(){
      // setTimeout(()=>{
      //   this.$refs.student.$on('tommy',this.getStudentName)
      // },3000)
      //注意这里回调要写成剪头函数，不然this会丢失,这个this就是(vc)app,而不是(vc)student
      // this.$refs.student.$on('tommy', (name) => {
      //   console.log(this);
      //   console.log(name);
      //   this.studentName = name;
      // });
      this.$refs.student.$on('tommy', this.getStudentName);
    }
  }
</script>

<style scoped>
 .app {
   background-color: gray;
   padding: 20px

  }
</style>