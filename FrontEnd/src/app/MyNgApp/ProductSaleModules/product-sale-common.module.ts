import { NgModule } from '@angular/core';
import { ProducttypeModule } from './ProductType/producttype.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sales/sale.module';



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ProducttypeModule,
    ProductModule,
    SaleModule,

  ]
})
export class ProductSaleCommonModule { }
