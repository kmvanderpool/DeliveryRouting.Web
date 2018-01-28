import { Injectable } from '@angular/core';
import { IaddressDisplay } from '../interfaces/iaddress-display';
import { DeliveryProgram } from '../classes/delivery-program';
import { Http, RequestOptions } from '@angular/http';
import { Address } from '../classes/address';

@Injectable()
export class RoutesService {

  constructor(private http: Http) { }


  public getRoutes(): Promise<DeliveryProgram> {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const result = this.http.get('http://localhost:53469/api/values').toPromise()
        .then(response => response.json() as DeliveryProgram)
        .then(x => this.handleRegisterSuccess(x))
        .catch(this.handleError);

        return result;
      }

      handleRegisterSuccess(result: DeliveryProgram): DeliveryProgram {
        // result.routes.forEach(element => {
        //   const startingAddress = new Address({
        //     firstName: 'STARTING NAME',
        //     lastName: '',
        //     address: 'STARTING ADDRESS 1',
        //     city: 'Beaverton',
        //     state: 'Oregon',
        //     zip: '97005'
        // });
        //   element.addresses.unshift(startingAddress);
        // });
        return result;
      }
      handleError(arg0: any): any {
        throw new Error('Method not implemented.');
      }
}
