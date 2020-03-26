import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../ProductType/product-type.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.modle';
import { CommonService } from '../../commonservice/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productTypeList: ProductType[] = [];

  productForm: FormGroup;
  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: ProductService,

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
    this.productForm = this._formBuilder.group(new Product());
  }

  save(model: Product) {
    this._service.save(model).subscribe(res => {
      this.productFormInstance();
    });
  }
}
