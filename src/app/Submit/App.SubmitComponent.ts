import { Component, OnInit } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { FormService } from '../form.service'

@Component({
    templateUrl: './App.SubmitView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class SubmitComponent implements OnInit {
    
items;

  constructor( public formService: FormService, public httpc: HttpClient) {

  }

  ngOnInit() {
    this.items = this.formService.getItems();
    console.log(this.items);
  }

}