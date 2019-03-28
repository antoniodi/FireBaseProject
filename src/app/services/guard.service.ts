import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

    // With a ngIf you can desided if show element in your DOM
    loggedIn = false;

    constructor(private aSessionService: SessionService) {
      this.aSessionService.isLogged().subscribe(aResponse => {
        this.loggedIn = (aResponse && aResponse.uid) ? true : false;
      }, aError => {
        this.loggedIn = false;
      });
    }

    public canActivate() {
      return this.loggedIn;
    }
}
