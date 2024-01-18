import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { MapViewComponent } from './map-view/map-view.component';

@NgModule({
  declarations: [
    MapViewComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports:[
    MapViewComponent
  ]
})
export class MapsModule { }
