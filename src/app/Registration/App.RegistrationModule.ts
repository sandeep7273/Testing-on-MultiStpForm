import { RegistrationComponent } from './App.RegistrationComponent'
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationRouts } from '../Routing/App.RegistrationRouting';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRouts),
    HttpClientModule,
  ],

  providers: [],


  bootstrap: [RegistrationComponent]
})

export class RegistrationModule {

}