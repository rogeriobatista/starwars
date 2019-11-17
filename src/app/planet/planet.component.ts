import { Component, OnInit, Input } from '@angular/core';
import { Planet } from './planet.model';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

    @Input() planet: Planet;

    constructor() { }

    ngOnInit(): void {
    }
}
