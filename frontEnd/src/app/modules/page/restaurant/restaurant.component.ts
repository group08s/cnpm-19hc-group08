import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RestaurantPageService } from './../../services';
import * as moment from 'moment';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  @ViewChild('firstDialog') firstDialog: TemplateRef<any>;

  listAllDisk: any;
  listDiskFilter: any;
  curChoose = 'all';
  listCart = [];
  selectedRoom: any;
  selectedCustomer = '0';
  sumMoney = 0;
  orderNameCustomer = '';
  orderPhoneCustomer = '';
  sendData = {
    listCart: this.listCart,
    IdBill: '123',
    Name: this.orderNameCustomer,
    Phone: this.orderPhoneCustomer,
    sumMoney: this.sumMoney
  };

  Customers = [
    { id: 0, name: 'Hotel guests' },
    { id: 1, name: 'Visitor' },
  ];

  ListRoom = [
    {
      _idRoom: 123213213213213,
      Room: 123,
      NameCustomer: 'Hồ Quý Phi',
      PhoneCustomer: '0398214234234'
    },
    {
        _idRoom: 566598966566633,
        Room: 546,
        NameCustomer: 'Lê Thị Minh Tâm',
        PhoneCustomer: '0123456789'
    },
    {
      _idRoom: 78556455455856,
      Room: 788,
      NameCustomer: 'Phạm Văn Long',
      PhoneCustomer: '0123456789'
    },
    {
      _idRoom: 4455555555,
      Room: 102,
      NameCustomer: 'Đỗ Trung Kiên',
      PhoneCustomer: '0123456789'
    },
  ];

  constructor(
    public restaurantPageService: RestaurantPageService
  ) { }

  ngOnInit() {
    this.restaurantPageService.getAllDiks().subscribe((res: any) => {
      if (res) {
        this.listAllDisk = res;
        console.log('show list: ', res);
        this.listDiskFilter = this.listAllDisk;
      }
    });

    this.selectedRoom = this.ListRoom[0];
   }

  changeTyleDish(type) {
    switch (type) {
      case 'all':
        this.curChoose = 'all';
        this.listDiskFilter = this.listAllDisk;
        break;
      case 'food':
        this.curChoose = 'food';
        this.listDiskFilter = this.listAllDisk.filter(item => {
          return item.Cate_Dish === 1;
        });
        break;
      case 'drinks':
        this.curChoose = 'drinks';
        this.listDiskFilter = this.listAllDisk.filter(item => {
          return item.Cate_Dish === 2;
        });
        break;
      case 'appetizer':
        this.curChoose = 'appetizer';
        this.listDiskFilter = this.listAllDisk.filter(item => {
          return item.Cate_Dish === 3;
        });
        break;
      case 'dessert':
        this.curChoose = 'dessert';
        this.listDiskFilter = this.listAllDisk.filter(item => {
          return item.Cate_Dish === 4;
        });
        break;
      default:
        this.listDiskFilter = this.listAllDisk;
        break;
    }
  }

  addCart(item) {
    const exitIndex = this.listCart.findIndex(temp => {
      return item._id === temp.item._id;
    });
    if (exitIndex !== -1) {
      this.listCart[exitIndex].number++;
      this.sumMoney += this.listCart[exitIndex].item.Price;
      this.sendData = {
        ...this.sendData,
        listCart: this.listCart,
        sumMoney: this.sumMoney
      };
    } else {
      this.listCart.push({item: item, number : 1});
      this.sumMoney += item.Price;
      this.sendData = {
        ...this.sendData,
        listCart: this.listCart,
        sumMoney: this.sumMoney
      };
    }
  }

  deleteCartItem(item) {
    const exitIndex = this.listCart.findIndex(temp => {
      return item._id === temp.item._id;
    });
    this.sumMoney -= this.listCart[exitIndex].item.Price * this.listCart[exitIndex].number;
    this.listCart.splice(exitIndex, 1);
    this.sendData = {
      ...this.sendData,
      listCart: this.listCart,
      sumMoney: this.sumMoney
    };
  }

  selectChangeCus(event: any) {
    // update the ui
    this.selectedCustomer = event.target.value;
    console.log('show sele: ', this.selectedCustomer  );
  }

  selectChangeRoom(event: any) {
    // update the ui
    const roomNumber = event.target.value;
    this.selectedRoom = this.ListRoom.find(item => {
      return item.Room === Number(roomNumber);
    });
    console.log('show selectroom: ', this.selectedRoom);
  }

  setValueInput(type, event) {
    switch (type) {
      case 'name':
        this.orderNameCustomer = event.target.value;
        this.sendData = {
          ...this.sendData,
          Name: this.orderNameCustomer,
        };
        break;
      case 'phone':
        this.orderPhoneCustomer = event.target.value;
        this.sendData = {
          ...this.sendData,
          Phone: this.orderPhoneCustomer,
        };
    }
  }

  PrintBill() {
    console.log('list: ', this.listCart);
    console.log('this.orderNameCustomer: ', this.orderNameCustomer);
    console.log('this.orderPhoneCustomer: ', this.orderPhoneCustomer);
    if (this.listCart && this.orderNameCustomer && this.orderPhoneCustomer) {


      window.print();
    }
  }

  SavePayment() {

    if (this.listCart.length > 0) {
      const data = {
        txtstaff : '5f003a6540dc4c39e40ed947',
        data : {
          TimeTaken: moment(),
          Amount : 10000000, // thanh toán tất cả các dịch vụ các khách hàng.
          Customer : '5efff33d9de4df094ef9b782',
          Room : 'PH101'
        }
      };

      this.openAlert();
    }
    // this.restaurantPageService.savePayment();
  }

  openAlert() {
    if (window.confirm('Đã lưu')) {
      location.reload();
    }
  }

}
