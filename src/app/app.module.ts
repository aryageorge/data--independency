import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';

import { PersonalComponent } from './personal/personal.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
   
    PersonalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
