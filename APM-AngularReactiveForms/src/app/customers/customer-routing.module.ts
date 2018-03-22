import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerReactiveFormsComponent } from './customer-reactive-forms.component';

const routes: Routes = [
  { path: 'customers', component: CustomerReactiveFormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
