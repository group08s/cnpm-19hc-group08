import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent, HomeComponent } from './modules/page';
import { RestaurantComponent } from './modules/component/restaurant/restaurant.component';
import { ReceptionistComponent } from './modules/component/receptionist/receptionist.component';
import { ManagerComponent } from './modules/component/manager/manager.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'manager', component: ManagerComponent },



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
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

 { path: '**',component: ErrorComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
