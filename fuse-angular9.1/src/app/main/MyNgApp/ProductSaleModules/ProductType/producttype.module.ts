import { NgModule } from '@angular/core';
import { ProducttypeComponent } from './producttype/producttype.component';
import { SharedModule } from 'app/main/MyNgAppCore/Shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProducttypeListComponent } from './producttype-list/producttype-list.component';
import { MatTableModule } from '@angular/material/table';
import { ProducttypeService } from './producttype.service';


const routes = [
  {
    path: 'producttype',
    component: ProducttypeComponent
  }
];

@NgModule({
  declarations: [ProducttypeComponent, ProducttypeListComponent],
  imports: [
    FuseSharedModule,
    TranslateModule,
    RouterModule.forChild(routes),
    SharedModule,
   
  ],
  providers: [
    ProducttypeService,
  ],
  exports: [
    ProducttypeComponent
  ]
})
export class ProducttypeModule { }
