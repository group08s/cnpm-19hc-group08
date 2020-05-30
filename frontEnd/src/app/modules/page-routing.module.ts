import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeComponent,
    ErrorComponent,
    
} from './page';
import { RestaurantComponent } from './component/restaurant/restaurant.component';

const routes: Routes = [
  //{ path: 'error', component: ErrorComponent },
//
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
