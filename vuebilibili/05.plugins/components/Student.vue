<template>
      <div class="demo">
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ sex }} </h2>
        <h2>學生年齡： {{ msg }} </h2>

      </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      // console.log(this._props);
      return{
        msg: '我是天才',
        sex: 'male',
        newAge: 19
      }
    },
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>