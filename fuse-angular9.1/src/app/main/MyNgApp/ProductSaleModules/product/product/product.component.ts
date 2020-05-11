import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../ProductType/product-type.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.modle';
import { ProductSaleCommonService } from '../../product-sale-common.service';
import { CustomValidators } from 'app/main/MyNgAppCore/Shared/custom.validators';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: fuseAnimations
})
export class ProductComponent implements OnInit {

  cardExpanded: boolean = false;
  searchExpanded: boolean = false;

  productTypeList: ProductType[] = [];

  productForm: FormGroup;
  formErrors = CustomValidators.formErrors;

  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: ProductService,

    // tslint:disable-next-line: variable-name
    private _commonService: ProductSaleCommonService,
  ) { }

  ngOnInit() {
    this.productFormInstance();
    this.getProductTypeList();

    // Thise methode call for form validator check
    this.productForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.productForm);
    });
  }

  getProductTypeList() {

    this._commonService.getPeoductType().subscribe(res => {
      this.productTypeList = res as ProductType[];
    });
  }

  productFormInstance() {
    this.productForm = this._formBuilder.group({
      id: [CustomValidators.propertyType.number],

      name: [CustomValidators.propertyType.string, [Validators.required, Validators.minLength(CustomValidators.propertyLength.minLength),
      Validators.maxLength(CustomValidators.propertyLength.maxLength)]],
      price: [CustomValidators.propertyType.number, [Validators.required]],

      productTypeId: [CustomValidators.propertyType.number, [Validators.required]],

      description: [CustomValidators.propertyType.string, [Validators.required,
      Validators.minLength(CustomValidators.propertyLength.minLength), Validators.maxLength(CustomValidators.propertyLength.maxLength)]],



    });
  }


  // This methode use for all form field validator check
  logValidationErrors(group: FormGroup = this.productForm) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      CustomValidators.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = CustomValidators.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            CustomValidators.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

    });
  }

  save(form) {
    if (form.valid) {
      const model = form.value as Product;
      this._service.save(model).subscribe(res => {
        this.productFormInstance();
        this._service.get();
      });
    } else {
      this.logValidationErrors(this.productForm); // how to make all are touched?
    }

  }
}
