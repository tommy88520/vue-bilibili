<template>
  <div>
    <button @click="isShow = !isShow">顯示隱藏</button>
    <transition name="hello" :appear="true">
      <h2 v-show="isShow">過度動畫</h2>
    
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return{
      isShow:true,
    }
  }
}
</script>

<style>
  h2 {
    background-color: green;
  }
  .hello-enter-active {
    animation: tommy 1s linear;
    /* transition: 1s; */
    /* animation-delay: 1s; */
  }
  .hello-leave-active{
    animation: tommy 1s reverse;
  }
  @keyframes tommy{
    from{
      transform: translateX(-100%);
    } to {
      transform: translateX(0px);
      
    }
  }
</style>