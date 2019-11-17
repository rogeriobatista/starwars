import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export default abstract class BaseService {

    constructor(protected http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get(url);
    }
}