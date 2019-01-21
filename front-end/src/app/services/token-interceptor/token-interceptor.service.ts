import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth_service: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const login: Boolean = this._auth_service.isLoggedIn();
    if (login) {
      /**
       * if login we add the 'authorization' key with the value of
       * 'Bearer token' to the req headers
       */
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization',
          `Bearer ${this._auth_service.getToken()}`)
        })
      );
    }
    // if not we don't add anything
    return next.handle(req);
  }
}
