import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'environments/environment';

import * as coordinators from '@mock/coordinators.json';
import * as countries from '@mock/countries.json';
import * as cities from '@mock/cities.json';

const mock = new Map<string, any>([
  ['/api/coordinator', coordinators],
  ['/api/country', countries],
  ['/api/city', cities]
]);

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!environment.production && error.status === 404) {
          return of(new HttpResponse({ status: 200, body: mock.get(request.url).default }));
        }

        return throwError(error);
      })
    );
  }
}
