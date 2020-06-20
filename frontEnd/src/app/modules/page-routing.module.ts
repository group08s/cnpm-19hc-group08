import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeComponent,
    ErrorComponent,
    ManagerComponent,
    RestaurantComponent
} from './page';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'restaurant', component: RestaurantComponent},
    {
        path: 'receptionist',
        loadChildren: './page/receptionist/receptionist.module#ReceptionistModule'// './modules/zalo-app/zalo-app.module#ZaloAppModule'
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
export class PageRoutingModule {}
