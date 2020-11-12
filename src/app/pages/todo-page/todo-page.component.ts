import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos : Todo[];
  selectedTodo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
    this.resetTodo();
  }

  resetTodo() {
    const emptyTodo = new Todo("","");
    this.selectedTodo = emptyTodo;
  }

  saveTodo(todo) {
    this.todoService.save(todo);
    this.getTodos();
    this.resetTodo();
  }

  selectTodo(todo) {
    this.selectedTodo = todo;
  }

  getTodos() {
    this.todos = this.todoService.all();
    console.log(this.todos)
  }

  cancel() {
    this.resetTodo();
  }

  deleteTodo(todo) {
    this.todoService.delete(todo);
    this.getTodos();
  }

}
