import {Injectable} from "@angular/core";
import {ACTIVITIES} from "./mock-activities";
import { config} from '../services/config';
import { Http, RequestOptions, Headers } from '@angular/http';
import {  ToastController} from "ionic-angular";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';  

@Injectable()
export class SharedService {
  loading;
    private dataSource = new BehaviorSubject([]);
  data = this.dataSource.asObservable();
  private activities: any;
  toast: any;
  flag: boolean = false
  public cartProduct: any = [];
  public cartquantity;
  constructor(
    public loadingController: LoadingController,
    public storage: Storage,
    public toastCtrl: ToastController,
    private http :Http,
    private config: config,
    //public nav: NavController,
  ) {
    storage.get('cartProducts').then((cart)=>{
      if(cart != null) this.cartProduct = cart
      console.log('cartproduct',cart);
      this.cartTotalItems()
    })
  }
  create(message, ok=false, duration:2000) {
    if(this.toast) {
      this.toast.dismiss();
    }
    this.toast = this.toastCtrl.create({
      message,
      duration: ok ? null : duration,
      position: 'top',
      cssClass: 'dark-trans',
      showCloseButton: true,
      closeButtonText: 'OK',
    });
    this.toast.present();
  }
  show() {
    this.loading = this.loadingController.create({
    duration: 10000
    });
    this.loading.present();
    }
    hide() {
    try {
    this.loading.dismiss();
    } catch (error) { }
    
    
    
    }
    autoHide(time) {
    this.loading = this.loadingController.create({
    duration: time
    });
    this.loading.present();
    }

  cartItems(product) {
    debugger
    console.log('product from cart', product)
    if (this.cartProduct.length > 0) {
      for (let i = 0; i < this.cartProduct.length; i++) {
        if (product.product_image_id == this.cartProduct[i].product_image_id) {
          this.cartProduct[i].quantity = product.quantity
          this.cartProduct[i].dealer_price = product.dealer_price
          break;
        }
        else {
          this.flag = true
        }
      }
      if (this.flag == true) {
        this.cartProduct.push(product)
      }
    }
    else {
      this.cartProduct.push(product)
    }
    //this.dataSource.next(this.cartProduct)
    this.storage.set('cartProducts',this.cartProduct);
    this.cartTotalItems();
     console.log(this.cartProduct)
  }

  cartTotalItems = function () {
    //this.events.publish('cartChange');
    let total = 0;
    for (let value of this.cartProduct) {
    // total += value.actual_quantity;
    total += parseInt(value.quantity)
    }
    this.cartquantity = total;
    console.log("updated",this.cartquantity);
    return total;
    };

}