import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({ providedIn: "root" })
export class AuthGuardRolInvitado implements CanActivate {
  constructor(
    private router: Router,
  ) { }


  canActivate(ruta: ActivatedRouteSnapshot, estado: RouterStateSnapshot) {
    let rol = localStorage.getItem("rol")
    console.log(localStorage.getItem("rol"))

    if (rol == "4") {
      return true;
    } else {

    }

  }


}