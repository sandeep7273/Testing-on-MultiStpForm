import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export class Register {
    UserPassword: string="";
    AddressHouse: string = "";
    AddressLandmark: string = "";
    AddressCity: string = "";
    AddressPincode: number= null;
    AddressDistt: string = "";
    AddressState : string ="";

    formSignUpGroup: FormGroup= null;
    constructor(){
        var _builder = new FormBuilder;
        this.formSignUpGroup = _builder.group({});
        this.formSignUpGroup.addControl('UserHouseControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserCityControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserDisttControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserStateControl', new FormControl('', Validators.required));

        var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{6,6}$"));
         var validationCollectionPassword = [];
         validationCollectionPassword.push(Validators.required);
         validationCollectionPassword.push(Validators.pattern("^[a-zA-Z0-9]{8,18}$"));
        
        this.formSignUpGroup.addControl('UserPasswordControl',
                                 new FormControl('', Validators.compose(validationCollectionPassword)));
      
        this.formSignUpGroup.addControl('UserPinControl', 
                                 new FormControl('', Validators.compose(validationCollection)));


        
    }
}