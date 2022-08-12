import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewData!: ChildComponent; //Using ViewChild to bring ChildComponent elements inside this Typescript
  title = 'Task-2';
  inputTitle ='';
  inputDescription = '';
  inputObj!:object;

  //Function creating object with input from text box and then add them into updated list
  TransferData(title:any, description:any){
    this.inputTitle = title;
    this.inputDescription = description;
    this.inputObj = {"title": title ,"description":description};
    this.viewData.updateList(this.inputObj);
  }
}
