import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { ProducttypeService } from '../producttype.service';
import { ProductType } from '../product-type.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss']
})
export class ProducttypeComponent implements OnInit {

  productTypeForm: FormGroup;

  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: ProducttypeService,
  ) { }

  ngOnInit() {
    this.productTypeFormInstance();
  }

  productTypeFormInstance() {
    this.productTypeForm = this._formBuilder.group(new ProductType());
  }

  save(model) {
    this._service.save(model).subscribe(res => {
      this.productTypeFormInstance();
    });
  }
}
