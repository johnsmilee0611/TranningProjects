import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import { IProduct } from './product';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

    constructor(private productService: ProductService,
        private router: Router) {

    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
        let productId = route.params['id'];
        if (isNaN(productId)) {
            console.log(`Product id was not a number: ${productId}`);
            this.router.navigateByUrl('/products');
            return Observable.of(null);
        }

        return this.productService.getProduct(+productId).map(product => {
            if(product) {
                return product;
            }

            console.log(`Product was not found: ${productId}`);
            this.router.navigateByUrl('/products');
            return null;
        }).catch(error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigateByUrl('/products');
            return Observable.of(null);
        });
    }
}