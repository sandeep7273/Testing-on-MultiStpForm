import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  items=[];

  images = [];


  addUser(UserModel) {
    this.items.push(UserModel);
    console.log(this.items);
  }
  // addUser(UserModel) {
  //   this.images.push(UserModel);
  //   console.log(this.images);
  // }

  getItems(){
    console.log(this.items);
  return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
//  getShippingPrices() {
//     return this.httpc.get('/assets/shipping.json');
//   }

  constructor(
    private httpc: HttpClient
  ) { }
  }