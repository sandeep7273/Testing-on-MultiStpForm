import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export class User {
    UserName: string = "";
    UserEmail: string ="";
    UserContact: number  = null;
    


    formSignUpGroup: FormGroup= null;
    constructor(){
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
}