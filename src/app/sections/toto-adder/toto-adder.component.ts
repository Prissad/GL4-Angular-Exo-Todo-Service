import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-toto-adder',
  templateUrl: './toto-adder.component.html',
  styleUrls: ['./toto-adder.component.css']
})
export class TotoAdderComponent {
  todo: Todo;
  @Input() set selectedTodo(value) {
    this.todo = value;
  };
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
