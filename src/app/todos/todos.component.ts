import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {
    this.todos=[
      {
        text:"hacer la compra"
      },
      {
        text: "revisar el coche"
      }
    ];
    this.todo={text:""};
  }

  addTodo(){
    //console.log(this);
    let mitodo={text:this.todo.text};
    this.todos.push(mitodo);
  }

}
