import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  @Output() clickedEmployee = new EventEmitter<Employee>();
  employees: Employee[] = [{id: 1, name:'Awais', gender: true, role: 'Engineer'},
  {id: 2, name:'Aiman', gender: false, role: 'Doctor'},
  {id: 3, name:'Aqsa', gender: false, role: 'Business Analyst'},
  {id: 4, name:'Zaid', gender: true, role: ' Industrialist'}
];
  constructor() { }

  ngOnInit(): void {
  }
  onEmployeeClick(employee: Employee){
      this.clickedEmployee.emit(employee);
  }

}
