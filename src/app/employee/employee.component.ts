import { Component } from '@angular/core';
import{EmployeedetailService}from '../employeedetail.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
employee:string[]=[];
constructor(private empService: EmployeedetailService){}
ngOnInit():void{
  debugger
  this.employee= this.empService?.getEmployee();
}
}
