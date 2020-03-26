import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeComponent } from './producttype/producttype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/appCore/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ProducttypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class ProducttypeModule { }
