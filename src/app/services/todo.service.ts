import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos;
  constructor() {
    this.todos = [
      new Todo("Travailler","Faire mes tâches"),
      new Todo("Projets","Faire mes projets"),
      new Todo("Repeat","Refaire les deux")
    ];
  }

  save(todo: Todo) {
    let n = false;
    for(let t of this.todos)
      if(t.id===todo.id){
        t.name = todo.name;
        t.content = todo.content;
        n = true;
      }
    if(!n)
      this.todos.push(todo)
  }

  all() {
    return this.todos;
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter(function(value, index, arr){ return value.id !== todo.id;});
  }

}
