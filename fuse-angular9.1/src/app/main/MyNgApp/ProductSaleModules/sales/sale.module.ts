import { NgModule } from '@angular/core';
import { SaleComponent } from './sale/sale.component';
import { SharedModule } from 'app/main/MyNgAppCore/Shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';


const routes = [
  {
      path     : 'sale',
      component: SaleComponent
  }
];

@NgModule({
  declarations: [SaleComponent],
  imports: [
    SharedModule,
   RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ],
  exports: [
    SaleComponent
  ]
  
})
export class SaleModule { }


