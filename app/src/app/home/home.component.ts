import { Component, OnInit } from '@angular/core';
import Person from '../person/person.model';
import PersonService from '../person/person.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    people: Person[];
    currentPage: number;
    hasNextPage: boolean;

    constructor(private personService: PersonService,
        private router: Router) { }

    ngOnInit(): void {
        this.people = [];
        this.currentPage = 1;
        this.hasNextPage = true;

        this.getPeople();
    }

    getPeople() {
        this.personService.get(this.currentPage).subscribe(response => {
            this.people = response.results;
            this.hasNextPage = response.next !== null ? true : false;
        });
    }

    search(filter: string) {
        this.personService.search(filter).subscribe(response => {
            this.people = response.results;
            this.hasNextPage = response.next !== null ? true : false;
        })
    }

    changePage(newPage: number) {
        this.currentPage = newPage;
        this.getPeople();
    }

    openDetails(content) {
        const person = this.people.find(x => x.name === content);
        const id = person.url.replace(/\D+/g, '');
        this.router.navigateByUrl(`/${id}`);
    }
}
