import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { map } from 'rxjs/operators';
import { FormService } from '../form.service';
import { User } from '../Home/App.Home.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
(window as any).html2canvas = html2canvas;
 
@Component({
  selector: 'app-PDF',
  templateUrl: './App.PDFview.html',
  styleUrls: ['../App.CommonStyle.css']

})
export class PDFComponent implements OnInit {
  @Input() user :  User;

@ViewChild('content', {static: false}) content : ElementRef;
@ViewChild('userText', {static: false}) userText : ElementRef;
  users : any;
items : any;
// imgSrc :any = null;
selectedImage : any = null;
downloadedUrls :any[];
r : any =0;
s : any =0;
t : any= 0 ;
// imgSrc: any;
imagList : any ;
rowIndexArray : any [];
  constructor(private formService: FormService, config: NgbCarouselConfig) { 
   
  }
 
  ngOnInit() {
    // this.getCustomersList();
    }
 
//   getCustomersList(){
//     this.formService.getCustomersList().snapshotChanges().pipe(
//       map(changes =>
//         changes.map(c =>
//           ({ key: c.payload.key, ...c.payload.val() })
//         )
//       )
//     ).subscribe(users => {
//       this.users = users;
//       this.items= this.users;
//       for(let user of users){
//       this.downloadedUrls= user.downloadURLs;
//       console.log(this.downloadedUrls);
//       }
//       return this.downloadedUrls;
//     });
//   }
 testingPDF(){
   let doc = new jsPDF('p', 'px', 'a4');
  //  let specialElementHandlers ={
  //    '#tester' : function(element, renderer){
  //      return true;
  //    }
  //  };
    // let content = this.content.nativeElement;
  // doc.addHTML(document.getElementById('userText'),150,150, {}, function() {
  //     doc.save('test.pdf');
  //  });
   html2canvas(document.querySelector("#userText")).then(canvas => {
    document.body.appendChild(canvas);
    doc.save('test.pdf');     //or whatever you want to execute
});
    // doc.fromHTML(content.innerHTML,50, 50, {
    //       'width' :590,
    //       'elementHandlers': specialElementHandlers  
    //     },

    //     function(bla){doc.save('saveInCallback.pdf');},
    //   0);

 }
  downloadPDF(){
    let doc = new jsPDF('p','px','a4');
  
    let specialElementHandlers = {
      '#editor' : function(element, renderer){
        return true;
      } 
    };
  
    let userText = this.userText.nativeElement;
    let content = this.content.nativeElement;
//     for (let j=0; j<this.users.length; j++){
//     // for(let user of this.users){
     
//     this.downloadedUrls = this.users[j].downloadURLs;
//    // this.imagList = this.downloadedUrls.length;
//     // this.rowIndexArray = Array.from(Array(Math.ceil(this.downloadedUrls.length/3)).keys());
//     // console.log(this.rowIndexArray);
//     // for (let k = 0; k< this.rowIndexArray.length; k++){
      
//     for(let i=0; i<this.downloadedUrls.length; i++){
//       const imgSrc =this.downloadedUrls[i];
//       const p = i%3;
//       // const imgAddress = this.getBase64Image(imgSrc);
//       const k = (Math.floor(i/3)+1);
//       console.log(k);
//       this.s =j;
//        this.r = this.s + 150*k;
//       const t = k*j
      
//       this.convertToDataURLviaCanvas(imgSrc, "image/jpeg")
//     .then( base64Img => {
//     doc.addImage(base64Img, 'jpg', 100*p, 150*j*k,);
//     });
//     // doc.addImage(imgAddress, 'JPEG',220,220, );
    
//   }
  

//     // doc.fromHTML(content.innerText,150,150, {
//     //   'elementHandlers': specialElementHandlers
//     // },
//     // function(bla){ doc.save('saveInCallback.pdf');},
//     // 0);
//   }
  
  // doc.addImage(imgAddress, 'JPEG',220,220, );
      
    doc.fromHTML(content.innerHTML,150, 150, {
      'width' :590,
      'elementHandlers': specialElementHandlers  
    },

    function(bla){doc.save('saveInCallback.pdf');},
  0);


  }


convertToDataURLviaCanvas(url, outputFormat){
	return new Promise( (resolve, reject) => {
		let img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function(){
			let canvas = <HTMLCanvasElement> document.createElement('CANVAS'),
			ctx = canvas.getContext('2d'),
			dataURL;
			canvas.height = img.height;
			canvas.width = img.width;
			ctx.drawImage(img, 50, 50);
			dataURL = canvas.toDataURL(outputFormat);
			//callback(dataURL);
			canvas = null;
			resolve(dataURL); 
		};
		img.src = url;
	});
}

} 
