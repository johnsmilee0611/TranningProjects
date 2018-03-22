import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerReactiveFormsComponent } from './customer-reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    // CustomerComponent,
    CustomerReactiveFormsComponent
  ]
})
export class CustomerModule { }
