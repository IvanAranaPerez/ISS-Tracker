import { Component, Input } from '@angular/core';
import { IssService } from '../../shared/services/iss.service';
import { IssPosition } from '../../shared/interfaces/iss.interfaces';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent {
  @Input() issPosition: IssPosition = { latitude: '', longitude: '' };

  constructor(private issService: IssService) {
    this.issService.onNewCoordinates.subscribe((coordinates: IssPosition) => {
      this.issPosition = coordinates;
      console.log('Received Coordinates in MapViewComponent:', coordinates);
    });
  }
}
