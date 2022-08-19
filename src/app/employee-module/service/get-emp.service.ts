import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

/*
@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
}
*/

@Injectable({
  providedIn: 'root'
})
export class GetEmpService {

  constructor(private http: HttpClient) { }

  //Observable

  get(): Observable<Employee>
  {
    return this.http.get<Employee>('http://localhost/API4099/Employees');
  }

  getFromId(id:number): Observable<Employee>
  {
    return this.http.get<Employee>(`http://localhost/API4099/Employees/{id}`);
  }

  deleteFromId(id:number):Observable<Employee>{
    return this.http.post<Employee>('http://localhost/API4099/DeleteEmp/'+id,null);
  }
  addEmployee(emp:Employee): Observable<Employee>{
    return this.http.post<Employee>('http://localhost/API4099/AddEmp',emp)
  }
  updateEmployee(identity:number, object:Employee): Observable<Employee>{
    return this.http.post<Employee>('http://localhost/API4099/UpdateEmp/'+identity,object)
  }
}

