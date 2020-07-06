import { Component, OnInit, Input, OnChanges   } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit, OnChanges   {
  @Input() getOrder;
  constructor() { }

  ngOnInit() {
    console.log('showorder: ', this.getOrder);
  }

  ngOnChanges() {
    // onsole.log('showorder2: ', this.getOrder);
    console.log('list::');
  }
}
