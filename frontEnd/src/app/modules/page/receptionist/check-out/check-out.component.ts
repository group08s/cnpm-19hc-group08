import { Component, OnInit } from '@angular/core';
import { ReceptionistPageService } from '@app/modules/services';
import * as moment from 'moment';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  listAllRoom: any;
  selectedRoom: string;
  inforRoom: any;
  name = '';
  id = '';
  phone = '';
  identtityCard = '';
  address = '';
  string_arrivalTime = '';
  string_leaveTime = '';
  iD_relationship = [];
  iD_service = [];

  constructor(
    public receptionistPageService: ReceptionistPageService


  ) { }

  ngOnInit() {
    this.receptionistPageService.getAllRoom().subscribe((res: any) => {
      if (res) {
        this.listAllRoom = res.filter(element => element.Status === 2);
        this.selectedRoom = this.listAllRoom[0].RoomName;
        this.onClickMe(this.selectedRoom);
        // console.log('showlistRoom: ', this.listAllRoom);
      }
    });
  }
  selectChange(event: any) {
    this.selectedRoom = event.target.value;
    this.onClickMe(this.selectedRoom);
    console.log(this.selectedRoom);
  }



  onClickMe(id) {
    console.log(id);
    this.receptionistPageService.getIdCustomer(id).subscribe((res: any) => {
      if (res) {
        console.log('showlistRoom: ', res);
        this.name = res.IDCustomer.Name;
        this.id = res.IDCustomer._id;
        this.identtityCard = res.IDCustomer.IdenttityCard;
        this.phone = res.IDCustomer.Phone;
        this.address = res.IDCustomer.Address;
        this.string_arrivalTime = moment.unix(Number(res.BookRoom[0].ArrivalTime)).format('YYYY-MM-DDTHH:mm');
        this.string_leaveTime = moment.unix(Number(res.BookRoom[0].LeaveTime)).format('YYYY-MM-DDTHH:mm');

        this.iD_relationship = res.IDCustomer.Id_relationship;
        this.iD_relationship.forEach(value => value.DateOfBirth = moment.unix(Number(value.DateOfBirth)).format('YYYY-MM-DD'));
        this.iD_service = res.IDService;
        // console.log('showlistRoom: ', this.iD_relationship);
      }
    });
  }
  refresh(): void {
    alert('Thanh Toán Thành Công');
    window.location.reload();
  }
}
