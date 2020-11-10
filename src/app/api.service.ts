import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from './config';
import { catchError, tap, map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Platform } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  	options: any = {};
	constructor(public platform: Platform, private http: HttpClient, private config: Config, private ionicHttp: HTTP) {
		this.options.headers = headers;
	}
	getAttractions(data = {}){
		const url = this.config.url + "attractions.json" + "?apikey=" + this.config.apikey + "&classificationName=comedy&size=50";

        return new Promise((resolve, reject) => {
            this.http.get(url).pipe(map((res: any) => res)).subscribe(data => {
                resolve(data);
            }, err => {
                reject(err);
            });
        });
	}

    getEvents(id) {
		const url = this.config.url + "events.json" + "?apikey=" + this.config.apikey + "&attractionId=" + id;
        return new Promise((resolve, reject) => {
            this.http.get(url).pipe(map((res: any) => res)).subscribe(data => {
                resolve(data);
            }, err => {
                reject(err);
            });
        });

    }
}
