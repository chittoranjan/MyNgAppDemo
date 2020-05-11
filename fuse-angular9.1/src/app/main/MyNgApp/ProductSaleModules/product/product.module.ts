import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'app/main/MyNgAppCore/Shared/shared.module';
import { Product } from './product.modle';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes = [
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    FuseSharedModule,
    TranslateModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),
   
  ],
  providers: [
    ProductService,
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
