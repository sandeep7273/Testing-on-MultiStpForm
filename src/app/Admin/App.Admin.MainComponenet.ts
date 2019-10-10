import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { map } from 'rxjs/operators';
import { FormService } from '../form.service';
import { User } from '../Home/App.Home.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
 
@Component({
  selector: 'app-customers-list',
  templateUrl: './App.Admin.MainView.html',
  styleUrls: ['../App.CommonStyle.css']

})
export class AdminMainComponent implements OnInit {
//   @Input() user :  User;

@ViewChild('content', {static: false}) content : ElementRef;
  users : any;
items : any;
// imgSrc :any = null;
selectedImage : any = null;
downloadedUrls :any[];
 
  constructor(private formService: FormService, config: NgbCarouselConfig) { 
    config.interval = 5000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
 
  ngOnInit() {
    this.getCustomersList();
    }
 
  getCustomersList(){
    this.formService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => {
      this.users = users;
      this.items= this.users;
      for(let user of users){
      this.downloadedUrls= user.downloadURLs;
      
      }
      return this.downloadedUrls;
    });
  }
 
  downloadPDF(){
    let doc = new jsPDF('p','pt','a4');

  
    let specialElementHandlers = {
      '#editor' : function(element, renderer){
        return true;
      } 
    };
  
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15, 15, {
      'autoresize':"true",
      'width' :190,
      'elementHandlers': specialElementHandlers  
    },

    function(bla){doc.save('saveInCallback.pdf');},
  0);
  }
deleteAllCustomers() {
  this.formService.deleteAll().catch(err => console.log(err));
}

}