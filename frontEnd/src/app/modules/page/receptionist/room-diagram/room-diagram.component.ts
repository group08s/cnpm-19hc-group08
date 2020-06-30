import { Component, OnInit } from '@angular/core';
import { ReceptionistPageService } from '@app/modules/services';

@Component({
  selector: 'app-room-diagram',
  templateUrl: './room-diagram.component.html',
  styleUrls: ['./room-diagram.component.css']
})
export class RoomDiagramComponent implements OnInit {
  listAllRoom: any;

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

}
