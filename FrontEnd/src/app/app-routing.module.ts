import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducttypeComponent } from './MyNgApp/ProductSaleModule/ProductType/producttype/producttype.component';
import { ProductComponent } from './MyNgApp/ProductSaleModule/product/product/product.component';
import { SaleComponent } from './MyNgApp/ProductSaleModule/sales/sale/sale.component';
import { LoggedInGuard } from './MyNgApp/AuthService/logged-in.guard';
import { LoginComponent } from './MyNgApp/AuthService/login/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'ProductType', component: ProducttypeComponent, canActivate: [LoggedInGuard] },
  { path: 'Product', component: ProductComponent, canActivate: [LoggedInGuard] },
  { path: 'Sale', component: SaleComponent, canActivate: [LoggedInGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
