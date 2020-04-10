
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './appCore/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProducttypeModule } from './MyNgApp/ProductSaleModule/ProductType/producttype.module';
import { ProductModule } from './MyNgApp/ProductSaleModule/product/product.module';
import { SaleModule } from './MyNgApp/ProductSaleModule/sales/sale.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './MyNgApp/AuthService/login/login.module';




@NgModule({
  declarations: [
    AppComponent
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
    AppRoutingModule,

    LoginModule,
    ProducttypeModule,
    ProductModule,
    SaleModule,


  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: APP_BASE_HREF, useValue: '/' },
    // AUTH_PROVIDERS,
    // LoggedInGuard,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
