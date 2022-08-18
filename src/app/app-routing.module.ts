import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { ShowoneComponent } from './showone/showone.component';
import { StudentComponent } from './student/student.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  { path:"", component: EmployeeComponent },
  { path: "person", component: PersonComponent },
  { path: "student", component: StudentComponent },
  { path: "showone/:id", component: ShowoneComponent },
  { path: "showview/:id", component: ViewemployeeComponent },
  { path: "showedit/:id", component: EditemployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
