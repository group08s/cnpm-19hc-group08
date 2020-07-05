import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from '@environment';


export enum ApiPath {
  GET_ALL_ROOM = '/room/listroom',
  POST_ID_GET_INFO_ROOM= '/serviceCustomer/findroom',
  POST_CUSTOMER_CHECKIN_ROM= '/customer/addcustomer',

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
    const url = environment.rootApiUrl + `${ApiPath.POST_ID_GET_INFO_ROOM}`;
    console.log('show url: ', url);

    return this.http.post(url , {_id: id}, this.httpOptions);
  }

  postCustometCheckin(txt_data: any) {
    const url = environment.rootApiUrl + `${ApiPath.POST_CUSTOMER_CHECKIN_ROM}`;
    console.log('show url: ', url);

    return this.http.post(url , txt_data, this.httpOptions);

  }
}
