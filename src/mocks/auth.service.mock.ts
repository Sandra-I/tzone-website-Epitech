import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AuthAPIResponse } from 'src/app/models/apiResponse';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceMock {

  constructor() { }

  public logIn(body: { email: string, password: string }): Observable<AuthAPIResponse> {
    if (!body.email) {
      return throwError({ error: {message: 'Une erreur s\'est produite' }});
    }
    return of({ token: '123' });
  }
}
