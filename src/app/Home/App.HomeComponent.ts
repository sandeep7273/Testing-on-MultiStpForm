import { Component, OnInit } from '@angular/core'
import { User } from './App.Home.model'
import {HttpClient} from '@angular/common/http'
import { FormService} from '../form.service'
import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './App.HomeView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class HomeComponent implements OnInit {

  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  disable : boolean = false;
  formSignUpGroup: FormGroup= null;
  
  constructor(public formService : FormService, public httpc : HttpClient ){
      var _builder = new FormBuilder;
      this.formSignUpGroup = _builder.group({});
      this.formSignUpGroup.addControl('UserNameControl', new FormControl('', Validators.required));

      var validationCollection = [];
      validationCollection.push(Validators.required);
      validationCollection.push(Validators.pattern("^[0-9]{10,10}$"));
      //  var validationCollectionPassword = [];
      //  validationCollectionPassword.push(Validators.required);
      //  validationCollectionPassword.push(Validators.pattern("^[a-z]{8,8}$"));
      var validationEmail =[];
      validationEmail.push(Validators.required);
      validationEmail.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))

      // this.formSignUpGroup.addControl('UserEmailControl',
      //                          new FormControl('', Validators.required));
      // this.formSignUpGroup.addControl('UserPasswordControl',
      //                          new FormControl('', Validators.compose(validationCollectionPassword)));
      // this.formSignUpGroup.addControl('UserRePasswordControl',
      //                          new FormControl('', Validators.compose(validationCollectionPassword)));
      this.formSignUpGroup.addControl('UserContactControl', 
                               new FormControl('', Validators.compose(validationCollection)));
      
      this.formSignUpGroup.addControl('UserEmailControl', 
                               new FormControl('', Validators.compose(validationEmail)));
  }

  addUser(){
    this.formService.items = [];
    this.UserModel.DeleteUser= "Delete";
    this.formService.addUser(this.UserModel);
    // this.formService.createCustomer(this.UserModel);
  }

  hasError(controlString: string, typeOfValidatior: string): boolean{
    this.disable = true;
    return this.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
  }

  ngOnInit() {
  }

  
  Add(){
    this.UserModels.push(this.UserModel);
    this.UserModel = new User();// clear UI  
  }
  SelectUser(_Selected:User){
    this.UserModel = _Selected
  }
}

