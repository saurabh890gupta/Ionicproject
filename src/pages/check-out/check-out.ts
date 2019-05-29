import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';
import{SharedService} from '../../services/sharedService';
// import {SearchCarsPage} from "../search-cars/search-cars";
import {OrderHistoryPage} from '../order-history/order-history'
import {ActivityService} from '../../services/activity-service';
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html'
})

export class checkOutPage {
  sum:any;
  amount:any;
  orderpage:any;
  isshow:boolean=false;
  ishide:boolean=true;
  orderid:any;
  editid:any;
  datamessage:any;
  add={
    address:''
  }
  constructor(
    private storage: Storage,
     public nav: NavController, 
     public navParams: NavParams,
     public SharedService:SharedService,
     public authservice:ActivityService,
     )
     
     {
     this.orderpage=this.navParams.get('orderpage');
     this.orderid=this.navParams.get('orderid');
     this.editid=this.navParams.get('editid')
     if(this.orderpage=="orderpage"){
      this.isshow=true;
      this.ishide=false;
     }
    
     //console.log(" this.orderpage  this.orderpage", this.orderpage, this.isshow)
      this.sum = this.navParams.get('sum');
      this.amount = this.navParams.get('amount');
      console.log("sum amount",this.sum,this.amount)
  }
  closePopup(){
    this.nav.pop()
  }
  // search by item
  bookNow(add){
    //console.log("addddddddd2",add.address)
    if(add.address==""){
      this.SharedService.create('your address is blank please fill address',false,2000);
    return false
    }
    //console.log("addddddddd",add)
    if(this.sum>this.amount){
      this.SharedService.create('your wallet balance less then proceed balance',false,2000); 
     }else{
      
      this.SharedService.create('your product successfully book',false,2000);
      this.nav.pop()
     }
  }
  updateAdd(add){debugger
    if(add.address==''){
      this.SharedService.create('Please full fill your address',false,2000);
      return
    }
    console.log("addddddddd2",add.address,this.orderid,this.editid)
    this.authservice.updateAdd(this.orderid,add.address).subscribe((data:any)=>{
     // console.log("dataaaaaaaaaaaaaaaa",data)
      this.datamessage=JSON.parse(data._body).message;
      if(this.datamessage=="Order Info updated successfully."){
        this.SharedService.create('your address update successfully',false,2000);
        this.nav.pop()
        this.nav.setRoot(OrderHistoryPage);
      }
      else{
        this.SharedService.create('somthing went to wrong',false,2000);
      }
    })
  }
}
