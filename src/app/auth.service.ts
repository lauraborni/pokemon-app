import { Injectable } from '@angular/core';

import {Observable, tap, delay, of} from "rxjs";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    let isLoggedIn = (name === 'pikachu' && password === 'pikachu');

    return of(true).pipe (
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn)
    )
  }

    logout(): void {
      this.isLoggedIn = false;
    }
}
