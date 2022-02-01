<template>
      <div class="demo">
        <h2>學生名稱： {{ studentName }} </h2>
        <h2>學生年齡： {{ age }} </h2>
      </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return{
        studentName: "Tommy",
        age: 20,
      }
    }
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>