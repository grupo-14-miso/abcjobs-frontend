import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (token) {
      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        this.router.navigate(['/not-authorized']);
        return false;
      }

      return true;
    }

    this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
