import {Component,OnInit} from "@angular/core";
import { ToastController,NavParams,NavController} from "ionic-angular";
import { ActivityService } from '../../services/activity-service';
import{SharedService} from '../../services/sharedService';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class Cartpage implements OnInit{
    cartValue:number=1;
    isCart:boolean=false;
    productPrice:number;
    Product:any;
    ProductIndex:any;
    stcoks:any;
  constructor(
 
    public authservice: ActivityService,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public SharedService:SharedService,
    public nav : NavController
  ) {debugger
    this.Product = this.navParams.get('Products');
    this.ProductIndex = this.navParams.get('Index');
    this.productPrice = this.Product.dealer_price;
    console.log("heloo index data find ", this.ProductIndex)
  }
  ngOnInit() { 
  }
 
  increment = (val)=>{
    this.cartValue= this.cartValue + val;
    console.log("hello get sdsfsd",this.Product)
    this.productPrice = this.Product.dealer_price *  this.cartValue
    console.log('productcartvalue',this.productPrice)
    let stock = this.Product.stocks[this.ProductIndex]
     
    if(this.cartValue > stock){
      this.cartValue = stock
      this.productPrice = this.Product.dealer_price *  this.cartValue
      //console.log('productcartvalue',this.productPrice)
      this.SharedService.create('Max stock limit reached',false,2000);
    
    }
    else if(this.cartValue < 1){
      this.cartValue = 1;
      this.productPrice = this.Product.dealer_price * this.cartValue
      //console.log('productcartvalue',this.productPrice)
      this.SharedService.create('Quantity can not be less than 1',false,2000);
    this.SharedService.create('Max stock limit reached',false,2000);
  
     } 
     
  }
  closeModal() {
     this.nav.pop();
}

addToCart() {
  let obj = {
    product_code: this.Product.product_code,
    dealer_price: this.productPrice,
    quantity: this.cartValue,
    stock: this.Product.stocks[this.ProductIndex],
    product_image: this.Product.product_image[this.ProductIndex],
    product_image_id: this.Product.product_image_id[this.ProductIndex]
  }
  this.SharedService.cartItems(obj)
 this.nav.pop();
}


        
}
