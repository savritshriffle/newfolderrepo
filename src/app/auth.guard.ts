import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { MyServiceService } from './my-service.service';
import { CanDeactivate } from '@angular/router';
import { desh } from './dashboard/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<desh>{
  canActiveRoute: boolean = true;
  constructor(private service : MyServiceService){
     
  }
  canActivate() : boolean{
      if(this.canActiveRoute){
        return true 
      }
      else{
         alert("You can not access this Page")
         return false ;
      }
  }
  
  canDeactivate(component: desh, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const isConfirm = confirm("Ae you sure") 
      if(isConfirm){
        return true;
     }
      else{
      return false;
     }
  } 
}
