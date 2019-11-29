import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environment';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {}

  login(username: string, password: string, useLocalStorage: boolean) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http
      .post<any>(environment.api.baseUrl + 'authenticate', { username, password  })
      .pipe(
        map(user => {
          if (user && user.customerId) {
            if (useLocalStorage) {
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
