import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../product/product.modle';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SaleService } from '../sale.service';
import { CommonService } from '../../commonservice/common.service';
import { Sale } from '../sale.model';
import { MatTable } from '@angular/material/table';
import { ProductType } from '../../ProductType/product-type.model';
import { Utility } from 'src/app/appCore/Utility/Utility';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})



export class SaleComponent implements OnInit {

  productTypeList: ProductType[] = [];
  productList: Product[] = [];

  saleForm: FormGroup;

  selected = 0;


  displayedColumns: string[] = ['Sl', 'Product', 'Price', 'Discount', 'Amount'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable, { static: true }) table: MatTable<PeriodicElement>;


  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: SaleService,

    // tslint:disable-next-line: variable-name
    private _commonService: CommonService,
  ) { }

  ngOnInit() {
    this.productFormInstance();
    this.getProductTypeList();
  }

  getProductTypeList() {

    this._commonService.getPeoductType().subscribe(res => {
      this.productTypeList = res as ProductType[];
    });
  }

  productFormInstance() {
    this.saleForm = this._formBuilder.group(new Sale());
  }

  onChange(event): void {
    const selectedPTId = event.value;
    this._commonService.getPeoduct();
    this._commonService.getPeoductByTypeId(selectedPTId).subscribe(res => {
      this.productList = res as Product[];
    });
    console.log(this.productList);
    if (Utility.hasNoError(this.productList)) {
      this.productList.forEach(element => {
        this.dataSource.push({
          product: element.name,
          price: element.price,
          discount: 0,
          amount: 0,
        });
        this.table.renderRows();
      });
    }
  }

  save(model: Sale) {
    this._service.save(model).subscribe(res => {
      this.productFormInstance();
    });
  }
}

export interface PeriodicElement {
  product: string;
  price: number;
  discount: number;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // { product: 'book', price: 120, discount: 10, amount: 110 },
  // { product: 'pen', price: 20, discount: 2, amount: 18 },
];
