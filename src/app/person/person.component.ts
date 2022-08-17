import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
   
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngOnInit(): void {
  }

  forminfo(data:NgForm){
    console.log(data.value);
  }
  popup()
  {
    alert("Kindly fill the form correctly to submit");
  }

}
