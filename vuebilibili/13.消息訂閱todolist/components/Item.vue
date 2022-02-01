<template>
    <li>
      <label>
        <input type="checkbox" :checked="todos.done" @change="handleCheck(todos.id)"/>
        <span>{{ todos.title }}</span>
      </label>
    <button class="btn btn-danger" @click="removeItem(todos.id)">删除</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'Item',
  props:{
    todos:{
      type: Object,
      required: true
    },
  },
  methods:{
    handleCheck(id){
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    removeItem(id){
      if(confirm('確定刪除嗎？')){
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)

      }
    }
  }
  
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover{
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }
  .todo-enter-active{
    animation: todo 0.5s linear;
  }
  .todo-leave-active{
    animation: todo 0.5s linear reverse;
  }
  @keyframes todo {
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>