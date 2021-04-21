import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

 

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
constructor(private dataService: ApiService,private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot) {
const routeurl: string = state.url;
return this.isLogin(routeurl);
}
 

isLogin(routeurl: string):Observable<boolean> | Promise<boolean> | boolean {
if (this.dataService.isLoggedIn()) {
return true;
}else{
  this.dataService.redirectUrl = routeurl;
  return this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
}
}
}