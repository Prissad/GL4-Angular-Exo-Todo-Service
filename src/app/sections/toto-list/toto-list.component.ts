import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-toto-list',
  templateUrl: './toto-list.component.html',
  styleUrls: ['./toto-list.component.css']
})
export class TotoListComponent{
  @Input() todos : Todo[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
