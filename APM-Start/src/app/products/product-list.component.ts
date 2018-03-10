import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.css' ]
})

export class ProductListComponent implements OnInit {

    products: IProduct[];
    
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 50;
    showImage: boolean = false;
    starNumber: string = "";

    _itemFilter: string = "";
    productsFilter: IProduct[];

    constructor(private _productService: ProductService) {
        this.productsFilter = this.products;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.productsFilter = this.products;
        this._itemFilter = "cart";
    }

    onNotifyStar(message: string) : void {
        this.starNumber = message;
    }

    get itemFilter() : string {
        return this._itemFilter;
    }

    set itemFilter(value: string) {
        this._itemFilter = value;
        this.productsFilter = this.itemFilter ? this.performFilter(this.itemFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}