import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, skip, take } from "rxjs";
import { FondService } from "../server/service/fond.service";

@Injectable({
    providedIn: "root",
  })
export class DonateInGuard implements CanActivate{

    constructor(private fserv: FondService,  public router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const idParam = +(route.params['id']);
        const childL = this.fserv.getAllChildren().pipe(
            skip(1),
            take(1)
        );
        childL.subscribe((list) => {
                const donateId = list.findIndex((value) => value.id === idParam);
                if(( donateId > -1 ) && ( donateId < list.length )){
                    return true;
                }
                else{
                    alert('Попытка перехода по несуществующему id! Доступ закрыт!'); 
                    this.router.navigateByUrl("");
                    return false;
                }
            });
        return true;        
    }
}
