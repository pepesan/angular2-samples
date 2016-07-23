import { Injectable } from '@angular/core';
import {Init} from './init-todos'
@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log("Servicio Todo inicializado...");
    this.load();
  }

  getTodos(){
    var todos=JSON.parse(localStorage.getItem("todos"));
    return todos;
  }
  addTodo(todo){
    var todos=JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  removeTodo(todoText){
    var todos=JSON.parse(localStorage.getItem("todos"));
    for(var i=0;i<todos.length;i++){
      var todo=todos[i];
      if(todo.text==todoText){
        todos.splice(i,1);
      }
    }
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  updateTodo(oldTodo,newTodo){
    var todos=JSON.parse(localStorage.getItem("todos"));
    for(var i=0;i<todos.length;i++){
      console.log(i);
      console.log(oldTodo.text);
      console.log(newTodo.text);
      var todo=todos[i];
      if(todo.text==oldTodo.text){
        console.log("encontrado");
        todo.text=newTodo.text;
      }
    }
    localStorage.setItem("todos",JSON.stringify(todos));
  }

}
