import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import { AuthenticationService } from '../services/Authentication.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.isLoggedIn$(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.isLoggedIn$(state.url);
  }

  canLoad(route: Route, segments: Array<UrlSegment>): Observable<boolean> {
    return this.isLoggedIn(segments);
  }

  private isLoggedIn$(url: string): Observable<boolean | UrlTree> {
    return this.authenticationService.currentUser.pipe(
      take(1),
      map(currentUser => {
        if (currentUser) {
          return true;
        }

        return this.router.createUrlTree(['login'], {
          queryParams: {
            return: url
          }
        });
      })
    );
  }

  // remove it and leave only reactive check when canLoad will work with UrlTree
  private isLoggedIn(urlSegments: Array<UrlSegment>): Observable<boolean> {
    return this.authenticationService.currentUser.pipe(
      take(1),
      map(currentUser => !!currentUser),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['login'], {
            queryParams: {
              return: urlSegments.reduce((url, segment) => `${url}/${segment}`, '')
            }
          });
        }
      })
    );
  }
}
