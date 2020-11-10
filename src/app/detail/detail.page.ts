import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController, NavController, ModalController, IonRouterOutlet} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Attraction } from '../data/attraction';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  attractions: any;
  id: any;
  events: any;
  constructor(public api: ApiService, public router: Router, public route: ActivatedRoute, public attr: Attraction, public socialSharing: SocialSharing, public iab: InAppBrowser, ) {}
  ngOnInit() {
      console.log(this);
      this.api.getEvents(this.attr.attraction.id).then(res => {
          this.events = res;
          this.events = this.events['_embedded'].events;
          this.events.forEach(event => {
              var month = new Intl.DateTimeFormat('en-US', {month: "short"}).format(new Date (event.dates.start.dateTime));
              var day = new Date (event.dates.start.dateTime).getDate();
              event.displayDate = {month: month, day: day};
          });
      }, err => {
          console.error(err);
      });
  }
  share() {
      var options = {
          subject: this.attr.attraction.name,
          files: [this.attr.attraction.images[0].url, ''],
          url: this.attr.attraction.url,
      }

      this.socialSharing.shareWithOptions(options);
  }
  redirectToWebPage(url) {
      var options = "location=no,hidden=yes,toolbar=yes,hidespinner=yes";
      var browser = this.iab.create(url, "_self", options);
      browser.show();
  }
}
