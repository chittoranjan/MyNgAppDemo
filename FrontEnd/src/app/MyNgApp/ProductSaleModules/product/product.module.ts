import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/appCore/Shared/shared.module';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
