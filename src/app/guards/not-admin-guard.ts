import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../providers/user.service';

@Injectable({
    providedIn: 'root'
})

export class NotAdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this.userService.currentUser$.value;
        if (user?.isAdmin) {
            this.router.navigate(['admin']);
        }
        return !user?.isAdmin;
    }

}
