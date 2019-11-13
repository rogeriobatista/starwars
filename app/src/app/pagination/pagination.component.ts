import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input() currentPage: number;
    @Input() hasNextPage: boolean;

    @Output() changePage = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    previousPage() {
        this.changePage.emit(this.currentPage - 1);
    }

    nextPage() {
        this.changePage.emit(this.currentPage + 1);
    }
}
