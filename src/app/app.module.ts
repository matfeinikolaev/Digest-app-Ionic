import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { HttpClientModule, HttpClient } from '@angular/common/http';
//
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
// // import { KeysPipeModule } from '../app/pipes/pipe.module';
import { Http } from '@angular/http';
// // import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// // import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// //import { Braintree } from '@ionic-native/braintree/ngx';
// import { HomePage } from './home/home.page';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    InAppBrowser,
    HTTP,
    Deeplinks,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
