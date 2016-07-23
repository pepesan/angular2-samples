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
  constructor(private _todoService:TodoService) {}

  ngOnInit() {
    this.todos=this._todoService.getTodos();
    this.todo={text:""};
  }

  addTodo(){
    //console.log(this);
    let mitodo={text:this.todo.text};
    this.todos.push(mitodo);
  }
  deleteTodo(texto){
    for(var i=0;i<this.todos.length;i++){
      var todo=this.todos[i];
      if(todo.text==texto){
        this.todos.splice(i,1);
      }
    }
  }
}
