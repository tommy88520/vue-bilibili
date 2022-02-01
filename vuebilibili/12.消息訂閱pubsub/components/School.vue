<template>
      <div class="school">
        <h2>學校年齡： {{ newAge }} </h2>
        <h2>學校年齡： {{ sex }} </h2>
        <h2>學校年齡： {{ name }} </h2>
      </div>
</template>

<script>
import pubsub from 'pubsub-js'

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
      // a是數據名,b是數據
      this.pubId = pubsub.subscribe('hello',(a,b)=>{
        console.log('有人發布hello消息',a,b);
        // 這裡如果不是用箭頭函數 this是undefined
      })
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pubId)
    }
   
  }
</script>

<style scoped>
  .school{
    background-color: blueviolet;
    padding: 10px
  }
</style>