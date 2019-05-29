import { Component,OnInit, ViewChild } from "@angular/core";

import { Platform, Nav, Button } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import{OrderHistoryPage} from "../pages/order-history/order-history"
import { AlertController, ToastController} from "ionic-angular";
import { ActivityService } from '../services/activity-service';
import { ModalController } from 'ionic-angular';
import {ChangePass} from '../pages/changePass/changePass';
import { Storage } from '@ionic/storage';
//import { App } from 'ionic-angular/components/app/app';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit{
  uname:any;
  customerName:any={};
  username:any={};
  amount:any;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public storage: Storage,
    public platform: Platform,
    //public app: App,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public changCtrl: AlertController,
    public toastCtrl: ToastController,
    public authservice: ActivityService,
    public modalController: ModalController
  
     
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Order History', component: OrderHistoryPage, icon: 'photos'},
      {title: 'Wallet Balance', component: HomePage, icon: 'build'},
      {title: 'Change Password', component: '', icon: 'build'},
      {title: 'Log out', component:'', icon: 'build'}
    ];
  //   this.username=localStorage.getItem('user')
  //   console.log("hello i m hear",this.username['username']);
  //  console.log("hello i m hear 222", (JSON.parse(this.username).username));
  // this.customerName=(JSON.parse(this.username).username);
 
//   this.platform.ready().then(() => {
//     this.platform.registerBackButtonAction(() => {
//         this.app.navPop();
//     });
// })    

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
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
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
      var id
     id= this.customerName["id"]

     //for wallet data 
        console.log("hello get data",id)
      this.authservice.walletData(id).subscribe((data:any)=>{
                console.log(" wallet dat find",(JSON.parse(data._body).amount));
    //               console.log("password change data ",(JSON.parse(data._body).message));
          this.amount=(JSON.parse(data._body).amount);
          
            console.log(" wallet dat find4345645",this.amount)
    })  
  }
  openPage(page) {debugger
    console.log("paGEEEEEEEEE",page.title)
    if(page.title=='Order History'){
      this.nav.setRoot(page.component);
    }
   if(page.title == 'Change Password') {
   this.changPass()
   }
  else if(page.title=='Log out'){
   this.logout()
   }
  else if(page.title !== 'Change Password'){
    this.nav.setRoot(page.component);
   }
  
  }

  logout() {
    localStorage.clear();
    this.storage.clear();
    this.nav.setRoot(LoginPage);
  }
  itemSelected(){
    console.log("this is click");
  };
  changPass  = async ()  =>{
    let modal = await  this.modalController.create(ChangePass, {
   
    })
  
    modal.present();
  }
  
  // changPass() {
 
  //   let changPass = this.changCtrl.create({
  //    title: '<i class="ion-ios-close" ></i>',
  //     message:"Change Password",
  //     cssClass: 'modalCss1',
  //     inputs: [
  //               {
  //                 name: 'password',
  //                 placeholder: 'password',
  //                 type: 'password',
                  
  //               },
  //               {
  //                 name: 'confirm_password',
  //                 placeholder: 'confirm password',
  //                 type: 'password'
  //               },
  //     ],
  //     buttons: [
  //       // {
  //       //   text: 'Cancel',
  //       //   handler: data => {
  //       //     console.log('Cancel clicked');
  //       //   }
  //       // },
  //       {
  //         text: 'Change Password',
  //         handler: data => {
  //           console.log('Send clicked');
  //           console.log('data clicked data',data);
  //           if(!data.password ||!data.confirm_password){
  //             let toast = this.toastCtrl.create({
  //               message: 'password is blank',
  //               duration: 3000,
  //               position: 'top',
  //               cssClass: 'dark-trans',
  //               closeButtonText: 'OK',
  //               showCloseButton: true
  //             });
  //             toast.present();
  //             return false;
  //           }
  //           else if(data.confirm_password!=data.password){
  //             let toast = this.toastCtrl.create({
  //               message: 'password is not match',
  //               duration: 3000,
  //               position: 'top',
  //               cssClass: 'dark-trans',
  //               closeButtonText: 'OK',
  //               showCloseButton: true
  //             });
  //             toast.present();
  //             return false;
  //           }
  //           else {
  //             const user={
  //               password:data.password,
  //               userid:this.customerName.id,
  //             }
  //             this.authservice.changPass(user).subscribe((data:any)=>{
  //               console.log(" data",data._body, );
  //               console.log("password change data ",(JSON.parse(data._body).message));  
  //              if((JSON.parse(data._body).message)=="password has been changed."){
  //               let toast = this.toastCtrl.create({
  //                 message: 'password chang successfully',
  //                 duration: 3000,
  //                 position: 'top',
  //                 cssClass: 'dark-trans',
  //                 closeButtonText: 'OK',
  //                 showCloseButton: true
  //               });
  //               toast.present();
  //             }
  //             else if((JSON.parse(data._body).message)==" Some error occurred please try again"){
  //               let toast = this.toastCtrl.create({
  //                 message: 'somthing went wrong',
  //                 duration: 3000,
  //                 position: 'top',
  //                 cssClass: 'dark-trans',
  //                 closeButtonText: 'OK',
  //                 showCloseButton: true
  //               });
  //               toast.present();
  //             }              
              
  //             })
             
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   changPass.present();
  // }
}
