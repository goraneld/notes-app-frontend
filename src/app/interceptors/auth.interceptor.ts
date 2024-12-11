import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = this.authService.getCredentials();

    console.log('intercept', req.url);
    if (credentials) {
      console.log('has credentials');
      const basicAuthHeader = 'Basic ' + btoa(`${credentials.username}:${credentials.password}`);
      const authReq = req.clone({
        setHeaders: {
          Authorization: basicAuthHeader
        }
      });
      return next.handle(authReq);
    }
    console.log('not modified');

    // If no credentials, proceed without modifying the request
    return next.handle(req);
  }
}
