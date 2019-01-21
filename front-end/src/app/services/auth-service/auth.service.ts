import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
   private BASE_URL: string;
   constructor(private _http: HttpClient, private _router: Router) {
     this.BASE_URL = 'http://127.0.0.1:3000/users';
    }
  /**
   *  check if the localStorage has the key 'token' and
   *  return a boolean based on that
   */
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    /**
     * this is equavilante to
     * return token !== null ? true:false;
     * */
    return !! token;
  }
  /**
   * perform the http post request for the login
   */
  login(email: string, password: string): Observable <any> {
    const url = `${this.BASE_URL}/login`;
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this._http.post<any>(url, {'email': email, 'password': password}, {headers});

  }
  /**
   * clear the localStorage
   * navigate to the 'auth' path
   */
  logout(): any {
    localStorage.removeItem('token');
    this._router.navigate(['auth']);
  }
  getToken(): any {
    return localStorage.getItem('token');
  }
}
