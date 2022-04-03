import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleAuthService } from '../providers/google-auth.service';
import { UserService } from '../providers/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
  private googleAuthService: GoogleAuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.userService.currentUser$.value;
    if (!user) {
      // this.googleAuthService.logIn(state.url.split('?')[0]);
      return false;
    }
    else {
      return !!user;

    }
  }

}
