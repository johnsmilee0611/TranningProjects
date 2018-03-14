import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { StarDirective } from './star.directive';
import { Star2Directive } from './star2/star2.directive';
import { Product3Service } from './product3.service';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StarDirective,
    Star2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [Product3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
