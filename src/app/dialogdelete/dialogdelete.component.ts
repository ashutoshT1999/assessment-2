import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialogdelete',
  templateUrl: './dialogdelete.component.html',
  styleUrls: ['./dialogdelete.component.css']
})
export class DialogdeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogdeleteComponent>, public dialog: MatDialog) { }
  flag: boolean = false;
  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close(true);
  }
  confirmed(): void {
    this.dialog.open(DialogComponent);
    this.dialogRef.close(true);
  }

}


