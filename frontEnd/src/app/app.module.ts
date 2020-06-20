import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent, ErrorComponent } from './modules/page';
import { RestaurantComponent } from './modules/component/restaurant/restaurant.component';
import { MenuHeaderComponent, FooterComponent } from './modules/component';
import { ManagerComponent } from './modules/component/manager/manager.component';
import { ReceptionistModule } from './modules/component/receptionist/receptionist.module';
import { LoginComponent } from './modules/component/login-register/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    RestaurantComponent,
    ManagerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReceptionistModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
