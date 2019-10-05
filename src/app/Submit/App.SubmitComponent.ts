import { Component, OnInit } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { FormService } from '../form.service'
import { User } from '../Home/App.Home.model';
import { UserData } from './App.SubmitData';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './App.SubmitView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class SubmitComponent implements OnInit {
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  downloadURLs : Array<string> ;
  items;
  imgSrc :Observable<string|null>;
  selectedImage : any = null;
  UsersData : UserData = new UserData();
  UsersDatas : Array<UserData> = new Array<UserData>();
  formValue: any ;
  private timeout: any;
  filelist :any;
  addressArray :[];

  constructor( public formService: FormService, private storage: AngularFireStorage, public httpc: HttpClient) {


    
  }

  ngOnInit() {
    this.items = this.formService.getItems();
    // this.filelist = this.formService.items[2].filelist;
    // console.log(this.filelist);
    // this.imgSrc = this.formService.items[2].imgSrc;
    // this.selectedImage = this.formService.items[2].selectedImage;
    // this.formValue= this.formService.items[2].formValue;
    // console.log(this.items);
    // this.UsersData.selectedImage = this.selectedImage;
    // this.UsersData.imgSrc = this.imgSrc;
    this.UsersData.downloadURLs= this.items[2].downloadURLs;
    // this.UsersData.formValue = this.items[2].formValue;
    this.UsersData.name= this.items[0].UserName;
    this.UsersData.contact= this.items[0].UserContact;
    this.UsersData.email= this.items[0].UserEmail;
    this.UsersData.distt= this.items[1].AddressDistt;
    this.UsersData.state= this.items[1].AddressState;
    this.UsersData.Password= this.items[1].UserPassword;
    this.UsersData.House= this.items[1].AddressHouse;
    this.UsersData.Landmark= this.items[1].AddressLandmark;
    this.UsersData.City= this.items[1].AddressCity;
    this.UsersData.Pincode= this.items[1].AddressPincode;
    this.UsersData.Standard= this.items[2].EduStandard;
    this.UsersData.Stream= this.items[2].EduStream;
    this.UsersData.University= this.items[2].EduUniversity;
    this.UsersData.MarksObt= this.items[2].EduMarksObt;
    this.UsersData.MarksMax = this.items[2].EduMarksMax;
    this.UsersData.Year= this.items[2].EduYear;
    
    // this.UsersData.Standards= this.items[3].EduStandard;
    // this.UsersData.Streams= this.items[3].EduStream;
    // this.UsersData.Universitys= this.items[3].EduUniversity;
    // this.UsersData.MarksObts= this.items[3].EduMarksObt;
    // this.UsersData.MarksMaxs = this.items[3].EduMarksMax;
    // this.UsersData.Years= this.items[3].EduYear;
console.log(this.UsersData.Standard, this.UsersData.email, this.UsersData.House);
  }

  AddToServer(){

      this.formService.createCustomer(this.UsersData);


    // this.onSubmit(this.formValue);
    // for(let i=0; i<this.UserModels.length; i++){
    // this.UsersData.imgSrc[i]= this.UserModels[i].imgSrc;
    // console.log(this.UsersData.imgSrc[i]);
    // }

  // this.finalCall();
  
}
// onSubmit(formValue) {
  
//   for(let i =0; i<this.selectedImage.length; i++){
//     const selectedImage = this.selectedImage[i];
//     var filePath = `${selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
//     const fileRef = this.storage.ref(filePath);
//     this.storage.upload(filePath, selectedImage).snapshotChanges().pipe(
//       finalize(() => {
        
//         fileRef.getDownloadURL().subscribe((url) => {
//           formValue['imageUrl[i]'] = url;
//           // this.formService.insertImageDetails(formValue);
//           // this.imgSrc = formValue.imageUrl;
//           this.UserModel.imgSrc = url;
//           // console.log(this.UserModel.imgSrc);
//           this.UserModels.push(this.UserModel);
//           // console.log(this.UserModels);
//           this.imgSrc[i]=this.UserModels[i].imgSrc;
        
//           this.UserModel.imgSrc= this.imgSrc[i];
//           // this.resetForm();
//         })
//       })
      
//     ).subscribe();
//   // this.UsersData.imgSrc[i]= this.UserModels[i].imgSrc;
// }

// }
// finalCall(){
//   this.formService.createCustomer(this.UsersData);
//   console.log(this.UsersData);

// }
}


