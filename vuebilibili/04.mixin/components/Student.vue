<template>
      <div class="demo">
        <h2>學生年齡： {{ newAge }} </h2>
        <h2>學生年齡： {{ sex }} </h2>
        <h2>學生年齡： {{ msg }} </h2>
        <button @click="showName">123456</button>
        <button @click="showName2">66666</button>
      </div>
</template>

<script>
import { mixin, mixin2 } from '../mixin'
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
    mixins:[mixin,mixin2]
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>