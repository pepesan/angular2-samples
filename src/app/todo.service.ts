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

}
