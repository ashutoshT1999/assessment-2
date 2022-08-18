import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { StudentComponent } from './student/student.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableModule } from '@angular/material/table';
import { ShowoneComponent } from './showone/showone.component';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DialogconformationComponent } from './dialogconformation/dialogconformation.component';
import { DialogdeleteComponent } from './dialogdelete/dialogdelete.component';
import { MaterialModule } from './material/material.module';
import {MatSelectModule} from '@angular/material/select';
import { SelecterrorComponent } from './selecterror/selecterror.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';



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
    SelecterrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatDividerModule,MatDatepickerModule, MatInputModule, FormsModule, BrowserAnimationsModule, MaterialModule , MatTableModule,MatSelectModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
