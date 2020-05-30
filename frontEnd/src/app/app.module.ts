import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent, ErrorComponent } from './modules/page';
import { RestaurantComponent } from './modules/component/restaurant/restaurant.component';
import { MenuHeaderComponent, FooterComponent } from './modules/component';
import { ReceptionistComponent } from './modules/component/receptionist/receptionist.component';
import { ManagerComponent } from './modules/component/manager/manager.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    RestaurantComponent,
    ReceptionistComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
