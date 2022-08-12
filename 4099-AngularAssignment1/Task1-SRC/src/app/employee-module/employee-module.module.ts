import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';



@NgModule({
  declarations: [
    EmployeeContainerComponent,
    EmployeeDetailsComponent,
    EmployeeListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmployeeContainerComponent
  ]
})
export class EmployeeModuleModule { }
