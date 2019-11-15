import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export default class VehicleService {

    constructor(private http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.http.get<any>(url);
    }
}