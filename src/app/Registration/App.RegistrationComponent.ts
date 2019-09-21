import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { FormService } from '../form.service'
import { Register } from './App.Register.model'
@Component({
    templateUrl: './App.RegistrationView.html',
  styleUrls: ['../App.CommonStyle.css']

})

export class RegistrationComponent implements OnInit {
  UserModel : Register = new Register();
  UserModels : Array<Register> = new Array<Register>();
    
items;


constructor( public formService: FormService,  public httpc : HttpClient ) {

}
 addToNext(){
  // this.UserModels = this.FormService.getItems();
  // console.log(this.UserModels);
 }

ngOnInit() {
  this.items = this.formService.getItems();
  console.log(this.items);
}
addUser(User){
  this.formService.addUser(this.UserModel);
}
hasError(controlString: string, typeOfValidatior: string): boolean{
  
  return this.UserModel.formSignUpGroup.controls[controlString].hasError(typeOfValidatior);
}
// GetFromServer(){
//   this.httpc.get("http://localhost:3000/Users")
//   .subscribe(res=>this.Success(res), res=>this.Error(res));
//   this.UserInput = new User();// clear UI  
  
// }

// Error(res){
//   console.debug();
// }

// Success(res){
//   this.UserInputs = [res];
//   console.log(res[0].Name);

//   this.UserInput.UserName = res[0].Name ;
//   console.log(this.UserInput.UserName);
//   // res[0].Contact = this.UserInput.UserContact ;
//   // res[0].Email = this.UserInput.UserEmail ;
// }


}
