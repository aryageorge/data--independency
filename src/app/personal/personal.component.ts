import { Component } from '@angular/core';
import{PersonaldetailsService}from '../personaldetails.service'
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  personal:string[]=[];
  constructor(private perService: PersonaldetailsService){}
  ngOnInit():void{
    debugger
    this.personal= this.perService?.getPersonal();
  }
}
