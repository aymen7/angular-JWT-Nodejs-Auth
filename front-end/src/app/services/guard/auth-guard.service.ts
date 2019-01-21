import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router , CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth_service: AuthService, private _router: Router) { }
  canActivate(): boolean {
    const login = this.auth_service.isLoggedIn();
    if (!login) {
      this._router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
