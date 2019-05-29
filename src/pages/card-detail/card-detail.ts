import {Component} from "@angular/core";
import {NavController,ToastController, NavParams} from "ionic-angular";
import {HomePage} from "../home/home";
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
import{SharedService} from '../../services/sharedService';
import { ActivityService } from '../../services/activity-service';
import {checkOutPage} from '../check-out/check-out';
import { ModalController } from 'ionic-angular';
@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html'
})
export class CardDetailPage {
  [x: string]: any;
  productData=[];
  cartValue:number=1;
  isCart:boolean=false;
  Product:any;
  ProductIndex:any;
  stcok:any;
  ind:any;
  showInd:any;
  dealer_price:any;
  sum=0;
  quantity:any;
  tempArray=[];
  databy=[];
  amount:any;
  singleprice:any;
  constructor(public navCtrl: NavController,  
    public SharedService:SharedService,
    public navParams: NavParams,
    public location: Location,
    public storage: Storage,
    public toastCtrl: ToastController,
    public authservice: ActivityService,
    public modalController: ModalController
    )
    {
     this.storagedatafinction()
    }


  storagedatafinction(){

    this.storage.get('cartProducts').then((cart)=>{
      console.log('cartproduct',cart);
      this.productData=cart;
      console.log('this.productData',this.productData);
      this.tempArray=this.productData
      this.databy=this.productData
      // this.storage.remove('cartProducts').then(() => {
      //   console.log("itemsffffffffffffffffff",)
      //   });
     
    })
    setTimeout(() => {
      console.log('this.productData outer', this.tempArray);
     this.sumfunction();
    }, 1000);
  }
  sumfunction(){
      this.sum=0;
      if( this.tempArray!=null){
        // console.log("temparray for sum function",this.tempArray)
        this.tempArray.forEach((item)=>{ 
          //console.log("itemmmmm",item.dealer_price)
        this.sum=Number(this.sum)+Number(item.dealer_price)
          //console.log("summmmmmmmmmmmm",this.sum)
      }); 
      //console.log("summmmmmmmmmmmm",this.sum)
    }
  }  
  goBAck(){
    location.reload();
    this.navCtrl.setRoot(HomePage);
  }
  
  increment = (val,ind)=>{
        // console.log("sjdfkl;sjdfl;",val,ind)
        // console.log("hello get sdsfsd",this.productData)
      this.singleprice=this.tempArray[ind].dealer_price/this.tempArray[ind].quantity;
        // console.log("heloooo price singlwethis.singleprice",this.singleprice)
      let stock = this.productData[ind].stock;
        // console.log('stock',stock);
      if(val<0){
        // console.log("this.tempArray[ind].quantity if condiotn",this.tempArray[ind].quantity)
        this.cartValue= Number(this.tempArray[ind].quantity) + Number(val); 
      }
      else{
        this.cartValue= this.cartValue + val; 
      }
        //this.cartValue= this.cartValue + val; 
        // console.log("jhhjkhjkh",this.cartValue)
      this.tempArray[ind].quantity = this.cartValue;
      this.tempArray[ind].dealer_price=this.singleprice*this.cartValue;
        console.log("helll array data1",this.tempArray); 
      if( this.tempArray[ind].quantity > stock){
        this.tempArray[ind].quantity= stock
        this.tempArray[ind].dealer_price=this.singleprice*stock;
        // console.log(" this.quantity hgfhfgh", this.quantity )
        this.SharedService.create('Max stock limit reached',false,2000);
      } else if( this.tempArray[ind].quantity < 1){
        this.tempArray[ind].quantity = 1;
        this.tempArray[ind].dealer_price=this.singleprice*1;
        this.SharedService.create('Quantity can not be less than 1',false,2000);
      }
      this.storage.set('cartProducts',this.tempArray)
      this.sumfunction();
  }
  

deleteCart(ind){debugger
  this.tempArray.splice(ind,1)
  // console.log("itemsffffffffffffffffff",this.tempArray)
  this.storage.set('cartProducts',this.tempArray)
 this.SharedService.create('your product delete successfully',false,2000);
  this.sumfunction();
}


cartProcess(sum){debugger
  console.log("summmmmmmmmmmm",sum)
    if(sum==0){
      this.SharedService.create('Please Add Any Item',false,2000);
      return false; 
    }
  this.uname=localStorage.getItem('user')
  if(this.uname){
   this.customerName=(JSON.parse(this.uname))
  }
  var id
  id= this.customerName["id"]
    //console.log("hello get data",id)
    this.authservice.walletData(id).subscribe((data:any)=>{
      //console.log("data",data);
      
      if(JSON.parse(data._body).amount){
        //console.log(" wallet dat find",(JSON.parse(data._body).amount));             
        this.amount=(JSON.parse(data._body).amount);
          //console.log(" wallet dat find card detail",this.amount)
      }
      if(sum>this.amount){
        this.SharedService.create('your wallet balance less then proceed balance',false,2000); 
       }else{
        let modal = this.modalController.create(checkOutPage, {
          sum: sum,
          amount:this.amount,
        })
      
        modal.present();
       }
     
    })  

  }

}
