import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IstdArr } from '../../model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stdArr! : Array<IstdArr>
  @Output() removeId : EventEmitter<string> = new EventEmitter()
  @Output() editObj : EventEmitter<IstdArr> = new EventEmitter()

  onRemove(stdId : string){
    this.removeId.emit(stdId)
  }

  onEditstd(std: IstdArr){
    this.editObj.emit(std)
  }

}
