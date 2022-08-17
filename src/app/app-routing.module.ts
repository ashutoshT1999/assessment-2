import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { ShowoneComponent } from './showone/showone.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:PersonComponent},
  {path:"person",component:PersonComponent},
  {path:"student",component:StudentComponent},
  {path:"showone/:id",component:ShowoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
