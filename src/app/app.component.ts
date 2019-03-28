import { SessionService } from './services/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'firebaseCourseProyect';
  // With a ngIf you can desided if show element in your DOM
  loggedIn = false;

  constructor(private aSessionService: SessionService) {
    this.aSessionService.isLogged().subscribe(aResponse => {
      this.loggedIn = (aResponse && aResponse.uid) ? true : false;
    }, aError => {
      this.loggedIn = false;
    });
  }
}
