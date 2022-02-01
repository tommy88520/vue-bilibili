<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot name="center">我是一點默認值</slot>
    <slot name="footer">我是一點默認值</slot>

    <!-- <ul>
      <li v-for="(item,index) in listData" :key="index">
        {{item}}
      </li>

    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Category',
  props:['title','listData'],
  data () {
   return {
     keyWord: '',
   };

  },

}
</script>

<style>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
    }
  h3 {
      text-align:center
  }
  video {
    width: 100%;
  }
  img {
    width: 100%;
  }
</style>