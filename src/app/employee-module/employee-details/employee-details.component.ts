import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { GetEmpService } from '../service/get-emp.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() currentEmployee?: Employee; //Defining the input decorator to show the data of child in parent
  employees1!:any;
  
  constructor(private service: GetEmpService)
  {

  }
  NextEmployee(employee:Employee)
  { 
    if(employee!==undefined)
    {
      for(let i=0; i<this.employees1.length;i++) //Loop for comparing the id of currentEmployee with that of list from service.
      {
        if(employee.id == this.employees1[i].id && employee.id!=this.employees1[this.employees1.length-1].id) 
        //Comparing the Id of coming employee from list and also keeping sure that when the last element comes the condition doesnot work!
        {
         this.currentEmployee = this.employees1[i+1];
        }
      }
    } 
    else{
      alert("Select an Employee First!")
    }
  }

  //Function called upon click of Previous Button
  PreviousEmployee(employee:Employee)
{
  if(employee!==undefined)
  {
    for(let i=0; i<this.employees1.length; i++) //Loop for comparing the id of currentEmployee with that of list from service.
    {
      if(employee.id == this.employees1[i].id && employee.id!=this.employees1[0].id)
      //Comparing the Id of coming employee from list and also keeping sure that when the last element comes the condition doesnot work! 
      {
        this.currentEmployee = this.employees1[i-1];
      }
    }
  }
  else{
    alert("Select an Employee First!")
  }
}
  ngOnInit(): void {
    this.service.get().subscribe(data=>{
      console.log(data);
      this.employees1=data;
  
     },error=>{
      console.log(error);
     })
  }
}