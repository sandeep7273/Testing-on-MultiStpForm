import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule,}  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './App.HomeComponent'
import { MasterComponent } from './App.MasterComponent';
import { MainRouts } from '../Routing/App.MainRouting'
import { FormService } from '../form.service';
import { RegistrationComponent } from '../Registration/App.RegistrationComponent';
import { EducationComponent } from '../Education/App.EducationComponent';
import { SubmitComponent } from '../Submit/App.SubmitComponent';

@NgModule({
  declarations: [
    MasterComponent, HomeComponent,
    RegistrationComponent, EducationComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(MainRouts),
    HttpClientModule, ReactiveFormsModule

  ],
  
  providers: [
    FormService
  ],


  bootstrap: [MasterComponent]
})
export class MainModule { }
