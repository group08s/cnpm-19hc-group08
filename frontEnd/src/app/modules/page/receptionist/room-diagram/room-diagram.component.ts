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

  constructor(
    public receptionistPageService: ReceptionistPageService
  ) { }

  ngOnInit() {
    this.receptionistPageService.getAllRoom().subscribe((res: any) => {
      if (res) {
        this.listAllRoom = (res);
        console.log('showlistRoom: ', this.listAllRoom);
      }
    });
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



        this.string_arrivalTime =  moment.unix(Number(this.inforRoom.BookRoom[0].ArrivalTime)).format('YYYY-MM-DDTHH:mm');
        this.string_leaveTime = moment.unix(Number(this.inforRoom.BookRoom[0].LeaveTime)).format('YYYY-MM-DDTHH:mm');

      }
    });
  }

}
