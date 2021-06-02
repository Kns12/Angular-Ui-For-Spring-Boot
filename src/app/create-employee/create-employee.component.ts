import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeoSoftEmployee } from '../neo-soft-employee';
import { NeosoftEmployeeService } from '../neosoft-employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: NeoSoftEmployee=new NeoSoftEmployee();

  constructor(private employeeService:NeosoftEmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
     
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
