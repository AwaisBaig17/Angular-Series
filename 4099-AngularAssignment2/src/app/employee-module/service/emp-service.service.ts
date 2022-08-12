import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }
  employees: Employee[] = [{id: 1, name:'Awais', gender: true, role: 'Engineer'},
  {id: 2, name:'Aiman', gender: false, role: 'Doctor'},
  {id: 3, name:'Aqsa', gender: false, role: 'Business Analyst'},
  {id: 4, name:'Zaid', gender: true, role: ' Industrialist'}
];
}
