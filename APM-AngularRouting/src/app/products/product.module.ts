import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';
import { AuthGuard } from '../shared/auth-guard.service';
import { ProductGuard } from './product-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        canActivate: [ AuthGuard ], 
        children: [
          { path: '', component: ProductListComponent },
          { path: ':id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
          {
            path: ':id/edit', 
            component: ProductEditComponent, 
            resolve: { product: ProductResolver },
            children: [
              { path: '', redirectTo: 'info', pathMatch: 'full' },
              { path: 'info', component: ProductEditInfoComponent },
              { path: 'tags', component: ProductEditTagsComponent }
            ],
            canDeactivate: [ ProductGuard ]
          }
        ]
      },

    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductGuard
  ]
})
export class ProductModule { }
