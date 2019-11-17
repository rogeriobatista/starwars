import { Component, OnInit, Input } from '@angular/core';
import { Starship } from './starship.model';
import StarshipService from './starship.service';

@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

    @Input() starshipUrl: string;
    starship: Starship = new Starship();
    isMenuCollapsed = true;

    constructor(private starshipService: StarshipService) { }

    ngOnInit(): void {
        this.starshipService.get(this.starshipUrl).subscribe(response => {
            this.starship = response;
        })
    }
}
