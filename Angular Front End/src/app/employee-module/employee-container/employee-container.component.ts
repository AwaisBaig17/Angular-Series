import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {

  public selectedEmployee?: Employee;

  constructor() { }

  ngOnInit(): void {
  }
  setSelectedEmployee(employee: Employee){
      this.selectedEmployee = employee;
      console.log(employee);
  }

}