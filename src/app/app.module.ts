import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {ChangePass} from '../pages/changePass/changePass'
import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";
import { HttpModule } from '@angular/http';
import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {checkOutPage} from "../pages/check-out/check-out";
import {CardDetailPage} from "../pages/card-detail/card-detail";
import {TripsPage} from "../pages/trips/trips";
import {OrderHistoryPage} from "../pages/order-history/order-history";
import {config} from '../services/config';
import {Cartpage} from '../pages/cart/cart';
import {SharedService} from "../services/sharedService";
//import { SocialSharing } from '@ionic-native/social-sharing';
 //import { SocialSharingOriginal } from '@ionic-native/social-sharing';
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    OrderHistoryPage,
    NotificationsPage,
    RegisterPage,
    checkOutPage,
    CardDetailPage,
    TripsPage,
    ChangePass,
    Cartpage

  ],
  imports: [
 HttpModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
        
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    ChangePass,
    OrderHistoryPage,
    NotificationsPage,
    RegisterPage,
    checkOutPage,
    CardDetailPage,
    TripsPage,
    Cartpage
  ],
  providers: [
    HttpModule,
   // SocialSharing,
     //SocialSharingOriginal,
    config,
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    SharedService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ,
  ]
})

export class AppModule {
}
