import { Component, OnInit } from '@angular/core';
import { DeliveryProgram } from '../../classes/delivery-program';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-delivery-program-print',
  templateUrl: './delivery-program-print.component.html',
  styleUrls: ['./delivery-program-print.component.scss']
})
export class DeliveryProgramPrintComponent implements OnInit {

  deliveryProgram: DeliveryProgram;

  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.routesService.getRoutes()
    .then(x => this.deliveryProgram = x);
  }
}
