import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './MyNgApp/AuthService/login/login/login.component';
import { HomeComponent } from './MyNgApp/PublicModules/home/home.component';
import { PageNotFoundComponent } from './MyNgApp/PublicModules/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  { path: 'Login', component: LoginComponent },

  // explicity loading
  { path: 'ProductSale', loadChildren: './MyNgApp/ProductSaleModules/product-sale-routing.module#ProductSaleRoutingModule' },

  // Keep it buttom
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
