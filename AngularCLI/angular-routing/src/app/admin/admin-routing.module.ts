import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DirectorComponent } from './director/director.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'director', component: DirectorComponent },
      { path: 'worker', component: WorkerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
