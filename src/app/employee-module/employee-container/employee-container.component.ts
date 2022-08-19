import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { GetEmpService } from '../service/get-emp.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit {

  public selectedEmployee?: Employee;
  // employeeForm = new FormGroup({
  //   name: new FormControl(""),
  //   role: new FormControl("")
  // });
  constructor(private service: GetEmpService) { }

  ngOnInit(): void { }
  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    console.log(employee);
  }
}