import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class OwnerGuard implements CanActivate {
    constructor(private authService: AuthService, private rotuer: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log(this.authService.isOwner());
        if (!this.authService.getUser()) {
            this.rotuer.navigate(['/owner_signin']);
        }
        return this.authService.isOwner();
    }
}
