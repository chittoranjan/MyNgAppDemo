import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeComponent } from './producttype/producttype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/appCore/material/material.module';



@NgModule({
  declarations: [ProducttypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProducttypeModule { }
