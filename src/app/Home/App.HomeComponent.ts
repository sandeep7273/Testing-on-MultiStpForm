import { Component, OnInit } from '@angular/core'
import { User } from './App.Home.model'
import {HttpClient} from '@angular/common/http'
import { FormService} from '../form.service'


@Component({
    templateUrl: './App.HomeView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class HomeComponent implements OnInit {

  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();

  disable : boolean = false;

  constructor(public formService : FormService, public httpc : HttpClient ) { 

  }
  
  addUser(User){
    this.formService.addUser(this.UserModel);
   
  }

  hasError(controlString: string, typeOfValidatior: string): boolean{
    this.disable = true;
    
    return this.UserModel.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
  }

  ngOnInit() {
   
  }
  // pushToServer(){
  //   var UserData :any = {};
  //   UserData.UserName = this.UserModel.UserName;
  //   UserData.UserContact = this.UserModel.UserContact;
  //   UserData.UserEmail = this.UserModel.UserEmail;

  //   this.httpc.post("http://localhost:3000/Users", UserData)
  //   .subscribe(res=>this.Success(res), res=>this.Error(res));
  // }


  // GetFromServer(){
  //   this.httpc.get("http://localhost:3000/Users")
  //   .subscribe(res=>this.Success(res), res=>this.Error(res));
  //   this.UserModel = new User();// clear UI  
  //   this.UserModel.UserName = this.UserModel.UserName;

  // }

  // Error(res){
  //   console.debug();
  // }

  // Success(res){
  //   this.UserModels = [res];
  // }



  Add(){
    this.UserModels.push(this.UserModel);
    this.UserModel = new User();// clear UI
  }
}
