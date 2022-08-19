import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';
import { GetEmpService } from '../service/get-emp.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  @Output() clickedEmployee = new EventEmitter<Employee>(); //Here we are using output decorator that is called in employee-container to get object of selected employee
  employee1?:any;
  employees1?:any;
  objEmp: Employee={} as Employee;
  myForm!: FormGroup;
  employeeForm!: FormGroup;

  // myForm = new FormGroup({
  //   name: new FormControl(""),
  //   role: new FormControl("")
  // });
  constructor(private service:GetEmpService,private formBuilder1:FormBuilder,private formBuilder:FormBuilder)
  {
    this.myForm = this.formBuilder1.group({
      name:['',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
      role:['',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]]
    });
    this.employeeForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
      role:['',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
    this.getListofEmployee();
  }


  getListofEmployee()
  {
    this.service.get().subscribe(data=>{
      console.log(data);
      this.employees1 = data;
    }, error=>{
      console.log(error);
    });

  }

  //Function returns clicked employee object
  onEmployeeClick(employee: Employee){
      this.clickedEmployee.emit(employee);
      
  }
  addEmployee(){
    let name = this.employeeForm.get("name")!.value;
    let role = this.employeeForm.get("role")!.value;
    let emp = {id : 0, name : name, role : role } as Employee;
    this.service.addEmployee(emp).subscribe((data)=>{
        alert("Employee Added Successfully");
        this.employeeForm.reset();
        this.service.get().subscribe(data=>{
          console.log(data);
          this.employees1 = data;
        }, error=>{
          console.log(error);
        }); 
    });
    
  }
  editEmployee(employee:Employee){
    console.log("Edit Employee Works");
    this.myForm.controls['name'].setValue(employee.name);
    this.myForm.controls['role'].setValue(employee.role);
    this.objEmp.id = employee.id;
  }
  updateEmployee(){
    let employeeID =  this.objEmp.id;
    console.log (employeeID);
    let name = this.myForm.get("name")!.value;
    let role = this.myForm.get("role")!.value;
    let updatedEmp = { id : employeeID, name : name, role : role } as Employee;
    this.service.updateEmployee(updatedEmp.id , updatedEmp).subscribe((data)=>{
      alert("Employee Updated Successfully")
    });
    this.getListofEmployee();
  }
  deleteEmployee(employee:Employee){
    let confirmation = confirm("Are you sure about deleting this employee?");
    if(confirmation){
      let index = Number(employee.id);
      this.service.deleteFromId(index).subscribe();
      alert("Employee Deleted Successfully!");
      this.getListofEmployee();
    }
    else{
      this.getListofEmployee();
    }
  }

}