import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  


import { Component, OnInit } from '@angular/core';
import {NeoSoftEmployee} from '../neo-soft-employee';
import { NeosoftEmployeeService } from '../neosoft-employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-neosoftemployee-list',
  templateUrl: './neosoftemployee-list.component.html',
  styleUrls: ['./neosoftemployee-list.component.css']
})
export class NeosoftemployeeListComponent implements OnInit {

  nsftEmployees:NeoSoftEmployee[];
  constructor(private employeeListService:NeosoftEmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getNsftEmployees();
  }

  private getNsftEmployees(){
    this.employeeListService.getNsftEmployeeList().subscribe(data=> {this.nsftEmployees=data;});
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  deleteEmployee(id: number){
    this.employeeListService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getNsftEmployees();
    })

  }


}
