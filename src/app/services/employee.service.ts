import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:8081/employee/save',data)

  }
}
