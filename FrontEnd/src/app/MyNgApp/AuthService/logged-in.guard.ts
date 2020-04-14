import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()

export class LoggedInGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        if (isLoggedIn) { return isLoggedIn; }

        this.router.navigate(['/Login']);
        return false;
    }
}
