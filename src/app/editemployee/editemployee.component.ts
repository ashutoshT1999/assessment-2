import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogconformationComponent } from '../dialogconformation/dialogconformation.component';
import { empdata } from '../service/empservice.component';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
  providers: [empdata]
})
export class EditemployeeComponent implements OnInit {

  constructor(public _data: empdata, public _route: ActivatedRoute, public dialog: MatDialog) { }

  empid: string | null = "";
  empdata: any[] = [];


  ngOnInit(): void {
    this.empid = this._route.snapshot.paramMap.get('id');
    this.empdata = this._data.getempbyid(this.empid);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogconformationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}


