import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN } from 'src/app/shared/api/constant';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders();
    let authToken = TOKEN;

    if (request.headers) {
      let contentType = request.headers.get('Content-Type');
      if (!contentType) {
        headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });

      }
    }

    headers = headers.append('Authorization', `Bearer ${authToken}`)
    request = request.clone({ headers, url: environment.baseUrl + request.url });

    return next.handle(request);
  }
}
