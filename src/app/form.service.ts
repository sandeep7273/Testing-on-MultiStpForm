import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireList} from '@angular/fire/database';
import { UserData } from './Submit/App.SubmitData';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  items=[];

  images = [];
  private dbPath = '/customers';
 
  customersRef: AngularFireList<UserData> = null;
  imageDetailList: AngularFireList<any>;
  // uploads: AngularFireList<UserData[]>;
 

  constructor(private db: AngularFireDatabase, private httpc: HttpClient) {
    this.customersRef = db.list(this.dbPath);
    
  }
    // getImageDetailList() {
    //   this.imageDetailList = this.db.list('imageDetails');
    // }
  
    // insertImageDetails(imageDetails) {
    //   // this.customersRef.push(imageDetails);
    // }
  

  createCustomer(customer: UserData): void {
    this.customersRef.push(customer);
  }
  getCustomersList(): AngularFireList<UserData> {
    return this.customersRef;
  }
  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  addUser(UserModel) {
    this.items.push(UserModel);
    console.log(this.items);
  }

  getItems(){
    console.log(this.items);
    // this.fireService.createCustomer(this.form);
  return this.items;
  }
    

    // pushUpload(upload: UserData) {
    //   let storageRef = firebase.storage().ref();
    //   let uploadTask = storageRef.child(`${this.dbPath}/${upload.file.name}`).put(upload.file);
  
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     (snapshot) =>  {
    //       // upload in progress
    //       upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     },
    //     (error) => {
    //       // upload failed
    //       console.log(error)
    //     },
    //     () => {
    //       // upload success
    //       upload.url = uploadTask.snapshot.downloadURL
    //       upload.name = upload.file.name
    //       this.saveFileData(upload)
    //     }
    //   );
    // }
    // // Writes the file details to the realtime db
    // private saveFileData(upload: UserData) {
    //   this.db.list(`${this.dbPath}/`).push(upload);
    // }
  



}