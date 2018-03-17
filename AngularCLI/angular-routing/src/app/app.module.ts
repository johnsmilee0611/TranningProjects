import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DirectorComponent } from './admin/director/director.component';
import { WorkerComponent } from './admin/worker/worker.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
