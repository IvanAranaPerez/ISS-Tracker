import { IssService } from './../services/iss.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { IssPosition, SearchResponse } from '../interfaces/iss.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private issService: IssService) {}

  @Output()
  public onNewCoordinates: EventEmitter<IssPosition> = new EventEmitter<IssPosition>();

  public coordinates: IssPosition = {
    latitude: '',
    longitude: ''
  }

  trackIssPosition() {
    this.issService.getIssPosition().subscribe((response: SearchResponse) => {
      this.coordinates = response.iss_position;
      console.log('Coordinates obtained from API:', this.coordinates);

      if (this.coordinates.latitude !== '' && this.coordinates.longitude !== '') {
        this.onNewCoordinates.emit(this.coordinates);
      }

      this.issService.emitNewCoordinates(this.coordinates);
      this.coordinates = { latitude: '', longitude: '' };
    });
  }
}
