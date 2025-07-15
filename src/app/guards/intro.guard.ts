import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanActivate {
  canActivate() {
    //Obtener del storaje si ya vi la intro y dependiendo del resultado dejar pasar o no hacia el home
    //en caso false(osea, no vi la intro aun) redireccionar con angular roouter hacia la intro nuevamente
    return true
  }
}
