<template>
    <div class="container">
      <Category title="美食" :listData="foods">
        <img slot="center" src="https://en.pimg.jp/074/481/360/1/74481360.jpg" alt="">
        <a slot="footer" href="http://www.atguigu.com">紹硅谷</a>
      </Category>
      <Category title="遊戲">
         <li slot="center" v-for="(g,index) in games" :key="index">
          {{g}}
          </li>
      </Category>
      <Category title="電影" :listData="films">
        <template v-slot:footer>
          <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </template>
      </Category>
    </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  components:{
    Category,
  },
  data(){
    return{
      foods:['火鍋','燒烤','小龍蝦','牛排'],
      games:['紅色警戒','穿越火線','勁舞團','超級瑪麗'],
      films:['楓之谷','傳說對決','德州鋪克','繼承者們']
    }
  }
}
</script>
<style>
  .container {
    display: flex;
    justify-content: space-around
    }
  
</style>
