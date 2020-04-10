import { NgModule } from '@angular/core';
import { ProducttypeComponent } from './producttype/producttype.component';
import { SharedModule } from 'src/app/appCore/Shared/shared.module';



@NgModule({
  declarations: [ProducttypeComponent],
  imports: [
    SharedModule
  ]
})
export class ProducttypeModule { }
