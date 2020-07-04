import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from '@environment';


export enum ApiPath {
  GET_ALL_ROOM = '/room/listroom',
  POST= '/serviceCustomer/findroom',
}

@Injectable({
  providedIn: 'root'
})

export class ReceptionistService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(protected http: HttpClient) { }

  getAll() {
    const url = environment.rootApiUrl + `${ApiPath.GET_ALL_ROOM}`;
    console.log('show url: ', url);
    return this.http.get(url);
  }
  getCustomer(id: any) {
    const url = environment.rootApiUrl + `${ApiPath.POST}`;
    console.log('show url: ', url);

    return this.http.post(url , {_id:id}, this.httpOptions);
  }
}
