import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchImageServiceService {

  unsplashUrl = 'https://api.unsplash.com/collections/8866962/photos?per_page=99999';

  accessKey = "3RBUvNcVQAoGYToYcy2-Kbaq0fZRx9DxHcX0znNdqmM";

  cardEmitter = new EventEmitter();

  constructor(private http: HttpClient) { }

  getRandomImage() {
    let headers = new HttpHeaders({
      'Authorization' : 'Client-ID ' + this.accessKey
    });



    return this.http.get(this.unsplashUrl, {headers});
  }

}
