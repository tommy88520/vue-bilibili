<template>
      <div class="school">
        <h2>學校年齡： {{ newAge }} </h2>
        <h2>學校年齡： {{ sex }} </h2>
        <h2>學校年齡： {{ name }} </h2>
      </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      // console.log(this._props);
      return{
        name: '政治大學',
        sex: 'male',
        newAge: 19
      }
    },
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('school',data);
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
  }
</script>

<style scoped>
  .school{
    background-color: blueviolet;
    padding: 10px
  }
</style>