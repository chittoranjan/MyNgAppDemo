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
    this.productTypeForm.get('checkbox').valueChanges.subscribe((data: string) => {
      this.onRadioOrCheckboxSelectValidationErrors(data);
    });
  }

  productTypeFormInstance() {
    this.productTypeForm = this._formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
      Validators.maxLength(CustomValidators.propartyLength.maxlength)]],
      description: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
      Validators.maxLength(CustomValidators.propartyLength.maxlength)]],
      email: ['', [Validators.required, Validators.minLength(CustomValidators.propartyLength.minlength),
      Validators.maxLength(CustomValidators.propartyLength.maxlength), CustomValidators.emailDomain(CustomValidators.emailDomainList.abc)]]
    });

  }


  // This methode use for checkbox or radio button selected input field validators
  onRadioOrCheckboxSelectValidationErrors(selectedValue: string) {
    const formPropartyValue = this.productTypeForm.get('checkbox');
    if (selectedValue === 'checkbox') {
      formPropartyValue.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
    } else {

      formPropartyValue.clearValidators();
    }
    formPropartyValue.updateValueAndValidity();
  }

  // This methode use for all form field validator check
  logValidationErrors(group: FormGroup = this.productTypeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = CustomValidators.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
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


