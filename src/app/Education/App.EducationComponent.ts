import { Component, OnChanges } from '@angular/core'
import { FormService} from '../form.service'
import { HttpClient , HttpEventType} from '@angular/common/http';
import { Edu } from './App.Education.model';
import { Output, EventEmitter } from '@angular/core';


@Component({
    templateUrl: './App.EducationView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class EducationComponent implements OnChanges{
    

  UserModel : Edu = new Edu();
  UserModels : Array<Edu> = new Array<Edu>();
  selectedFile: File = null;

  public imagePath;
  imgURL: any;
  public message: string;
  imgData : [];
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
marksPercentage: number = null;
  
  disable : boolean = true;

  constructor( public formService : FormService, public httpc : HttpClient) {
   
  }
  ngOnChanges() {
   
  }

  //
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
   
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
  hasError(controlString: string, typeOfValidatior: string): boolean{
  
    return this.UserModel.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.fileData);
     
    this.fileUploadProgress = '100%';
    this.formService.addUser( formData)
    this.httpc.post('http://localhost:3000/Profile', formData, {
      reportProgress: true,
      observe: 'events'   
    })
    .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);          
        alert('SUCCESS !!');
      }
         
    }) 
}


  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
    // console.log(fd);
    // return this.httpc.post('http://localhost:3000/profile', fd)
    // .subscribe(res=>this.Success(res), res=>this.Errors(res));
// formData.append('ComponentId', componentId);
  // }
  // Errors(res){
  //     console.debug();
  //   }
  //   Success(res){
  //       this.selectedFile = res;
  //     }


  Add(){
    // this.UserModels.push(this.UserModel);
    // this.UserModel = new Edu();// clear UI
  }

  finalSubmit(){
    window.confirm('You have Succefully Uploaded data ')
  }



  addUser(User){
    this.formService.addUser(this.UserModel);
    this.UserModels.push(this.UserModel);
    this.UserModel = new Edu();// clear UI
    this.disable=false;
  }


  // SelectCustomer(_Selected:Edu){
  //   this.UserModel= _Selected
  // }

}