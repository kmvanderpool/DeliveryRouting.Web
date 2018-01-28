import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../classes/route';

@Component({
  selector: 'app-route-summary',
  templateUrl: './route-summary.component.html',
  styleUrls: ['./route-summary.component.scss']
})
export class RouteSummaryComponent implements OnInit {

  @Input() route: Route;

  constructor() { }

  ngOnInit() {
  }

}
