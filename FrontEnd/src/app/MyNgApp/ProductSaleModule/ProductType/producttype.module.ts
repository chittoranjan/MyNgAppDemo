import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeComponent } from './product-type/product-type.component';
import { MaterialModule } from 'src/app/appCore/MaterialModule';



@NgModule({
  declarations: [ProductTypeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProducttypeModule { }
