import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RestaurantPageService } from './../../services';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  listAllDisk: any;


  Customers = [
    { id: 0, name: 'Hotel guests' },
    { id: 1, name: 'Visitor' },
  ];

  Rooms = [
    { id: 0, name: '101' },
    { id: 1, name: '102' },
    { id: 2, name: '402' },
    { id: 3, name: '302' },
    { id: 4, name: '202' },
  ];
  selectedRoom = '';
  selectedCustomer = '';

  constructor(
    public restaurantPageService: RestaurantPageService
  ) { }

  ngOnInit() {
    this.restaurantPageService.getAllDiks().subscribe((res: any) => {
      if (res) {
        this.listAllDisk = res;
        console.log('showlist: ', res);
      }
    });
   }

  selectChangeCus(event: any) {
    // update the ui
    this.selectedCustomer = event.target.value;
  }

  selectChangeRoom(event: any) {
    // update the ui
    this.selectedRoom = event.target.value;
  }
}
