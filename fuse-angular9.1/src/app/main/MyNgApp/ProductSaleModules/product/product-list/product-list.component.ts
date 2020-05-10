import { Component, OnInit } from '@angular/core';
import { Product } from '../product.modle';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  dataSource: MatTableDataSource<Product>;
  displayedColumns = ['id', 'name', 'price', 'productType', 'description', 'action'];

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
