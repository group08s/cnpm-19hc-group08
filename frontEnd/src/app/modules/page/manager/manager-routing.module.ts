import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { RoomDiagramComponent } from './room-diagram/room-diagram.component';
import { ActivityReportComponent } from './activity-report/activity-report.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { SchduleWorkComponent } from './schdule-work/schdule-work.component';

const routes: Routes = [
  {
    path: '', component: ManagerComponent,
    children: [
      {
        path: 'room-diagram',
        component: RoomDiagramComponent,
      },
      {
        path: 'activity-report',
        component: ActivityReportComponent,
      },
      {
        path: 'monthly-report',
        component: MonthlyReportComponent,
      },
      {
        path: 'schdule-work',
        component: SchduleWorkComponent,
      },
    ]
  },
  { path: '**', redirectTo: '/manager/room-diagram', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
