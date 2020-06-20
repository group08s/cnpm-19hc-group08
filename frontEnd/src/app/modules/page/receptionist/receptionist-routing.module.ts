import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { RoomDiagramComponent } from './room-diagram/room-diagram.component';
import { BookRoomComponent } from './book-room/book-room.component';

const routes: Routes = [

  {
    path: '', component: ReceptionistComponent,
    children: [
      {
        path: 'room-diagram',
        component: RoomDiagramComponent,
      },
      {
        path: 'book-room',
        component: BookRoomComponent,
      },
    ]
  },
  { path: '**', redirectTo: '/receptionist/room-diagram', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
