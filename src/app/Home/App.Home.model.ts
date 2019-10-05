export class User  {
    key: string ;
    active = true;
    UserName: string = null;
    UserEmail: string = null;
    UserContact: number  = null;
    UserPassword: string= null;
    AddressHouse: string = null;
    AddressLandmark: string = null;
    AddressCity: string = null;
    AddressPincode: number= null;
    AddressDistt: string = null;
    AddressState : string =null;
    EduStandard : string = null;
    EduStream : string =null;
    EduUniversity : string = null;
    EduMarksObt : number = null;
    EduMarksMax : number = null;
    EduPercentage : number = null;
    imgSrc :   string;
    downloadURLs : Array<string> ;
    selectedImage : any = null;
    EduYear : number = null;   
    DeleteUser: string= null;
    DeleteAddress: string= null;
    DeleteEdu: string= null;
    formValue :any= null;
    files: File[] = [];
    uploads = [];
    filelist :any;
    
}