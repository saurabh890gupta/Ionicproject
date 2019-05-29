webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = (function () {
    function config() {
        //SERVER_URL: 'http://192.168.1.129/android/v1/Api.php',
        //public URL:string= 'http://192.168.1.129/android/v1/Api.php'
        this.URL = 'http://192.168.1.129/androidv1/v1/Api.php';
    }
    return config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharedService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_history_order_history__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {SearchCarsPage} from "../search-cars/search-cars";


var checkOutPage = (function () {
    function checkOutPage(storage, nav, navParams, SharedService, authservice) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        this.SharedService = SharedService;
        this.authservice = authservice;
        this.isshow = false;
        this.ishide = true;
        this.add = {
            address: ''
        };
        this.orderpage = this.navParams.get('orderpage');
        this.orderid = this.navParams.get('orderid');
        this.editid = this.navParams.get('editid');
        if (this.orderpage == "orderpage") {
            this.isshow = true;
            this.ishide = false;
        }
        //console.log(" this.orderpage  this.orderpage", this.orderpage, this.isshow)
        this.sum = this.navParams.get('sum');
        this.amount = this.navParams.get('amount');
        console.log("sum amount", this.sum, this.amount);
    }
    checkOutPage.prototype.closePopup = function () {
        this.nav.pop();
    };
    // search by item
    checkOutPage.prototype.bookNow = function (add) {
        //console.log("addddddddd2",add.address)
        if (add.address == "") {
            this.SharedService.create('your address is blank please fill address', false, 2000);
            return false;
        }
        //console.log("addddddddd",add)
        if (this.sum > this.amount) {
            this.SharedService.create('your wallet balance less then proceed balance', false, 2000);
        }
        else {
            this.SharedService.create('your product successfully book', false, 2000);
            this.nav.pop();
        }
    };
    checkOutPage.prototype.updateAdd = function (add) {
        var _this = this;
        debugger;
        if (add.address == '') {
            this.SharedService.create('Please full fill your address', false, 2000);
            return;
        }
        console.log("addddddddd2", add.address, this.orderid, this.editid);
        this.authservice.updateAdd(this.orderid, add.address).subscribe(function (data) {
            // console.log("dataaaaaaaaaaaaaaaa",data)
            _this.datamessage = JSON.parse(data._body).message;
            if (_this.datamessage == "Order Info updated successfully.") {
                _this.SharedService.create('your address update successfully', false, 2000);
                _this.nav.pop();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__order_history_order_history__["a" /* OrderHistoryPage */]);
            }
            else {
                _this.SharedService.create('somthing went to wrong', false, 2000);
            }
        });
    };
    checkOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-check-out',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/check-out/check-out.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Address</span>\n      <i class="ion-ios-close" (click)="closePopup()" ></i>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n    \n      <div class="login-content">\n\n              <!-- Logo -->\n              <!-- <div padding-horizontal text-center class="animated fadeInDown">\n                <div class="logo"></div>\n                <h2 ion-text class="text-primary">\n                  <strong>Ionic 3</strong> Start Theme\n                </h2>\n              </div> -->\n          \n              <!-- Login form -->\n              <form class="list-form">\n                <ion-item>\n                \n                  <ion-label floating>\n                    <!-- <ion-icon name="address" item-start class="text-primary"></ion-icon>\n                    Address -->  \n                  </ion-label>\n                  <ion-textarea rows="5" type="text" name="address" placeholder="Enter Address" [(ngModel)]="add.address"></ion-textarea>\n                </ion-item>\n          \n               \n              </form>\n          \n              <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n          \n              <div>\n                <button ion-button icon-start block color="dark" (click)="bookNow(add)"tappable *ngIf="ishide==true">\n                 \n                  Book Now\n                </button>\n                <button ion-button icon-start block color="dark" (click)="updateAdd(add)"tappable  *ngIf="isshow==true">\n                    Update address\n                  </button>\n\n              </div>\n      </div>\n          \n \n</ion-content>'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/check-out/check-out.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_sharedService__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */]])
    ], checkOutPage);
    return checkOutPage;
}());

//# sourceMappingURL=check-out.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__check_out_check_out__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';


var OrderHistoryPage = (function () {
    function OrderHistoryPage(navCtrl, authservice, storage, modalController, navParms) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.storage = storage;
        this.modalController = modalController;
        this.navParms = navParms;
        this.productbody = [];
        this.tempdata = [];
        this.IsVisible = false;
    }
    OrderHistoryPage.prototype.ngOnInit = function () {
        this.hestoryData();
    };
    OrderHistoryPage.prototype.hestoryData = function () {
        var _this = this;
        this.IsVisible = false;
        this.uname = localStorage.getItem('user');
        this.user = (JSON.parse(this.uname));
        this.user = this.user.id;
        //console.log("this.user",this.uname,this.user)
        if (this.user) {
            this.authservice.historyData(this.user).subscribe(function (data) {
                // console.log("this.user",data._body);
                _this.datamessage = JSON.parse(data._body).message;
                _this.productbody = JSON.parse(data._body).order;
                // console.log("this.datamessage.user",this.datamessage);
                //console.log("this.user",this.productbody);
                _this.tempdata = _this.productbody;
                // console.log("this.user",this.tempdata);
                if (_this.datamessage == "no order found.") {
                    _this.IsVisible = true;
                }
            });
        }
    };
    OrderHistoryPage.prototype.editbutton = function (orderid, ind) {
        //console.log("create this",orderid,ind)
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__check_out_check_out__["a" /* checkOutPage */], {
            orderpage: 'orderpage',
            orderid: orderid,
            editid: ind
        });
        modal.present();
    };
    OrderHistoryPage.prototype.searchEnter = function (event) {
        if (this.datamessage == "no order found.") {
            return;
        }
        var value = event.target.value;
        console.log("get value data", value);
        this.IsVisible = false;
        if (value == undefined) {
            this.hestoryData();
            return;
        }
        if (value == '') {
            this.hestoryData();
        }
        if (value.length >= 1) {
            //console.log("this.product_code this.product_code",this.product_code)
            //this.authservice.products().subscribe((data:any)=>{
            //console.log("jsmindata",data);
            // productbody = JSON.parse(data._body).product
            //console.log("data value",this.kasip)
            this.tempdata = this.tempdata.filter(function (f) {
                debugger;
                //console.log("gggggggggggg",f)
                if (f.order_id.toString().indexOf(value) > -1 || f.address.toString().indexOf(value) > -1) {
                    //console.log("hello f",f)
                    return f;
                }
            });
            //console.log("getdata ",    this.Products,this.Products.length);
            if (this.tempdata.length == 0) {
                this.IsVisible = true;
            }
            //});
        }
        else {
            this.tempdata = [];
        }
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-history',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/order-history/order-history.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Order History</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Order History</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding class="animated fadeIn common-bg">\n      <ion-searchbar placeholder = "Search Product by address and order id" (keyup)="searchEnter($event)"  (ionClear)="searchEnter($event)"></ion-searchbar>\n\n        <form class="list-form">\n            <p *ngIf="IsVisible" class="nofound">No data found</p>\n       <ion-card class="card-product animated flipInX" *ngFor="let databy of tempdata ;let ind=index">\n          \n           <ion-card-content class="pd-0">\n             <ion-item>\n               <!-- <ion-thumbnail item-start>\n                <span>Order Id</span>:{{databy.order_id}}\n               </ion-thumbnail> -->\n       \n               <ion-row>\n                 <ion-col col-6>\n                    <p>Order Id :&nbsp;<span>{{databy.order_id}}</span></p>\n                    <p>Address :&nbsp;<span>{{databy.address}}</span></p>\n                    <p>Tracking Id :&nbsp;<span>{{databy.order_id}}</span></p>\n                    <p>Total: Rs.&nbsp;<span>{{databy.total}}</span></p>\n                    <p>Order date :&nbsp;<span>{{databy.date_created}}</span></p>\n                 </ion-col>\n                 <ion-col col-6>\n                   <button class="editbutton" (click)="editbutton(databy.order_id,ind)">Edit</button>\n                  </ion-col>\n               </ion-row>\n\n               <ion-card class="card-product animated flipInX" *ngFor="let prod of databy.product">\n               <ion-card-content class="pd-0">\n                  <ion-item>\n                    <!-- <ion-thumbnail item-start>\n                     <span>Order Id</span>:{{databy.order_id}}\n                    </ion-thumbnail> -->\n            \n                    <ion-row>\n                      <ion-col col-6>\n                          <p>Product code :&nbsp;<span>{{prod.product_code}}</span></p>\n                          &nbsp;\n                          <p>Quentity :&nbsp;<span>{{prod.qty}}</span></p>\n                          &nbsp;\n                          <p>Price :&nbsp;<span>{{prod.item_price}}</span></p>\n                          &nbsp;\n                      </ion-col>\n                      <ion-col col-6>\n                          <ion-item>\n                            <ion-thumbnail item-start>\n                              <img [src]=prod.product_image alt="img">\n                            </ion-thumbnail>\n                          </ion-item>\n                       </ion-col>\n                    </ion-row>\n                  </ion-item>\n            \n                </ion-card-content>\n              </ion-card>\n             \n               <!-- <ion-row align-items-center>\n                 <ion-col col-5></ion-col>\n                 <ion-col col-6>\n                     <div >\n                       <span class="qty-block"> \n                           <button style="margin-left: 2px;border-radius: 50%; " ion-button class="d-ib item-button" (click)="increment(-1,ind)">-</button>\n                          {{databy.quantity}}\n                           <button  style="border-radius: 50%;" ion-button (click)="increment(1,ind)" class="d-ib item-button">+</button>\n                        \n                        \n                       </span>\n                       <span style="position: relative;top: 3px;left: 12px;padding: 12px; "><ion-icon ios="ios-trash" md="md-trash" (click)="deleteCart(ind)"></ion-icon></span>\n                     </div>\n                 </ion-col>\n               </ion-row>\n       \n               <ion-row>\n                 <ion-col col-6>\n                   <strong>Rs.{{databy.dealer_price}}</strong>\n                 </ion-col>\n                 <ion-col col-6>\n                    \n                 </ion-col>\n               </ion-row> -->\n             </ion-item>\n            \n           </ion-card-content>\n       \n         </ion-card>\n       \n       </form>\n     \n      \n     \n    \n     \n</ion-content>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/order-history/order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePass = (function () {
    function ChangePass(nav, authservice, toastCtrl) {
        this.nav = nav;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.customerName = {};
        this.username = {};
        this.data = {
            password: '',
            confirm_password: '',
        };
    }
    ChangePass.prototype.ngOnInit = function () {
        //  if(localStorage.getItem('user')){
        //     this.nav.setRoot(HomePage);
        //   }
        //   this.username=localStorage.getItem('user')
        //   console.log("hello i m hear",this.username['username']);
        //  console.log("hello i m hear 222", (JSON.parse(this.username).username));
        // this.customerName=(JSON.parse(this.username).username);
        this.menuName();
    };
    ChangePass.prototype.menuName = function () {
        this.uname = localStorage.getItem('user');
        if (this.uname) {
            //  console.log("hello i m hear 222", (JSON.parse(this.uname)));
            this.customerName = (JSON.parse(this.uname));
            // console.log("hello i m h",this.customerName.mobile);
            // console.log("hello i m hear",this.customerName.username);
        }
        else {
            this.customerName["username"] = '';
        }
    };
    ChangePass.prototype.closePopup = function () {
        this.nav.pop();
    };
    ChangePass.prototype.changePass = function (data) {
        var _this = this;
        console.log('Send clicked');
        console.log('data clicked data', data);
        if (!data.password || !data.confirm_password) {
            var toast = this.toastCtrl.create({
                message: 'password is blank',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            return false;
        }
        else if (data.confirm_password != data.password) {
            var toast = this.toastCtrl.create({
                message: 'password is not match',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            return false;
        }
        else {
            var user = {
                password: data.password,
                userid: this.customerName.id,
            };
            this.authservice.changPass(user).subscribe(function (data) {
                console.log(" data", data._body);
                console.log("password change data ", (JSON.parse(data._body).message));
                if ((JSON.parse(data._body).message) == "password has been changed.") {
                    var toast = _this.toastCtrl.create({
                        message: 'password chang successfully',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                    _this.nav.pop();
                }
                else if ((JSON.parse(data._body).message) == " Some error occurred please try again") {
                    var toast = _this.toastCtrl.create({
                        message: 'somthing went wrong',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            });
        }
    };
    ChangePass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changePass',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/changePass/changePass.html"*/'\n<ion-header>\n        <ion-navbar color="primary">\n          <ion-title>\n            <span ion-text>ChangePassword</span>\n            <i class="ion-ios-close" (click)="closePopup()" ></i>\n          </ion-title>\n        </ion-navbar>\n</ion-header>\n\n      <ion-content padding class="trips detail-bg">\n          \n            <div class="login-content">\n\n                    <!-- Logo -->\n                    <!-- <div padding-horizontal text-center class="animated fadeInDown">\n                      <div class="logo"></div>\n                      <h2 ion-text class="text-primary">\n                        <strong>Ionic 3</strong> Start Theme\n                      </h2>\n                    </div> -->\n                \n                    <!-- Login form -->\n                    <form class="list-form">\n                      <ion-item>\n                        <ion-label floating>\n                          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n                          Paasword\n                        </ion-label>\n                        <ion-input type="password" name="password" [(ngModel)]="data.password" ></ion-input>\n                      </ion-item>\n                \n                      <ion-item>\n                        <ion-label floating>\n                          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n                          Confirm Password\n                        </ion-label>\n                        <ion-input type="password" name="confirm_password"[(ngModel)]="data.confirm_password"  ></ion-input>\n                      </ion-item>\n                    </form>\n                \n                    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n                \n                    <div>\n                      <button ion-button icon-start block color="dark" tappable (click)="changePass(data)">\n                        <ion-icon name="log-in"></ion-icon>\n                        Log in\n                      </button>\n                    </div>\n            </div>\n                \n       \n      </ion-content>\n      '/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/changePass/changePass.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ChangePass);
    return ChangePass;
}());

//# sourceMappingURL=changePass.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {HomePage} from "../home/home";

var TripsPage = (function () {
    function TripsPage(navParams, navCntroller, modalController, alertController, shared) {
        var _this = this;
        this.navParams = navParams;
        this.navCntroller = navCntroller;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shared = shared;
        this.cartValue = 1;
        this.isCart = false;
        this.isStock = true;
        this.loading = true;
        this.increment = function (val) {
            _this.cartValue = _this.cartValue + val;
            sessionStorage.setItem('cartValue', JSON.stringify(_this.cartValue));
        };
        this.addToCart = function (product, i) {
            debugger;
            console.log('product', product, i);
            var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* Cartpage */], {
                Products: product,
                Index: i
            });
            modal.present();
        };
        this.shared.show();
        this.product = this.navParams.get('Products');
        if (this.product) {
            this.shared.hide();
        }
        this.descriptionVal = this.product.description.replace(/<br\s*\/?>/mg, "\n");
        for (var i = 0; i < this.product.stocks.length; i++) {
            if (this.product.stocks[i] == "" || this.product.stocks[i] == 0 || this.product.stocks == null) {
                this.isStock = false;
                this.buttonVal = "Out of stock";
                console.log('Outstock', this.product.stocks[i]);
            }
            else {
                this.isStock = true;
                this.buttonVal = "Add to cart";
                console.log('Instock', this.product.stocks[i]);
                console.log("fjsdokfhsdjklfhsjk", this.product);
            }
        }
        this.onLoad();
        console.log(this.product, '=====================>>');
    }
    // console.log('productofcart==>',product,i)
    //this.isCart = true;
    TripsPage.prototype.onLoad = function () {
        this.loading = false;
    };
    TripsPage.prototype.goBAck = function () {
        this.navCntroller.pop();
    };
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        //this.nav.push(TripDetailPage, {id: id});
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/trips/trips.html"*/'\n \n<ion-content class="demo">\n \n  <ion-icon (click)="goBAck()" name="md-arrow-round-back"></ion-icon>\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let img of this.product.product_image;let i = index"> \n      \n      <img [src]="img" tappable style="height: 300px !important"(load)="onLoad()">\n   \n  \n      <div>\n        <ion-grid>\n          <ion-row>\n            <ion-col size="4">\n                <p class="p-relative d-ib"><b>DP:</b>{{product.dealer_price}}</p>\n            </ion-col>\n            <ion-col size="4">\n              <button ion-button class="d-ib item-button" *ngIf="!isStock">{{buttonVal}}</button>\n              <button ion-button class="d-ib item-button" (click)="addToCart(product,i)" *ngIf="isStock">{{buttonVal}}</button>\n              <!-- <div *ngIf="isCart"><span class="qty-text">Quantity </span>\n                <p class="qty-block"> <button ion-button (click)="increment(1)" class="d-ib item-button">+</button>\n                  {{cartValue}}<button ion-button class="d-ib item-button" (click)="increment(-1)">-</button>\n                </p>\n              </div> -->\n            </ion-col>\n            <ion-col size="4">\n              <p class="d-ib" item-right><b>MSP:</b>{{product.reseller_price}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n          <ion-item style="overflow-y: auto; display: block; max-height: 180px;">\n              <pre>{{descriptionVal}}</pre>\n            </ion-item>\n      </div>\n     \n        <!-- <ion-row>\n            <ion-item >\n            <p><b>DP:</b>{{this.product.dealer_price}}</p>\n            <p item-right><b>MSP:</b>{{this.product.reseller_price}}</p> \n          </ion-item>\n        </ion-row> -->\n   \n      <!-- <pre text-wrap>{{product[i].description}}</pre>  -->\n      <!-- <pre class="prod-desc-modal">{{descriptionVal}}</pre> -->\n            <!-- <pre [innerHTML]="this.product.description"></pre>  -->\n      \n      \n   \n    </ion-slide>\n  \n\n    <!-- <ion-slide *ngFor="let prod of product">\n        <img [src]="prod.product_image" tappable (load)="onLoad()">\n        <div >\n            <ion-item>\n                <p><b>DP:</b>{{prod.dealer_price}}</p>\n                 <p item-right><b>MSP:</b>{{prod.reseller_price}}</p>\n            </ion-item> \n            <ion-item>\n                <pre>{{descriptionVal}}</pre>\n              </ion-item>\n        </div>\n      </ion-slide> -->\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/trips/trips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_sharedService__["a" /* SharedService */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cartpage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharedService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cartpage = (function () {
    function Cartpage(authservice, toastCtrl, navParams, SharedService, nav) {
        var _this = this;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.SharedService = SharedService;
        this.nav = nav;
        this.cartValue = 1;
        this.isCart = false;
        this.increment = function (val) {
            _this.cartValue = _this.cartValue + val;
            console.log("hello get sdsfsd", _this.Product);
            _this.productPrice = _this.Product.dealer_price * _this.cartValue;
            console.log('productcartvalue', _this.productPrice);
            var stock = _this.Product.stocks[_this.ProductIndex];
            if (_this.cartValue > stock) {
                _this.cartValue = stock;
                _this.productPrice = _this.Product.dealer_price * _this.cartValue;
                //console.log('productcartvalue',this.productPrice)
                _this.SharedService.create('Max stock limit reached', false, 2000);
            }
            else if (_this.cartValue < 1) {
                _this.cartValue = 1;
                _this.productPrice = _this.Product.dealer_price * _this.cartValue;
                //console.log('productcartvalue',this.productPrice)
                _this.SharedService.create('Quantity can not be less than 1', false, 2000);
                _this.SharedService.create('Max stock limit reached', false, 2000);
            }
        };
        debugger;
        this.Product = this.navParams.get('Products');
        this.ProductIndex = this.navParams.get('Index');
        this.productPrice = this.Product.dealer_price;
        console.log("heloo index data find ", this.ProductIndex);
    }
    Cartpage.prototype.ngOnInit = function () {
    };
    Cartpage.prototype.closeModal = function () {
        this.nav.pop();
    };
    Cartpage.prototype.addToCart = function () {
        var obj = {
            product_code: this.Product.product_code,
            dealer_price: this.productPrice,
            quantity: this.cartValue,
            stock: this.Product.stocks[this.ProductIndex],
            product_image: this.Product.product_image[this.ProductIndex],
            product_image_id: this.Product.product_image_id[this.ProductIndex]
        };
        this.SharedService.cartItems(obj);
        this.nav.pop();
    };
    Cartpage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/cart/cart.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        <span ion-text>Cart page</span>\n\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n \n  <ion-content padding class="trips detail-bg">\n    <div><span class="qty-text">Quantity </span>\n        <span class="qty-block"> \n          <button ion-button (click)="increment(1)" class="d-ib item-button">+</button>\n          {{cartValue}}\n          <button style="margin-left: 2px;" ion-button class="d-ib item-button" (click)="increment(-1)">-</button>\n        </span>\n      </div>\n      <div style="margin-top:10px">\n          <button style="width: 177px !important;" ion-button class="d-ib item-button" (click)="addToCart()">Add to Cart</button>\n      </div>\n   \n  </ion-content>\n   -->\n\n   <div class="custom-cart-modal">\n    <ion-header style="height:48px !important;">\n  \n      <ion-navbar>\n        <ion-title>cart</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon item-right name="ios-close-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n      </ion-navbar>\n  \n    </ion-header>\n    <!-- -->\n  \n    <ion-content padding>\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col> -->\n            <div><span class="qty-text">Quantity </span>\n              <span class="qty-block"> \n                <button ion-button (click)="increment(-1)" class="d-ib item-button">-</button>\n                {{cartValue}}\n                <button style="margin-left: 2px;" ion-button class="d-ib item-button" (click)="increment(1)">+</button>\n              </span>\n            </div>\n            <div style="margin-top:10px">\n                <button style="width: 177px !important;" ion-button class="d-ib item-button" (click)="addToCart()">Add to Cart</button>\n            </div>\n          <!-- </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    </ion-content>\n  </div>'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_sharedService__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Cartpage);
    return Cartpage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sharedService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__check_out_check_out__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CardDetailPage = (function () {
    function CardDetailPage(navCtrl, SharedService, navParams, location, storage, toastCtrl, authservice, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SharedService = SharedService;
        this.navParams = navParams;
        this.location = location;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.authservice = authservice;
        this.modalController = modalController;
        this.productData = [];
        this.cartValue = 1;
        this.isCart = false;
        this.sum = 0;
        this.tempArray = [];
        this.databy = [];
        this.increment = function (val, ind) {
            // console.log("sjdfkl;sjdfl;",val,ind)
            // console.log("hello get sdsfsd",this.productData)
            _this.singleprice = _this.tempArray[ind].dealer_price / _this.tempArray[ind].quantity;
            // console.log("heloooo price singlwethis.singleprice",this.singleprice)
            var stock = _this.productData[ind].stock;
            // console.log('stock',stock);
            if (val < 0) {
                // console.log("this.tempArray[ind].quantity if condiotn",this.tempArray[ind].quantity)
                _this.cartValue = Number(_this.tempArray[ind].quantity) + Number(val);
            }
            else {
                _this.cartValue = _this.cartValue + val;
            }
            //this.cartValue= this.cartValue + val; 
            // console.log("jhhjkhjkh",this.cartValue)
            _this.tempArray[ind].quantity = _this.cartValue;
            _this.tempArray[ind].dealer_price = _this.singleprice * _this.cartValue;
            console.log("helll array data1", _this.tempArray);
            if (_this.tempArray[ind].quantity > stock) {
                _this.tempArray[ind].quantity = stock;
                _this.tempArray[ind].dealer_price = _this.singleprice * stock;
                // console.log(" this.quantity hgfhfgh", this.quantity )
                _this.SharedService.create('Max stock limit reached', false, 2000);
            }
            else if (_this.tempArray[ind].quantity < 1) {
                _this.tempArray[ind].quantity = 1;
                _this.tempArray[ind].dealer_price = _this.singleprice * 1;
                _this.SharedService.create('Quantity can not be less than 1', false, 2000);
            }
            _this.storage.set('cartProducts', _this.tempArray);
            _this.sumfunction();
        };
        this.storagedatafinction();
    }
    CardDetailPage.prototype.storagedatafinction = function () {
        var _this = this;
        this.storage.get('cartProducts').then(function (cart) {
            console.log('cartproduct', cart);
            _this.productData = cart;
            console.log('this.productData', _this.productData);
            _this.tempArray = _this.productData;
            _this.databy = _this.productData;
            // this.storage.remove('cartProducts').then(() => {
            //   console.log("itemsffffffffffffffffff",)
            //   });
        });
        setTimeout(function () {
            console.log('this.productData outer', _this.tempArray);
            _this.sumfunction();
        }, 1000);
    };
    CardDetailPage.prototype.sumfunction = function () {
        var _this = this;
        this.sum = 0;
        if (this.tempArray != null) {
            // console.log("temparray for sum function",this.tempArray)
            this.tempArray.forEach(function (item) {
                //console.log("itemmmmm",item.dealer_price)
                _this.sum = Number(_this.sum) + Number(item.dealer_price);
                //console.log("summmmmmmmmmmmm",this.sum)
            });
            //console.log("summmmmmmmmmmmm",this.sum)
        }
    };
    CardDetailPage.prototype.goBAck = function () {
        location.reload();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CardDetailPage.prototype.deleteCart = function (ind) {
        debugger;
        this.tempArray.splice(ind, 1);
        // console.log("itemsffffffffffffffffff",this.tempArray)
        this.storage.set('cartProducts', this.tempArray);
        this.SharedService.create('your product delete successfully', false, 2000);
        this.sumfunction();
    };
    CardDetailPage.prototype.cartProcess = function (sum) {
        var _this = this;
        debugger;
        console.log("summmmmmmmmmmm", sum);
        if (sum == 0) {
            this.SharedService.create('Please Add Any Item', false, 2000);
            return false;
        }
        this.uname = localStorage.getItem('user');
        if (this.uname) {
            this.customerName = (JSON.parse(this.uname));
        }
        var id;
        id = this.customerName["id"];
        //console.log("hello get data",id)
        this.authservice.walletData(id).subscribe(function (data) {
            //console.log("data",data);
            if (JSON.parse(data._body).amount) {
                //console.log(" wallet dat find",(JSON.parse(data._body).amount));             
                _this.amount = (JSON.parse(data._body).amount);
                //console.log(" wallet dat find card detail",this.amount)
            }
            if (sum > _this.amount) {
                _this.SharedService.create('your wallet balance less then proceed balance', false, 2000);
            }
            else {
                var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__check_out_check_out__["a" /* checkOutPage */], {
                    sum: sum,
                    amount: _this.amount,
                });
                modal.present();
            }
        });
    };
    CardDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-detail',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/card-detail/card-detail.html"*/'\n<ion-header>\n\n  <ion-navbar  color="primary">\n      <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" class="cardSizeArrow" (click)="goBAck()"></ion-icon>\n\n      <span ion-text class="cardSizeText">cart</span>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n   <form class="list-form">\n  <ion-card class="card-product animated flipInX" *ngFor="let databy of tempArray ;let ind=index">\n     \n      <ion-card-content class="pd-0">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img [src]=databy.product_image alt="img">\n       \n          </ion-thumbnail>\n  \n          <ion-row>\n            <ion-col col-6>{{databy.product_code}}</ion-col>\n           \n          </ion-row>\n          \n          <ion-row align-items-center>\n            <ion-col col-5></ion-col>\n            <ion-col col-6>\n                <div >\n                  <span class="qty-block"> \n                      <button style="margin-left: 2px;border-radius: 50%; " ion-button class="d-ib item-button" (click)="increment(-1,ind)">-</button>\n                     {{databy.quantity}}\n                      <button  style="border-radius: 50%;" ion-button (click)="increment(1,ind)" class="d-ib item-button">+</button>\n                   \n                   \n                  </span>\n                  <span style="position: relative;top: 3px;left: 12px;padding: 12px; "><ion-icon ios="ios-trash" md="md-trash" (click)="deleteCart(ind)"></ion-icon></span>\n                </div>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-6>\n              <strong>Rs.{{databy.dealer_price}}</strong>\n            </ion-col>\n            <ion-col col-6>\n               \n            </ion-col>\n          </ion-row>\n        </ion-item>\n       \n      </ion-card-content>\n  \n    </ion-card>\n  \n  </form>\n\n \n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n    \n          <div class="processButton">\n              <button ion-button class="btnclass" color="dark" tappable (click)="cartProcess(sum)" >\n                \n                proceed&nbsp;&nbsp;<span>Rs.{{sum}}</span>\n              </button>\n        \n           </div>\n    \n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/card-detail/card-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_sharedService__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CardDetailPage);
    return CardDetailPage;
}());

//# sourceMappingURL=card-detail.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_activity_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(nav, authservice, toastCtrl) {
        this.nav = nav;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.user = {
            username: '',
            state: '',
            mobile: '',
            password: '',
            userType: ''
        };
    }
    // register and go to home page
    RegisterPage.prototype.register = function (user) {
        var _this = this;
        console.log("get data define", user);
        if (user.username == '' || user.state == '' || user.mobile == '' || user.password == '' || user.userType == '') {
            var toast = this.toastCtrl.create({
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
        if (user.mobile.length < 10) {
            debugger;
            var toast = this.toastCtrl.create({
                message: 'Mobile number should be 10 digit',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            return false;
        }
        this.authservice.register(user).subscribe(function (data) {
            //console.log("data find1",data._body);
            //console.log((JSON.parse(data._body).message),'asdfsdgfsdgfsdf');
            // (JSON.parse(data._body).message)
            // console.log("data find",data._body['message'])
            // console.log('data find2',data._body.message)
            if ((JSON.parse(data._body).message) == "User added successfully") {
                var toast = _this.toastCtrl.create({
                    message: 'User added successfully',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else if ((JSON.parse(data._body).message) == "Mobile No. already exist.") {
                var toast = _this.toastCtrl.create({
                    message: 'Mobile No. already exist',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
            return false;
        });
        // this.nav.setRoot(LoginPage);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center>\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Zaira Mart</strong> \n      </h2>\n      <h3>Register here...</h3>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n        <ion-list radio-group [(ngModel)]="user.userType" name="userType">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n            <ion-item >  \n                <ion-label>Reseller</ion-label>\n            <ion-radio value="reseller"></ion-radio>\n            </ion-item>\n            </ion-col>\n            <ion-col>\n            <ion-item >  \n                <ion-label>Dealer</ion-label>\n            <ion-radio value="dealer"></ion-radio>\n            </ion-item>\n          </ion-col>\n           \n          </ion-row>\n        </ion-grid>\n      </ion-list>\n        \n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Enter Name\n        </ion-label>\n        <ion-input type="text" name="username" [(ngModel)]="user.username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Enter State\n        </ion-label>\n        <ion-input type="text" name="state" [(ngModel)]="user.state"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="phone-portrait" item-start class="text-primary"></ion-icon>\n          Enter mobile\n        </ion-label>\n        <ion-input type="number" name="mobile" [(ngModel)]="user.mobile"></ion-input>\n      </ion-item>\n    \n    \n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n        Enter password\n      </ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <div margin-top>\n        <button ion-button block color="dark" tappable (click)="register(user)">\n          Register\n        </button>\n  \n    </div>\n  \n  </form>\n\n    <!-- <div margin-top>\n      <button ion-button block color="dark" tappable (click)="register(user)">\n        Register\n      </button> -->\n\n      <!-- <p text-center ion-text color="secondary">Or Sign Up with:</p> -->\n\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    <!-- </div> -->\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(266);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changePass_changePass__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_trip_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_weather__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_trip_checkout_trip__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_check_out_check_out__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_card_detail_card_detail__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trips_trips__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_order_history_order_history__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_sharedService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























//import { SocialSharing } from '@ionic-native/social-sharing';
//import { SocialSharingOriginal } from '@ionic-native/social-sharing';
// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_order_history_order_history__["a" /* OrderHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_check_out_check_out__["a" /* checkOutPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_card_detail_card_detail__["a" /* CardDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_changePass_changePass__["a" /* ChangePass */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* Cartpage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionic3_start_theme',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_changePass_changePass__["a" /* ChangePass */],
                __WEBPACK_IMPORTED_MODULE_24__pages_order_history_order_history__["a" /* OrderHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_check_out_check_out__["a" /* checkOutPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_card_detail_card_detail__["a" /* CardDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cart_cart__["a" /* Cartpage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                // SocialSharing,
                //SocialSharingOriginal,
                __WEBPACK_IMPORTED_MODULE_25__services_config__["a" /* config */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_10__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_11__services_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_12__services_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_27__services_sharedService__["a" /* SharedService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                ,
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = (function () {
    function ActivityService(http, config) {
        this.http = http;
        this.config = config;
        // this.activities = ACTIVITIES;
    }
    ActivityService.prototype.register = function (user) {
        debugger;
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            // 'Access-Control-Allow-Origin': '*',
            //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            //   "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Content-Type": "{ 'Content-Type': 'application/json' }"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: heads });
        return this.http.post(this.config.URL + "?apicall=userRegister", user, options);
    };
    ActivityService.prototype.products = function () {
        return this.http.get(this.config.URL + '?apicall=getProducts');
    };
    ActivityService.prototype.changPass = function (user) {
        // console.log("dataaaaaaaaaaaaaaaaa",user)
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: heads });
        return this.http.post(this.config.URL + "?apicall=changepassword", user, options);
    };
    ActivityService.prototype.productsData = function () {
        return this.http.get(this.config.URL + '?apicall=getProducts');
    };
    ActivityService.prototype.login = function (user) {
        //console.log("dataaaaaaaaaaaaaaaaa",user)
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "{ 'Content-Type': 'application/json' }"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: heads });
        return this.http.post(this.config.URL + "?apicall=userLogin", user, options);
    };
    ActivityService.prototype.walletData = function (id) {
        console.log("dataaaaaaaaaaaaaaaaa", id);
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "{ 'Content-Type': 'application/json' }"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: heads });
        console.log("fjgdfkg", this.config.URL + "?apicall=userWallet" + "&id=" + id);
        return this.http.get(this.config.URL + "?apicall=userWallet" + "&id=" + id);
    };
    ActivityService.prototype.whats = function (text) {
        return this.http.post('http://whatsapp://send?text=', text);
    };
    ActivityService.prototype.historyData = function (user) {
        // console.log("this.user for hsitory",user)
        return this.http.get(this.config.URL + '?apicall=getOrderHistory&user_id=' + 49);
        //return this.http.get(this.config.URL + '?apicall=getOrderHistory&user_id='+user)
    };
    ActivityService.prototype.updateAdd = function (orderid, address) {
        // console.log("this.user for hsitory",orderid,address);
        var user = {
            order_id: orderid,
            address: address
        };
        //console.log("this.user user",user);
        var heads = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/x-www-form-urlencoded"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: heads });
        //console.log("this.user for hsitory",this.config.URL + '?apicall=updateAddress&order_id='+orderid+'&address='+address);
        return this.http.post(this.config.URL + '?apicall=updateAddress', user, options);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__services_config__["a" /* config */]])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { api } from './config';


var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Private
    WeatherProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WeatherProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_history_order_history__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changePass_changePass__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var MyApp = (function () {
    function MyApp(storage, platform, 
        //public app: App,
        statusBar, splashScreen, keyboard, changCtrl, toastCtrl, authservice, modalController) {
        var _this = this;
        this.storage = storage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.changCtrl = changCtrl;
        this.toastCtrl = toastCtrl;
        this.authservice = authservice;
        this.modalController = modalController;
        this.customerName = {};
        this.username = {};
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.changPass = function () { return __awaiter(_this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__pages_changePass_changePass__["a" /* ChangePass */], {})];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Order History', component: __WEBPACK_IMPORTED_MODULE_7__pages_order_history_order_history__["a" /* OrderHistoryPage */], icon: 'photos' },
            { title: 'Wallet Balance', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'build' },
            { title: 'Change Password', component: '', icon: 'build' },
            { title: 'Log out', component: '', icon: 'build' }
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
    MyApp.prototype.ngOnInit = function () {
        //  if(localStorage.getItem('user')){
        //     this.nav.setRoot(HomePage);
        //   }
        //   this.username=localStorage.getItem('user')
        //   console.log("hello i m hear",this.username['username']);
        //  console.log("hello i m hear 222", (JSON.parse(this.username).username));
        // this.customerName=(JSON.parse(this.username).username);
        this.menuName();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            //this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.menuName = function () {
        var _this = this;
        this.uname = localStorage.getItem('user');
        if (this.uname) {
            //  console.log("hello i m hear 222", (JSON.parse(this.uname)));
            this.customerName = (JSON.parse(this.uname));
            // console.log("hello i m h",this.customerName.mobile);
            // console.log("hello i m hear",this.customerName.username);
        }
        else {
            this.customerName["username"] = '';
        }
        var id;
        id = this.customerName["id"];
        //for wallet data 
        console.log("hello get data", id);
        this.authservice.walletData(id).subscribe(function (data) {
            console.log(" wallet dat find", (JSON.parse(data._body).amount));
            //               console.log("password change data ",(JSON.parse(data._body).message));
            _this.amount = (JSON.parse(data._body).amount);
            console.log(" wallet dat find4345645", _this.amount);
        });
    };
    MyApp.prototype.openPage = function (page) {
        debugger;
        console.log("paGEEEEEEEEE", page.title);
        if (page.title == 'Order History') {
            this.nav.setRoot(page.component);
        }
        if (page.title == 'Change Password') {
            this.changPass();
        }
        else if (page.title == 'Log out') {
            this.logout();
        }
        else if (page.title !== 'Change Password') {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.storage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.itemSelected = function () {
        console.log("this is click");
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <!-- <ion-col col-4>\n               <div class="user-avatar">\n                <img src="../assets/img/avatar.jpeg">\n              </div>\n          </ion-col>  -->\n          <ion-col padding-top col-8>\n            <h3 ion-text class="no-margin bold text-white">\n             Welcome \n            </h3>\n             <span ion-text color="light">{{customerName?.username}}</span>\n            <!-- <span ion-text color="light">name</span>  -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <!-- <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button> -->\n          </ion-col>\n          <ion-col no-padding class="column">\n            <!-- <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button> -->\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems " (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span><span *ngIf="menuItem.title==\'Wallet Balance\'" class="walletdata" >Rs.{{this.amount ? this.amount : 0}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/settings/settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        //this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    CheckoutTripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout-trip',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/checkout-trip/checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/checkout-trip/checkout-trip.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_sharedService__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CheckoutTripPage);
    return CheckoutTripPage;
}());

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SharedService = (function () {
    function SharedService(loadingController, storage, toastCtrl, http, config) {
        var _this = this;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.config = config;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.data = this.dataSource.asObservable();
        this.flag = false;
        this.cartProduct = [];
        this.cartTotalItems = function () {
            //this.events.publish('cartChange');
            var total = 0;
            for (var _i = 0, _a = this.cartProduct; _i < _a.length; _i++) {
                var value = _a[_i];
                // total += value.actual_quantity;
                total += parseInt(value.quantity);
            }
            this.cartquantity = total;
            console.log("updated", this.cartquantity);
            return total;
        };
        storage.get('cartProducts').then(function (cart) {
            if (cart != null)
                _this.cartProduct = cart;
            console.log('cartproduct', cart);
            _this.cartTotalItems();
        });
    }
    SharedService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'top',
            cssClass: 'dark-trans',
            showCloseButton: true,
            closeButtonText: 'OK',
        });
        this.toast.present();
    };
    SharedService.prototype.show = function () {
        this.loading = this.loadingController.create({
            duration: 10000
        });
        this.loading.present();
    };
    SharedService.prototype.hide = function () {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    };
    SharedService.prototype.autoHide = function (time) {
        this.loading = this.loadingController.create({
            duration: time
        });
        this.loading.present();
    };
    SharedService.prototype.cartItems = function (product) {
        debugger;
        console.log('product from cart', product);
        if (this.cartProduct.length > 0) {
            for (var i = 0; i < this.cartProduct.length; i++) {
                if (product.product_image_id == this.cartProduct[i].product_image_id) {
                    this.cartProduct[i].quantity = product.quantity;
                    this.cartProduct[i].dealer_price = product.dealer_price;
                    break;
                }
                else {
                    this.flag = true;
                }
            }
            if (this.flag == true) {
                this.cartProduct.push(product);
            }
        }
        else {
            this.cartProduct.push(product);
        }
        //this.dataSource.next(this.cartProduct)
        this.storage.set('cartProducts', this.cartProduct);
        this.cartTotalItems();
        console.log(this.cartProduct);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__services_config__["a" /* config */]])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=sharedService.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trips_trips__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_detail_card_detail__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sharedService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomePage = (function () {
    function HomePage(modalController, 
        //private storage: Storage,
        nav, popoverCtrl, authservice, toastCtrl, shared) {
        //console.log(this.shared.cartquantity,'cartQuantity');
        var _this = this;
        this.modalController = modalController;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.shared = shared;
        this.image = [];
        this.IsVisible = false;
        this.isShow = false;
        this.showInd = null;
        this.showSliderimages = function (product) { return __awaiter(_this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__trips_trips__["a" /* TripsPage */], {
                            Products: product
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        }); };
        this.productDesc = [];
    }
    HomePage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllProduct();
    };
    HomePage.prototype.error = function () {
        console.log('error');
    };
    HomePage.prototype.whatsappShare = function (i) {
        this.showInd = i;
        //console.log(i);
        this.isShow = this.isShow ? false : true;
        // if(this.isShow==true)
        this.appMenuItems = [
            { title: 'Share in Watsapp', component: '', },
            { title: 'Share in Watsapp2', component: '', },
        ];
    };
    HomePage.prototype.shareWhatsapp = function (menuItem, i) {
        console.log("menu iterm", menuItem, i);
        var image = "http://zairamart.com/apiadmin/images/zm1138_1.jpg";
        console.log("msg", image);
        // this.socialSharing.shareViaWhatsApp(image, null, null);
        // this.socialSharing.shareViaWhatsApp(null, image, null).then((res)=>{
        //   console.log("ressssssss",res)
        // }).catch((err)=>{
        //   console.log("errrrrrrrr",err)
        // })
    };
    HomePage.prototype.compilemsg = function (index) {
        var image = this.Products[index].product_image;
        // + "-" + this.quotes[index].title ;
        return image.concat(" \n Sent from my Awesome App !");
    };
    HomePage.prototype.openCart = function () {
        // this.cartdata = this.navparams.get('cartProduct');
        console.log('cartdata---', this.cartdata);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__card_detail_card_detail__["a" /* CardDetailPage */], {});
    };
    HomePage.prototype.openPage = function (page) {
        //console.log("dfhsjkf",page)
    };
    HomePage.prototype.getAllProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.shared.show();
                this.authservice.products().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var productbody, index;
                    return __generator(this, function (_a) {
                        this.shared.hide();
                        productbody = [];
                        productbody = JSON.parse(data._body).product;
                        this.Products = productbody;
                        //console.log('products-->',this.Products);
                        this.tempPro = productbody;
                        for (index = 0; index < this.Products.length; index++) {
                            //   this.img = await this.Products[index].product_image[0]
                            //  this.image.push(this.img)
                            this.Products[index].description = this.Products[index].description.replace(/<br\s*\/?>/mg, "\n");
                            //   this.descriptionVal = await this.str.replace(/<br\s*\/?>/mg,"\n");
                            // this.productDesc.push(this.descriptionVal);
                            //console.log('this.description',this.descriptionVal);
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // go to result page
    HomePage.prototype.doSearch = function () {
        //this.nav.push(TripsPage);
    };
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
    HomePage.prototype.searchEnter = function (event) {
        var _this = this;
        var value = event.target.value;
        console.log("get value data", value);
        this.IsVisible = false;
        if (value == undefined) {
            this.getAllProduct();
            return;
        }
        if (value == '') {
            this.getAllProduct();
        }
        if (value.length >= 1) {
            //console.log("this.product_code this.product_code",this.product_code)
            this.authservice.products().subscribe(function (data) {
                //console.log("jsmindata",data);
                var productbody = [];
                productbody = JSON.parse(data._body).product;
                _this.kasip = productbody;
                //console.log("data value",this.kasip)
                _this.Products = _this.tempPro.filter(function (f) {
                    if (f && f.product_code && f.product_code.indexOf(value) > -1) {
                        return f;
                    }
                });
                //console.log("getdata ",    this.Products,this.Products.length);
                if (_this.Products.length == 0) {
                    _this.IsVisible = true;
                }
            });
        }
        else {
            this.Products = [];
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/home/home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>Zaira Mart</strong>\n      <!-- <ion-icon class="cart-icon" name="cart" (click)="addCart()"></ion-icon> -->\n      <button ion-button icon-only class="cart-button" (click)="openCart()" class="openCart" >\n        <ion-badge color="secondary" >{{shared.cartquantity}}</ion-badge><ion-icon name="cart"><ion-badge color="secondary" ></ion-badge></ion-icon>\n      </button>\n    </ion-title>\n\n    <!-- <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<!-- (ionClear)="searchEnter($event)" -->\n<ion-content padding class="animated fadeIn common-bg">\n    <ion-searchbar placeholder = "Search Product by name and code" (keyup)="searchEnter($event)"  (ionClear)="searchEnter($event)" ></ion-searchbar>\n    <ion-card>\n        <p *ngIf="IsVisible" class="nofound">No data found</p>\n        <ion-item *ngFor ="let Product of Products ; let ind=index">\n            \n            {{Product.product_code}}\n            <ion-icon ios="ios-share-alt" md="md-share-alt" class="iconshare" (click)="whatsappShare(ind)" style="position:relative" ></ion-icon>\n            <ion-list class="user-list" *ngIf="isShow && showInd==ind" style="position:absolute;right:0;top: 38px;">\n              <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="shareWhatsapp(menuItem,ind)">\n                <span ion-text color="primary">{{menuItem.title}}</span>\n              </button>\n            </ion-list>\n\n\n            <ion-icon ios="ios-copy" md="md-copy" class="iconshare"></ion-icon>\n          <!-- <ion-slides pager="true"> -->\n              <!-- <ion-slide *ngFor="let pro of Product.product_image"> -->  \n                <div  (click)="showSliderimages(Product)">\n                <img [src]=Product.product_image[0]  height=\'60\' width=\'120\'/>\n                <!-- <p *ngIf= "IsVisible">no data found</p> -->\n                <ion-row>\n                  <ion-item>\n                      <p><b>DP:</b>{{Product.dealer_price}}</p>\n                       <p item-right><b>MSP:</b>{{Product.reseller_price}}</p>\n                     \n                  </ion-item> \n                  <ion-item>\n                    <pre class="prod-desc">{{Product.description}}</pre>\n                  </ion-item>\n                    \n                 \n              </ion-row>\n              \n              <!-- </ion-slide> -->\n            </div>\n          <!-- </ion-slides> -->\n          \n        </ion-item>\n    </ion-card>\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n\n\n  '/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__trips_trips__["a" /* TripsPage */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__services_sharedService__["a" /* SharedService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_activity_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(nav, authservice, forgotCtrl, menu, toastCtrl) {
        this.nav = nav;
        this.authservice = authservice;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.user = {
            mobile: '',
            password: '',
        };
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function (user) {
        //console.log("userrrrrrrrrrrrr",user)
        var _this = this;
        if (user.mobile == '' || user.password == '') {
            var toast = this.toastCtrl.create({
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
        else {
            this.authservice.login(user).subscribe(function (data) {
                console.log("data find1", data._body);
                // console.log("data kllllllkkl",(JSON.parse(data._body).userinfo));
                if ((JSON.parse(data._body).message) == "Login successfull") {
                    // console.log("data kllllllkkl",(JSON.parse(data._body).userinfo));
                    localStorage.setItem('user', JSON.stringify((JSON.parse(data._body).userinfo)));
                    // localStorage.setItem('(JSON.parse(data._body).userinfo)');
                    location.reload();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else if ((JSON.parse(data._body).message) == "Invalid username or password") {
                    var toast = _this.toastCtrl.create({
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
                else {
                    var toast = _this.toastCtrl.create({
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
            });
        }
        //this.nav.setRoot(HomePage);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Zaira Mart</strong> \n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="phone-portrait" item-start class="text-primary"></ion-icon>\n          Enter mobile number\n        </ion-label>\n        <ion-input type="number" name="mobile" [(ngModel)]="user.mobile"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n  \n      <div>\n          <button ion-button icon-start block color="dark" tappable (click)="login(user)">\n            <ion-icon name="log-in"></ion-icon>\n            Log in\n          </button>\n  \n       </div>\n    </form>\n\n    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n\n    <!-- <div>\n      <button ion-button icon-start block color="dark" tappable (click)="login(user)">\n        <ion-icon name="log-in"></ion-icon>\n        Log in\n      </button>\n\n      <!-- <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    <!-- </div> --> \n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/shipgig/Documents/mean/allzara/zairamart23_05_19thur_latest/zairamart23_05_19thur/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map