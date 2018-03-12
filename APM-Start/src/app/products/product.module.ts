import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent
  ],
  providers: [
    ProductService, 
    ProductGuardService
  ]
})
export class ProductModule { }
