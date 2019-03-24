import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: any = [
    {fullName: 'Andrea Torres Pimiento', documentType: 'CC', taxId: '37514684'},
    {fullName: 'Dilson', documentType: 'CC', taxId: '123456'},
    {fullName: 'William', documentType: 'CC', taxId: '654321'},
  ];

  constructor(private db: AngularFirestore, private http: HttpClient) {}

  public getPersons() {
    return this.db.collection('person');
  }

  public getPersonsByTaxId(taxId) {
    return this.persons.filter((aPerson) => {
      return aPerson.taxId === taxId;
    })[0] || null;
  }

  public savePerson(aPerson) {
    // firebase generate of automatic way the id
    // const id = this.db.createId();
    // the id is obtained from the date in long format
    const id = Date.now();
    console.log(aPerson);
    console.log(id);
    this.db.collection('person').doc(id.toString()).set(aPerson);
  }

  public consumingRESTAPIUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
