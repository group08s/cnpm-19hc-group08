import { Injectable } from '@angular/core';
import { HomeService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private service: HomeService) { }

  getData() {
    return this.service.getDataHome();
  }
}
