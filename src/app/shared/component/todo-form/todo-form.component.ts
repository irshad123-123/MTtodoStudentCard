import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ItodoArr } from '../../model/todo';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') FormRef !: NgForm
  @Output() newTodoItem : EventEmitter<ItodoArr> = new EventEmitter()
  @Input()editTodo ! : ItodoArr;
  @Output() toUpdateTodo : EventEmitter<ItodoArr> = new EventEmitter()
  constructor(private _matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

    uuid = () => {
return (
String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
).replace(/[xy]/g, (character) => {
const random = (Math.random() * 16) | 0;
const value = character === "x" ? random : (random & 0x3) | 0x8;
return value.toString(16);
});
};

snackBar(msg : string){
    this._matSnackBar.open(msg,'close',{
      duration: 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    })
  }

  isEditMode : boolean = false

  onAddTodo(){
    if(this.FormRef.valid){
      let Obj = {
      ...this.FormRef.value,
      todoId : this.uuid() 
    }
    this.newTodoItem.emit(Obj)
    this.FormRef.reset()
    this.snackBar('The new todoItem is added successfully !!!')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editTodo'].currentValue){
      this.FormRef.form.patchValue(changes['editTodo'].currentValue)
      this.isEditMode = true
    }
  }
  onCancel(){
    this.FormRef.reset()
    this.isEditMode = false;
    location.reload()
  }
  onUpdateTodo(){
    if(this.FormRef.valid){
      let updated_Obj ={
      ...this.FormRef.value,
      todoId : this.editTodo.todoId
    }
    this.toUpdateTodo.emit(updated_Obj)
    this.FormRef.reset()
    this.isEditMode = false
    this.snackBar('The todoItem is updated successfully !!!')
    }
  }

}
