import { Injectable } from '@angular/core';
import { RestaurantService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class RestaurantPageService {
  listCart: any;

  constructor(
    private serviceRestaurant: RestaurantService
  ) { }

  getAllDiks() {
    return this.serviceRestaurant.getAll();
  }

  savePayment(data) {
    // return this.serviceRestaurant.savePayment(data);
  }
}
