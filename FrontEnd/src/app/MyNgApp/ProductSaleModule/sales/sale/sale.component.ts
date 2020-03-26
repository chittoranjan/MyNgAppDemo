import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.modle';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SaleService } from '../sale.service';
import { CommonService } from '../../commonservice/common.service';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})



export class SaleComponent implements OnInit {

  productList: Product[] = [];

  saleForm: FormGroup;

  selected = 0;


displayedColumns: string[] = ['Sl', 'Product', 'Price', 'Discount', 'Amount'];
dataSource = ELEMENT_DATA;

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
  this.getProductList();
}

getProductList() {

  this._commonService.getPeoduct().subscribe(res => {
    this.productList = res as Product[];
  });
}
productFormInstance() {
  this.saleForm = this._formBuilder.group(new Sale());
}

productSelect(event: any) {
  const dd = event.target.value;
  console.log(dd);
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
  {product: 'book', price: 120, discount: 10, amount: 110}
];
