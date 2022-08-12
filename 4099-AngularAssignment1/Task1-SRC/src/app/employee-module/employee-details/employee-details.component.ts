import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() currentEmployee?: Employee; //Defining the input decorator to show the data of child in parent
  constructor() { }

  ngOnInit(): void {
  }

}