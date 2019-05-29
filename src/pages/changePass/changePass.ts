import {Component,OnInit} from "@angular/core";
import {  ToastController,NavController,} from "ionic-angular";
import { ActivityService } from '../../services/activity-service';
import {HomePage} from "../home/home";
@Component({
  selector: 'page-changePass',
  templateUrl: 'changePass.html'
})
export class ChangePass implements OnInit{
  uname:any;
  customerName:any={};
  username:any={};
  data={
    password:'',
    confirm_password:'',
  }
  constructor(
    public nav: NavController,
    public authservice: ActivityService,
    public toastCtrl: ToastController,
  ) {

  }
  ngOnInit() {
    //  if(localStorage.getItem('user')){
    //     this.nav.setRoot(HomePage);
    //   }
    //   this.username=localStorage.getItem('user')
    //   console.log("hello i m hear",this.username['username']);
    //  console.log("hello i m hear 222", (JSON.parse(this.username).username));
    // this.customerName=(JSON.parse(this.username).username);
    this.menuName()
    
    
  }
  menuName(){
    this.uname=localStorage.getItem('user')
    if(this.uname){
     //  console.log("hello i m hear 222", (JSON.parse(this.uname)));
     this.customerName=(JSON.parse(this.uname))
     // console.log("hello i m h",this.customerName.mobile);
     // console.log("hello i m hear",this.customerName.username);
    }
   else{
     this.customerName["username"]='';
   }

}

closePopup(){
  this.nav.pop()
}
changePass(data){
            console.log('Send clicked');
            console.log('data clicked data',data);
            if(!data.password ||!data.confirm_password){
              let toast = this.toastCtrl.create({
                message: 'password is blank',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();
              return false;
            }
            else if(data.confirm_password!=data.password){
              let toast = this.toastCtrl.create({
                message: 'password is not match',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();
              return false;
            }
            else {
              const user={
                password:data.password,
                userid:this.customerName.id,
              }
              this.authservice.changPass(user).subscribe((data:any)=>{
                console.log(" data",data._body, );
                console.log("password change data ",(JSON.parse(data._body).message));  
               if((JSON.parse(data._body).message)=="password has been changed."){
                let toast = this.toastCtrl.create({
                  message: 'password chang successfully',
                  duration: 3000,
                  position: 'top',
                  cssClass: 'dark-trans',
                  closeButtonText: 'OK',
                  showCloseButton: true
                });
                toast.present();
                this.nav.pop()
              }
              else if((JSON.parse(data._body).message)==" Some error occurred please try again"){
                let toast = this.toastCtrl.create({
                  message: 'somthing went wrong',
                  duration: 3000,
                  position: 'top',
                  cssClass: 'dark-trans',
                  closeButtonText: 'OK',
                  showCloseButton: true
                });
                toast.present();
              
              }              
              
              })
             
            }
          }
        
}
