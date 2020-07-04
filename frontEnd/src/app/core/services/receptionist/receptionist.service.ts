import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';


export enum ApiPath {
  GET_ALL_ROOM = '/room/listroom',

}

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  constructor(protected http: HttpClient) { }

  getAll() {
    const url = environment.rootApiUrl + `${ApiPath.GET_ALL_ROOM}`;
    console.log('show url: ', url);
    return this.http.get(url);
  }
}
