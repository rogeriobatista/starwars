import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export default class PersonService {

    constructor(private http: HttpClient) {
    }

    get(page: number): Observable<any> {
        return this.http.get<any>(`${environment.api}people?page=${page}`);
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${environment.api}people/${id}`);
    }

    search(filter: string): Observable<any> {
        return this.http.get(`${environment.api}people/?search=${filter}`);
    }
}