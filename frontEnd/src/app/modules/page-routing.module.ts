import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeComponent,
    ErrorComponent,
    RestaurantComponent
} from './page';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'restaurant', component: RestaurantComponent },

    {
        path: 'manager',
        loadChildren: './page/manager/manager.module#ManagerModule'
    },
    {
        path: 'receptionist',
        loadChildren: './page/receptionist/receptionist.module#ReceptionistModule'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
