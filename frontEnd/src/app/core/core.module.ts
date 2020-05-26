import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { services } from './services';

@Injectable()
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ...services
  ]
})
export class CoreModule { }
