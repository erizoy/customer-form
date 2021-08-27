import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CLIENT_GROUPS, DOC_TYPES, GENDERS } from '@models/client';
import { ClientService } from '@services/client.service';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss']
})
export class CreatedClientComponent {
  readonly genders = GENDERS;
  readonly clientGroups = CLIENT_GROUPS;
  readonly docTypes = DOC_TYPES;

  constructor(private router: Router, public service: ClientService) {}

  reset(): void {
    this.service.reset();
    this.router.navigate(['/client-form/client']);
  }
}
