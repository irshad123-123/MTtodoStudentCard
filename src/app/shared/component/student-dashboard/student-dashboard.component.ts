import { Component, OnInit } from '@angular/core';
import { IstdArr } from '../../model/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private _matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  stdArr : Array<IstdArr> = [
    {
      fname : 'Jhon',
      lname : 'May',
      email : 'jhon@gmail.com',
      contact : 1234567890,
      status : 'Active',
      stdId : '123'
    },
    {
      fname : 'Jhon',
      lname : 'May',
      email : 'jhon@gmail.com',
      contact : 1234567890,
      status : 'In-Active',
      stdId : '124'
    },
    {
      fname : 'Jhon',
      lname : 'May',
      email : 'jhon@gmail.com',
      contact : 1234567890,
      status : 'In-Active',
      stdId : '125'
    }
  ]

  onAddStd(stdObj : IstdArr){
    this.stdArr = [...this.stdArr, stdObj]
  }

  onRemoveStd(stdId : string){
    let isConfirm = confirm('Are you sure want to remove this student details !!!')
    if(isConfirm){
      this.stdArr = this.stdArr.filter(id => id.stdId !== stdId)
      this._matSnackBar.open('The student detail is removed successfully !!!', 'close',{
        duration: 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      })
    }
  }
  editStd ! : IstdArr
  onEditStd(std: IstdArr){
    this.editStd = std
  }

  onUpdateObj(std : IstdArr){
    let getIndex = this.stdArr.findIndex(id=>id.stdId === std.stdId)
    this.stdArr[getIndex] = std
  }
 
}
