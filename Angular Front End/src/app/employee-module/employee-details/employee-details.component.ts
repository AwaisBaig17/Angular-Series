import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmpServiceService } from '../service/emp-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() currentEmployee?: Employee; //Defining the input decorator to show the data of child in parent
  employees?: Employee[] ;
  
  constructor(private service: EmpServiceService)
  {
    this.employees=this.service.employees;
  }

  //Function called upon click of Next Button
  NextEmployee(employee:Employee)
  {
    for(let i=0; i<this.service.employees.length;i++) //Loop for comparing the id of currentEmployee with that of list from service.
    {
      if(employee.id == this.service.employees[i].id && employee.id!=this.service.employees[this.service.employees.length-1].id) 
      //Comparing the Id of coming employee from list and also keeping sure that when the last element comes the condition doesnot work!
      {
       this.currentEmployee = this.service.employees[i+1];
      }
    }
  }

  //Function called upon click of Previous Button
  PreviousEmployee(employee:Employee){
    for(let i=0; i<this.service.employees.length; i++) //Loop for comparing the id of currentEmployee with that of list from service.
    {
      if(employee.id == this.service.employees[i].id && employee.id!=this.service.employees[0].id)
      //Comparing the Id of coming employee from list and also keeping sure that when the last element comes the condition doesnot work! 
      {
        this.currentEmployee = this.service.employees[i-1];
      }
    }
  }

  ngOnInit(): void {
  }

}