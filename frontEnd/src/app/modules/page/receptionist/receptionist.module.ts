import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RoomDiagramComponent } from './room-diagram/room-diagram.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  declarations: [ReceptionistComponent, RoomDiagramComponent, BookRoomComponent, CheckOutComponent],
  imports: [
    CommonModule,
    ReceptionistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReceptionistModule { }
