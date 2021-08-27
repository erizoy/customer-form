import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import { TranslateModule } from '@ngx-translate/core';

import { ClientService } from '@services/client.service';
import { FormGuard } from '@guards/form.guard';
import { CreateClientRoutingModule } from './create-client-routing.module';

import { ClientFormStepsComponent } from './components/client-form-steps/client-form-steps.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DocFormComponent } from './components/doc-form/doc-form.component';
import { CreatedClientComponent } from './components/created-client/created-client.component';

@NgModule({
  declarations: [
    ClientFormStepsComponent,
    PersonalFormComponent,
    AddressFormComponent,
    DocFormComponent,
    CreatedClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatStepperModule,
    TranslateModule,
    CreateClientRoutingModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    },
    FormGuard,
    ClientService
  ]
})
export class CreateClientModule {}
