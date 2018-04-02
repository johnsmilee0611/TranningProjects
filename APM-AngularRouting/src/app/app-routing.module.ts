import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './shared/auth-guard.service';
import { SelectiveStrategy } from './user/selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        loadChildren: 'app/products/product.module#ProductModule',
        canActivate: [AuthGuard],
        data: { preload: false }
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { enableTracing: true, preloadingStrategy: SelectiveStrategy })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }