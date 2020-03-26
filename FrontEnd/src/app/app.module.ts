
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './appCore/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProducttypeComponent } from './MyNgApp/ProductSaleModule/ProductType/producttype/producttype.component';
import { ProducttypeModule } from './MyNgApp/ProductSaleModule/ProductType/producttype.module';


const appRoutes: Routes = [
  {  path: 'ProductType', component: ProducttypeComponent },
  // { path: 'create', component: ''},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
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
    RouterModule.forRoot(appRoutes),
    
    ProducttypeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
