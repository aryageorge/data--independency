import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailService {
  empDetails:string[]=['sagar','EMP001','Software Engineer'];
  constructor(){}
  getEmployee():string[]{
    return this.empDetails;
  }
    
  }


