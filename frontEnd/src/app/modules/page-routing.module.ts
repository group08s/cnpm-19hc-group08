import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeComponent,
    ErrorComponent
} from './page';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'error', component: ErrorComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
