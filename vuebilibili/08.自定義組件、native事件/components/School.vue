<template>
      <div class="school">
        <h2>學校年齡： {{ newAge }} </h2>
        <h2>學校年齡： {{ sex }} </h2>
        <h2>學校年齡： {{ name }} </h2>
          <button @click="sendSchoolName">給學校名</button>
      </div>
</template>

<script>
  export default {
    name: 'School',
    props:['getSchoolName'],
    data() {
      // console.log(this._props);
      return{
        name: '政治大學',
        sex: 'male',
        newAge: 19
      }
    },
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style scoped>
  .school{
    background-color: blueviolet;
    padding: 10px
  }
</style>