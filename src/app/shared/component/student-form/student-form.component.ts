import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IstdArr } from '../../model/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm ! : NgForm
  @Output() AddNewStd : EventEmitter<IstdArr> = new EventEmitter()
  @Input() editStd ! : IstdArr
  @Output() updatedObj : EventEmitter<IstdArr> = new EventEmitter()
  constructor(private _matSnackBar : MatSnackBar) { }

  snackBar(msg : string){
    this._matSnackBar.open(msg,'close',{
      duration:3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    })
  }

  ngOnInit(): void {
  }
  isEditMode : boolean = false
      uuid = () => {
return (
String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
).replace(/[xy]/g, (character) => {
const random = (Math.random() * 16) | 0;
const value = character === "x" ? random : (random & 0x3) | 0x8;
return value.toString(16);
});
};

  onAddStd(){
    if(this.stdForm.valid){
      if(this.stdForm.valid){
      let std_obj = {
      ...this.stdForm.value,
      stdId : this.uuid()
    }
    this.AddNewStd.emit(std_obj)
    this.stdForm.reset()
    }
    this.snackBar('The new student detail is added successfully !!!')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editStd'].currentValue){
      this.stdForm.form.patchValue(changes['editStd'].currentValue)
      this.isEditMode = true
    }
  }

  onCancel(){
    this.stdForm.reset()
    this.isEditMode = false
    location.reload()
  }

  onUpdate(){
    if(this.stdForm.valid){
      let Updatd_Obj = {
      ...this.stdForm.value,
      stdId : this.editStd.stdId
    }
    this.updatedObj.emit(Updatd_Obj)
    this.isEditMode = false
    this.stdForm.reset()
    this.snackBar('The student detail is updated successfully !!!')
    }
  }

}
