import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../user/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLoggedIn(route.path);
    }
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url: string): boolean {
        this.authService.currentNavigateUrl = url;
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigateByUrl('/login');
        return false;
    }
}
