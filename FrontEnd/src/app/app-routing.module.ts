import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducttypeComponent } from './MyNgApp/ProductSaleModule/ProductType/producttype/producttype.component';
import { ProductComponent } from './MyNgApp/ProductSaleModule/product/product/product.component';
import { SaleComponent } from './MyNgApp/ProductSaleModule/sales/sale/sale.component';
import { LoggedInGuard } from './MyNgApp/AuthService/logged-in.guard';
import { LoginComponent } from './MyNgApp/AuthService/login/login/login.component';
import { HomeComponent } from './MyNgApp/PublicModule/home/home.component';
import { PageNotFoundComponent } from './MyNgApp/PublicModule/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  { path: 'Login', component: LoginComponent },
  { path: 'ProductType', component: ProducttypeComponent, canActivate: [LoggedInGuard] },
  { path: 'Product', component: ProductComponent, canActivate: [LoggedInGuard] },
  { path: 'Sale', component: SaleComponent, canActivate: [LoggedInGuard] },



  // Keep it buttom
  { path: '**', redirectTo: 'PageNotFound', pathMatch: 'full' },
  { path: 'PageNotFound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
