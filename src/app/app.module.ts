import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { SharedModule } from './shared/shared.module';
import { MapsModule } from './maps/maps.module';
import { IssService } from './shared/services/iss.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    GoogleMapsModule,
    MapsModule,
  ],
  providers: [IssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
