import { Component, OnInit } from '@angular/core';
import { ReceptionistPageService } from '@app/modules/services';

@Component({
  selector: 'app-room-diagram',
  templateUrl: './room-diagram.component.html',
  styleUrls: ['./room-diagram.component.css']
})
export class RoomDiagramComponent implements OnInit {
  listAllRoom: any;
  inforRoom: any;


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
       // this.inforRoom = (res);
        console.log('showlistRoom: ', res);
      }
    });
  }

}
