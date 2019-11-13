import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Person from './person.model';
import GoogleImageSearchService from '../helpers/google-images/google-images.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

    @Input() person: Person;

    @Output() openDetails = new EventEmitter();

    constructor(private googleImageSearchService: GoogleImageSearchService) { }

    ngOnInit(): void {
        this.googleImageSearchService.searchImage(this.person.name)
            .then((res) => {
                const index = Math.floor(Math.random() * 5);
                this.person.image = res[index];
            })
    }

    showDetails(person: Person) {
        this.openDetails.emit(person.name);
    }
}