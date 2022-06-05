import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;
}

export class LoginOutGuard /*implements CanActivate*/{
    
    /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{         
        return confirm('Вы уверены, что хотите перейти?');
    }*/
    canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{
         
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}