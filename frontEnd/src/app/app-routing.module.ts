import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent, HomeComponent } from './modules/page';
import { RestaurantComponent } from './modules/component/restaurant/restaurant.component';
import { ReceptionistComponent } from './modules/component/receptionist/receptionist/receptionist.component';
import { ManagerComponent } from './modules/component/manager/manager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: '404', component: ErrorComponent },
  //{path: '**', redirectTo: '/404'}

  // {
  //   path: 'home',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren:
  //         './modules/page.module#PageModule'
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
