import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './MyNgApp/AuthService/login/login/login.component';
import { HomeComponent } from './MyNgApp/PublicModules/home/home.component';
import { CustomPreloadingService } from './MyNgApp/ProductSaleModules/custom-preloading.service';
import { PageNotFoundComponent } from './MyNgApp/PublicModules/page-not-found/page-not-found.component';


const appRoutes: Routes = [

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  { path: 'Login', component: LoginComponent },

  // explicity loading
  { path: 'ProductSale', data: { preload: true },
   loadChildren: () => import ('./MyNgApp/ProductSaleModules/product-sale-routing.module').then(m => m.ProductSaleRoutingModule) },

  // Keep it buttom
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
