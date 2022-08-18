import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialogconformation',
  templateUrl: './dialogconformation.component.html',
  styleUrls: ['./dialogconformation.component.css']
})
export class DialogconformationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogconformationComponent>,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close():void{
    this.dialogRef.close(true);
  }
  confirmed(): void {
    this.dialog.open(DialogComponent);
    this.dialogRef.close(true);
  }

}
