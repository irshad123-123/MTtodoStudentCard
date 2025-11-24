import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IcardArr } from '../../model/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cardArrGet ! : IcardArr
  @Output() removeCard : EventEmitter<string> = new EventEmitter()
  @Output() editCard : EventEmitter<IcardArr> = new EventEmitter()
  onRemove(cardId : string){
      let isConfirm = confirm('Are you sure want to remove this card !!!')
      if(isConfirm){
        this.removeCard.emit(cardId)
      }
  }
  onEdit(card: IcardArr){
    this.editCard.emit(card)
  }

}
