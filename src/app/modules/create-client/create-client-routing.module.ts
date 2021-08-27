import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from '@guards/form.guard';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { CreatedClientComponent } from './components/created-client/created-client.component';
import { DocFormComponent } from './components/doc-form/doc-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-form/client',
    pathMatch: 'full'
  },
  {
    path: 'client-form/client',
    component: PersonalFormComponent
  },
  {
    path: 'client-form/address',
    component: AddressFormComponent,
    canActivate: [FormGuard]
  },
  {
    path: 'client-form/identity',
    component: DocFormComponent,
    canActivate: [FormGuard]
  },
  {
    path: 'created-client',
    component: CreatedClientComponent,
    canActivate: [FormGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateClientRoutingModule {}
