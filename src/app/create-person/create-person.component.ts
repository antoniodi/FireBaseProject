import { PersonService } from './../services/person.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.sass']
})
export class CreatePersonComponent {
  aPerson: any = {};
  constructor(private aPersonService: PersonService) {}
  savePerson() {
    this.aPersonService.savePerson(this.aPerson);
    alert('the person was created successfully');
    this.aPerson = {};
  }

}
