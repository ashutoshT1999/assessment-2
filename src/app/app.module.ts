import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableModule } from '@angular/material/table';
import { ShowoneComponent } from './showone/showone.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DialogconformationComponent } from './dialogconformation/dialogconformation.component';
import { DialogdeleteComponent } from './dialogdelete/dialogdelete.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StudentComponent,
    DialogComponent,
    ShowoneComponent,
    EmployeeComponent,
    ViewemployeeComponent,
    EditemployeeComponent,
    DialogconformationComponent,
    DialogdeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, MatDialogModule, MatTableModule, MatNativeDateModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
