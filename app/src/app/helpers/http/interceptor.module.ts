import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {

        if (req.url.search('swapi.co') === -1) {
            req = req.clone({
                headers: req.headers.set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            });
        }

        this.loaderService.show();
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hide())
        );
    }
}


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }