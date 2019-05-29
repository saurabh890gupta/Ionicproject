import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController,ToastController } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import { TripsPage } from "../trips/trips";
import { ActivityService } from "../../services/activity-service";
import {CardDetailPage} from  "../card-detail/card-detail";
import { SharedService} from "../../services/sharedService";
//import { SocialSharingOriginal } from '@ionic-native/social-sharing';
export interface MenuItem {
  title: string;
  component: any;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TripsPage]
})
export class HomePage implements OnInit {
  [x: string]: any;
  image=[];
  img:any;
  str: any;
  Products: any;
  tempPro:any;
  IsVisible: boolean = false;
  product_code:any;
  kasip:any;
  ondata:any;
  isShow: boolean = false;
  showInd=null;
  appMenuItems: Array<MenuItem>;
  constructor(
    public modalController: ModalController,
    //private storage: Storage,
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public authservice: ActivityService,
    public toastCtrl: ToastController,
    public shared:SharedService,
   // public socialSharing:SocialSharingOriginal 
    ) {
      //console.log(this.shared.cartquantity,'cartQuantity');
      
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProduct();
  }
  error() {
    console.log('error')
  }

  whatsappShare(i){
    this.showInd=i;
    //console.log(i);
    this.isShow = this.isShow ? false : true;
    // if(this.isShow==true)
    this.appMenuItems = [
      {title: 'Share in Watsapp', component: '', },
      {title: 'Share in Watsapp2', component: '',},
      
    ];
   }
 
  shareWhatsapp(menuItem,i){
   console.log("menu iterm",menuItem,i)
     var image  = "http://zairamart.com/apiadmin/images/zm1138_1.jpg"
      console.log("msg",image)
    // this.socialSharing.shareViaWhatsApp(image, null, null);
    // this.socialSharing.shareViaWhatsApp(null, image, null).then((res)=>{
    //   console.log("ressssssss",res)
    // }).catch((err)=>{
    //   console.log("errrrrrrrr",err)
    // })
  }

    compilemsg(index):string{
    var image = this.Products[index].product_image ;
  // + "-" + this.quotes[index].title ;
    return image.concat(" \n Sent from my Awesome App !");
  }
  openCart() {
    // this.cartdata = this.navparams.get('cartProduct');
    console.log('cartdata---',this.cartdata)
    this.nav.setRoot(CardDetailPage, {});
  }

  openPage(page) {
   //console.log("dfhsjkf",page)
   }
  showSliderimages  = async (product)  =>{
     //console.log('product====',product)
  let modal = await  this.modalController.create(TripsPage, {
  
    Products: product
  })

    modal.present();
  }

  descriptionVal: any;
  productDesc=[];
  async getAllProduct() {
    this.shared.show();
    this.authservice.products().subscribe(async(data: any) => {
      this.shared.hide();
      //console.log('datata-->', data);
      let productbody = [];
      productbody = JSON.parse(data._body).product
      this.Products = productbody;
      //console.log('products-->',this.Products);
      this.tempPro=productbody;
      for (let index = 0; index < this.Products.length; index++) {
          //   this.img = await this.Products[index].product_image[0]
          //  this.image.push(this.img)
          this.Products[index].description = this.Products[index].description.replace(/<br\s*\/?>/mg,"\n");
        //   this.descriptionVal = await this.str.replace(/<br\s*\/?>/mg,"\n");
        // this.productDesc.push(this.descriptionVal);
          //console.log('this.description',this.descriptionVal);
      }
     
    })
  }

  // go to result page
  doSearch() {
    //this.nav.push(TripsPage);
  }

  // choose place
  // choosePlace(from) {
  //   this.nav.push(SearchLocationPage, from);
  // }

  // // to go account page
  // goToAccount() {
  //   this.nav.push(SettingsPage);
  // }

  // presentNotifications(myEvent) {
  //   console.log(myEvent);
  //   let popover = this.popoverCtrl.create(NotificationsPage);
  //   popover.present({
  //     ev: myEvent
  //   });
  // }
  
  

  searchEnter(event){
    var value = event.target.value;
    console.log("get value data",value);
    this.IsVisible=false;
    if(value==undefined){
      this.getAllProduct();
      return
    }
    if(value==''){
      this.getAllProduct();
    }
    if (value.length>=1) {      
      //console.log("this.product_code this.product_code",this.product_code)
      this.authservice.products().subscribe((data:any)=>{
        //console.log("jsmindata",data);
        let productbody = [];
        productbody = JSON.parse(data._body).product
        this.kasip = productbody 
        //console.log("data value",this.kasip)
        this.Products= this.tempPro.filter(f=>{
          if(f && f.product_code && f.product_code.indexOf(value)>-1){
            return f;
          }
        })
          //console.log("getdata ",    this.Products,this.Products.length);
          if(this.Products.length==0){
           this.IsVisible=true;
          }
        });
    }
    else{
      this.Products = [];
     
    }
   
  }

}

