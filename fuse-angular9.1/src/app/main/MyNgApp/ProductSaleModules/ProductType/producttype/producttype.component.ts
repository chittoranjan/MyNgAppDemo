import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ProducttypeService } from '../producttype.service';
import { FormBuilder } from '@angular/forms';
import { ProductType } from '../product-type.model';
import { CustomValidators } from 'app/main/MyNgAppCore/Shared/custom.validators';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss'],
  animations   : fuseAnimations
})
export class ProducttypeComponent implements OnInit {

  cardExpanded: boolean = false;

  productTypeForm: FormGroup;
  formErrors = CustomValidators.formErrors;

  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _service: ProducttypeService,
  ) { }

  ngOnInit() {
    this.productTypeFormInstance();

    // Thise methode call for form validator check
    this.productTypeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.productTypeForm);
    });

    // This methode call for checkbox or radio button check validator check
    // this.productTypeForm.get('contactPrefence').valueChanges.subscribe((data: string) => {
    //   CustomValidators.onRadioOrCheckboxSelectValidationErrors(data, this.productTypeForm);
    // });
  }

  productTypeFormInstance() {
    this.productTypeForm = this._formBuilder.group({
      id: [CustomValidators.propertyType.number],

      name: [CustomValidators.propertyType.string, [Validators.required, Validators.minLength(CustomValidators.propertyLength.minLength),
      Validators.maxLength(CustomValidators.propertyLength.maxLength)]],

      description: [CustomValidators.propertyType.string, [Validators.required,
      Validators.minLength(CustomValidators.propertyLength.minLength), Validators.maxLength(CustomValidators.propertyLength.maxLength)]],

      // emailGroup: this._formBuilder.group({

      //   email: [CustomValidators.propertyType.string, [Validators.required, Validators.minLength(CustomValidators.propertyLength.minLength),
      //   Validators.maxLength(CustomValidators.propertyLength.maxLength),
      //   CustomValidators.emailDomain(CustomValidators.emailDomainList.abc)]],

      //   confirmEmail: [CustomValidators.propertyType.string, [Validators.required]]
      // }, { validators: CustomValidators.matchEmail('email', 'confirmEmail') }),

      // contactPrefence: [CustomValidators.propertyType.string],

      // email1: [CustomValidators.propertyType.string, [Validators.required, Validators.minLength(CustomValidators.propertyLength.minLength),
      // Validators.maxLength(CustomValidators.propertyLength.maxLength),
      // CustomValidators.emailDomain(CustomValidators.emailDomainList.aits)]],

      // phone: [CustomValidators.propertyType.string],


    });

  }


  // This methode use for all form field validator check
  logValidationErrors(group: FormGroup = this.productTypeForm) {
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
      const model = form.value as ProductType;
      this._service.save(model).subscribe(res => {
        this.productTypeFormInstance();
        this._service.get();
      });
    } else {
      this.logValidationErrors(this.productTypeForm); // how to make all are touched?
    }

  }
}


