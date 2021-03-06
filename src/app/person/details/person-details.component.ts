import { Component, OnInit } from '@angular/core';
import PersonService from '../person.service';
import Person from '../person.model';
import { ActivatedRoute } from '@angular/router';
import GoogleImageSearchService from 'src/app/helpers/google-images/google-images.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { Planet } from 'src/app/planet/planet.model';
import PlanetService from 'src/app/planet/planet.service';
import SpecieService from 'src/app/specie/specie.service';
import Specie from 'src/app/specie/specie.model';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

    person: Person = new Person();
    hasVehicles: boolean = false;
    hasStarships: boolean = false;
    homeworld: Planet = new Planet();
    specie: Specie = new Specie();

    constructor(private personService: PersonService,
        private googleImageSearchService: GoogleImageSearchService,
        private planetService: PlanetService,
        private specieService: SpecieService,
        private route: ActivatedRoute,
        private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loaderService.show();
        this.getPerson();
    }

    getPerson() {
        this.personService.getById(this.route.snapshot.params.id).subscribe(response => {
            this.person = response;
            this.hasVehicles = this.person.vehicles.length > 0;
            this.hasStarships = this.person.starships.length > 0;

            this.getHomeworld();
            this.getSpecie();
            this.getImage();
        });
    }

    getHomeworld() {
        this.planetService.get(this.person.homeworld).subscribe(response => {
            this.homeworld = response;
        })
    }

    getSpecie() {
        this.specieService.get(this.person.species[0]).subscribe(response => {
            this.specie = response;
        })
    }

    getImage() {
        this.googleImageSearchService.searchImage(this.person.name).then(images => {
            const index = Math.floor(Math.random() * 5);
            this.person.image = images[index];
            this.loaderService.hide();
        })
    }
}
