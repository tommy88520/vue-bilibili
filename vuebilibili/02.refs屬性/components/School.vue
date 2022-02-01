<template>
      <div class="school">
        <h2>學校名稱： {{ schoolName }} </h2>
        <h2>學校地址： {{ address }} </h2>
      </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return{
        schoolName: "政大大學",
        address:'木柵',
      }
    }
  }
</script>

<style>
  .demo{
    background-color: orange;
  }
</style>