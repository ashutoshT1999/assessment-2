import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SelecterrorComponent } from '../selecterror/selecterror.component';

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

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selected2 = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl2 = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  
  ]);
  nativeSelectFormControl2 = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  
  ]);

  matcher = new  SelecterrorComponent();
  matcher2 = new SelecterrorComponent();

  forminfo(data: NgForm) {
    console.log(data.value);
  }
  popup() {
    alert("Kindly fill the form correctly to submit");
  }

  isnumber(pin: string): boolean {
    if (Number(pin))
      return true;
    else return false;
  }

}
