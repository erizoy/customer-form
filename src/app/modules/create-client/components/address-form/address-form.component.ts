import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientAddress } from '@models/client';
import { ClientService } from '@services/client.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  form!: FormGroup;
  readonly countries$ = this.service.getCountries();
  readonly cities$ = this.service.getCities();

  constructor(formBuilder: FormBuilder, private router: Router, private service: ClientService) {
    this.form = formBuilder.group({
      zip: '',
      country: ['', Validators.required],
      region: '',
      city: ['', Validators.required],
      street: '',
      house: ''
    });

    if (this.service.address) {
      this.form.setValue(this.service.address);
    }
  }

  previous(): void {
    this.router.navigate(['/client-form/client']);
  }

  next(): void {
    this.service.address = this.form.getRawValue() as ClientAddress;
    this.router.navigate(['/client-form/identity']);
  }
}
