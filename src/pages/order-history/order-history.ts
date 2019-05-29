import { Component ,OnInit} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ActivityService} from '../../services/activity-service'
import { Storage } from '@ionic/storage';
// import { HttpErrorResponse } from '@angular/common/http';
import {checkOutPage} from '../check-out/check-out';
import { ModalController } from 'ionic-angular';
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html'
})
export class OrderHistoryPage implements OnInit{
  uname:any;
  user:any;
  productbody=[];
  datamessage:any;
  tempdata=[];
  IsVisible:boolean=false;
  constructor(
    public navCtrl: NavController,
    public authservice:ActivityService,
    private storage: Storage,
    public modalController: ModalController,
    public navParms:NavParams) {

  }
  ngOnInit(): void {
  this.hestoryData();
  }
  hestoryData(){
    this.IsVisible=false;
    this.uname=localStorage.getItem('user')
      this.user=(JSON.parse(this.uname))
      this.user=this.user.id;
      //console.log("this.user",this.uname,this.user)
      if(this.user){
          this.authservice.historyData(this.user).subscribe((data:any)=>{
         // console.log("this.user",data._body);
          this.datamessage=JSON.parse(data._body).message;
          this.productbody=JSON.parse(data._body).order;
         // console.log("this.datamessage.user",this.datamessage);
          //console.log("this.user",this.productbody);
          this.tempdata=this.productbody;
         // console.log("this.user",this.tempdata);
          if(this.datamessage=="no order found."){
            this.IsVisible=true;
          }
        })
      }
  }
  editbutton(orderid,ind){
    //console.log("create this",orderid,ind)
    let modal = this.modalController.create(checkOutPage, {
    orderpage:'orderpage',
    orderid:orderid,
    editid:ind
    })
    modal.present();
  }

  searchEnter(event){
    if(this.datamessage=="no order found."){
      return
    }
    var value = event.target.value;
    console.log("get value data",value);
    this.IsVisible=false;
    if(value==undefined){
      this.hestoryData();
      return
    }
    if(value==''){
      this.hestoryData();
    }
    if (value.length>=1) {      
      //console.log("this.product_code this.product_code",this.product_code)
      //this.authservice.products().subscribe((data:any)=>{
        //console.log("jsmindata",data);
       // productbody = JSON.parse(data._body).product
        //console.log("data value",this.kasip)
        this.tempdata= this.tempdata.filter(f=>{debugger
          //console.log("gggggggggggg",f)
          if( f.order_id.toString().indexOf(value)>-1 ||f.address.toString().indexOf(value)>-1){
            //console.log("hello f",f)
            return f;
          }
        })
          //console.log("getdata ",    this.Products,this.Products.length);
          if(this.tempdata.length==0){
           this.IsVisible=true;
          }
        //});
    }
    else{
      this.tempdata = [];
     
    }
   
  }

}
