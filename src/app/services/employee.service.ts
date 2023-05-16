import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this.http.post('http://202.40.191.226:8081/employee/save',data)
  }

  updateEmployee(id:number,data:any):Observable<any>{
    return this.http.put('http://202.40.191.226:8081/employee/update-employee/'+id,data)
  }


  getEmployeeList():Observable<any>{
    return this.http.get('http://202.40.191.226:8081/employee/employee-list')
  }

  deletemployee(id:number):Observable<any>{
    return this.http.delete('http://202.40.191.226:8081/employee/delete/'+id)
  }


}
