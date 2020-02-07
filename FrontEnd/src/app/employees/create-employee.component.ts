import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  previwPhoto = false;
  dateOfBirth: Date = new Date(2020, 1, 20);
  dsDatepickerConfig: Partial<BsDatepickerConfig>;
  gender = 'male';
  contactPrefarence = 'email';
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}

  ];

  constructor() {
    this.dsDatepickerConfig = Object.assign(
      {},
       {containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',
      });
   }

  ngOnInit() {
  }

  togglePhotoPreview() {
    this.previwPhoto = !this.previwPhoto;
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
