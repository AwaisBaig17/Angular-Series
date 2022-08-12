import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  @Output() clickedEmployee = new EventEmitter<Employee>(); //Here we are using output decorator that is called in employee-container to get object of selected employee
  employees: Employee[] = [{id: 1, name:'Awais', gender: true, role: 'Engineer'},
  {id: 2, name:'Aiman', gender: false, role: 'Doctor'},
  {id: 3, name:'Aqsa', gender: false, role: 'Business Analyst'},
  {id: 4, name:'Zaid', gender: true, role: ' Industrialist'}
];
  constructor() { }

  ngOnInit(): void {
  }

  //Function returns clicked employee object
  onEmployeeClick(employee: Employee){
      this.clickedEmployee.emit(employee);
  }

}