import { SubmitComponent } from './App.SubmitComponent'
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubmitRouts } from '../Routing/App.SubmitRouting';

@NgModule({
  declarations: [
    SubmitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SubmitRouts),
  ],

  providers: [],


  bootstrap: [SubmitComponent]
})






export class SubmitModule {

}