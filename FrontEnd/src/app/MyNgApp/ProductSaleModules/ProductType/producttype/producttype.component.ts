import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, EmailValidator } from '@angular/forms';
import { ProducttypeService } from '../producttype.service';
import { FormBuilder } from '@angular/forms';
import { ProductType } from '../product-type.model';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.scss']
})
export class ProducttypeComponent implements OnInit {

  productTypeForm: FormGroup;

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be greater then 2 characters.',
      maxlength: 'Name must be less then 100 characters.'
    },
    description: {
      required: 'Description is required.',
      minlength: 'Description must be greater then 2 characters.',
      maxlength: 'Description must be less then 200 characters.'
    },
    email: {
      required: 'Email address is required.'
    }
  };

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

    this.productTypeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.productTypeForm);
    });
  }

  productTypeFormInstance() {
    this.productTypeForm = this._formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]

    });

  }

  logValidationErrors(group: FormGroup = this.productTypeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
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
