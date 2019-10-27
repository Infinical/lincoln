import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class GetTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    requests: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(requests).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
          sessionStorage.setItem('token', event.body.data.token);
        }

        return event;
      })
    );
  }
}
