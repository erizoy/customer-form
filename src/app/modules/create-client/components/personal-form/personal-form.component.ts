import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientPersonal, CLIENT_GROUPS, GENDERS } from '@models/client';
import { ClientService } from '@services/client.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent {
  form!: FormGroup;
  readonly genders = GENDERS;
  readonly clientGroups = CLIENT_GROUPS;
  readonly coordinators$ = this.service.getCoordinators();

  constructor(formBuilder: FormBuilder, private router: Router, private service: ClientService) {
    this.form = formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      patronymic: '',
      birthDate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/\d{11}/)]],
      gender: '',
      clientGroup: [[], Validators.required],
      coordinator: '',
      noSms: false
    });

    if (this.service.personal) {
      this.form.setValue(this.service.personal);
    }
  }

  next(): void {
    this.service.personal = this.form.getRawValue() as ClientPersonal;
    this.router.navigate(['/client-form/address'])
  }
}
