import {Injectable} from "@angular/core";
import {ACTIVITIES} from "./mock-activities";
import { Http, RequestOptions, Headers } from '@angular/http';
import { config} from '../services/config'

@Injectable()
export class ActivityService {
  private activities: any;

  constructor(
    private http :Http,
    private config: config
  ) {
   // this.activities = ACTIVITIES;
  }


register(user){ debugger
  let heads = new Headers({
    // 'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //   "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "{ 'Content-Type': 'application/json' }" 
    });
    let options = new RequestOptions({ headers: heads });
  return this.http.post(this.config.URL+ "?apicall=userRegister", user,options)
}

products(){
  
  return this.http.get(this.config.URL + '?apicall=getProducts')
}


changPass(user){
 // console.log("dataaaaaaaaaaaaaaaaa",user)
  let heads = new Headers({
    "Content-Type": "application/x-www-form-urlencoded" 
    });
    let options = new RequestOptions({ headers: heads });
  return this.http.post(this.config.URL+ "?apicall=changepassword", user,options)
}


productsData(){
  return this.http.get(this.config.URL + '?apicall=getProducts')
}
login(user){
  //console.log("dataaaaaaaaaaaaaaaaa",user)
  let heads = new Headers({
    "Content-Type": "{ 'Content-Type': 'application/json' }" 
    });
    let options = new RequestOptions({ headers: heads });
  return this.http.post(this.config.URL+ "?apicall=userLogin", user,options)
}

walletData(id){
  console.log("dataaaaaaaaaaaaaaaaa",id)
  let heads = new Headers({
    "Content-Type": "{ 'Content-Type': 'application/json' }" 
    });
    let options = new RequestOptions({ headers: heads });
    console.log("fjgdfkg",this.config.URL+ "?apicall=userWallet"+"&id="+id)
  return this.http.get(this.config.URL+ "?apicall=userWallet"+"&id="+id)
}

whats(text){
  return this.http.post('http://whatsapp://send?text=',text)
}

historyData(user){
 // console.log("this.user for hsitory",user)
   return this.http.get(this.config.URL + '?apicall=getOrderHistory&user_id='+49)
  //return this.http.get(this.config.URL + '?apicall=getOrderHistory&user_id='+user)
}

updateAdd(orderid,address){
 // console.log("this.user for hsitory",orderid,address);
 var user={
  order_id:orderid,
  address
  }
  //console.log("this.user user",user);
  let heads = new Headers({
    "Content-Type": "application/x-www-form-urlencoded" 
    });
    let options = new RequestOptions({ headers: heads });
    //console.log("this.user for hsitory",this.config.URL + '?apicall=updateAddress&order_id='+orderid+'&address='+address);
  return this.http.post(this.config.URL+ '?apicall=updateAddress',user,options);
}

  // getAll() {
  //   return this.activities;
  // }

  // getItem(id) {
  //   for (var i = 0; i < this.activities.length; i++) {
  //     if (this.activities[i].id === parseInt(id)) {
  //       return this.activities[i];
  //     }
  //   }
  //   return null;
  // }

  // remove(item) {
  //   this.activities.splice(this.activities.indexOf(item), 1);
  // }
}
