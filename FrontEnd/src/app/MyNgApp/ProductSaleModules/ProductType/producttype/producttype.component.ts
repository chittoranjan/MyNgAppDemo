import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ProducttypeService } from '../producttype.service';
import { FormBuilder } from '@angular/forms';
import { ProductType } from '../product-type.model';
import { CustomValidators } from 'src/app/appCore/Shared/custom.validators';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss']
})
export class ProducttypeComponent implements OnInit {

  productTypeForm: FormGroup;


  formErrors = {
    name: '',
    description: '',
    email: '',
    confirmEmail: '',
    emailGroup: '',
    contactPrefence: '',
    phone: '',
    email1: '',
  };

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
    this.productTypeForm.get('contactPrefence').valueChanges.subscribe((data: string) => {
      CustomValidators.onRadioOrCheckboxSelectValidationErrors(data, this.productTypeForm);
    });
  }

  productTypeFormInstance() {
    this.productTypeForm = this._formBuilder.group({
      id: [CustomValidators.propartyLength.id],

      name: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
      Validators.maxLength(CustomValidators.propartyLength.maxlength)]],

      description: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
      Validators.maxLength(CustomValidators.propartyLength.maxlength)]],

      emailGroup: this._formBuilder.group({

        email: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
        Validators.maxLength(CustomValidators.propartyLength.maxlength),
        CustomValidators.emailDomain(CustomValidators.emailDomainList.abc)]],

        confirmEmail: ['', [Validators.required]]
      }, { validators: CustomValidators.matchEmail('email', 'confirmEmail') }),

      contactPrefence: [''],
      email1: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
        Validators.maxLength(CustomValidators.propartyLength.maxlength),
        CustomValidators.emailDomain(CustomValidators.emailDomainList.aits)]],
      phone: [''],


    });

  }


  // This methode use for all form field validator check
  logValidationErrors(group: FormGroup = this.productTypeForm) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = CustomValidators.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
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
      });
    } else {
      this.logValidationErrors(this.productTypeForm); // how to make all are touched?
    }

  }
}


