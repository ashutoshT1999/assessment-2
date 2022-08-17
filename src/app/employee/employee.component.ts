import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogdeleteComponent } from '../dialogdelete/dialogdelete.component';
import { empdata } from '../service/empservice.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [empdata]
})
export class EmployeeComponent implements OnInit {

  constructor(public _data: empdata, public dialog: MatDialog) { }

  displayedColumns: string[] = ['code', 'fullname', 'Actions'];
  dataSource = this._data.getdata();

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogdeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}


