import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../providers/user.service';

@Injectable({
    providedIn: 'root'
})

export class NoAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService) { }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this.userService.currentUser$.value;
        if (user) {
            this.router.navigate(["/"]);
        }
        return !user;
    }

}