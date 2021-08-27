import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ClientService } from '@services/client.service';
import { Observable } from 'rxjs';

@Injectable()
export class FormGuard implements CanActivate {
  constructor(private router: Router, private service: ClientService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const personal = this.service.personal;
    const address = this.service.address;
    const doc = this.service.doc;

    if (state.url.indexOf('/client-form/address') === 0) {
      return personal ? true : this.router.navigate(['/client-form/personal']);
    }

    if (state.url.indexOf('/client-form/identity') === 0) {
      return personal && address ? true : this.router.navigate(['/client-form/personal']);
    }

    if (state.url.indexOf('/created-client') === 0) {
      return personal && address && doc ? true : this.router.navigate(['/client-form/personal']);
    }

    return true;
  }
}
