import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  anUser: any = {};

  constructor(private aSession: SessionService) {
   }

   public SignIn() {
    this.aSession.SignIn(this.anUser.email, this.anUser.password);
  }

}
