
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './appCore/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './MyNgApp/AuthService/login/login.module';
import { ProductSaleCommonModule } from './MyNgApp/ProductSaleModules/product-sale-common.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    MaterialModule,
    FlexLayoutModule,

    AppRoutingModule,

    LoginModule,
    ProductSaleCommonModule,

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
