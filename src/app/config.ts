import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Headers } from '@angular/http';

declare var oauthSignature: any;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


@Injectable({
  providedIn: 'root',
})
export class Config {

    url: any;
    apikey: any;
    constructor() {

        this.url = 'https://app.ticketmaster.com/discovery/v2/';
        this.apikey = "tManMUC9rWItcK2ZJif5A4RAxHeg37DU";

    }

}
