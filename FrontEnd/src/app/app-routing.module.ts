import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './MyNgApp/AuthService/login/login/login.component';
import { HomeComponent } from './MyNgApp/PublicModules/home/home.component';
import { PageNotFoundComponent } from './MyNgApp/PublicModules/page-not-found/page-not-found.component';
import { ProductSaleRoutingModule } from './MyNgApp/ProductSaleModules/product-sale-routing.module';


const routes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  { path: 'Login', component: LoginComponent },


  // Keep it buttom
  { path: '**', redirectTo: 'PageNotFound', pathMatch: 'full' },
  { path: 'PageNotFound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    ProductSaleRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
