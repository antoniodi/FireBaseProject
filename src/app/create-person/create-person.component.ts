import { Person } from './../interfaces/person';
import { PersonService } from './../services/person.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.sass']
})
export class CreatePersonComponent {
  aPerson = {};
  constructor(private aPersonService: PersonService) {}

  savePerson() {
    this.aPersonService.savePerson(this.aPerson as Person);
    alert('the person was created successfully');
    this.aPerson = {};
  }

  savePersonFromHttp() {
    console.log(this.aPersonService.savePersonFromHttp(this.aPerson as Person).subscribe());
    alert('the person was created successfully');
    this.aPerson = {};
  }

}
