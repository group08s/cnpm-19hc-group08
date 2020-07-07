import { Component, OnInit } from '@angular/core';
import { ReceptionistPageService } from '@app/modules/services';
import * as moment from 'moment';

@Component({
  selector: 'app-room-diagram',
  templateUrl: './room-diagram.component.html',
  styleUrls: ['./room-diagram.component.css']
})
export class RoomDiagramComponent implements OnInit {
  listAllRoom: any;
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

  phongtrong = 0;
  phongban = 0;
  phongdangsua = 0;
  phongconguoidat = 0;

  constructor(
    public receptionistPageService: ReceptionistPageService

  ) { }

  ngOnInit() {
    this.receptionistPageService.getAllRoom().subscribe((res: any) => {
      if (res) {
        this.listAllRoom = (res);
        // console.log('showlistRoom: ', this.listAllRoom);
        this.phongtrong = this.getTypeRoom(this.listAllRoom, 1);
        this.phongconguoidat = this.getTypeRoom(this.listAllRoom, 2);
        this.phongdangsua = this.getTypeRoom(this.listAllRoom, 3);
        this.phongban = this.getTypeRoom(this.listAllRoom, 4);


      }
    });
  }
  getTypeRoom(array: any, type: any) {
    const arrayType = array.filter(e => e.Status === type);
      return arrayType.length;
  }
  onClickMe(id) {
    console.log(id);
    this.receptionistPageService.getIdCustomer(id).subscribe((res: any) => {
      if (res) {
        this.inforRoom = (res);
        console.log('showlistRoom: ', res);
        this.name = this.inforRoom.IDCustomer.Name;
        this.id = this.inforRoom.IDCustomer._id;
        this.identtityCard = this.inforRoom.IDCustomer.IdenttityCard;
        this.phone = this.inforRoom.IDCustomer.Phone;
        this.address = this.inforRoom.IDCustomer.Address;
        this.string_arrivalTime = moment.unix(Number(this.inforRoom.BookRoom[0].ArrivalTime)).format('YYYY-MM-DDTHH:mm');
        this.string_leaveTime = moment.unix(Number(this.inforRoom.BookRoom[0].LeaveTime)).format('YYYY-MM-DDTHH:mm');

        this.iD_relationship = this.inforRoom.IDCustomer.Id_relationship;
        this.iD_relationship.forEach(value => value.DateOfBirth = moment.unix(Number(value.DateOfBirth)).format('YYYY-MM-DD'));
        this.iD_service = this.inforRoom.IDService;
        // console.log('showlistRoom: ', this.iD_relationship);
      }
    });
  }

}
