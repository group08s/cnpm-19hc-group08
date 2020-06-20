import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pageService: HomePageService) { }

  ngOnInit() {
    // this.pageService.getData().subscribe();
  }

}
