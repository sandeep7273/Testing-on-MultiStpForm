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
import { UserListComponent } from '../Admin/App.Admin-listComponent';
import { MultiImagesDirective} from '../multi-images.directive';
import { UploadTaskComponent } from '../upload-task/upload-task.component';

@NgModule({
  declarations: [
    MasterComponent, HomeComponent,
    RegistrationComponent, EducationComponent,MultiImagesDirective,
    SubmitComponent,GridComponent,UserListComponent,UploadTaskComponent,
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
