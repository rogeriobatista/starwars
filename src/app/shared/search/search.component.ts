import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    filter: string;
    @Output() toSearch = new EventEmitter()

    constructor() { }

    ngOnInit(): void {
        this.filter = '';
    }

    searchKeyPressed(event: any) {
        if (event.charCode === 13) {
            this.toSearch.emit(this.filter);
        }
    }

    search() {
        this.toSearch.emit(this.filter);
    }
}
