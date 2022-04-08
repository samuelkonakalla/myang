import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertListComponent } from './Property/propert-list/propert-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{HousingServicesService} from './Services/HousingServices.service'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HousingServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
