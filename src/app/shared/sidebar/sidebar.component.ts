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
  public onNewCoordinates: EventEmitter<IssPosition> = new EventEmitter();
  public locationHistory: IssPosition[] = [];

  public coordinates: IssPosition = {
    latitude: '',
    longitude: ''
  };

  trackIssPosition() {
    this.issService.getIssPosition().subscribe((response: SearchResponse) => {
      this.coordinates = response.iss_position;
      this.issService.emitNewCoordinates(this.coordinates);
    });
  }

  ngOnInit() {
    this.issService.onLocationHistoryUpdate.subscribe((history: IssPosition[]) => {
      this.locationHistory = history;
    });
  }
}
