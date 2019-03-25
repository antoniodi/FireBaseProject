import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_ENDPOINTS = 'https://bamboo-velocity-127420.firebaseio.com';
  persons: any;
  constructor(private db: AngularFirestore, private http: HttpClient) {}

  public getPersons() {
    return this.db.collection('person');
  }

  public getPersonsByTaxId(taxId: string): Person {
    return this.persons.filter((aPerson) => {
      return aPerson.taxId === taxId;
    })[0] || null;
  }

  public savePerson(aPerson: Person) {
    // firebase generate of automatic way the id
    // const id = this.db.createId();
    // the id is obtained from the date in long format
    aPerson.id = Date.now().toString();
    this.db.collection('person').doc(aPerson.id).set(aPerson);
  }

  public savePersonFromHttp(aPerson: Person) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    aPerson.id = Date.now().toString();
    return this.http.post(this.API_ENDPOINTS.concat('/person.json'), aPerson, {headers});
  }

  public updatePerson(aPerson: Person) {
    this.db.collection('person').doc(aPerson.id).set(aPerson);
  }

  public consumingRESTAPIUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
