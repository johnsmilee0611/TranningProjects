import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from './product-edit.component';

@Injectable()
export class ProductGuard implements CanDeactivate<ProductEditComponent> {
    canDeactivate(component: ProductEditComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (component.isDirty) {
            let productName = component.product.productName || 'New Product';
            return confirm(`Navigate away and close all changes to ${productName}`);
        }

        return true;
    }
}
