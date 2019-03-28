import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  anUser: any = {};

  constructor(private aSession: SessionService) {
   }

   public logIn() {
     this.aSession.logIn(this.anUser.email, this.anUser.password);
   }

   public logInWithFacebook() {
    this.aSession.logInWithFacebook();
  }
}
