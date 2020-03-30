import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.modle';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SaleService } from '../sale.service';
import { CommonService } from '../../commonservice/common.service';
import { Sale } from '../sale.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProductType } from '../../ProductType/product-type.model';
import { Utility } from 'src/app/appCore/Utility/Utility';
import { ProductDisplay } from '../product-display.interface';
import { SaleDetails } from '../sale-details.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})



export class SaleComponent implements OnInit {

  productTypeList: ProductType[] = [];
  productList: Product[] = [];
  saleDetails: SaleDetails[] = [];

  saleForm: FormGroup;


  displayedColumns: string[] = ['Sl', 'Product', 'Price', 'ProductId', 'Discount', 'Amount'];

  productDisplay: ProductDisplay[] = [
    // { product: 'book', price: 120, discount: 10, amount: 110 },
    // { product: 'pen', price: 20, discount: 2, amount: 18 },
  ];

  dataSource = new MatTableDataSource<ProductDisplay>();


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

  onChange(event) {

    const selectedPTId = event.value;

    this._commonService.getPeoductByTypeId(selectedPTId).subscribe(res => {
      this.productList = res as Product[];
      if (Utility.hasNoError(this.productList)) {

        this.productDisplay = [];
        this.productList.forEach(pro => {
          this.productDisplay.push({
            productTypeId: pro.productTypeId,
            productId: pro.id,
            product: pro.name,
            price: pro.price,
            discount: 0,
            amount: 0,
          });

          this.dataSource.data = this.productDisplay;

        });
      }

    });


  }

  save(model: Sale) {
    this._service.save(model).subscribe(res => {
      this.productFormInstance();
    });
  }


}



