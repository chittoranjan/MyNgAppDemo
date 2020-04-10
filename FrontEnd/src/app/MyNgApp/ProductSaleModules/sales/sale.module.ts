import { NgModule } from '@angular/core';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from 'src/app/appCore/Shared/shared.module';



@NgModule({
  declarations: [SaleComponent],
  imports: [
    SharedModule
  ]
})
export class SaleModule { }


