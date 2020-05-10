import { Routes, RouterModule } from '@angular/router';
import { ProducttypeComponent } from './ProductType/producttype/producttype.component';
import { LoggedInGuard } from '../AuthService/logged-in.guard';
import { ProductComponent } from './product/product/product.component';
import { SaleComponent } from './sales/sale/sale.component';
import { NgModule } from '@angular/core';



const routes: Routes = [

      { path: 'ProductType', component: ProducttypeComponent, canActivate: [LoggedInGuard] },
      { path: 'Product', component: ProductComponent, canActivate: [LoggedInGuard] },
      { path: 'Sale', component: SaleComponent, canActivate: [LoggedInGuard] },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductSaleRoutingModule { }
