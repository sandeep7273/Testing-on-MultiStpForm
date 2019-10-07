import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormService } from '../form.service';
import { User } from '../Home/App.Home.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
 
@Component({
  selector: 'app-customers-list',
  templateUrl: './App.Admin-List.html',
  styleUrls: ['../App.CommonStyle.css']

})
export class UserListComponent implements OnInit {
  @Input() user :  User;
  users : any;
items : any;
imgSrc :any = null;
selectedImage : any = null;
downloadedUrls :any[];
 
  constructor(private formService: FormService, config: NgbCarouselConfig) { 
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
 
  ngOnInit() {
    this.getCustomersList();
    // this.downloadedUrls = this.users.downloadedUrls;
    // console.log(this.downloadedUrls);
    // this.downloadedUrls= this.users.downloadUrls;
    // for(let i=0; i<this.downloadedUrls.length; i++){
    //   this.imgSrc = this.downloadedUrls[i];
      console.log(this.downloadedUrls);
    // }
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
      // console.log(this.downloadedUrls);
    
      return this.downloadedUrls;
    });
  }
 
  deleteCustomers() {
    this.formService.deleteAll().catch(err => console.log(err));
  }



  
deleteAllCustomers() {
  this.formService.deleteAll().catch(err => console.log(err));
}

deleteCustomer() {
  
  this.formService
    .deleteCustomer(this.user.key)
    .catch(err => console.log(err));
}



 
}