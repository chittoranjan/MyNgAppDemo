import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../product.modle';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: fuseAnimations,
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  dataSource: MatTableDataSource<Product>;
  displayedColumns = ['id', 'name', 'price', 'productType', 'description', 'action'];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  constructor(
    private _service: ProductService,
  ) { }

  ngOnInit(): void {
    this._service.get();
    this._service.onProductListChanged.subscribe((res: Product[]) => {

      this.productList = res as Product[];
      this.dataSource = new MatTableDataSource(this.productList);

    });
  }

}
