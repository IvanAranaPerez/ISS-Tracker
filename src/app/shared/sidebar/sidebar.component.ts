import { IssService } from './../services/iss.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssPosition, SearchResponse } from '../interfaces/iss.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public locationHistory: IssPosition[] = [];
  private coordinateSelectedSubscription!: Subscription;

  constructor(private issService: IssService) {}

  ngOnInit() {
    this.coordinateSelectedSubscription = this.issService.onLocationHistoryUpdate.subscribe(
      (history: IssPosition[]) => {
        this.locationHistory = history;
      }
    );
  }

  trackIssPosition() {
    this.issService.getIssPosition().subscribe((response: SearchResponse) => {
      this.issService.emitNewCoordinates(response.iss_position);
    });
  }

  selectCoordinate(coordinate: IssPosition) {
    this.issService.selectedCoordinate(coordinate);
  }
}
