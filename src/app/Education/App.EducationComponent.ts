import { Component, OnChanges } from '@angular/core'
import { FormService} from '../form.service'
import { HttpClient , HttpEventType} from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../Home/App.Home.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserData } from '../Submit/App.SubmitData';

@Component({
    templateUrl: './App.EducationView.html',
  styleUrls: ['../App.CommonStyle.css']
})

export class EducationComponent implements OnChanges{

  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  UsersData : UserData = new UserData();
  UsersDatas : Array<UserData> = new Array<UserData>();

  selectedFile: File = null;
  public imagePath;
  imgURL: any;
  public message: string;
  imgData : [];
  fileData: File = null;
  previewUrl:any = null;
  marksPercentage: number = null;
  formSignUpGroup: FormGroup= null;
  disable : boolean = true;
  formValue :any ;
  imgAddress :[];
  downloadURLs = [];
  // imgSrc :string = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSBhUQEhEQFRUXFRYWGBUVFSAWEBcZGBUXGBUSFRcZKCggGBolGxMYITEjJSk3LjAvGB8zODMsNzQwLi0BCgoKDQ0NFQ8NFSseHxkrLSstKysrLSsrKysrKzcrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEAQAAIBAgEFCwwBAgcBAAAAAAABAgMRBAUSITFRBhUWQVNhcXKRkrITFCIyNDVSgaGxweHRJWIzQnOCwvDxJP/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+wgApIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhYABYWAAWFgAFhYAAAAAAAAAAAAAAAAAAAAAAAAAAAMak0oOT1JNvoSu/ocrPE1q9d5uftzYuyS6f5OmxvsVT/AE5+FlFua9rl1fyBo8zxPw1u9+x5nifhq979nQY/HRpU7yvd6orW/wCEV9LdDFz9KDS2p3t8uP5AV/meJ+Gr3v2PM8T8NXvfs6iE04pppp6U1qZkByvmeJ+Gr3v2PM8T8NXvfs6oAcr5nifhq979jzPE/DV737OqAHJOpXozTk6kdmc7p21rjR0+Dr+UwsZrRnK9tj1NdqZU7p/Uh0v7E/Inuqn0S8cgJoAAAAAAAAAAAAAAAAAAAAAAANON9iqdSfhZRbmva5dX8l7jfYqnUn4WUW5r2uXV/IGrdA3vk7/DG3Rpv9bladblLJ0a0VptJan+HzFZS3Py8p6U425lpfaBO3PN72K/xSS6L/y5FkYUqajSUYqySskZgCpxGW4xxigleK0SktvNtsR8tZV10qb5pSXhj/JRgdxCScE0009Ka1WMjl8k5TdKWbK7g38486/g6eMk4pppp6mtTApN0/qQ6X9ifkT3VT6JeORA3T+pDpf2J+RPdVPol45ATQAAAAAAAAAAAAAAAAAAAAAAAacb7FU6k/Cyi3Ne1y6v5L3G+xVOpPwsotzXtcur+QOjIOVMoqlTtrm9S/L5j3KeUFSpcTk/Vj+XzHKVajlUcpNtvW/+6lzAdVkvKCq0tk0tK/5R5iDlrKul0qb5pSXhj+WUcJtSum09qdnzmKAAAAWuQ8e41lSemMnZf2t7OYqiTk33hT68fuBa7p/Uh0v7E/Inuqn0S8ciBun9SHS/sT8ie6qfRLxyAmgAAAAAAAAAAAAAAAAAAAAAAA0432Kp1J+FlFua9rl1fyXuMX/xz6k/CzncgYiMMTJykopxtd6tYGGXvekuiPhRAudXPE4Zyu5UW9rtcx8vhdtH6ActcXOp8vhdtH6Dy+F20foBy1xc6ny+F20foPL4XbR+gHLXJGTX/UafXj9zofL4XbR+h7HEYZSupUU1q1X6QIe6f1IdL+xPyJ7qp9EvHIq90GKhOMFCSlZu9uItMir+lU+h/WUn+QJoAAAAAAAAAAAAAAY1JqNNyepJt/IDIFBLdC87RTVuK70jhDLk49rAvwUHCGXJx7WOEMuTj2sC/BQcIZcnHtY4Qy5OPawL8psVkBOpeE81P/K1dLo06Og08IZcnHtY4Qy5OPawPOD0uVj3f2OD0uVj3f2e8IZcnHtY4Qy5OPawPOD0uVj3f2OD0uVj3f2e8IZcnHtY4Qy5OPawPOD0uVj3f2OD0uVj3f2e8IZcnHtY4Qy5OPawPOD0uVj3f2OD0uVj3f2e8IZcnHtY4Qy5OPawM6O55eUvOpdbIqzfzvoLuMUopJWSVkuJJakUPCGXJx7WOEMuTj2sC/BQcIZcnHtY4Qy5OPawL8FBwhlyce1jhDLk49rAvwUHCGXJx7WOEMuTj2sC/BqwtdVMOpq9nt1rambQAAAGjH+xT6svsbzRj/Yp9WX2A4w2yws1Sz3Tmo/Fmu3TfZz6jPJsU8fBS1Zyub1XqvKUs27m3NNPVbTdWfEl9gMJYaKjRdpyz021H1nZ2tHnI9OhKVRxhCTenQldrptq+ZaYf/Fwnz8SNGJebktZrazq1TOtxuLean8tNuYDRhMLfEuE1KLUJys1Z3SurojRpt085Rk0rXdvRV9Sb4i1yfKbrx8pq8jUzZa5ONnp5+PWaspacLTdP/C0pR2S03ztr5wI+TcOqmOjCWp31c0W9fyNTw01QU3Tmou3pOLUdPOS8h+9Yf7vCxk2rKXlXKTedSk3d63ruBFo4ec/UhOVtebFu3TYwVNuTSjJtXurO6truuYs8R5NYGipSqxThnehazk/Wbvxp6DfSqXykpJST83bvJJSlaLzZtdC+gFO8PPyijmSzmrqOa85p6nbXxMVqEoStOMov+5WfStq6Cfk6d8JWnOU72gs5aZqMm861+dGNSpHeuUY+VklOLUppWi+NLpXEBFwWGdTEqCvp1tK9ltexfyY+bT8u4KE3LTozXnW2218a7Tfkh/1KHTb6ambXNrJVSSbu6yjJ305qTai3suBBq0ZRnaUZRexqz+pjGDb0JvRd2V7Ja29i5ydN3yIs7S1VtG+u2a85LmvYxyR7RP/AEqnhAhxg3FtJtLW0tC6XxfM208JUlqp1HoT0Qep6nq4+IkYBf0+u/7I+JGWVaslSopNpKhTas7ac1XfToQGjCYdSVS9/Rg5LpTS0mujhpzi3CE5Ja2otro6dOot8R7VWf8AmeHi5dayv9LELKs3GVOMW1FUouNnZabtyVtbbuBBjBudkm3qsleV9iRsrYacPXhOPWVl9f8A0tq8X5/KedmWop1JWvLSrO39zVjReG89XNdRpTp6Z9bi2aH9UBAhhpulnqE3H4lFuPO77DPKFBQxsoLUnov0ErKdWUcpRUW1mqGYk+bRZc9zVlr3rU6V9kBfZD91w+f3ZPIGQ/dkfn92TwAAAGjH+xT6svsbzCtTzqLjtTXatYHEIl1Mo1HBpuN2rOSilOS2SktLJDyFWvozHz5x5vHW2Q7wEOOKmnBp+p6ujV/J7Rxco3tmtSd3GUVKDe2z4yXvHW2Q7w3jrbId4CJLGTdZzztLi46lbNatZLUtBhCvJUHBP0ZNNrXpXGucnbx1tkO8N462yHeAg0KzhVU4uzWp69at+TyjVcU812unF9D1on7x1tkO8N462yHeAi0MZKNPNWa43ulKKkk9qvq+RisVPy7nnPOkmm3zqz+mgmbx1tkO8N462yHeAg4evKE7xdtFtqa2NPWjPEYqU4pOyS1RilGCb1uy4+cl7x1tkO8N462yHeAgUqjjVUouzTumbo46arSn6Ppess1Zj2XiSd462yHeG8dbZDvAQ8RiZTtnNWWhRSSiuhIxoVpQqqUXZrjJ28dbZDvDeOtsh3gI1THzdNxvFRa0xjFRjtvZcegk4jKDSpKDg0qNPXFSzZJWdr6nqG8dbZDvDeOtsh3gISxMs+TvdzVpN8f8ajZRx0401H0Wl6udFSzeeN9RJ3jrbId4bx1tkO8BEp4uca7nnXk7p30pp601xozllCbpuPo5rVs3NSgudLienWSN462yHeG8dbZDvAR4Y+apqN1o0Rk4pzj1Za0aK1VyquUndvWyfvHW2Q7w3jrbId4C5yH7sj8/uyeR8Bh/J4SML3stL4r3uSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==";
  selectedImage : any = null;
  uploads = [];
  filelist :any;
  files: Observable<any>;
  imgSrc :{
    name : string;
  }

  // files: File[] = [];



  constructor( public formService : FormService, public httpc : HttpClient, private storage: AngularFireStorage,) {
    var _builder = new FormBuilder;
        this.formSignUpGroup = _builder.group({});
       
        this.formSignUpGroup.addControl('UserStreamControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserUnivControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksObtControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksMaxControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserYearControl', new FormControl('', Validators.required));
        // this.formSignUpGroup.addControl('imageUrl', new FormControl('', Validators.required));
    
  }
  ngOnChanges() {
   
  }

  
 
  hasError(controlString: string, typeOfValidatior: string): boolean{
    return this.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
  }


  onSubmit(formValue){
 
  this.UserModel.downloadURLs= this.downloadURLs;
  this.UserModel.DeleteEdu="Delete";
    this.formService.addUser(this.UserModel);
    this.UserModels.push(this.UserModel);
    // this.formService.createCustomer(this.UserModel);
    this.UserModel = new User();// clear UI
    this.disable=false;
    
  }
  UploadtoStorag(){
    this.downloadURLs = [];
    for (const file of this.filelist) {
      // const selectedImage = this.selectedImage[i];
      var filePath = `${file.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, file).snapshotChanges().pipe(
        finalize(() => {
          
          fileRef.getDownloadURL().subscribe((url) => { 
            this.downloadURLs = this.downloadURLs.concat([url]);
            console.log(this.downloadURLs);
          });
        })

        //   fileRef.getDownloadURL().subscribe((url) => {
        //     // formValue['imageUrl'] = url;
        //     // this.formService.insertImageDetails(formValue);
        //     // this.imgSrc = formValue.imageUrl;
        //     this.UsersData.imgSrc = url;
        //     // console.log(this.UserModel.imgSrc);
        //     this.UsersDatas.push(this.UsersData);
        //     console.log(this.UsersDatas);
            
          
            
        //     // this.resetForm();
        //   })
        // })
        
      ).subscribe();
    // this.UsersData.imgSrc[i]= this.UserModels[i].imgSrc;
  }

  }
  addUser(){
    // this.UserModel.DeleteEdu="Delete";
    // this.formService.addUser(this.UserModel);
    // this.UserModels.push(this.UserModel);
    // // this.formService.createCustomer(this.UserModel);
    // this.UserModel = new User();// clear UI
    this.disable=false;
  }
  
  // onDrop(e){
  //   if(e.target.files){
  //     this.uploads = [];
  //     const filelist = event.target.files;

  //     for(let i=0; i<e.target.files.length; i++){
  //       this.UserModel.files.push(e.target.files.item(i))

  //       console.log(e.target.files);
  //       console.log(this.files);

  //     }


  //   }
  // }

  onDrop(e:any){
      if(e.target.files){
        this.uploads = [];
        this.filelist = e.target.files;
        this.UserModel.selectedImage = this.filelist;
        this.selectedImage=this.filelist;
        // console.log(this.filelist)
        // for(let i =0; i<e.target.files.length; i++){
        //   const reader = new FileReader();
        //   const readers = new FileReader();
        //   // reader.onload = (e:any) => this.imgSrc[i] = (e.target.result);
        //   readers.onload = (e:any) => this.UserModel.imgSrc[i].name= e.target.result;
        //   reader.readAsDataURL(e.target.files[i]);
        //   readers.readAsDataURL(e.target.files[i]);
        //   this.selectedImage = e.target.files[i];
        //   // this.UserModel.selectedImage = e.target.files[i];
        //   this.UserModels.push(this.UserModel);
        //   console.log(this.UserModel);
        //   console.log(this.UserModels)
        // }
        

        for (let file of this.filelist) {
          const uploadTrack = {
            fileName: file.name
          }
          // push each upload into the array
          this.uploads.push(uploadTrack);
          this.UserModel.filelist = this.uploads;
  }
      
        // this.UserModel.imgSrc= this.imgSrc;
      }
      else{
        // this.imgSrc = '';
        this.selectedImage = null;
      }
    }



//   showPreview(event:any){
//   if(event.target.files && event.target.files[0]){
//     const reader = new FileReader();
//     const readers = new FileReader();
//     reader.onload = (e:any) => this.imgSrc = e.target.result;
//     readers.onload = (e:any) => this.UserModel.imgSrc= e.target.result;
//     reader.readAsDataURL(event.target.files[0]);
//     readers.readAsDataURL(event.target.files[0]);
//     this.selectedImage = event.target.files[0];
//     this.UserModel.selectedImage = event.target.files[0];
//     // this.UserModel.imgSrc= this.imgSrc;
//   }
//   else{
//     this.imgSrc = '';
//     this.selectedImage = null;
//   }
// }
// onDrop(event) {
//   // reset the array 
//   this.uploads = [];
//   this.filelist = event.target.files;

//   for (let file of this.filelist) {

//     // const path = `files/${file.name}`;
//     // const ref = this.storage.ref(path);
//     // const task = this.storage.upload(path, file);
//     // const _percentage$ = task.percentageChanges();
//     // allPercentage.push(_percentage$);

//     // create composed object with different information. ADAPT THIS ACCORDING YOUR NEED
//     const uploadTrack = {
//       fileName: file.name
//       // percentage: _percentage$
//     }

//     // push each upload into the array
//     this.uploads.push(uploadTrack);
//     this.UserModel.filelist = this.uploads;
//     console.log(this.filelist)

//     // for every upload do whatever you want in firestore with the uploaded file
//     // const _t = task.then((f) => {
//     //   return f.ref.getDownloadURL().then((url) => {
//     //     return this.afs.collection('files').add({
//     //       name: f.metadata.name,
//     //       url: url
//     //     });
//     //   })
//     // })

//   }

//   // this.allPercentage = combineLatest(allPercentage)
//   //   .pipe(
//   //   map((percentages) => {
//   //     let result = 0;
//   //     for (const percentage of percentages) {
//   //       result = result + percentage;
//   //     }
//   //     return result / percentages.length;
//   //   }),
//   //   tap(console.log)
//   //   );

// }


}