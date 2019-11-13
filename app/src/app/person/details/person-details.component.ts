import { Component, OnInit } from '@angular/core';
import PersonService from '../person.service';
import Person from '../person.model';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

    person: Person;

    constructor(private personService: PersonService) { }

    ngOnInit(): void {
        this.person = this.personService.getPersonDetails();
    }
}
