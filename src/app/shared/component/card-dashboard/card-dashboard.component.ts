import { Component, Input, OnInit } from '@angular/core';
import { IcardArr } from '../../model/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  constructor(private _matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cardArr: Array<IcardArr> = [
    {
      title: 'HTML',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi perferendis nisi qui, ratione aspernatur reprehenderit commodi, inventore cum nulla nemo, incidunt similique accusamus dolorum ut laudantium eaque sit fuga!',
      about: 'Theory',
      cardId: '123'
    },
    {
      title: 'CSS',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi perferendis nisi qui, ratione aspernatur reprehenderit commodi, inventore cum nulla nemo, incidunt similique accusamus dolorum ut laudantium eaque sit fuga!',
      about: 'Coding',
      cardId: '124'
    },
    {
      title: 'Javascript',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi perferendis nisi qui, ratione aspernatur reprehenderit commodi, inventore cum nulla nemo, incidunt similique accusamus dolorum ut laudantium eaque sit fuga!',
      about: 'Theory',
      cardId: '125'
    },
    {
      title: 'Typescript',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi perferendis nisi qui, ratione aspernatur reprehenderit commodi, inventore cum nulla nemo, incidunt similique accusamus dolorum ut laudantium eaque sit fuga!',
      about: 'Coding',
      cardId: '126'
    },
    {
      title: 'Angular',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi perferendis nisi qui, ratione aspernatur reprehenderit commodi, inventore cum nulla nemo, incidunt similique accusamus dolorum ut laudantium eaque sit fuga!',
      about: 'Theory',
      cardId: '127'
    }
  ]

  onNewCard(card: IcardArr) {
    this.cardArr = [card, ...this.cardArr]
  }
  onRemoveCard(cardId: string) {
    let isConfirm = confirm('Are you sure want to remove this card !!!')
    if (isConfirm){
      this.cardArr = this.cardArr.filter(id => id.cardId !== cardId)
      this._matSnackBar.open('The card is removed successfully !!!', 'close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
    }
  }
  onEditCard !: IcardArr
  editCard(card: IcardArr) {
    this.onEditCard = card
  }

  onUpdatedObj(card: IcardArr) {
    let getIndex = this.cardArr.findIndex(id => id.cardId === card.cardId)
    this.cardArr[getIndex] = card
  }

}
