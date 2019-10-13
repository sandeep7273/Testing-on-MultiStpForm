import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule,}  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './App.HomeComponent'
import { MasterComponent } from './App.MasterComponent';
import { MainRouts } from '../Routing/App.MainRouting'
import { FormService } from '../form.service';
import { RegistrationComponent } from '../Registration/App.RegistrationComponent';
import { EducationComponent } from '../Education/App.EducationComponent';
import { SubmitComponent } from '../Submit/App.SubmitComponent';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { GridComponent } from '../Utility/App.GridComponenet';

import { UploadTaskComponent } from '../upload-task/upload-task.component';
import { AdminMainComponent } from '../Admin/App.Admin.MainComponenet';
import { UserListComponent } from '../Admin/App.Admin-listComponent';
import {PDFComponent} from '../Admin/App.PDFComponent';
@NgModule({
  declarations: [
    MasterComponent, HomeComponent,AdminMainComponent,UserListComponent, 
    RegistrationComponent, EducationComponent,PDFComponent,
    SubmitComponent,GridComponent,UploadTaskComponent,
  ],
  imports: [
    BrowserModule,FormsModule,NgbModule,
    RouterModule.forRoot(MainRouts),
    HttpClientModule, ReactiveFormsModule,AngularFirestoreModule,
    AngularFireDatabaseModule,AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.fireBase),
    
    ],
  
  providers: [
    FormService 
  ],

  bootstrap: [MasterComponent]
})
export class MainModule { }
