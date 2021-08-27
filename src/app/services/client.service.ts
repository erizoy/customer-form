import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { City } from '@models/city';
import { ClientPersonal, ClientAddress, ClientDoc } from '@models/client';
import { Coordinator } from '@models/coordinator';
import { Country } from '@models/country';

@Injectable()
export class ClientService {
  private coordinators$ = new BehaviorSubject<Coordinator[]>([]);
  private countries$ = new BehaviorSubject<Country[]>([]);
  private cities$ = new BehaviorSubject<City[]>([]);

  personal?: ClientPersonal; // (client as any).default.personal as ClientPersonal;
  address?: ClientAddress; // (client as any).default.address as unknown as ClientAddress;
  doc?: ClientDoc; // (client as any).default.doc as unknown as ClientDoc;

  constructor(private http: HttpClient) {}

  getCoordinators(): Observable<Coordinator[]> {
    if (this.coordinators$.getValue().length > 0) {
      return this.coordinators$;
    }

    return this.http
      .get<Coordinator[]>('/api/coordinator')
      .pipe(tap((data: Coordinator[]) => this.coordinators$.next(data)));
  }

  getCountries(): Observable<Country[]> {
    if (this.countries$.getValue().length > 0) {
      return this.countries$;
    }

    return this.http
      .get<Country[]>('/api/country')
      .pipe(tap((data: Country[]) => this.countries$.next(data)));
  }

  getCities(): Observable<City[]> {
    if (this.cities$.getValue().length > 0) {
      return this.cities$;
    }

    return this.http
      .get<City[]>('/api/city')
      .pipe(tap((data: City[]) => this.cities$.next(data)));
  }

  reset(): void {
    this.personal = undefined;
    this.address = undefined;
    this.doc = undefined;
  }
}
