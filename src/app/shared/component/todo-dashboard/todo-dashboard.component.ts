import { Component, OnInit } from '@angular/core';
import { ItodoArr } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private _matSnackBar : MatSnackBar) { }

  snackBar(msg : string){
    this._matSnackBar.open(msg,'close',{
      duration: 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    })
  }

  ngOnInit(): void {
  }

  todoArr : Array<ItodoArr>= [
    {
      todoItem : 'HTML',
      todoId : '123'
    },
    {
      todoItem : 'CSS',
      todoId : '124'
    },
    {
      todoItem : 'Javascript',
      todoId : '125'
    },
    {
      todoItem : 'Angular',
      todoId : '126'
    }
  ]


  onAddTodo(todo : ItodoArr){
    this.todoArr = [todo, ...this.todoArr]
  }
  
  onRemoveTodo(todoId : string){
    let isConfirm = confirm('Are you sure want to remove this todoItem !!!')
    if(isConfirm){
      this.todoArr = this.todoArr.filter(f=>f.todoId !== todoId)
      this.snackBar('The todoItem is removed successfully !!!')
    }
  }
  editTodo ! : ItodoArr
  onEditTodo(todo: ItodoArr){
    this.editTodo = todo
  }

  onUpdateTodo(updated : ItodoArr){
    let getIndex = this.todoArr.findIndex(id=>id.todoId === updated.todoId)
    this.todoArr[getIndex] = updated
  }

}
