import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController, NavController, ModalController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Attraction } from '../data/attraction';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  attractions: any;
  loader: any = true;
  height: any;
  width: any;
  constructor(public api: ApiService, public navCtrl: NavController, public attr: Attraction, public platform: Platform, public deeplinks: Deeplinks) {}
  ngOnInit() {
      console.log(this);
      this.platform.ready().then(() => {
       this.width = this.platform.width();
       this.height =  this.platform.height();
       this.api.getAttractions().then(res => {
           var result: any = res;
           this.attractions = result["_embedded"].attractions;

           this.attractions.forEach(el => {
               el.images.forEach(img => {
                   var ratio = img.ratio.split("_");
                   if ( (img.width == this.width || img.width == this.height) && img.ratio == "16_9" ) {
                       el.image = img;
                   }
               });
               if (el.image == null) {
                   el.image = el.images[0];
               }
           });

           this.loader = false;
           console.log(this.attractions);
       }, err => {
           console.error(err);
           this.loader = false;
       });
     });
  }
  getDetails(attr) {
      this.attr.attraction = attr;
      this.navCtrl.navigateForward("home/detail/");
  }
}
