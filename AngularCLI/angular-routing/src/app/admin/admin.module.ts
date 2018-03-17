import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { WorkerComponent } from './worker/worker.component';
import { DirectorComponent } from './director/director.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [WorkerComponent, DirectorComponent]
})
export class AdminModule { }
