import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductType } from '../product-type.model';
import { ProducttypeService } from '../producttype.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-producttype-list',
  templateUrl: './producttype-list.component.html',
  styleUrls: ['./producttype-list.component.scss'],
  animations: fuseAnimations,
})
export class ProducttypeListComponent implements OnInit {

  productTypeList: ProductType[] = [];
  dataSource: MatTableDataSource<ProductType>;
  displayedColumns = ['id', 'name', 'description', 'action'];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

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
