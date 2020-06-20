import { Injectable } from '@angular/core';
import { RestaurantService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class RestaurantPageService {

  constructor(
    private serviceRestaurant: RestaurantService
  ) { }

  getAllDiks() {
    return this.serviceRestaurant.getAll();
  }
}
