import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-form-steps',
  templateUrl: './client-form-steps.component.html',
  styleUrls: ['./client-form-steps.component.scss']
})
export class ClientFormStepsComponent {
  @Input() step!: number;
}
