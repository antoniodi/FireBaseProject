import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent {

  persons: any;
  users: any;

  constructor(private aPersonService: PersonService) {
    aPersonService.getPersons().valueChanges()
      .subscribe(persons => {
        this.persons = persons;
      });
    aPersonService.consumingRESTAPIUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

}
