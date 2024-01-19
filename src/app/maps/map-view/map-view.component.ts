import { Component, OnDestroy } from '@angular/core';
import { IssService } from '../../shared/services/iss.service';
import { IssPosition } from '../../shared/interfaces/iss.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent {
  public issPosition: IssPosition = { latitude: '', longitude: '' };
  private coordinateSelectedSubscription: Subscription;

  constructor(private issService: IssService) {
    this.coordinateSelectedSubscription = this.issService.onSelectedCoordinate.subscribe(
      (coordinate: IssPosition) => {
        this.issPosition = coordinate;
      }
    );
  }
}
