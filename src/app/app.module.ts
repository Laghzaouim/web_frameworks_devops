import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { IssMapComponent } from './iss-map/iss-map.component';
import { AgmCoreModule } from '@agm/core';
import { SpaceStationService } from './service/space-station.service';

import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from "@angular/router";
import { QodService } from './service/qod.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssMapComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'space', component: IssMapComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
    ]),
    HttpClientModule,
    FormsModule,
    // Deze key is nodig voor de kaart !
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyAg3VsKAoL3f5I4T052D7jNr7NxzyDCXQo'
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    HttpClient,
    SpaceStationService,
    QodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
