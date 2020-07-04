import { HomePageService } from './home-page/home-page.service';
import {  RestaurantPageService } from './restaurant-page/restaurant-page.service';
import { ReceptionistPageService } from './receptionist-page/receptionist-page.service';

export const pageService = [
    HomePageService,
    RestaurantPageService,
    ReceptionistPageService
];

export {
    HomePageService,
    RestaurantPageService,
    ReceptionistPageService
};
