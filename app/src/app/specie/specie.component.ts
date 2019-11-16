import { Component, OnInit, Input } from '@angular/core';
import Specie from './specie.model';
import SpecieService from './specie.service';

@Component({
    selector: 'app-specie',
    templateUrl: './specie.component.html',
    styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {

    @Input() specie: Specie;

    constructor() { }

    ngOnInit(): void {
    }
}
