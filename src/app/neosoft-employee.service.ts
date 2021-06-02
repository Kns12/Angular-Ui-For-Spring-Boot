import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NeoSoftEmployee } from './neo-soft-employee';

@Injectable({
  providedIn: 'root'
})
export class NeosoftEmployeeService {

  private baseURL="http://localhost:8080/employees";

  constructor(private httpClient:HttpClient) { }

  getNsftEmployeeList():Observable<NeoSoftEmployee[]>{
    return this.httpClient.get<NeoSoftEmployee[]>(`${this.baseURL}`);
  } 

  createEmployee(employee:NeoSoftEmployee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id:number):Observable<NeoSoftEmployee>{
    return this.httpClient.get<NeoSoftEmployee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number,employee:NeoSoftEmployee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}