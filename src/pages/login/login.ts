import {Component,OnInit} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { ActivityService } from '../../services/activity-service'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  user= {
    mobile:'',
    password: '',
   }
  constructor(
    public nav: NavController,
    public authservice: ActivityService,
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }
  ngOnInit() {
      if(localStorage.getItem('user')){
        this.nav.setRoot(HomePage);
      }
     
  }
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login(user) {
    //console.log("userrrrrrrrrrrrr",user)

    if(user.mobile==''||user.password==''){
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
    else{
      this.authservice.login(user).subscribe((data:any)=>{
        console.log("data find1",data._body);
        // console.log("data kllllllkkl",(JSON.parse(data._body).userinfo));
        if((JSON.parse(data._body).message)=="Login successfull"){
          // console.log("data kllllllkkl",(JSON.parse(data._body).userinfo));
          localStorage.setItem('user', JSON.stringify((JSON.parse(data._body).userinfo)));
         // localStorage.setItem('(JSON.parse(data._body).userinfo)');
          location.reload();  
          this.nav.setRoot(HomePage);
        }
        else if((JSON.parse(data._body).message)=="Invalid username or password"){
          let toast = this.toastCtrl.create({
            message: 'Invalid username or password',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
          return false;
        }
        else{
          let toast = this.toastCtrl.create({
            message: 'somthing goes to wrong',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
          return false;
        }
      })
    }

    //this.nav.setRoot(HomePage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
