import { Component, OnInit } from '@angular/core';
import PersonService from '../person.service';
import Person from '../person.model';
import { ActivatedRoute } from '@angular/router';
import GoogleImageSearchService from 'src/app/helpers/google-images/google-images.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

    person: Person = new Person();

    constructor(private personService: PersonService,
        private googleImageSearchService: GoogleImageSearchService,
        private route: ActivatedRoute,
        private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loaderService.show();

        this.personService.getById(this.route.snapshot.params.id).subscribe(response => {
            this.person = response;

            this.googleImageSearchService.searchImage(this.person.name).then(images => {
                const index = Math.floor(Math.random() * 5);
                this.person.image = images[index];
                this.loaderService.hide();
            })
        });
    }
}
