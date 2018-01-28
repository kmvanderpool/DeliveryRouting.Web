import { Component, OnInit, Input } from '@angular/core';
import { RoutesService } from '../../services/routes.service';
import { DeliveryProgram } from '../../classes/delivery-program';
import { Route } from '../../classes/route';
import { IaddressDisplay } from '../../interfaces/iaddress-display';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.scss']
})
export class RoutePageComponent implements OnInit {

  @Input() route: Route;
  constructor() { }

  ngOnInit() {
  }

  getDirectionsUrl(): string {
    const urlParameter = 'https://www.google.com/maps/dir/?api=1&dir_action=navigate';
    // travelmode=driving&
    const directionAddresses = this.route.addresses.slice();
    const startingAddress = encodeURIComponent(this.formatAddress(directionAddresses.shift()));
    const destinationAddress = encodeURIComponent(this.formatAddress(directionAddresses.pop()));

    const formattedAddresses = new Array();
    const waypoints = directionAddresses;
    waypoints.forEach(element => {
      formattedAddresses.push(encodeURIComponent(this.formatAddress(element)));
    });
    const combinedwaypoints = formattedAddresses.join('|');
    const directionsUrl = `${urlParameter}&origin=${startingAddress}&waypoints=${combinedwaypoints}&destination=${destinationAddress}`;
    return directionsUrl;
  }

  formatAddress(inputAddress: IaddressDisplay): string {
    const encodedAddress = `${inputAddress.address},${inputAddress.city},${inputAddress.state} ${inputAddress.zip}`;
    return encodedAddress;
  }

}
