import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    children: [
      {
        path: '',
        loadChildren:
          './modules/page.module#PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/manage/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
