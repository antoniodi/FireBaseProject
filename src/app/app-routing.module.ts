import { PersonComponent } from './person/person.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { EmployesComponent } from './employes/employes.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';

const routes: Routes = [
  {path: 'persons', component: PersonComponent},
  {path: 'employes', component: EmployesComponent},
  {path: 'detailEmployes', component: DetailEmployeComponent},
  {path: 'createPerson', component: CreatePersonComponent},
  {path: 'createEmploye', component: CreateEmployeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
