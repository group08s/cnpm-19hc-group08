import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';

export enum ApiPath {
  GET_ALL_DISK = '',

}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(protected http: HttpClient) { }

  getAll() {
    const url = environment.rootApiUrl + `${ApiPath.GET_ALL_DISK}`;
    return this.http.get(url);
  }
}
