import { Component, OnInit, Input } from '@angular/core';
import Film from './film.model';
import FilmService from './film.service';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

    @Input() filmUrl: string;
    film: Film = new Film();
    isMenuCollapsed = true;

    constructor(private filmService: FilmService) { }

    ngOnInit(): void {
        this.filmService.get(this.filmUrl).subscribe(response => {
            this.film = response;
        })
    }
}
