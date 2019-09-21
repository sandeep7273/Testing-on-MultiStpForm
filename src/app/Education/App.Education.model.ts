import {NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export class Edu {
    
    EduStandard : string = "";
    EduStream : string ="";
    EduUniversity : string = "";
    EduMarksObt : number = null;
    EduMarksMax : number = null;
    EduPercentage : number = null;
    EduYear : number = null;
    count : number = 0;
    imgURL: any;


    formSignUpGroup: FormGroup= null;
    constructor(){
        var _builder = new FormBuilder;
        this.formSignUpGroup = _builder.group({});
       
        this.formSignUpGroup.addControl('UserStreamControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserUnivControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksObtControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserMarksMaxControl', new FormControl('', Validators.required));
        this.formSignUpGroup.addControl('UserYearControl', new FormControl('', Validators.required));


    }
}