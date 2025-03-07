import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { desh } from './dashboard/dashboard/dashboard.component';
import { MyServiceService } from './my-service.service';
@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<desh> {
  constructor(private service : MyServiceService ,private route : Router){
       
    }
  canDeactivate(
    component: desh,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(this.service.Login) {
        return true;
      }
      else {
        return false;
      }
  } 
}
