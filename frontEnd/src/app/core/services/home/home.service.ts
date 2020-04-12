import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(protected http: HttpClient) {
  }

  getDataHome() {
    const url = environment.rootApiUrl;
    return this.http.get(url);
  }

}
