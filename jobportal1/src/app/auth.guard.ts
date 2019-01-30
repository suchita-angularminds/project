import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginservice:LoginService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;

    if (this.loginservice.isLogged()) {
      return true;
     
    }
    this.router.navigateByUrl('/loginform');

    // window.alert("You don't have permission to view this dashboard page without log in"); 
    return false;
  }
}
