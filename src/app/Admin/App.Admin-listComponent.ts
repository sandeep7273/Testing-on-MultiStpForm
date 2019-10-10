import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import * as jsPDF from 'jspdf';
import { map } from 'rxjs/operators';
import { FormService } from '../form.service';
import { User } from '../Home/App.Home.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
 
@Component({
  selector: 'App-Admin',
  templateUrl: './App.Admin-List.html',
  styleUrls: ['../App.CommonStyle.css']

})
export class UserListComponent implements OnInit {
  @Input() user :  User;
  // @ViewChild('content', {static: false}) content : ElementRef;
  // users : any;
// items : any;
// imgSrc :any = null;
// selectedImage : any = null;
// downloadedUrls :any[];
 
  constructor(private formService: FormService, config: NgbCarouselConfig) { 
    config.interval = 5000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
 
  ngOnInit() {
    
    }
 
  // getCustomersList(){
  //   this.formService.getCustomersList().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(users => {
  //     this.users = users;
  //     this.items= this.users;
  //     for(let user of users){
  //     this.downloadedUrls= user.downloadURLs;
      
  //     }
  //     // console.log(this.downloadedUrls);
    
  //     return this.downloadedUrls;
  //   });
  // }
 
  



  
// deleteAllCustomers() {
//   this.formService.deleteAll().catch(err => console.log(err));
// }

// downloadPDF(){
//   let doc = new jsPDF;

//   let specialElementHandlers = {
//     '#editor' : function(element, renderer){
//       return true;
//     } 
//   };

//   let content = this.content.nativeElement;
//   doc.fromHTML(content.innerHTML, 15, 15, {
//     'width' :150,
//     'elementHandlers': specialElementHandlers  
//   },
//   function(bla){doc.save('saveInCallback.pdf');},
// 0);
// }


deleteCustomer() {
  
  this.formService
    .deleteCustomer(this.user.key)
    .catch(err => console.log(err));
}



 
}