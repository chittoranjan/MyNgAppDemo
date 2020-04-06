import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducttypeComponent } from './MyNgApp/ProductSaleModule/ProductType/producttype/producttype.component';
import { ProductComponent } from './MyNgApp/ProductSaleModule/product/product/product.component';
import { SaleComponent } from './MyNgApp/ProductSaleModule/sales/sale/sale.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ProductType', component: ProducttypeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Sale', component: SaleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
