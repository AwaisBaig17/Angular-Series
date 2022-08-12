import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModuleModule } from './employee-module/employee-module.module';
import { EmployeeContainerComponent } from './employee-module/employee-container/employee-container.component';
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
