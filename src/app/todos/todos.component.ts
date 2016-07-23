import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service"
@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  todo;
  text;
  oldTodo;
  appState="default";
  constructor(private _todoService:TodoService) {}

  ngOnInit() {
    this.todos=this._todoService.getTodos();
    this.todo={text:""};
  }

  addTodo(){
    //console.log(this);
    let mitodo={text:this.todo.text};
    this.todos.push(mitodo);
    this._todoService.addTodo(mitodo);
  }
  deleteTodo(texto){
    for(var i=0;i<this.todos.length;i++){
      var todo=this.todos[i];
      if(todo.text==texto){
        this.todos.splice(i,1);
      }
    }
    this._todoService.removeTodo(texto);
  }
  editTodo(todo){
    this.appState="edit";
    //console.log(this.appState);
    //console.log(todo);
    this.todo.text=todo.text;
    let mitodo={text:todo.text};
    this.oldTodo=mitodo;
  }
  updateTodo(){
    console.log("Updating todo...");
    let mitodo={text:this.todo.text};
    console.log(this.oldTodo);
    console.log(mitodo);
    for(var i=0;i<this.todos.length;i++){
      var todo=this.todos[i];
      if(todo.text==this.oldTodo.text){
        todo.text=mitodo.text;
      }
    }
    this._todoService.updateTodo(this.oldTodo,mitodo);
  }
}
