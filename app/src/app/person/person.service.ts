import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import Person from './person.model';

@Injectable()

export default class PersonService {

    private person: Person;

    getPersonDetails() {
        return this.person;
    }

    setPersonDetails(person: Person) {
        this.person = person;
    }

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