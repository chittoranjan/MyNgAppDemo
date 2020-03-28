
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './appCore/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProducttypeComponent } from './MyNgApp/ProductSaleModule/ProductType/producttype/producttype.component';
import { ProducttypeModule } from './MyNgApp/ProductSaleModule/ProductType/producttype.module';
import { ProductModule } from './MyNgApp/ProductSaleModule/product/product.module';
import { ProductComponent } from './MyNgApp/ProductSaleModule/product/product/product.component';
import { SaleComponent } from './MyNgApp/ProductSaleModule/sales/sale/sale.component';
import { SaleModule } from './MyNgApp/ProductSaleModule/sales/sale.module';



const appRoutes: Routes = [
  { path: 'ProductType', component: ProducttypeComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Sale', component: SaleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    ProducttypeModule,
    ProductModule,
    SaleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
