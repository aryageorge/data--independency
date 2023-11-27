import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {
  perDetails:string[]=['besel','EMP002','Software Testing'];
  constructor(){}
  getPersonal():string[]{
    return this.perDetails;
  }
    
  
}
