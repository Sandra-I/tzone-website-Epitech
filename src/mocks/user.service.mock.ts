import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APIResponse } from 'src/app/models/apiResponse';
import { User } from '../app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserServiceMock {
  public static readonly FakeUser: User = {
    firstName: 'Florent',
    lastName: 'Mouton',
    email: 'fm@yopmail.com'
  };

  public currentUser$ = new BehaviorSubject<User | null>(null);

  public getMe(): void {
    of(UserServiceMock.FakeUser).subscribe((user: User) => {
      this.currentUser$.next(user);
    });
  }

  public createUser(body: User): Observable<APIResponse> {
    if (!body.firstName) {
      return throwError({ error: { message: 'Une erreur s\'est produite' } });
    }
    return of({ message: 'Utilisateur créé' });
  }

  public logout(): void {
    this.currentUser$.next(null);
  }

  public editUser(body: User, id: string): Observable<APIResponse> {
    if (!body.firstName) {
      return throwError({ error: { message: 'Une erreur s\'est produite' } });
    }
    return of({ message: 'Utilisateur modifié' }).pipe(tap(() => this.getMe()));
  }
}
