import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItodoArr } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   @Input() todoArr : Array<ItodoArr>= []
  @Output() removeTodo : EventEmitter<string> = new EventEmitter()
  @Output() editTodo : EventEmitter<ItodoArr> = new EventEmitter()
   onRemove(todoId : string){
    this.removeTodo.emit(todoId)
   }

   onEdit(todo: ItodoArr){
    this.editTodo.emit(todo)
   }

}
