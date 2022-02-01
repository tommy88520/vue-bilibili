<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        
        <MyHeader @addTodo="addTodo"></MyHeader>

        <List :todos="todos" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
        />
        
        <BoxFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></BoxFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import BoxFooter from './components/BoxFooter'
  import List from './components/List'
  import MyHeader from './components/MyHeader'

  export default {
    name: 'App',
    components: {
      BoxFooter,
      MyHeader,
      List,
    },
    data(){
      return {
        todos:[
          {id: '001', title: '吃飯', done: true},
          {id: '002', title: '喝酒', done: false},
          {id: '003', title: '運動', done: true}
        ],
      }
    },
    methods:{
      addTodo(x){
        this.todos.unshift(x)
      },
      checkTodo(id){
        this.todos.forEach((e)=>{
          if(e.id === id){
            e.done = !e.done
          }
        })
      },
      deleteTodo(id){
        this.todos = this.todos.filter((e)=>{
          return e.id !== id
        })
      },
      checkAllTodo(done){
        this.todos.forEach((e)=>{
          e.done = done
        })
      },
      clearAllTodo(){
        this.todos = this.todos.filter((e)=>{
          return !e.done
        })
      }
    }
  }
</script>

<style>
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit {
    color: #fff;
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 5px;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn-edit:hover {
    color: #fff;
    background-color: green;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>