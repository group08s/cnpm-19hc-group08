import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RoomDiagramComponent } from './room-diagram/room-diagram.component';
import { BookRoomComponent } from './book-room/book-room.component';

@NgModule({
  declarations: [ReceptionistComponent,RoomDiagramComponent,BookRoomComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule
  ]
})
export class ReceptionistModule { }
