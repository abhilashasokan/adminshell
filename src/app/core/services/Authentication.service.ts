import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    console.log(this.currentUserSubject);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string, useLocalStorage: boolean) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http
      .post<any>(environment.api.baseUrl + 'authenticate', {
        username,
        password
      })
      .pipe(
        map(user => {
          if (user && user.customerId) {
            if (useLocalStorage) {
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated() {
    return false;
    // return this.currentUser.pipe(
    //   take(1),
    //   map(currentUser => !!currentUser),
    //   tap(isLoggedIn => {
    //     if (!isLoggedIn) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // );
  }
}
