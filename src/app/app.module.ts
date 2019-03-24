import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Http modules
import { HttpClientModule } from '@angular/common/http';

// Libraries to import firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
export const firebaseConfig = {
  apiKey: 'AIzaSyBUGqp0rugUGOLxr1Y5AKKjkCE2PJ5IP4A',
  authDomain: 'bamboo-velocity-127420.firebaseapp.com',
  databaseURL: 'https://bamboo-velocity-127420.firebaseio.com',
  projectId: 'bamboo-velocity-127420',
  storageBucket: 'bamboo-velocity-127420.appspot.com',
  messagingSenderId: '374416757815'
};

// Libraries to import angular material
import { FormsModule } from '@angular/forms';
import {MatListModule, MatToolbarModule, MatButtonModule, MatInputModule,
        MatCardModule, MatIconModule, MatGridListModule, MatOptionModule, MatSelectModule
      } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App components
import { EmployesComponent } from './employes/employes.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './create-person/create-person.component';

// Rxjs


@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    DetailEmployeComponent,
    CreateEmployeComponent,
    PersonComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, AngularFireAuthModule,
    AngularFirestoreModule, AppRoutingModule, MatListModule, MatToolbarModule, MatButtonModule, MatInputModule,
    MatCardModule, MatIconModule, MatGridListModule, BrowserAnimationsModule, MatOptionModule, MatSelectModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
