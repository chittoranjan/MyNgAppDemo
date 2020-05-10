import { Component, OnInit } from '@angular/core';
import { ProductType } from '../product-type.model';
import { ProducttypeService } from '../producttype.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producttype-list',
  templateUrl: './producttype-list.component.html',
  styleUrls: ['./producttype-list.component.scss']
})
export class ProducttypeListComponent implements OnInit {

  productTypeList: ProductType[] = [];
  dataSource: MatTableDataSource<ProductType>;
  displayedColumns = ['id', 'name', 'description', 'action'];

  constructor(
    private _service: ProducttypeService,

  ) { }

  ngOnInit(): void {
    this._service.get();
    this._service.onProductTypeListChanged.subscribe((res: ProductType[]) => {

      this.productTypeList = res as ProductType[];
      this.dataSource = new MatTableDataSource(this.productTypeList);

    });
  }

}
