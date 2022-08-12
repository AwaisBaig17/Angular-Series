import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';
import { EmpServiceService } from '../service/emp-service.service';
@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  @Output() clickedEmployee = new EventEmitter<Employee>(); //Here we are using output decorator that is called in employee-container to get object of selected employee
  employees?: Employee[] ;
  constructor(private service: EmpServiceService)
  {
    this.employees=this.service.employees;
  }

  ngOnInit(): void {
  }

  //Function returns clicked employee object
  onEmployeeClick(employee: Employee){
      this.clickedEmployee.emit(employee);
      
  }

}