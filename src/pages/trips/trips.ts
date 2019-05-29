import {Component} from "@angular/core";
import {NavController, ModalController} from "ionic-angular";
import {SharedService} from "../../services/sharedService";
import { NavParams } from 'ionic-angular';
import { Cartpage } from "../cart/cart";
// import {HomePage} from "../home/home";
import { AlertController } from 'ionic-angular';
import {CardDetailPage} from '../card-detail/card-detail'

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  descriptionVal:any;
  cartValue:number=1;
  isCart:boolean=false;
  isStock:boolean=true;
  buttonVal:any;
  [x: string]: any;
  loading: boolean = true;
  // list of trips
  public trips: any;

  constructor(public navParams :NavParams,
    public navCntroller:NavController,
    public modalController: ModalController,
    public alertController: AlertController,
    public shared: SharedService
    ) {
      this.shared.show();
    this.product = this.navParams.get('Products')
    if(this.product){
      this.shared.hide();
    }
    this.descriptionVal=this.product.description.replace(/<br\s*\/?>/mg,"\n");
    for(let i=0;i<this.product.stocks.length;i++){
      if(this.product.stocks[i] == "" || this.product.stocks[i] == 0 || this.product.stocks == null){
        this.isStock = false
        this.buttonVal = "Out of stock"
        console.log('Outstock',this.product.stocks[i])
      }
      else{
        this.isStock = true
        this.buttonVal = "Add to cart"
        console.log('Instock',this.product.stocks[i])  
        console.log("fjsdokfhsdjklfhsjk",this.product)      
      }
      
    }
    
    this.onLoad();
    console.log(this.product,'=====================>>')
  }
  

  increment = (val)=>{
    this.cartValue= this.cartValue + val;
    sessionStorage.setItem('cartValue',JSON.stringify(this.cartValue))
  }


  
  addToCart =  (product,i)=> {debugger
    console.log('product',product,i)
    let modal =   this.modalController.create(Cartpage,{
      Products: product,
      Index:i
    })
  
      modal.present();
    }
    // console.log('productofcart==>',product,i)
    
    //this.isCart = true;
    
  onLoad() {
    this.loading = false;
}
goBAck(){
  this.navCntroller.pop();
}

  // view trip detail
  viewDetail(id) {
    //this.nav.push(TripDetailPage, {id: id});
  }
}
