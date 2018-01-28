// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Libraries
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { RoutePageComponent } from './components/route-page/route-page.component';
import { RoutesService } from './services/routes.service';
import { DeliveryProgramPrintComponent } from './components/delivery-program-print/delivery-program-print.component';
import { RouteSummaryComponent } from './components/route-summary/route-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutePageComponent,
    DeliveryProgramPrintComponent,
    RouteSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
