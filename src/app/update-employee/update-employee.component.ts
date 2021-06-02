import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NeoSoftEmployee } from '../neo-soft-employee';
import { NeosoftEmployeeService } from '../neosoft-employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  employee:NeoSoftEmployee =new NeoSoftEmployee;
  constructor(private employeeService:NeosoftEmployeeService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },
    error=>console.log(error));
  }  

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },
  error=>console.log(error));   
  }
 
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
