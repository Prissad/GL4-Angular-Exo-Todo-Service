import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos;
  constructor() {
    this.todos = [
      new Todo("Lundi","Faire du Sport"),
      new Todo("Mardi","Avancer dans mes projets"),
      new Todo("Jeudi","Lire un livre")
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
