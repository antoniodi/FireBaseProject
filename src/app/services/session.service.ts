import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private anAngularFireAuth: AngularFireAuth, private aRouter: Router) {
    this.isLogged();
  }

  public logInWithFacebook() {
    this.anAngularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(aResult => {
        alert('User log In with facebook');
      }).catch(aError => {
        alert('A ocurred one error');
      });
  }

  public logIn = (email, password) => {
    this.anAngularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then( aResponse => {
        alert('Session: '.concat(email).concat(' in progress'));
        console.log(aResponse);
      }).catch(aReason => {
        alert('A error was ocurred');
        console.log(aReason);
      });
    console.log('Sign In');
  }

  public SignIn = (email, password) => {
    this.anAngularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( aResponse => {
        alert('The user: '.concat(email).concat(' was register'));
        console.log(aResponse);
      }).catch(aReason => {
        alert('A error was ocurred');
        console.log(aReason);
      });
    console.log('Sign In');
  }

  public isLogged() {
    return this.anAngularFireAuth.authState;
  }

  public logOut() {
    this.anAngularFireAuth.auth.signOut();
    alert('Log out succesfull');
    this.aRouter.navigate(['home']);
  }
}
