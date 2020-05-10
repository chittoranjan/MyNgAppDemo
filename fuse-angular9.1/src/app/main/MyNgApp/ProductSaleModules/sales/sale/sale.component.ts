import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.modle';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { SaleService } from '../sale.service';
import { ProductSaleCommonService } from '../../product-sale-common.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductType } from '../../ProductType/product-type.model';
import { ProductDisplay } from '../product-display.interface';
import { Utility } from 'app/main/MyNgAppCore/Utility/Utility';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})



export class SaleComponent implements OnInit {

  productTypeList: ProductType[] = [];
  productList: Product[] = [];

  saleForm: FormGroup;
  saleDetails: FormArray;


  displayedColumns: string[] = ['Sl', 'Product', 'Price', 'ProductId', 'Discount', 'Amount'];

  productDisplay: ProductDisplay[] = [];

  dataSource = new MatTableDataSource<ProductDisplay>();


  constructor(

    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: SaleService,

    // tslint:disable-next-line: variable-name
    private _commonService: ProductSaleCommonService,

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
    this.saleForm = this._formBuilder.group({
      id: [0],
      name: ['chitto'],
      date: [new Date('4/15/2020')],
      description: ['test'],

      saleDetails: this._formBuilder.array([
        this.addSaleDetailsFormGroup()
      ])

    });
  }

  addSaleDetailsFormGroup(): FormGroup {
    return this._formBuilder.group({
      productId: [0],
      discount: [0],
      amount: [0]
    });

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


  save(value) {

    const model = {
      id: 0,
      name: value.name,
      date: value.date,
      description: value.description,
      saleDetailses: value.saleDetails
    };
    // this._service.save(model).subscribe(res => {
    //   this.productFormInstance();
    // });
    console.log(JSON.stringify(model));
    alert(JSON.stringify(model));
  }


}



