import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { ActivityService } from '../../services/activity-service'
import {  ToastController} from "ionic-angular";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user= {
    username: '',
    state: '',
    mobile: '',
    password: '',
    userType: ''  }
  constructor(public nav: NavController,
    public authservice: ActivityService,
    public toastCtrl: ToastController,) {
  }

  // register and go to home page
  register(user) {
    console.log("get data define",user);
    if(user.username==''||user.state==''||user.mobile==''||user.password==''||user.userType==''){
      let toast = this.toastCtrl.create({
        message: 'All fields are required',
        duration: 3000,
        position: 'top',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
      return false;
    }
    if(user.mobile.length<10){debugger
      let toast = this.toastCtrl.create({
        message: 'Mobile number should be 10 digit',
        duration: 3000,
        position: 'top',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
      return false;

    }
    this.authservice.register(user).subscribe((data:any)=>{
      //console.log("data find1",data._body);
     //console.log((JSON.parse(data._body).message),'asdfsdgfsdgfsdf');
      // (JSON.parse(data._body).message)
      // console.log("data find",data._body['message'])
      // console.log('data find2',data._body.message)
       if((JSON.parse(data._body).message)=="User added successfully"){
        let toast = this.toastCtrl.create({
          message: 'User added successfully',
          duration: 3000,
          position: 'top',
          cssClass: 'dark-trans',
          closeButtonText: 'OK',
          showCloseButton: true
        });
        toast.present();
        this.nav.setRoot(HomePage);
     }else if((JSON.parse(data._body).message)=="Mobile No. already exist."){
      let toast = this.toastCtrl.create({
        message: 'Mobile No. already exist',
        duration: 3000,
        position: 'top',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
       }
       return false;
    })
    // this.nav.setRoot(LoginPage);
    
  }

  // go to login page
  login() {
   this.nav.setRoot(LoginPage);
  }
}
