import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //Defining Input Decorators
  @Input() titleData: any;
  @Input() descriptionData: any;
  @Input() objData: any;
  
  myArray = [{"title":"","description":""}]
  constructor() { }

  ngOnInit(): void {
  }
  //This function will push the object into the Array
  updateList(obj:any){
    this.myArray.push(obj); 
  }

}
