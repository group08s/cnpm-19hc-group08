import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ManagerComponent } from './manager/manager.component';
import { RoomDiagramComponent } from './room-diagram/room-diagram.component';
import { ActivityReportComponent } from './activity-report/activity-report.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { SchduleWorkComponent } from './schdule-work/schdule-work.component';

@NgModule({
  declarations: [ManagerComponent, RoomDiagramComponent, ActivityReportComponent, MonthlyReportComponent, SchduleWorkComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManagerModule { }
