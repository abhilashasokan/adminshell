import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from './../../../environments/environment';

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
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string, useLocalStorage: boolean) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    return this.http
      .post<any>(`${environment.api.baseUrl}oauth/token?`, body.toString(),
        {
          headers:
            { Authorization: 'Basic ZmxvYXRBcHBVaTpGbDA0dF9MTA==', 'Content-Type': 'application/x-www-form-urlencoded' }
        })
      .pipe(
        map(user => {
          if (user && user.access_token) {
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
    return this.currentUser.pipe(
      take(1),
      map(currentUser => !!currentUser),
      tap(isLoggedIn => {
        console.log(isLoggedIn);
        if (!isLoggedIn) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
