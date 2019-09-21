import { HomeComponent } from '../Home/App.HomeComponent';
import { RegistrationComponent } from '../Registration/App.RegistrationComponent';
import { EducationComponent } from '../Education/App.EducationComponent';
import { SubmitComponent } from '../Submit/App.SubmitComponent';

export const MainRouts = [
    {path: 'Step1' , component: HomeComponent },
    {path: 'Step2' , component: RegistrationComponent },
    {path: 'Step3' , component: EducationComponent },
    {path: 'Step4' , component: SubmitComponent },


    
    // {path: 'Step2' , loadChildren: '../Registration/App.RegistrationModule#RegistrationModule' },
    // {path: 'Step4' , loadChildren: '../Submit/App.SubmitModule#SubmitModule' },
    // {path: 'Step3' , loadChildren: '../Education/App.EducationModule#EducationModule' },
    
    {path: '' , component: HomeComponent }
    
];