import { GuardService } from './services/guard.service';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { EmployesComponent } from './employes/employes.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'employes', component: EmployesComponent},
  // for protected your routes you can use canActivate: [GuardService] with the name of the service guard in brackets
  {path: 'detailEmployes', component: DetailEmployeComponent, canActivate: [GuardService]},
  {path: 'createPerson', component: CreatePersonComponent},
  {path: 'createEmploye', component: CreateEmployeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
