<template>
    <li>
      <label>
        <input type="checkbox" :checked="todos.done" @change="handleCheck(todos.id)"/>
        <span v-show="!todos.isEdit">{{ todos.title }}</span>
        <input 
        v-show="todos.isEdit" 
        type="text" 
        :value="todos.title" 
        @blur="handleBlur(todos,$event)"
        ref="inputTitle"
        >
      </label>
    <button class="btn btn-danger" @click="removeItem(todos.id)">删除</button>
    <button v-show="!todos.isEdit" class="btn btn-edit" @click="handleEdit(todos)">編輯</button>

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
    },
    handleEdit(todos){
      // eslint-disable-next-line
      if(!todos.hasOwnProperty('isEdit')){
        this.$set(todos,'isEdit',true)
        console.log('222');
      }else {
        todos.isEdit = true
      }
      // console.log(todos);
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todos,e){
      todos.isEdit = false
      if(!e.target.value.trim()) return alert('輸入不能為空')
      this.$bus.$emit('updateTodo',todos.id,e.target.value)
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