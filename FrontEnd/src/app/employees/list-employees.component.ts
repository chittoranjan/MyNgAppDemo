import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] = [
  {
    id: 1,
    name: 'Mark',
    gender: 'Male',
    email: 'mark@mail.com',
    phoneNumber: '25417896',
    contactPreference: 'Email',
    dateOfBirth: new Date('10/25/1988'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/male.jpeg'
},
{
  id: 2,
  name: 'Mary',
  gender: 'Female',
  email: 'mary@mail.com',
  phoneNumber: '25419996',
  contactPreference: 'Phone',
  dateOfBirth: new Date('10/25/1985'),
  department: 'HR',
  isActive: true,
  photoPath: 'assets/images/female.jpeg'
},
{
  id: 3,
  name: 'Jone',
  gender: 'Male',
  email: 'jone@mail.com',
  phoneNumber: '25417800',
  contactPreference: 'Phone',
  dateOfBirth: new Date('10/25/1977'),
  department: 'IT',
  isActive: true,
  photoPath: 'assets/images/baby.jpeg'
}
];
  constructor() { }

  ngOnInit() {
  }

}
