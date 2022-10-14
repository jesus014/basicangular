import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //ng g guard nombre del guard
    //se evalua la propiedad e hasuser para ver si exiten permisos
    if(this.hasUser()){
      return true;
    }
    alert("You dont permissions");
    return false;
  }

  hasUser():boolean{
    return false;
  }

}
