import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + authToken),
            });
        }
        else {
            request = request.clone();
        }
        return next.handle(request);
    }

}