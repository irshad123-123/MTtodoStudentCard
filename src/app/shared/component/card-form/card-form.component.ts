import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IcardArr } from '../../model/card';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnChanges {
  @ViewChild('cardForm') newForm ! : NgForm
  @Output() newCard : EventEmitter<IcardArr> = new EventEmitter()
  @Input()onEditCard ! : IcardArr
  @Output() onUpdateObj : EventEmitter<IcardArr> = new EventEmitter()
  constructor(private _matSnackBar : MatSnackBar) { }
  snackBar(msg: string){
    this._matSnackBar.open(msg,'close',{
      duration : 3000,
      verticalPosition: 'top',
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

  onAddCard(){
    if(this.newForm.valid){
      let newObj = {
      ...this.newForm.value,
      todoId : this.uuid() 
    }
    this.newCard.emit(newObj)
    this.newForm.reset()
    this.snackBar('The new card is added successfully !!!')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['onEditCard'].currentValue){
      this.newForm.form.patchValue(changes['onEditCard'].currentValue)
      this.isEditMode = true
    }
  }

  onCancel(){
    this.newForm.reset()
    this.isEditMode=false
    location.reload()
  }

  onUpdate(){
    let obj = {
      ...this.newForm.value,
      cardId : this.onEditCard.cardId
    }
    this.onUpdateObj.emit(obj)
    this.newForm.reset()
    this.isEditMode = false
    this.snackBar('The card is updated successfully !!!')
  }

}
