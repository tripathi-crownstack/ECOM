import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders();
        if (httpRequest.headers) {
            let contentType = httpRequest.headers.get('Content-Type');
            if (!contentType) {
                headers = new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE",

                });

            } else if (contentType === 'image/jpeg') {
                headers = new HttpHeaders({
                    'Content-Type': 'image/jpeg',
                    'Accept': 'image/jpeg',
                })
            }
        }



        httpRequest = httpRequest.clone({ headers, url: httpRequest.url });

        return next.handle(httpRequest).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) { }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401 || err.status === 440 || err.status === 777) {
                    setTimeout(() => {
                        this.router.navigateByUrl('/');
                    }, 500);
                }
            }
        }));
    }
}
