import { EducationComponent } from './App.EducationComponent'
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EducationRouts } from '../Routing/App.EducationRouting';

@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EducationRouts),
  ],

  providers: [],


  bootstrap: [EducationComponent]
})






export class EducationModule {

}